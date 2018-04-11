var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", addPatient);

function addPatient(event) {
  event.preventDefault();

  var form = document.querySelector("#add-form");

  var patient = getPatientFromForm(form);

  var patientTr = createPatientTr(patient);

  var table = document.querySelector("#table-patients");
  table.appendChild(patientTr);
}

function getPatientFromForm(form) {
  var patient = {
    name: form.name.value,
    weight: form.weight.value,
    height: form.height.value,
    fat: form.fat.value,
    imc: calculateImc(weight, height)
  };
  return patient;
}

function createPatientTr(patient) {
  var patientTr = document.createElement("tr");
  var nameTd = document.createElement("td");
  var weightTd = document.createElement("td");
  var heightTd = document.createElement("td");
  var fatTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nameTd.textContent = patient.name;
  weightTd.textContent = patient.weight;
  heightTd.textContent = patient.height;
  fatTd.textContent = patient.fat;
  imcTd.textContent = patient.imc;

  patientTr.appendChild(nameTd);
  patientTr.appendChild(weightTd);
  patientTr.appendChild(heightTd);
  patientTr.appendChild(fatTd);
  patientTr.appendChild(imcTd);

  return patientTr;
}
