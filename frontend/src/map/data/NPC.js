import Random from "../utils/Random";
import NPCNameGenerator from "./NPCNameGenerator";
import StringUtils from "../utils/StringUtils";
import Avatar from './Avatar';

export default class NPC {

    static TRAITS = [
        "precipitous","sharp","complete","adventuresome","fond","lovesome","tender","amusive","diverting","comic","comical","funny","laughable","mirthful","risible","fervent","fervid","fiery","perfervid","torrid","warm","chesty","brave","dauntless","fearless","hardy","intrepid","unfearing","bodacious","brassy","brazen","insolent","daring","venturesome","venturous","important","definitive","beamy","effulgent","radiant","refulgent","glad","captivating","enchanting","enthralling","entrancing","fascinating","fierce","rough","knockabout","rambunctious","robustious","rumbustious","unruly","flourishing","palmy","prospering","prosperous","roaring","thriving","stentorian","breathless","brilliant","hopeful","promising","lustrous","shining","shiny","vivid","smart","brightly","brilliantly","bright","superb","brainy","glorious","magnificent","splendid","vivid","effervescent","frothy","scintillating","sparkly","bubbly","effervescing","foaming","foamy","spumy","composure","equanimity","lull","quiet","quieten","still","tranquilize","tranquillise","tranquillize","sedate","serene","tranquil","becalm","steady","appeasement","impulsive","whimsical","freakish","magic","magical","sorcerous","witching","wizard","wizardly","pollyannaish","upbeat","precious","amusing","comic","funny","laughable","mirthful","risible","dominating","overlooking","positive","bravery","brainsick","mad","sick","screwball","looney","loony","nutcase","weirdo","dotty","gaga","wild","blazing","blinding","fulgent","glaring","glary","fulgurant","fulgurous","ticklish","touchy","fragile","frail","soft","finespun","delicious","brainsick","crazy","mad","sick","suitable","worthy","set","compulsive","driven","predominant","prevailing","prevalent","rife","spectacular","striking","drip","soaking","sopping","drippage","exuberant","gleeful","joyful","jubilant","graceful","gumptious","industrious","gossamer","celestial","supernal","aerial","aeriform","aery","airy","overdone","grand","idealistic","lofty","sublime","big","enceinte","gravid","great","heavy","large","anticipant","anticipative","excessive","extravagant","overweening","ebullient","lush","luxuriant","profuse","riotous","light","swooning","weak","timid","conk","swoon","feeble","dim","shadowy","vague","wispy","deliquium","syncope","antic","fantastic","grotesque","favourable","golden","lucky","prosperous","advantageous","ferine","savage","febrile","feverous","hectic","flaming","igneous","ardent","fervent","fervid","perfervid","torrid","adoring","doting","partial","affectionate","lovesome","tender","absolvitory","exonerative","curious","odd","peculiar","queer","rum","rummy","singular","fishy","shady","suspect","suspicious","amusing","comic","comical","laughable","mirthful","risible","easy","soft","aristocratic","aristocratical","blue","patrician","ennoble","entitle","appease","assuage","conciliate","gruntle","lenify","mollify","pacify","placate","docile","dizzy","silly","vertiginous","woozy","gleam","glimmer","agleam","nitid","glow","lambency","joyful","jubilant","elegant","thankful","felicitous","glad","persistent","celestial","honest","ethical","honourable","estimable","good","respectable","aspirant","aspirer","wannabe","wannabee","bright","promising","base","baseborn","lowly","low","modest","small","menial","abase","chagrin","humiliate","mortify","brobdingnagian","huge","vast","fresh","impertinent","overbold","sassy","saucy","smart","wise","flip","insolent","ingenuous","barren","destitute","devoid","free","guiltless","impeccant","sinless","innocuous","divine","elysian","cozy","informal","familiar","suggest","private","sexual","adumbrate","insinuate","knowledgeable","inner","internal","confidant","audacious","brave","dauntless","fearless","hardy","unfearing","erose","jaggy","scraggy","jesting","jocose","jocular","gleeful","jubilant","gleeful","joyful","exultant","exulting","prideful","rejoicing","triumphal","triumphant","benevolent","charitable","sympathetic","dreamy","lackadaisical","languorous","blithe","blithesome","lightsome","claudication","gimp","additive","elongate","analog","analogue","running","bouncy","live","resilient","springy","alert","brisk","merry","rattling","snappy","spanking","zippy","racy","vital","grand","idealistic","sublime","gallant","majestic","proud","eminent","soaring","towering","adorable","endearing","epicurean","luxuriant","sybaritic","voluptuary","voluptuous","deluxe","grand","lush","opulent","princely","sumptuous","manful","manlike","manfully","male","virile","festal","festive","gay","jocund","jolly","jovial","mirthful","alert","brisk","lively","rattling","snappy","spanking","zippy","arch","impish","implike","prankish","puckish","small","minor","humble","low","lowly","meek","mild","cryptic","cryptical","deep","inscrutable","mystifying","mystic","mystical","occult","orphic","secret","mystic","mysterious","occult","orphic","secret","overdone","casual","cursory","passing","superficial","buoyant","chirpy","diligent","affecting","touching","fateful","foreboding","grandiloquent","overblown","pompous","pontifical","prodigious","classy","swish","potent","herculean","mightily","mighty","right","brawny","hefty","muscular","sinewy","fairly","jolly","middling","moderately","passably","reasonably","somewhat","barbellate","briary","briery","bristly","burry","setaceous","setose","spiny","thorny","splenetic","waspish","disdainful","haughty","imperious","lordly","overbearing","sniffy","supercilious","swaggering","exultant","exulting","jubilant","rejoicing","triumphal","triumphant","gallant","lofty","majestic","placid","smooth","still","tranquil","calm","lull","quieten","tranquilize","tranquillise","tranquillize","quietly","silence","tranquility","tranquillity","placidity","repose","serenity","hush","quiesce","imperial","majestic","purple","royal","evocative","redolent","remindful","resonant","penitent","unhesitating","pathetic","silly","farcical","ludicrous","absurd","derisory","idiotic","laughable","nonsensical","preposterous","racy","rich","raw","sore","tender","sensible","medium","spiritualist","calm","tranquil","palpitation","quiver","quivering","trembling","vibration","pathetic","ridiculous","dizzy","giddy","goofy","wacky","whacky","zany","slaphappy","bare","mere","childlike","simpleton","elementary","unproblematic","legato","placid","quiet","still","tranquil","polish","shine","smoothen","bland","politic","suave","fluent","fluid","liquid","underhand","furtive","sneak","stealthy","surreptitious","excellent","fantabulous","ripping","glorious","resplendent","splendiferous","brilliant","magnificent","flighty","nervous","skittish","appealing","likable","likeable","harmonic","benevolent","charitable","kindly","mocking","quizzical","ribbing","tantalization","tease","annoying","bothersome","galling","irritating","nettlesome","pesky","pestering","pestiferous","plaguey","plaguy","vexatious","vexing","attendant","attender","stamp","cutter","pinnace","bid","offer","raw","sensitive","sore","tenderise","tenderize","affectionate","fond","lovesome","crank","cranky","tippy","attentive","heedful","electrifying","placid","quiet","smooth","still","calm","serene","indocile","uncontrollable","ungovernable","disobedient","boisterous","rambunctious","robustious","rumbustious","rampantly","barbarian","barbaric","savage","baseless","groundless","idle","fantastic","hazardous","risky","godforsaken","waste","angry","furious","raging","tempestuous","crazy","dotty","gaga","violent","avid", "Abrupt", "Accomplished", "Adored", "Adventurous", "Affectionate", "Amused", "Amusing", "Appreciated", "Ardent", "Arrogant", "Audacious", "Authoritative", "Beaming", "Bewitching", "Blissful", "Boisterous", "Booming", "Breathtaking", "Bright", "Brilliant", "Bubbling", "Calm", "Calming", "Capricious", "Charming", "Cheerful", "Cherished", "Chilled", "Comical", "Commanding", "Confident", "Courage", "Crazy", "Creepy", "Dazzling", "Delicate", "Delightful", "Demented", "Desirable", "Determined", "Devoted", "Dominant", "Dramatic", "Dripping", "Ebullient", "Elated", "Elegant", "Enchanted", "Energetic", "Enthusiastic", "Ethereal", "Exaggerated", "Exalted", "Expectant", "Expressive", "Exuberant", "Faint", "Fantastical", "Favorable", "Feral", "Feverish", "Fiery", "Folksy", "Fond", "Forgiving", "Friendly", "Funny", "Gentle", "Giddy", "Gleaming", "Gleeful", "Gorgeous", "Graceful", "Grateful", "Happy", "Haunting", "Heavenly", "Honorable", "Hopeful", "Humble", "Immense", "Impudent", "Innocent", "Inspired", "Intimate", "Intrepid", "Jagged", "Joking", "Joyful", "Jubilant", "Kindly", "Languid", "Lighthearted", "Limping", "Linear", "Lively", "Lofty", "Lovely", "Luxurious", "Manly", "Merciful", "Merry", "Mischievous", "Modest", "Mysterious", "Mystical", "Overstated", "Partying", "Perfunctory", "Perky", "Perplexed", "Persevering", "Pious", "Playful", "Poignant", "Portentous", "Posh", "Powerful", "Pretty", "Prickly", "Prideful", "Proud", "Puzzled", "Quiet", "Ragged", "Regal", "Relaxed", "Reminiscent", "Repentant", "Reserved", "Resolute", "Ridiculous", "Robust", "Sarcastic", "Sensitive", "Serene", "Shaking", "Silly", "Simple", "Smooth", "Sneaky", "Sophisticated", "Splendid", "Spooky", "Sprinting", "Starlit", "Starry", "Startling", "Successful", "Summery", "Surprised", "Sympathetic", "Teasing", "Tender", "Thoughtful", "Thrilling", "Tranquil", "Unruly", "Veiled", "Vigorous", "Wild", "Witty", "Zealous"
    ]
    static IMAGES_PATH = '../../../assets/images/avatars/';
    static RACES = ['human', 'elf', 'half-elf', 'dwarf', 'half-orc', 'halfling', 'gnome'];
    static EXPERTISE = ['Master', 'Accomplished', 'Journeyman', 'Apprentice'];
    static CRAFTS = [

        'Alchemist',
        'Brewery',
        'Calligrapher',
        'Carpenter',
        'Cartographer',
        'Cobbler',
        'General',
        'Glassblower',
        'Jewler',
        'Leatherworker',
        'Mason',
        'Magic Shop',
        'Painter',
        'Potter',
        'Blacksmith',
        'Tinker',
        'Weaver',
        'Woodcarver'

    ]
    static PROFESSION_MAP = {

        'Alchemist': ['Alchemist'], 
        'Brewery': ['Brewmaster'], 
        'Calligrapher': ['Calligrapher'], 
        'Carpenter': ['Carpenter'], 
        'Cartographer': ['Cartographer'], 
        'Cobbler': ['Cobbler'], 
        'Inn': ['Innkeeper', 'Town Drunk', 'Mercenary', 'Traveler', 'Barmaid'], 
        'Diner': ['Waiter', 'Chef', 'Owner'], 
        'General': ['Shopkeep'], 
        'Glassblower': ['Glassblower'], 
        'Jewler': ['Jewler'], 
        'Leatherworker': ['Leatherworker'], 
        'Mason': ['Mason'],
        'Magic Shop': ['Shopkeep'],
        'Painter': ['Painter'], 
        'Potter': ['Potter'], 
        'Blacksmith': ['Blacksmith'], 
        'Tinker': ['Tinkerer'], 
        'Weaver': ['Weaver'], 
        'Woodcarver': ['Woodcarver']

    }

