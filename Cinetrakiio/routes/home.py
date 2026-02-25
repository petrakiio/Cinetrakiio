from django.shortcuts import render

def index(request):
    return request('home.index.html')

def aviso(request):
    return request('')