document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "51922720783";
  
    const name = document.querySelector("#name").value;
    const count = document.querySelector("#count").value;
    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const local = document.querySelector("#local").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_🥳 Reservación Cevichería Capricho_*%0A
          *Nombres y Apellidos:*%0A
          ${name}%0A
          *Cantidad de Personas*%0A
          ${count}%0A
          *Fecha de Reservación*%0A
          ${fecha}%0A
          *Hora*%0A
          ${hora}%0A
          *Local*%0A
          ${local}`;
  
    if (name === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${name}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Enviado`;
  
    window.open(url);
  });
  