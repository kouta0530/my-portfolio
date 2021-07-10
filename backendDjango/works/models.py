from django.db import models
from django.core.validators import RegexValidator

# Create your models here.

class Work(models.Models):
    application_name = models.CharField(max_length=30,blank=False,null=False)
    
    application_description = models.TextField(max_length=400,default="",blank=True,null=False)
    
    http_regix = RegexValidator(regex=r"https?://[\w!?/+\-_~;:.,*&@#$%()'[\]]+")
    application_picture_url = models.CharField(max_length=200,default="",blank=True,null=False,validators=[http_regix])