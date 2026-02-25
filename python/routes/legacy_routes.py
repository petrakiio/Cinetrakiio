from django.urls import path

from python.controllers.legacy_controller import (
    render_generos_template,
    render_html_template,
    render_index_html,
)


def index_html(request):
    return render_index_html(request)


def html_templates(request, template_name: str):
    return render_html_template(request, template_name)


def generos_templates(request, template_name: str):
    return render_generos_template(request, template_name)


urlpatterns = [
    path('index.html', index_html, name='index_html_legacy'),
    path('HTML/<path:template_name>', html_templates, name='html_legacy'),
    path('generosP/<path:template_name>', generos_templates, name='generos_legacy'),
]
