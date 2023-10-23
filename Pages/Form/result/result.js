const storedData = localStorage.getItem("formData");

function start() {
  if (storedData) {
    const formData = JSON.parse(storedData);
    console.log("Dados do formulário recebidos:");
    console.log(formData);
  } else {
    console.log("Nenhum dado de formulário encontrado.");
  }
}
