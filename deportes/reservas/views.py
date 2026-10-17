
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import ActividadDeportiva
from .forms import ActividadDeportivaForm

# 1. Vista para registrar una nueva actividad deportiva
def agregar_actividad(request):
    if request.method == 'POST':
        form = ActividadDeportivaForm(request.POST)
        if form. is_valid():
            form.save()
            messages.success(request, '¡La actividad se registró con éxito!')
            return redirect('agregar_actividad')
    else:
        form = ActividadDeportivaForm()

    return render(request, 'reservas/agregar_actividad.html', {'form': form})

# 2. Vista para mostrar todas las actividades deportivas
def lista_actividades(request):
    actividades = ActividadDeportiva.objects.all()

    return render(request, "reservas/lista_actividades.html", {"actividades": actividades})

# 3. Vista para mostrar los detalles de una actividad deportiva
def detalle_actividad(request, pk):
    actividad = get_object_or_404(ActividadDeportiva, pk=pk)
    return render(request, 'reservas/detalle_actividad.html', {'actividad': actividad})