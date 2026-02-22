from flask import Blueprint

from python.controllers.legacy_controller import (
    render_generos_template,
    render_html_template,
    render_index_html,
)

legacy = Blueprint('legacy', __name__)


@legacy.route('/index.html')
def index_html():
    return render_index_html()


@legacy.route('/HTML/<path:template_name>')
def html_templates(template_name: str):
    return render_html_template(template_name)


@legacy.route('/generosP/<path:template_name>')
def generos_templates(template_name: str):
    return render_generos_template(template_name)
