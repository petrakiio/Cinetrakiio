from flask import Blueprint, render_template
from jinja2 import TemplateNotFound

legacy = Blueprint('legacy', __name__)


def _resolve_legacy_template(template_name: str) -> str:
    if template_name.startswith('generosP/'):
        return f"generos_filmes/{template_name.removeprefix('generosP/')}"
    return template_name


@legacy.route('/index.html')
def index_html():
    return render_template('home/index.html')


@legacy.route('/HTML/<path:template_name>')
def html_templates(template_name: str):
    if '..' in template_name:
        return render_template('home/aviso.html'), 404

    try:
        resolved = _resolve_legacy_template(template_name)
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
        return render_template('home/aviso.html'), 404


@legacy.route('/generosP/<path:template_name>')
def generos_templates(template_name: str):
    if '..' in template_name:
        return render_template('home/aviso.html'), 404

    try:
        return render_template(f'generos_filmes/{template_name}')
    except TemplateNotFound:
        return render_template('home/aviso.html'), 404
