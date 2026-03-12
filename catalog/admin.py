from django.contrib import admin

from .models import Filme, Genero


@admin.register(Genero)
class GeneroAdmin(admin.ModelAdmin):
    list_display = ('nome', 'slug')
    search_fields = ('nome', 'slug')


@admin.register(Filme)
class FilmeAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'genero', 'slug')
    list_filter = ('genero',)
    search_fields = ('titulo', 'slug')
