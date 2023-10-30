const existingData = localStorage.getItem("formData");
var formData = existingData ? JSON.parse(existingData) : {};

formData.experiences = [];

function addExperience() {
  var enterpriseName = document.getElementById("enterprise").value;
  var positionName = document.getElementById("position").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
  var description = document.getElementById("description").value;

  formData.experiences.push({
    experienceName: enterpriseName,
    experiencePosition: positionName,
    experienceStartDate: startDate,
    experienceEndDate: endDate,
    experienceDescription: description
  });

  const tbody = document.getElementById("tbody");
  const tr = document.createElement("tr");
  tbody.appendChild(tr);

  const name = document.createElement("td");
  name.innerText = enterpriseName;
  tr.appendChild(name);

  const pos = document.createElement("td");
  pos.innerText = positionName;
  tr.appendChild(pos);

  const start = document.createElement("td");
  start.innerText = startDate;
  tr.appendChild(start);

  const end = document.createElement("td");
  end.innerText = endDate;
  tr.appendChild(end);

  const item = document.createElement("td");
  const button = document.createElement("button");
  const icon = document.createElement("img");

  icon.src = "../../../Icons/delete_FILL0_wght400_GRAD0_opsz24.png";
  icon.alt = "Icone de lixeira";

  button.appendChild(icon);
  button.type = "button";
  button.className = "btn-delete";
  button.addEventListener("click", removeSkill, tr, formData.experiences.length - 1);

  item.appendChild(button);
  tr.appendChild(item);

  document.getElementById("enterprise").value = "";
  document.getElementById("position").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("description").value = "";
}

function removeSkill(tableRow, index) {
  formData.experiences.splice(index);

  const tbody = document.getElementById("tbody");
  tbody.deleteRow(tableRow.rowIndex);
}

function save() {
  localStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "../result/result.html";
}
