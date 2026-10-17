from django import forms
from .models import ActividadDeportiva

class ActividadDeportivaForm(forms.ModelForm):
    class Meta:
        model = ActividadDeportiva
        fields = ['nombre', 'descripcion', 'lugar', 'cupo']
        labels = {
            'nombre': 'Nombre de la Actividad',
            'descripcion': 'Descripción',
            'lugar': 'Lugar de Práctica',
            'cupo': 'Cupo Máximo',
        }