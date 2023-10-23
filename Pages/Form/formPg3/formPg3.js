const data = {
  college: "",
  course: "",
  startDate: "",
  endDate: "",
};

function start() {}

function save() {
  /*
      if (!name || !phone || !birthDate || !sex || !email || !objetivo) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
      */

  data.college = document.getElementById("college").value;
  data.course = document.getElementById("course").value;
  data.startDate = document.getElementById("startDate").value;
  data.endDate = document.getElementById("endDate").value;

  localStorage.setItem("formData", JSON.stringify(data));
  window.location.href = "../formPg5/formPg5.html";
}
