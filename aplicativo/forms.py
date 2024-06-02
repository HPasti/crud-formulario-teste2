from django.forms import ModelForm
from aplicativo.models import Alunos

# Create the form class.
class AlunosForm(ModelForm):
	class Meta:
		model = Alunos
		fields = ["nome_aluno", "curso_aluno"]