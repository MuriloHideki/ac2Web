var title = "CVV - Form";

function start() {
  document.getElementById("brand").innerText = title;
}

function save() {
  const existingData = localStorage.getItem("formData");
  var formData = existingData ? JSON.parse(existingData) : {};

  formData.name = document.getElementById("name").value;
  formData.phone = document.getElementById("phone").value;
  formData.birthDate = document.getElementById("birth-date").value;
  formData.sex = document.querySelector('select[name="select"]').value;
  formData.email = document.getElementById("email").value;
  formData.goal = document.getElementById("objetivo").value;

  /*
  if (!name || !phone || !birthDate || !sex || !email || !objetivo) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }
  */

  localStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "../formPg2/formPg2.html";
}
