const cnpjInput = document.querySelector("#cnpj");
cnpjInput.addEventListener("keyup", () => {
  let value = cnpjInput.value;

  // Insert dots and slashes as the user types
  value = value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "$1.$2").replace(/^(\d{2}\.\d{3})(\d)/, "$1.$2").replace(/\.(\d{3})(\d)/, ".$1/$2").replace(/(\d{4})(\d)/, "$1-$2");

  // Update the value of the input
  cnpjInput.value = value;
});

const matricula1Input = document.querySelector("#matricula1");
matricula1Input.addEventListener("keyup", () => {
  let value = matricula1Input.value;

  // Insert dots and hyphens as the user types
  value = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1-$2");

  // Update the value of the input
  matricula1Input.value = value;
});

const matricula2Input = document.querySelector("#matricula2");
matricula2Input.addEventListener("keyup", () => {
  let value = matricula2Input.value;

  // Insert dots and hyphens as the user types
  value = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1-$2");

  // Update the value of the input
  matricula2Input.value = value;
});

const cepInput = document.querySelector("#cep");
cepInput.addEventListener("keyup", () => {
  let value = cepInput.value;

  // Insert dots and hyphens as the user types
  value = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1-$2");

  // Update the value of the input
  cepInput.value = value;
});