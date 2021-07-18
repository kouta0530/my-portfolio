from django.test import TestCase
from django.core.exceptions import ValidationError
from .models import Work, WorkOption
from .views import helper_merge_work_and_options
import json
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

    def test_work_option_contents_url_label(self):
        contents_url = WorkOption.objects.get(
            pk=1)._meta.get_field('contents_url')
        self.assertEqual(contents_url.verbose_name, 'contents url')

    def test_work_option_icon_image_path_label(self):
        icon_image_path = WorkOption.objects.get(
            pk=1)._meta.get_field('icon_image_path')

        self.assertEqual(icon_image_path.verbose_name, 'icon image path')

    def test_icon_name_max_length(self):
        icon_name = WorkOption.objects.get(pk=1)._meta.get_field('icon_name')
        self.assertEqual(icon_name.max_length, 30)

    def test_icon_image_path_max_length(self):
        icon_image_path = WorkOption.objects.get(
            pk=1)._meta.get_field('icon_image_path')

        self.assertEqual(icon_image_path.max_length, 200)

    def test_contents_url_validator(self):
        worng_content_url_work_option = WorkOption(
            work_id=1,
            icon_name="test",
            contents_url="test",
            icon_image_path="./test.png"
        )

        with self.assertRaisesMessage(ValidationError, 'Enter a valid URL.'):
            worng_content_url_work_option.full_clean()

    def test_icon_image_path_validation(self):
        options = WorkOption.objects.get(pk=1)
        options.icon_image_path = "d/test.png"

        with self.assertRaisesMessage(ValidationError, 'Enter a valid value.'):
            options.full_clean()

    def test_get_parent_model_from_child(self):
        child = WorkOption.objects.select_related().get(pk=1)
        self.assertEqual(child.work, Work.objects.get(pk=1))

    def test_can_get_works_response(self):
        res = self.client.get('/v1/works/')
        self.assertEqual(res.status_code, 200)

        data = json.loads(res.content)
        self.assertEqual(len(data), Work.objects.all().count())

        work = Work.objects.prefetch_related('application_options')

        for i, w in enumerate(work):
            self.assertEqual(
                data[i], helper_merge_work_and_options(w, w.application_options))

    def test_can_get_work_response_for_id(self):
        res = self.client.get('/v1/works/1')
        self.assertEqual(res.status_code, 200)

        data = json.loads(res.content)
        work = Work.objects.prefetch_related('application_options').get(pk=1)
        options = work.application_options.values()

        self.assertEqual(data, helper_merge_work_and_options(work, options))
