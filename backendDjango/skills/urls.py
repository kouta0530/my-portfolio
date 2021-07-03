from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_portfolio_skill_list, name='getPortfolioSkillList'),
    path('<int:id>', views.get_portfolio_skill, name='getPortfolioSkill'),
    path('type', views.get_portfolio_skill_list_slected_category,
         name='getPortfolioSkillListSlectedCategory')
]
