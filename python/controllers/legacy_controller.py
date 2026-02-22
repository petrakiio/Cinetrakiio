from flask import render_template
from jinja2 import TemplateNotFound

from python.models.page_model import HOME_TEMPLATES


def resolve_legacy_template(template_name: str) -> str:
    if template_name.startswith('generosP/'):
        return f"generos_filmes/{template_name.removeprefix('generosP/')}"
    return template_name


def render_index_html():
    return render_template(HOME_TEMPLATES['index'])


def render_html_template(template_name: str):
    if '..' in template_name:
        return render_template(HOME_TEMPLATES['aviso']), 404

    try:
        resolved = resolve_legacy_template(template_name)
        candidates = [
            resolved,
            f'home/{resolved}',
            f'generos/{resolved}',
        ]

        for candidate in candidates:
            try:
                return render_template(candidate)
            except TemplateNotFound:
                continue

        raise TemplateNotFound(template_name)
    except TemplateNotFound:
        return render_template(HOME_TEMPLATES['aviso']), 404


def render_generos_template(template_name: str):
    if '..' in template_name:
        return render_template(HOME_TEMPLATES['aviso']), 404

    try:
        return render_template(f'generos_filmes/{template_name}')
    except TemplateNotFound:
        return render_template(HOME_TEMPLATES['aviso']), 404
