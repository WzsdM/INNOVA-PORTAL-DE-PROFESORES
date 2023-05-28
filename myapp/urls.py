from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('register/', views.register, name="register"),
    path('my_user/', views.user, name="user"),
    path('classboard/', views.classboard, name="classboard"),
    path('recordings/', views.clipboard, name="recordings"),
    path('dashboard', views.dashboard, name="dashboard"),
]