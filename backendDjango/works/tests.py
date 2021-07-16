from django.test import TestCase
from django.core.exceptions import ValidationError
from .models import Work, WorkOption
# Create your tests here.


class WorkApiTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        work = Work.objects.create(
            application_name="testApplication",
            application_description="eeeeeeeeeeeeeeeeeeeeeeeee",
            application_picture_url="https://example.com"
        )

        WorkOption.objects.create(
            work=work,
            icon_name="test icon",
            contents_url="https://github.com",
            icon_image_path="./logo192.png"
        )

    def test_application_name_label(self):
        work = Work.objects.get(pk=1)
        self.assertEqual(work._meta.get_field(
            'application_name').verbose_name, 'application name')

    def test_application_description_label(self):
        work = Work.objects.get(pk=1)
        self.assertEqual(work._meta.get_field(
            'application_description').verbose_name, 'application description')

    def test_application_picture_url_label(self):
        work = Work.objects.get(pk=1)
        self.assertEqual(work._meta.get_field(
            'application_picture_url').verbose_name, 'application picture url')

    def test_application_picture_url_validation_error(self):
        work = Work(application_name="butUrlApplication",
                    application_picture_url="test")
        self.assertRaises(ValidationError, work.full_clean)

    def test_application_name_max_length(self):
        work = Work.objects.get(pk=1)
        self.assertEqual(work._meta.get_field(
            'application_name').max_length, 30)

    def test_application_description_max_length(self):
        work = Work.objects.get(pk=1)
        self.assertEqual(work._meta.get_field(
            'application_description').max_length, 400)

    def test_application_picture_url_max_length(self):
        work = Work.objects.get(pk=1)
        self.assertEqual(work._meta.get_field(
            'application_picture_url').max_length, 200)

    def test_application_description_default(self):
        no_description_text_work = Work.objects.create(application_name="test")
        self.assertEqual(no_description_text_work.application_description, "")

    def test_application_picture_url_default(self):
        no_picuture_url_work = Work.objects.create(
            application_name="no picture url")
        self.assertEqual(no_picuture_url_work.application_picture_url, "")

    def test_work_option_icon_name_label(self):
        work_option = WorkOption.objects.get(pk=1)
        self.assertEqual(work_option._meta.get_field(
            'icon_name').verbose_name, 'icon name')
