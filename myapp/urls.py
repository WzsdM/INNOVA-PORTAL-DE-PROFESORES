from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name="index"),
    path('my_user/', views.index, name="user"),
    path('classboard/', views.index, name="classboard"),
    path('recordings/', views.index, name="recordings"),
    path('dashboard', views.index, name="dashboard"),
]