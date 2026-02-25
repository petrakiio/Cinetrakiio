from django.shortcuts import render
from django.template.exceptions import TemplateDoesNotExist

from python.models.page_model import HOME_TEMPLATES


def resolve_legacy_template(template_name: str) -> str:
    if template_name.startswith('generosP/'):
        return f"generos_filmes/{template_name.removeprefix('generosP/')}"
    return template_name


def render_index_html(request):
    return render(request, HOME_TEMPLATES['index'])


def render_html_template(request, template_name: str):
    if '..' in template_name:
        return render(request, HOME_TEMPLATES['aviso'], status=404)

    try:
        resolved = resolve_legacy_template(template_name)
        candidates = [
            resolved,
            f'home/{resolved}',
            f'generos/{resolved}',
        ]

        for candidate in candidates:
            try:
                return render(request, candidate)
            except TemplateDoesNotExist:
                continue

        raise TemplateDoesNotExist(template_name)
    except TemplateDoesNotExist:
        return render(request, HOME_TEMPLATES['aviso'], status=404)


def render_generos_template(request, template_name: str):
    if '..' in template_name:
        return render(request, HOME_TEMPLATES['aviso'], status=404)

    try:
        return render(request, f'generos_filmes/{template_name}')
    except TemplateDoesNotExist:
        return render(request, HOME_TEMPLATES['aviso'], status=404)
