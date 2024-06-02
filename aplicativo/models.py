from django.db import models

# Create your models here.
class Alunos(models.Model):
    nome_aluno = models.CharField(max_length=30)
    curso_aluno = models.CharField(max_length=30)
    
