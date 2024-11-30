const appointments = []; // Array para almacenar citas

// Duración de los servicios en minutos
const serviceDurations = {
  "Corte de cabello": 30,
  Manicure: 45,
  Pedicure: 60,
  "Tratamiento capilar": 90,
};

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!serviceDurations[service]) {
    alert("El servicio seleccionado no es válido.");
    return;
  }

  // Calcular la hora de finalización de la cita
  const startTime = new Date(`${date}T${time}`);
  const endTime = new Date(startTime.getTime() + serviceDurations[service] * 60000);

  // Validar si hay conflictos de horario
  const conflict = appointments.some((appointment) => {
    const appointmentStart = new Date(appointment.start);
    const appointmentEnd = new Date(appointment.end);

    return (
      startTime < appointmentEnd && // La nueva cita comienza antes de que termine una existente
      endTime > appointmentStart   // La nueva cita termina después de que comienza una existente
    );
  });

  if (conflict) {
    alert("El estilista está ocupado en el horario seleccionado. Por favor, elige otro horario.");
    return;
  }

  // Guardar la cita
  appointments.push({ name, phone, service, start: startTime, end: endTime });

  // Mostrar confirmación
  const confirmationText = `
    Hola ${name}, tu cita para "${service}" ha sido agendada exitosamente el día ${date} 
    de ${time} a ${endTime.toTimeString().slice(0, 5)}.
    Te contactaremos al ${phone} si es necesario. ¡Gracias por elegirnos!
  `;
  document.getElementById("confirmationText").innerText = confirmationText;
  document.getElementById("confirmation").classList.remove("hidden");

  // Resetear el formulario
  document.getElementById("appointmentForm").reset();
});

  