from django.db import models

# Create your models here.


class Skill(models.Model):
    skill_label = models.CharField(max_length=200)
    skilled_stars = models.IntegerField(default=1)
    skill_type = models.CharField(max_length=20)

    def __str__(self):
        return self.skill_label
