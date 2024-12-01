const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  clearErrors();
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  if (validateForm(height, weight)) {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result.innerHTML = `<span>You are underweight.</span>`;
      result.style.color = "rgb(139, 0, 0)";
      result.style.fontWeight = "700";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>You are normal.</span>`;
      result.style.color = "green";
      result.style.fontWeight = "700";
    } else {
      result.innerHTML = `<span>You are overweight.</span>`;
      result.style.color = "rgb(139, 0, 0)";
      result.style.fontWeight = "700";
    }
    clearInputs();
  }
}
function validateForm(height, weight) {
  if (!height || !weight) {
    if (!height) heightError("Please enter your height");
    if (!weight) weightError("Please enter your weight");
    return false;
  }
  if (Number.isNaN(Number(height)) || Number.isNaN(Number(weight))) {
    if (Number.isNaN(Number(height))) {
      heightError("Invalid height");
    }
    if (Number.isNaN(Number(weight))) {
      weightError("Invalid weight");
    }
    return false;
  }

  return true;
}
//function to display error height message
function heightError(message) {
  let errorBox = document.getElementById("heightError");
  let msg = document.createElement("p");
  msg.innerHTML = `<span>${message}</span>`;
  errorBox.appendChild(msg);
}

//function to display weight error message
function weightError(message) {
  let errorBox = document.getElementById("weightError");
  let msg = document.createElement("p");
  msg.innerHTML = `<span>${message}</span>`;
  errorBox.appendChild(msg);
}

//function to clear messages
function clearErrors() {
  document.getElementById("heightError").innerHTML = "";
  document.getElementById("weightError").innerHTML = "";
  results.innerHTML = "";
  result.innerHTML = "";
  result.className = "";
}

//function to clear input feilds
function clearInputs() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
}
