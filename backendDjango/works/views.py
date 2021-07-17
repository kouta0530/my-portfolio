from django.shortcuts import render
from django.http.response import HttpResponse
from .models import Work, WorkOption
import json

# Create your views here.


def get_portfolio_works(request):
    works = Work.objects.all().values()

    return HttpResponse(json.dumps(list(works), indent=2, ensure_ascii=False), content_type='application/json')


def get_portfolio_work(request, id):
    work = Work.objects.filter(pk=id).values()
    return HttpResponse(json(work[0], indent=2, ensure_ascii=False), content_type='application/json')


def get_portfolio_work_for_application_name(request, name):
    work = Work.objects.filter(application_name=name).values()
    return HttpResponse(json(work, indent=2, ensucre_ascii=False), content_type='application/json')
