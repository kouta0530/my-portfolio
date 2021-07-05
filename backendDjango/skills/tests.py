from django.test import TestCase
from django.urls import reverse
from .models import Skill

# Create your tests here.


class SkillsApiTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Skill.objects.create(
            skill_label="Django", skilled_stars=2, skill_type="バックエンド")

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
        skill = Skill.objects.get(pk=1)

        self.assertEqual(skill.pk, 1)
        self.assertEqual(skill.skill_label, "Django")
        self.assertEqual(skill.skilled_stars, 2)
        self.assertEqual(skill.skill_type, "バックエンド")

    def test_skilled_stars_default(self):
        skill = Skill.objects.create(skill_label="Django", skill_type="バックエンド")
        self.assertEqual(skill.skilled_stars, 1)

    def test_skill_label_check_label(self):
        skill = Skill.objects.get(pk=1)
        skill_label = skill._meta.get_field('skill_label').verbose_name
        self.assertEqual(skill_label, 'skill label')

    def test_skilled_stars_check_label(self):
        skill = Skill.objects.get(pk=1)
        skilled_stars = skill._meta.get_field('skilled_stars').verbose_name
        self.assertEqual(skilled_stars, 'skilled stars')

    def test_skill_type_check_label(self):
        skill = Skill.objects.get(pk=1)
        skilled_stars = skill._meta.get_field('skill_type').verbose_name
        self.assertEqual(skilled_stars, 'skill type')
