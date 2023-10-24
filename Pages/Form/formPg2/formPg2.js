const existingData = localStorage.getItem("formData");
var formData = existingData ? JSON.parse(existingData) : {};

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
  /*
    if (!name || !phone || !birthDate || !sex || !email || !objetivo) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    */

  localStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "../formPg3/formPg3.html";
}
