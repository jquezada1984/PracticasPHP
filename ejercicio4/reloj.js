function actualizarReloj() {
  const reloj = document.getElementById('reloj');
  const hora = document.getElementById('hora');
  const minuto = document.getElementById('minuto');
  const segundo = document.getElementById('segundo');

  const ahora = new Date();
  const horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  const anguloHoras = (horas % 12) * 360 / 12 + (minutos / 60) * 360 / 12;
  const anguloMinutos = minutos * 360 / 60 + (segundos / 60) * 360 / 60;
  const anguloSegundos = segundos * 360 / 60;

  hora.style.transform = `rotate(${anguloHoras + 90}deg)`;
  minuto.style.transform = `rotate(${anguloMinutos + 90}deg)`;
  segundo.style.transform = `rotate(${anguloSegundos + 90}deg)`;

  setTimeout(actualizarReloj, 1000); // Actualiza cada segundo
}

actualizarReloj(); // Iniciar el reloj