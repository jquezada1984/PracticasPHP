function agregarTarea() {
  var tareaInput = document.getElementById("tarea");
  var tareaText = tareaInput.value.trim();

  if (tareaText === "") {
      return;
  }

  var listaTareas = document.getElementById("lista-tareas");
  var nuevaTarea = document.createElement("li");
  nuevaTarea.innerHTML = `
      ${tareaText}
      <button onclick="eliminarTarea(this)">Eliminar</button>
  `;
  listaTareas.appendChild(nuevaTarea);

  tareaInput.value = "";
}

function eliminarTarea(botonEliminar) {
  var tarea = botonEliminar.parentElement;
  tarea.remove();
}