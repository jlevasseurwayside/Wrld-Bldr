import { Path } from "paper/dist/paper-full";
import Item from "./Item";
import Graphics from "../render/Graphics";
import Model from "map/building/Model";

export default class Shop extends Path {
  locationData = null;
  npcs = [];
  static allShops = [];

  constructor(segs, initData) {
    super(segs);
    this.locationData = initData;
    this.startHover = this.startHover.bind(this);
    this.endHover = this.endHover.bind(this);
    this.startOnMouseDown = this.startOnMouseDown.bind(this);
  }

  static addHexColor(c1, c2) {
    let hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
    while (hexStr.length < 6) {
      hexStr = "0" + hexStr;
    } // Zero pad.
    return hexStr;
  }

  addItem(item) {
    //just were given the name;
    if (typeof item == "string") {
      if (item in Item.itemLookup) item = Item.itemLookup[item];
      else return false;
    }
    item.amount = 1;
    this.unsortedInventory.push(item);
    this.organizeInventory();
    return true;
  }

  initShop() {
    if (this.locationData != null) {
      allShops.push(this);

      const g = new Graphics(false);
      g.drawRaster(
        Model.instance.iconCache[this.locationData.location_type.name],
        this.center,
        0.08
      );
    }
  }

  onMouseEnter = () => {
    this.startHover();
  };

  onMouseLeave = () => {
    this.endHover();
  };

  onMouseDown = () => {
    //! Resolve
    if (this.locationData != null) Paper.SetActiveShop(this);
  };

  removeItem(item) {
    for (let i = 0; i < this.unsortedInventory.length; i++) {
      if (this.unsortedInventory[i].name == item.name) {
        this.unsortedInventory.splice(i, 1);
        break;
      }
    }
    this.organizeInventory();
  }

  startHover() {
    if (this.locationData != null)
      this.fillColor =
        "#" + Shop.addHexColor(this.district.color.substring(1, 8), "111111");
  }

  endHover() {
    if (this.locationData != null) this.fillColor = this.district.color;
  }

  startOnMouseDown() {
    if (this.locationData != null) Paper.SetActiveShop(this);
  }
}
