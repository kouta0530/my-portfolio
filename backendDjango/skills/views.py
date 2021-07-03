from django.shortcuts import render
from django.http.response import HttpResponse
# Create your views here.
from django.core import serializers
from .models import Skill
import json


def getPortfolioSkillList(request):
    skillInformations = Skill.objects.all().values(
        'skillLabel', 'skilledStars', 'skillType')

    return HttpResponse(
        json.dumps(list(skillInformations), indent=2, ensure_ascii=False),
        content_type="text/json"
    )


def getPortfolioSkill(request, id):
    skillInformation = Skill.objects.filter(pk=id).values(
        'skillLabel', 'skilledStars', 'skillType')

    return HttpResponse(
        json.dumps(list(skillInformation), indent=2, ensure_ascii=False),
        content_type="text/json")


def getPortfolioSkillListSlectedCategory(request):
    skillLabelList = Skill.objects.values("skillType").distinct()
    response = list(map(lambda q: q['skillType'], list(skillLabelList)))

    return HttpResponse(
        json.dumps(response, indent=2, ensure_ascii=False)
    )
