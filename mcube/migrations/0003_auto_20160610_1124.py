# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-06-10 15:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mcube', '0002_scores'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scores',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
    ]