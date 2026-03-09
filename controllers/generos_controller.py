from django.shortcuts import render


def acao(request):
    return render(request, 'generos/acao.html')


def comedia(request):
    return render(request, 'generos/comedia.html')


def terror(request):
    return render(request, 'generos/terror.html')


def brasileiro(request):
    return render(request, 'generos/brasileiro.html')


def romance(request):
    return render(request, 'generos/romance.html')


def animacao(request):
    return render(request, 'generos/animacao.html')


def ficcao(request):
    return render(request, 'generos/ficcao.html')

