from django.db import migrations


def _title_from_slug(slug: str) -> str:
    parts = slug.replace('-', ' ').split()
    return ' '.join(part.capitalize() for part in parts)


def seed_catalog(apps, schema_editor):
    Genero = apps.get_model('catalog', 'Genero')
    Filme = apps.get_model('catalog', 'Filme')

    from models.movie_catalog import MOVIES_BY_GENRE

    for genero_slug, movies in MOVIES_BY_GENRE.items():
        genero_nome = genero_slug.capitalize()
        genero, _ = Genero.objects.get_or_create(
            slug=genero_slug,
            defaults={'nome': genero_nome},
        )

        for slug, template in movies.items():
            Filme.objects.get_or_create(
                genero=genero,
                slug=slug,
                defaults={
                    'titulo': _title_from_slug(slug),
                    'template': template,
                },
            )


def unseed_catalog(apps, schema_editor):
    Filme = apps.get_model('catalog', 'Filme')
    Genero = apps.get_model('catalog', 'Genero')
    Filme.objects.all().delete()
    Genero.objects.all().delete()


class Migration(migrations.Migration):
    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_catalog, reverse_code=unseed_catalog),
    ]
