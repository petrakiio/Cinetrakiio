from django.urls import path

from python.controllers.page_controller import render_auth_page


def cadastro_page(request):
    return render_auth_page(request, 'cadastro')


urlpatterns = [
    path('cadastro', cadastro_page, name='cadastro'),
]
