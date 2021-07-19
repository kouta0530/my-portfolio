from django.shortcuts import render
from django.http.response import HttpResponse
from .models import Work, WorkOption
from django.db.models import Prefetch
import json

# Create your views here.


def helper_merge_work_and_options(query_set_of_work_models, query_set_of_work_options):
    return {
        'application_name': query_set_of_work_models.application_name,
        'application_description': query_set_of_work_models.application_description,
        'application_picture_url': query_set_of_work_models.application_picture_url,
        'application_options': list(query_set_of_work_options.values('icon_name', 'contents_url', 'icon_image_path'))
    }


def get_portfolio_works(request):
    works = Work.objects.prefetch_related(Prefetch('application_options'))
    res = list(map(lambda w: helper_merge_work_and_options(
        w, w.application_options), works))

    return HttpResponse(json.dumps(res, indent=2, ensure_ascii=False), content_type='application/json')


def get_portfolio_work(request, id):
    work = Work.objects.prefetch_related(
        Prefetch('application_options', queryset=WorkOption.objects.filter(work_id=id)))
    res = helper_merge_work_and_options(work[0], work[0].application_options)

    return HttpResponse(json.dumps(res, indent=2, ensure_ascii=False), content_type='application/json')


def get_portfolio_work_for_application_name(request, name):
    work = Work.objects.prefetch_related(
        'application_options').filter(application_name=name)

    res = helper_merge_work_and_options(work[0], work[0].application_options)
    return HttpResponse(json.dumps(res, indent=2, ensure_ascii=False), content_type='application/json')
