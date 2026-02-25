from django.urls import path

from view.login import cadastro_page, login_page

urlpatterns = [
    path('login/', login_page, name='login'),
    path('cadastro/', cadastro_page, name='cadastro'),
]
