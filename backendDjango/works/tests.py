from django.test import TestCase
from .models import Work

# Create your tests here.

class WorkApiTest(TestCase):
  @classmethod
  def setUpTestData(cls):
    Work.objects.create(
      application_name="testApplication",
      application_description="eeeeeeeeeeeeeeeeeeeeeeeee",
      application_picture_url="https://example.com"
    )

  def test_application_name_label(self):
    work = Work.objects.get(pk=1)
    self.assertEquals(work._meta.get_field('application_name').verbose_name,'application name')