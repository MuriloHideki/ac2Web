const existingData = localStorage.getItem("formData");
let formData = existingData ? JSON.parse(existingData) : {};

function start() {}

function save() {
  formData.college = document.getElementById("college").value;
  formData.course = document.getElementById("course").value;
  formData.startDate = document.getElementById("startDate").value;
  formData.endDate = document.getElementById("endDate").value;

  let forms = document.querySelectorAll(".needs-validation");

  let isValid = true;
  forms.forEach(function (form) {
    if (!form.checkValidity()) {
      event.stopPropagation();
      isValid = false;
    }
    form.classList.add("was-validated");
  });

  if (isValid && isSearched) {
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "../formPg3/formPg3.html";
  }
}
