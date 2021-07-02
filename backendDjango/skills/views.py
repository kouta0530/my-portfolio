from django.shortcuts import render
from django.http.response import HttpResponse
# Create your views here.
from django.core import serializers
from .models import Skill


def index(request):
    skillInformations = Skill.objects.all()
    response = serializers.serialize('json', skillInformations)
    return HttpResponse(response, content_type="text/json")
