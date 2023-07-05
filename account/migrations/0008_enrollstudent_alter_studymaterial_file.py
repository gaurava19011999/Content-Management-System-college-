# Generated by Django 4.2 on 2023-05-12 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_studymaterial'),
    ]

    operations = [
        migrations.CreateModel(
            name='enrollStudent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.CharField(max_length=50)),
                ('year', models.IntegerField()),
                ('sub', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=250)),
            ],
        ),
        migrations.AlterField(
            model_name='studymaterial',
            name='file',
            field=models.FileField(null=True, upload_to=''),
        ),
    ]