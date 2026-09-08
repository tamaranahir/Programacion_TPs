// EJERCICIO 1
function validarFechaNacimiento() {
// Buscamos TODOS los inputs que tengan la clase "input-fecha"
    const inputsFecha = document.querySelectorAll(".input-fecha");

// Recorremos cada uno con un bucle clásico
    for (let i = 0; i < inputsFecha.length; i++) {
        let valorFecha = inputsFecha[i].value;

        if (valorFecha === "") {
            alert(`Participante ${i + 1}: Debe seleccionar una fecha de nacimiento`);
            inputsFecha[i].focus();
            return false;
        }

        let fechaNacimiento = new Date(valorFecha + "T00:00:00");
        let fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);

        if (fechaNacimiento > fechaActual) {
            alert(`Participante ${i + 1}: La fecha de nacimiento no puede ser posterior a la fecha actual`);
            inputsFecha[i].focus();
            return false;
        }
    }
    return true; // Si todas las fechas pasaron, devuelve true
}

// EJERCICIO 2
function validarDNI() {
// Buscamos TODOS los inputs que tengan la clase "input-dni"
    const inputsDni = document.querySelectorAll(".input-dni");

    for (let i = 0; i < inputsDni.length; i++) {
        let valorDni = inputsDni[i].value.trim();

        if (valorDni === "") {
            alert(`Participante ${i + 1}: Debe ingresar un DNI`);
            inputsDni[i].focus();
            return false;
        }

        if (valorDni.length !== 8 || isNaN(valorDni)) {
            alert(`Participante ${i + 1}: El DNI debe contener exactamente 8 dígitos`);
            inputsDni[i].focus();
            return false;
        }
    }
    return true; // Si todos los DNI pasaron, devuelve true
}

// EJERCICIO 3
// 3.1. Función constructora
function Actividad(nombre, lugar, dia, horario, cupo, estado) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;
}

//3.2. Clase SistemaDeportes
class SistemaDeportes {
    constructor() {
        this.actividades = [];
    }
    agregarActividad(actividad) {
        this.actividades.push(actividad);
    }
    listarActividades() {
        return this.actividades;
    }
}

//3.3. Crear una instancia de SistemaDeportes
const sistema = new SistemaDeportes();

// Fabricamos las 4 actividades deportivas reales usando nuestro molde "Actividad"
const futbol = new Actividad("Fútbol", "Cancha principal de la UNCA", "Lunes y Jueves", "20:00 a 22:00", 15, "disponible");
const basquet = new Actividad("Básquet", "Cancha techada de la UNCA", "Martes y Jueves", "18:00 a 20:00", 20, "disponible");
const voley = new Actividad("Vóley", "Cancha techada de la UNCA.", "Miércoles y Viernes", "20:00 a 22:00", 30, "disponible");
const atletismo = new Actividad("Atletismo", "Cancha principal de la UNCA.", "Lunes, miércoles y viernes", "19:00 a 21:00", 13, "disponible");

// Guardamos los 4 objetos recién creados dentro del sistema
sistema.agregarActividad(futbol);
sistema.agregarActividad(basquet);
sistema.agregarActividad(voley);
sistema.agregarActividad(atletismo);
// Le pedimos al sistema que liste todos los deportes cargados
console.log(sistema.listarActividades());

// EJERCICIO 4
function mostrarTablaActividades() {
    //Atrapamos el cuerpo de la tabla
    const cuerpo = document.getElementById("cuerpoTabla");
    // Si la pagina actual no tiene tabla, frena la ejecución
    if (!cuerpo) return;
    // Limpiamos el cuerpo por si acaso tuviera filas viejas
    cuerpo.innerHTML =""

    // Recorremos nuestro array de actividades
    sistema.actividades.forEach(function (actividad) {
        // Creamos una fila (tr) vacia en el aire
        const fila = document.createElement("tr");
        // Creamos cada una de las celdas
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = actividad.nombre;

        const celdaLugar = document.createElement("td");
        celdaLugar.textContent = actividad.lugar;

        const celdaDia = document.createElement("td");
        celdaDia.textContent = actividad.dia;

        const celdaHorario = document.createElement("td");
        celdaHorario.textContent = actividad.horario;

        const celdaCupos = document.createElement("td");
        celdaCupos.textContent = actividad.cupo;

        const celdaEstado = document.createElement("td");
        celdaEstado.textContent = actividad.estado;

        // Metemos las 6 celdas dentro de la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaLugar);
        fila.appendChild(celdaDia);
        fila.appendChild(celdaHorario);
        fila.appendChild(celdaCupos);
        fila.appendChild(celdaEstado);

        // Metemos la fila armada dentro del body
        cuerpo.appendChild(fila);
    });
}

