from django.test import TestCase
from django.urls import reverse
from .models import Skill

# Create your tests here.


class SkillsApiTest(TestCase):

    def test_can_get_skillinformationlist(self):
        response = self.client.get('/v1/skills/')
        self.assertEqual(response.status_code, 200)

    def test_can_get_skillinformation(self):
        response = self.client.get('/v1/skills/?id=1')
        self.assertEqual(response.status_code, 200)

    def test_can_get_skill_category(self):
        response = self.client.get('/v1/skills/type')
        self.assertEqual(response.status_code, 200)
