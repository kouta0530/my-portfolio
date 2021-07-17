from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_portfolio_works),
    path('<int:id>', views.get_portfolio_work),
    path('<str:name>', views.get_portfolio_work_for_application_name)
]
