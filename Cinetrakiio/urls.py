from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('routes.home_urls')),
    path('', include('routes.login_urls')),
    path('generos/', include('routes.generos_urls')),
    path('filmes/', include('routes.filmes_urls')),
]
