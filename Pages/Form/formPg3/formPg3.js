const existingData = localStorage.getItem("formData");
var formData = existingData ? JSON.parse(existingData) : {};

function start() {}

function save() {
  /*
      if (!name || !phone || !birthDate || !sex || !email || !objetivo) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
      */

    formData.college = document.getElementById("college").value;
    formData.course = document.getElementById("course").value;
    formData.startDate = document.getElementById("startDate").value;
    formData.endDate = document.getElementById("endDate").value;

  localStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "../formPg5/formPg5.html";
}
