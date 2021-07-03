from django.test import TestCase
from django.urls import reverse
from .models import Skill

# Create your tests here.


class SkillsApiTest(TestCase):

    def test_canGetSkillInformationList(self):
        reponse = self.client.get('/v1/skills/')
        self.assertEqual(reponse.status_code, 200)

    def test_canGetSkillInformation(self):
        response = self.client.get('/v1/skills/?id=1')
        self.assertEqual(response.status_code, 200)
        skill = Skill.objects.filter(pk=1)
