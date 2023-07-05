# Generated by Django 4.2 on 2023-05-07 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_accountdetail'),
    ]

    operations = [
        migrations.CreateModel(
            name='membership',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('f_name', models.CharField(max_length=50)),
                ('l_name', models.CharField(max_length=50)),
                ('department', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=250)),
            ],
        ),
    ]
