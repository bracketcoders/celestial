from django.urls import path
from celestialapp import views

urlpatterns = [
    path("", views.home, name="home"),
    path('snippets', views.getSnippets, name="get_snippets")
]