from django.contrib import admin
from .models import ActividadDeportiva

@admin.register(ActividadDeportiva)
class ActividadDeportivaAdmin(admin.ModelAdmin):
    # Definimos las columnas que se verán en la tabla
    list_display = ['nombre', 'lugar', 'cupo']

    # Habilitamos la barra de búsqueda por nombre y lugar
    search_fields = ('nombre', 'lugar')