// EJERCICIO 5
function generarCamposParticipantes() {
    const inputCantidad = document.getElementById("cantidadParticipantes");
    const contenedor = document.getElementById("contenedorParticipantes");

    if (!inputCantidad || !contenedor) return;

    let cantidad = parseInt(inputCantidad.value);

    if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
        alert("Por favor, ingrese un número de participantes válido (entre 1 y 10)");
        return;
    }

    // Limpiamos los bloques previos si los hubiera
    contenedor.innerHTML = "";
    let htmlTemporal = "";

    // Bucle para crear el bloque de cada participante
    for (let i = 1; i <= cantidad; i++) {
        // 1. Creamos una tarjeta contenedora (card de Bootstrap)
        const card = document.createElement("div");
        card.className = "card mb-4 shadow-sm bg-white border";

        // 2. Encabezado del bloque con el color azul institucional de Deportes UNCA
        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header text-white fw-bold";
        cardHeader.style.backgroundColor = "#0c2340";
        cardHeader.textContent = `Participante ${i}`;

        // 3. Cuerpo de la tarjeta
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        cardBody.innerHTML = `
                <!-- Datos Personales -->
                <fieldset>
                    
                    <div class="campo">
                        <label for="nombre_p${i}">Apellido y nombre:</label>
                        <input type="text" id="nombre_p${i}" name="nombre_p${i}" maxlength="100" placeholder="Ej: Pérez, Juan" required>
                    </div>
                    
                    <div class="campo">
                        <label for="dni_p${i}">DNI:</label>
                        <input type="number" id="dni_p${i}" name="dni_p${i}" class="input-dni" inputmode="numeric" pattern="[0-9]{8}" maxlength="8" placeholder="Ej: 35123456" required>
                    </div>
                    
                    <div class="campo">
                        <label for="fecha_nacimiento_p${i}">Fecha de nacimiento:</label>
                        <input type="date" id="fecha_nacimiento_p${i}" name="fecha_nacimiento_p${i}" class="input-fecha">
                    </div>
                    
                    <div>
                        <label><strong>Sexo:</strong></label>
                        <div class="radios_en_linea">
                            <div class="opcion-radio">
                                <input type="radio" id="sexo_m_p${i}" name="sexo_p${i}" value="Masculino">
                                <label for="sexo_m_p${i}">Masculino</label>
                            </div>
                            <div class="opcion-radio">
                                <input type="radio" id="sexo_f_p${i}" name="sexo_p${i}" value="Femenino">
                                <label for="sexo_f_p${i}">Femenino</label>
                            </div>
                            <div class="opcion-radio">
                                <input type="radio" id="sexo_nb_p${i}" name="sexo_p${i}" value="No binario">
                                <label for="sexo_nb_p${i}">No binario</label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <!-- Información Deportiva -->
                <fieldset class="mt-2">
                    <legend>Información deportiva</legend>
                    <div class="campo">
                        <label for="nivel_p${i}">Nivel :</label>
                        <select id="nivel_p${i}" name="nivel_deportivo_p${i}">
                            <option value="inicial">Inicial</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="avanzado">Avanzado</option>
                        </select>
                    </div>             
                </fieldset>
            `;

        // Ensamblamos la tarjeta (metemos cabecera y cuerpo)
        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        // Colgamos la tarjeta armada en el contenedor de la pantalla
        contenedor.appendChild(card);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Buscamos el elemento form dentro de la página html
    let formulario = document.querySelector("form");

    // Verificamops si realmente se encontró un formulario en la página
    if (formulario) {
        // Escuchamos el evento (cuando el usuario hace click en "Aceptar inscripción")
        formulario.addEventListener("submit", function (evento) {

            // Revisamos el campo de DNI
            let dniValido = validarDNI();

            if(!dniValido){
                evento.preventDefault();
                return;
            }

            // Si el DNI estuvo bien, revisamos la fecha
            let fechaValida = validarFechaNacimiento();

            // Si la fecha NO es válida
            if (!fechaValida) {
                evento.preventDefault();
            }
        });

        // Buscamos el botón de generar
        const btnGenerar = document.getElementById("btnGenerar");
        if (btnGenerar) {
            // A. Escuchamos el clic en el botón "Generar Participantes"
            btnGenerar.addEventListener("click", generarCamposParticipantes);

            // B. Generamos 1 participante por defecto
            generarCamposParticipantes();
        }
    }
    mostrarTablaActividades();
});