from django.test import TestCase
from .models import Skill
# Create your tests here.


class SkillsApiTest(TestCase):

    def canGetSkillInformationList(self):
        reponse = self.client.get('/v1/skills')
        self.assertEqual(reponse.status_code, 200)
