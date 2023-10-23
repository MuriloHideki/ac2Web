const data = {
  cep: "",
  neighborhood: "",
  state: "",
  city: "",
  street: "",
  ddd: "",
};

function start() {}

function searchCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      data.cep = jsonData.cep;
      data.neighborhood = jsonData.bairro;
      data.state = jsonData.uf;
      data.city = jsonData.localidade;
      data.street = jsonData.logradouro;
      data.ddd = jsonData.ddd;

      console.log("Dados do CEP:", data);
      this.helper();
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao buscar o CEP:");
    });
}

function setValuesOnScreen() {
  document.getElementById("state").value = data.state;
  document.getElementById("neighborhood").value = data.neighborhood;
  document.getElementById("city").value = data.city;
  document.getElementById("street").value = data.street;
}

function save() {
  /*
    if (!name || !phone || !birthDate || !sex || !email || !objetivo) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    */

  localStorage.setItem("formData", JSON.stringify(data));
  window.location.href = "../formPg3/formPg3.html";
}
