const existingData = localStorage.getItem("formData");
var formData = existingData ? JSON.parse(existingData) : {};

function start() {
  if (existingData) {
    console.log("Dados do formulário recebidos:");
    console.log(formData);
  } else {
    console.log("Nenhum dado de formulário encontrado.");
  }
}

const btnGenerate = document.querySelector("#btnGenerate");

btnGenerate.addEventListener("click", () => {
  const content = document.querySelector("#contentToPrint");

  const options = {
    margin: [10, 10, 10, 10],
    filename: "Currículo.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(options).from(content).save();
});
