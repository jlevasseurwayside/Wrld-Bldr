# Generated by Django 4.0.8 on 2022-12-12 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wrldbldr', '0003_settlement_thumbnail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='name',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
