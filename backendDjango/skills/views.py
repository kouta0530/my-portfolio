from django.shortcuts import render
from django.http.response import HttpResponse
# Create your views here.
from django.core import serializers
from .models import Skill
import json


def get_portfolio_skill_list(request):
    skill_informations = Skill.objects.all().values(
        'skill_label', 'skilled_stars', 'skill_type')

    return HttpResponse(
        json.dumps(list(skill_informations), indent=2, ensure_ascii=False),
        content_type="text/json"
    )


def get_portfolio_skill(request, id):
    skill_information = Skill.objects.filter(pk=id).values()

    return HttpResponse(
        json.dumps(skill_information[0], indent=2, ensure_ascii=False),
        content_type="text/json")


def get_portfolio_skill_list_slected_category(request):
    skill_label_list = Skill.objects.values("skill_type").distinct()
    response = list(map(lambda q: q['skill_type'], list(skill_label_list)))

    return HttpResponse(
        json.dumps(response, indent=2, ensure_ascii=False)
    )
