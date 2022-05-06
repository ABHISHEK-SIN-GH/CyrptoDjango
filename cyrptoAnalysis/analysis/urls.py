from django.urls import path
from . import views

urlpatterns = [
    path("", views.home ,name="analysis"),
    path("new/", views.new, name="test")
]