    static avatar = null;

    constructor(shopType, profession) {
        this.shopType = shopType;
        this.profession = profession;
        this.race = NPC.getRandomRace();
        this.name = NPC.getNameFor(this.race);
        this.avatar = Avatar.i.getAvatarFor(this.race);
        this.traits = NPC.getRandomTraits();
    }
    
    static getRandomRace() {
        return NPC.RACES[Random.int(0, NPC.RACES.length)];
    }

    static getRandomTraits(amount=3, randomAmount=3) {
        amount = Random.int(amount, randomAmount+amount);
        const traits = [];
        for (let i = 0; i < amount; i++) {
            let newtrait = StringUtils.capitalize(NPC.TRAITS[Random.int(0,NPC.TRAITS.length)]);
            while (traits.includes(newtrait)) {
                newtrait = StringUtils.capitalize(NPC.TRAITS[Random.int(0,NPC.TRAITS.length)]);
            }
            traits.push( newtrait );
        }
        return traits;
    }

    static getNameFor(race) {
        return NPCNameGenerator.forRace(race);
    }

    static getExpertise() {
        let index = Random.int(0, NPC.EXPERTISE.length);
        //make masters rarer
        if (index==0)
            return NPC.EXPERTISE[Random.int(0, NPC.EXPERTISE.length)];
        return NPC.EXPERTISE[index];
    }

    //titles also determines the amount of NPCs in the shop
    static getTitles(shopType) {
        const t = NPC.PROFESSION_MAP[shopType];
        const titles = [];
        if (NPC.CRAFTS.indexOf(shopType)!=-1) {
            const exp = NPC.getExpertise();
            titles.push( exp + ' ' + t[0]);

            //if they aren't an apprentice they can take some on.
            if (exp!='Apprentice') {
                const numOfApprenctices = Random.int(1,4);
                for (let i = 0; i < numOfApprenctices; i++) {
                    titles.push('Apprentice '+t[0]);
                }
            }
        }
        if (t.length>1) {
            const amount = Random.int(1, t.length);
            const temp = t.slice(0);
            for (let i = 0; i < amount; i++) {
                titles.push(temp.splice(Random.int(0,temp.length), 1));      
            }
        }
        return titles;
    }

}