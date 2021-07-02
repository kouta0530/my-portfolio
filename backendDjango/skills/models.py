from django.db import models

# Create your models here.


class Skill(models.Model):
    skillLabel = models.CharField(max_length=200)
    skilledStars = models.IntegerField(default=1)
    skillType = models.CharField(max_length=20)

    def __str__(self):
        return self.skillLabel
