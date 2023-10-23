const data = {
  college: "",
  course: "",
  startDate: "",
  endDate: "",
};

const chosenSkills = [];

function start() {
  const skills = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const selectElement = document.getElementById("skills");
  for (let i = 0; i < skills.length; i++) {
    const option = document.createElement("option");
    option.value = skills[i];
    option.text = skills[i];
    selectElement.appendChild(option);
  }
}

function addSkill() {
  const selectElement = document.getElementById("skills");
  const selectedIndex = selectElement.selectedIndex;
  if (selectedIndex !== -1) {
    const selectedSkill = selectElement.options[selectedIndex].value;
    chosenSkills.push(selectedSkill);
    selectElement.remove(selectedIndex);
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
  data.course = document.getElementById("course").value;
  data.startDate = document.getElementById("startDate").value;
  data.endDate = document.getElementById("endDate").value;

  localStorage.setItem("formData", JSON.stringify(data));
  window.location.href = "../formPg4/formPg4.html";
}
