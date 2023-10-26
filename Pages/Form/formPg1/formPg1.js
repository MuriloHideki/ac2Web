var title = "CVV - Form";

function start() {
  document.getElementById("brand").innerText = title;
}

function save(event) {
  event.preventDefault();

  const existingData = localStorage.getItem("formData");
  let formData = existingData ? JSON.parse(existingData) : {};

  formData.name = document.getElementById("name").value;
  formData.phone = document.getElementById("phone").value;
  formData.birthDate = document.getElementById("birth-date").value;
  formData.sex = document.querySelector('select[name="select"]').value;
  formData.email = document.getElementById("email").value;
  formData.goal = document.getElementById("objetivo").value;

  let forms = document.querySelectorAll(".needs-validation");

  let isValid = true;
  forms.forEach(function (form) {
    if (!form.checkValidity()) {
      event.stopPropagation();
      isValid = false;
    }
    form.classList.add("was-validated");
  });

  if (isValid) {
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "../formPg2/formPg2.html";
  }
}
