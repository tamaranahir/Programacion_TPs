from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages

from .models import ActividadDeportiva


def lista_actividades(request):
    actividades = ActividadDeportiva.objects.all()

    return render(request, "reservas/lista_actividades.html", {"actividades": actividades})