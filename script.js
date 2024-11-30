document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Capturar valores del formulario
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
  
    // Mostrar confirmación
    const confirmationText = `
      Hola ${name}, tu cita para "${service}" ha sido agendada exitosamente el día ${date} a las ${time}.
      Te contactaremos al ${phone} si es necesario. ¡Gracias por elegirnos!
    `;
    document.getElementById("confirmationText").innerText = confirmationText;
    document.getElementById("confirmation").classList.remove("hidden");
  
    // Resetear el formulario
    document.getElementById("appointmentForm").reset();
  });
  