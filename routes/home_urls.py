from django.urls import path

from view.home import aviso, index, novidades, sobre

urlpatterns = [
    path('', index, name='index'),
    path('index/', index, name='index_alias'),
    path('sobre/', sobre, name='sobre'),
    path('aviso/', aviso, name='aviso'),
    path('novidades/', novidades, name='novidades'),
]
