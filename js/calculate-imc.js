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
    imc: calculateImc(form.weight.value, form.height.value)
  };
  return patient;
}

function createPatientTr(patient) {
  var patientTr = document.createElement("tr");
  patientTr.classList.add("patient");

  patientTr.appendChild(createTdElement(patient.name, "info-name"));
  patientTr.appendChild(createTdElement(patient.weight, "info-weight"));
  patientTr.appendChild(createTdElement(patient.height, "info-height"));
  patientTr.appendChild(createTdElement(patient.fat, "info-fat"));
  patientTr.appendChild(createTdElement(patient.imc, "info-imc"));

  return patientTr;
}

function createTdElement(data, classToAdd) {
  var td = document.createElement("td");
  td.classList.add(classToAdd);
  td.textContent = data;
  return td;
}
