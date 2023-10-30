const existingData = localStorage.getItem("formData");
var formData = existingData ? JSON.parse(existingData) : {};

function start() {
  if (existingData) {
    console.log("Dados do formulário recebidos:");
    console.log(formData);
  } else {
    console.log("Nenhum dado de formulário encontrado.");
  }

  let address =
    formData.street +
    "\n" +
    formData.city +
    ", " +
    formData.state +
    ", " +
    formData.cep +
    "\n" +
    "(" +
    formData.neighborhood +
    ")";

  let phone = "(" + formData.ddd + ") " + formData.phone;

  let education =
    formData.college +
    "\n" +
    formData.startDate +
    " ~ " +
    formData.endDate +
    "\n" +
    formData.course;

  let skills = "";
  formData.chosenSkills.forEach((skill) => {
    skills += skill.name + ";\n";
  });

  let experiences = "";
  formData.experiences.forEach((experience) => {
    experiences +=  experience.experienceName + "\n" + 
                    experience.experiencePosition + "\n" +
                    experience.experienceStartDate + " - " + experience.experienceEndDate + "\n" +
                    experience.experienceDescription + "\n \n";
  });

  document.getElementById("name").innerText = formData.name;
  document.getElementById("birth-date").innerText = formData.birthDate;
  document.getElementById("phone").innerText = phone;
  document.getElementById("email").innerText = formData.email;
  document.getElementById("address").innerText = address;
  document.getElementById("goal").innerText = formData.goal;
  document.getElementById("education").innerText = education;
  document.getElementById("skills").innerText = skills;
  document.getElementById("experiences").innerText = experiences;
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
