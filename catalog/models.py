from django.db import models


class Genero(models.Model):
    nome = models.CharField(max_length=80, unique=True)
    slug = models.SlugField(max_length=80, unique=True)

    class Meta:
        verbose_name = 'Genero'
        verbose_name_plural = 'Generos'
        ordering = ['nome']

    def __str__(self) -> str:
        return self.nome


class Filme(models.Model):
    genero = models.ForeignKey(Genero, on_delete=models.CASCADE, related_name='filmes')
    titulo = models.CharField(max_length=120)
    slug = models.SlugField(max_length=120)
    imagem = models.CharField(max_length=255, blank=True)
    template = models.CharField(max_length=255, blank=True)

    class Meta:
        verbose_name = 'Filme'
        verbose_name_plural = 'Filmes'
        ordering = ['titulo']
        constraints = [
            models.UniqueConstraint(fields=['genero', 'slug'], name='uniq_filme_slug_por_genero')
        ]

    def __str__(self) -> str:
        return f"{self.titulo} ({self.genero.nome})"
