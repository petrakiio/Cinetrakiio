from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('view.routes.home_urls')),
    path('', include('view.routes.login_urls')),
    path('generos/', include('view.routes.generos_urls')),
    path('filmes/', include('view.routes.filmes_urls')),
]
