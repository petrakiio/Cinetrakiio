from django.urls import path

from python.controllers.page_controller import render_auth_page


def login_page(request):
    return render_auth_page(request, 'login')


urlpatterns = [
    path('login', login_page, name='login'),
]
