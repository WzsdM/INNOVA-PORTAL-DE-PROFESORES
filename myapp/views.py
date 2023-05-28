from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'index.html')
def login(request):
    return render(request, 'Login.html')
def register(request):
    return render(request, 'Register.html')
def user(request):
    return render(request, 'user.html')
def clipboard(request):
    return render(request, 'clipboard.html')
def dashboard(request):
    return render(request, 'dashboard.html')
def classboard(request):
    return render(request, 'classboard.html')

