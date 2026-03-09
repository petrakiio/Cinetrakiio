from django.urls import path

from controllers.login_controller import cadastro_page, login_page

urlpatterns = [
    path('login/', login_page, name='login'),
    path('cadastro/', cadastro_page, name='cadastro'),
]
