from django.urls import path

from . import views

urlpatterns = [
    path('', views.getPortfolioSkillList, name='getPortfolioSkillList'),
    path('<int:id>', views.getPortfolioSkill, name='getPortfolioSkill'),
    path('type', views.getPortfolioSkillListSlectedCategory,
         name='getPortfolioSkillListSlectedCategory')
]
