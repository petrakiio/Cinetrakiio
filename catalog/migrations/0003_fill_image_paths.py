import re
from pathlib import Path

from django.conf import settings
from django.db import migrations


STATIC_IMG_RE = re.compile(r"\{\%\s*static\s*'(?P<path>img/[^']+)'\s*\%\}")


def _extract_static_img(template_path: Path) -> str | None:
    try:
        content = template_path.read_text(encoding='utf-8')
    except FileNotFoundError:
        return None

    match = STATIC_IMG_RE.search(content)
    if not match:
        return None

    img_path = match.group('path')
    if img_path.startswith('img/'):
        return f"/static/{img_path}"
    return img_path


def fill_image_paths(apps, schema_editor):
    Filme = apps.get_model('catalog', 'Filme')

    base_dir = Path(settings.BASE_DIR)
    for filme in Filme.objects.filter(imagem='').exclude(template=''):
        template_path = base_dir / 'view' / 'templates' / filme.template
        image_path = _extract_static_img(template_path)
        if image_path:
            filme.imagem = image_path
            filme.save(update_fields=['imagem'])


def clear_image_paths(apps, schema_editor):
    Filme = apps.get_model('catalog', 'Filme')
    Filme.objects.update(imagem='')


class Migration(migrations.Migration):
    dependencies = [
        ('catalog', '0002_seed_catalog'),
    ]

    operations = [
        migrations.RunPython(fill_image_paths, reverse_code=clear_image_paths),
    ]
