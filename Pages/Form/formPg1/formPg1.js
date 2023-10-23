var title = "CVV - Form";

function start() {
  document.getElementById("brand").innerText = title;
}

function save() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const birthDate = document.getElementById("birth-date").value;
  const sex = document.querySelector('select[name="select"]').value;
  const email = document.getElementById("email").value;
  const objetivo = document.getElementById("objetivo").value;

  /*
  if (!name || !phone || !birthDate || !sex || !email || !objetivo) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }
  */

  const data = {
    name: name,
    phone: phone,
    birthDate: birthDate,
    sex: sex,
    email: email,
    objetivo: objetivo,
  };

  localStorage.setItem("formData", JSON.stringify(data));
  window.location.href = "../formPg2/formPg2.html";
}
