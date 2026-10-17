from django.urls import path
from . import views

urlpatterns = [
    # Ruta para ver todas las actividades (/actividades/)
    path('', views.lista_actividades, name='lista_actividades'),

    # Ruta para el formulario (/actividades/agregar/)
    path('agregar/', views.agregar_actividad, name='agregar_actividad'),

    # Ruta para el detalle de una actividad (/actividades/1/, /actividades/2/, etc.)
    path('<int:pk>/', views.detalle_actividad, name='detalle_actividad'),
]