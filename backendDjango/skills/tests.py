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

    def test_create_skill_model(self):
        skill = Skill.objects.create(
            skill_label="Django", skilled_stars=2, skill_type="バックエンド")

        self.assertEqual(skill.skill_label, "Django")
        self.assertEqual(skill.skilled_stars, 2)
        self.assertEqual(skill.skill_type, "バックエンド")
