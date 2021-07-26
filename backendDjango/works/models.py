from django.db import models
from django.core.validators import URLValidator, RegexValidator
# Create your models here.


class Work(models.Model):
    application_name = models.CharField(max_length=30, blank=False, null=False)

    application_description = models.TextField(
        max_length=400, default="", blank=True, null=False)

    image_validator = RegexValidator(r'^\./[/.*/]*.+\.png|jpg$')
    application_picture_url = models.CharField(
        max_length=200, default="", blank=True, null=False,
        validators=[image_validator])


class WorkOption(models.Model):
    work = models.ForeignKey(
        Work, on_delete=models.CASCADE, related_name="application_options")
    icon_name = models.CharField(max_length=30)
    contents_url = models.TextField(
        max_length=2000, validators=[URLValidator()])

    image_validator = RegexValidator(r'^\./[/.*/]*.+\.png|jpg$')
    icon_image_path = models.CharField(
        max_length=200, validators=[image_validator])
