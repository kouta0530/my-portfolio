# Generated by Django 3.2.4 on 2021-07-18 05:26

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('works', '0003_alter_workoption_work'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workoption',
            name='icon_image_path',
            field=models.CharField(max_length=200, validators=[django.core.validators.RegexValidator('^\\./[/.*/]*.+\\.png|jpg$')]),
        ),
    ]
