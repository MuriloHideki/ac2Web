const existingData = localStorage.getItem("formData");
var formData = existingData ? JSON.parse(existingData) : {};
formData.chosenSkills = [];

const skills = [
  { name: "Habilidade 1", detail: "detalhe 1" },
  { name: "Habilidade 2", detail: "detalhe 2" },
  { name: "Habilidade 3", detail: "detalhe 3" },
  { name: "Habilidade 4", detail: "detalhe 4" },
  { name: "Habilidade 5", detail: "detalhe 5" },
];
function start() {
  const selectElement = document.getElementById("skills");
  for (let i = 0; i < skills.length; i++) {
    const option = document.createElement("option");
    option.value = skills[i].name;
    option.text = skills[i].name;
    option.title = skills[i].detail;
    selectElement.appendChild(option);
  }
}

function addSkill() {
  const selectElement = document.getElementById("skills");
  const selectedIndex = selectElement.selectedIndex;
  if (selectedIndex !== -1) {
    const selectedSkillName = selectElement.options[selectedIndex].value;
    const selectedSkill = getSkillByName(selectedSkillName);

    console.log(selectedSkill);

    formData.chosenSkills.push(selectedSkill);
    selectElement.remove(selectedIndex);
    const tbody = document.getElementById("tbody");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const name = document.createElement("td");
    name.innerText = selectedSkill.name;
    tr.appendChild(name);

    const description = document.createElement("td");
    description.innerText = selectedSkill.detail;
    tr.appendChild(description);

    const item = document.createElement("td");
    item.innerText = "Icone de lixo";
    tr.appendChild(item);
  }
}

function getSkillByName(name) {
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].name === name) {
      return skills[i];
    }
  }
}

function save() {
  /*
        if (!name || !phone || !birthDate || !sex || !email || !objetivo) {
          alert("Por favor, preencha todos os campos obrigatórios.");
          return;
        }
        */

  localStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "../result/result.html";
}
