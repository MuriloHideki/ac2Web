const data = {
  college: "",
};

const chosenSkills = [];

function start() {
  const skills = [
    { name: "Item 1", detail: "detalhe" },
    { name: "Item 2", detail: "detalhe" },
    { name: "Item 3", detail: "detalhe" },
    { name: "Item 4", detail: "detalhe" },
    { name: "Item 5", detail: "detalhe" },
  ];
  const selectElement = document.getElementById("skills");
  for (let i = 0; i < skills.length; i++) {
    const option = document.createElement("option");
    option.value = skills[i];
    option.text = skills[i].name;
    option.title = skills[i].detail;
    selectElement.appendChild(option);
  }
}

function addSkill() {
  const selectElement = document.getElementById("skills");
  const selectedIndex = selectElement.selectedIndex;
  if (selectedIndex !== -1) {
    const selectedSkill = selectElement.options[selectedIndex].value;
    
    
    console.log(selectedSkill);

    
    chosenSkills.push(selectedSkill);
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

function save() {
  /*
        if (!name || !phone || !birthDate || !sex || !email || !objetivo) {
          alert("Por favor, preencha todos os campos obrigatórios.");
          return;
        }
        */

  data.college = document.getElementById("college").value;

  localStorage.setItem("formData", JSON.stringify(data));
  window.location.href = "../formPg6/formPg6.html";
}
