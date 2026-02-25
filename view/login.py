from django.shortcuts import render


def login_page(request):
    return render(request, 'home/login.html')


def cadastro_page(request):
    return render(request, 'home/cadastro.html')
