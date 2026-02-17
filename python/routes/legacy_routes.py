from flask import Blueprint, render_template
from jinja2 import TemplateNotFound

legacy = Blueprint('legacy', __name__)


@legacy.route('/index.html')
def index_html():
    return render_template('index.html')


@legacy.route('/HTML/<path:template_name>')
def html_templates(template_name: str):
    if '..' in template_name:
        return render_template('aviso.html'), 404

    try:
        return render_template(template_name)
    except TemplateNotFound:
        return render_template('aviso.html'), 404


@legacy.route('/generosP/<path:template_name>')
def generos_templates(template_name: str):
    if '..' in template_name:
        return render_template('aviso.html'), 404

    try:
        return render_template(f'generosP/{template_name}')
    except TemplateNotFound:
        return render_template('aviso.html'), 404
