const existingData = localStorage.getItem("formData");
let formData = existingData ? JSON.parse(existingData) : {};
let isSearched = false;

function start() {}

function searchCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      formData.cep = jsonData.cep;
      formData.neighborhood = jsonData.bairro;
      formData.state = jsonData.uf;
      formData.city = jsonData.localidade;
      formData.street = jsonData.logradouro;
      formData.ddd = jsonData.ddd;
      isSearched = true;
      this.setValuesOnScreen();
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao buscar o CEP:" + error);
    });
}

function setValuesOnScreen() {
  document.getElementById("state").value = formData.state;
  document.getElementById("neighborhood").value = formData.neighborhood;
  document.getElementById("city").value = formData.city;
  document.getElementById("street").value = formData.street;
}

function save() {
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
