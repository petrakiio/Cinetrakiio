from django.shortcuts import render


def index(request):
    return render(request, 'home/index.html')


def sobre(request):
    return render(request, 'home/sobre.html')


def aviso(request):
    return render(request, 'home/aviso.html')


def novidades(request):
    return render(request, 'home/novidades.html')
