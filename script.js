function calculateDailyConsumption (age, sex, height, weight, physicalActivityLevel) {
    // Cálculo do Gasto Energético Basal (GEB)
  let geb = 0;
  if (sex === 'masculino') {
    geb = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  } else if (sex === 'feminino') {
    geb = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }
  
  // Cálculo do Gasto Energético Total (GET)
  let get = geb * physicalActivityLevel;

  // Cálculo da quantidade diária de macronutrientes recomendada
  let proteinas = weight * 1.2; // 1.2 gramas de proteínas por kg de peso corporal
  let carboidratos = get * 0.6 / 4; // 60% do GET em carboidratos, 1 grama de carboidrato tem 4 calorias
  let gorduras = get * 0.3 / 9; // 30% do GET em gorduras, 1 grama de gordura tem 9 calorias
  
  // Cálculo da quantidade diária de micronutrientes recomendada
  let calcio = 1000; // 1000 mg de cálcio por dia
  let ferro = sex === 'masculino' ? 8 : 18; // 8 mg de ferro por dia para homens, 18 mg de ferro por dia para mulheres
  let vitaminaC = 90; // 90 mg de vitamina C por dia
  
  // Retornar os resultados em um objeto
  return {
    get: get.toFixed(2),
    proteinas: proteinas.toFixed(2),
    carboidratos: carboidratos.toFixed(2),
    gorduras: gorduras.toFixed(2),
    calcio: calcio,
    ferro: ferro,
    vitaminaC: vitaminaC
  };
}

// Selecionar o botão de submit do formulário
const form = document.querySelector('form');
const submitButton = form.querySelector('button[type="submit"]');

// Adicionar um ouvinte de eventos para o botão de submit
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // previne o envio do formulário e recarregamento da página

  // Obter os valores do formulário
  const ageInput = document.getElementById('age');
  const ageValue = ageInput.value;
  const sex = document.getElementById('sex').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const physicalActivityLevel = document.getElementById('physicalActivityLevel').value;

  // Validar os campos do formulário
  let isValid = true;
  const ageRegex = /^[0-9]{1,2}$/;
  if (!ageRegex.test(ageValue)) {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Idade inválida";
    errorMessage.style.color = "red";
    errorMessage.style.fontFamily = "sans-serif";
    ageInput.parentNode.appendChild(errorMessage);
    // Recarregar a página depois de 5000 milisegundos se cair no error e resetar o valor do campo input
    setTimeout(() => {
      location.reload();
    }, 5000);
    isValid = false;
    ageInput.value = '';
  }

  if (sex !== 'masculino' && sex !== 'feminino') {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Sexo diferente de masculino ou feminino";
    errorMessage.style.color = "red";
    document.getElementById('sex').parentNode.appendChild(errorMessage);
    // Recarregar a página depois de 5000 milisegundos se cair no error e resetar o valor do campo input
    setTimeout(() => {
      location.reload();
    }, 5000);
    isValid = false;
    document.getElementById('sex').value = '';
  }

  const heightRegex = /^[0-9]{2,3}$/;
  if (!heightRegex.test(height)) {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Altura inválida";
    errorMessage.style.color = "red";
    document.getElementById('height').parentNode.appendChild(errorMessage);
    // Recarregar a página depois de 5000 milisegundos se cair no error e resetar o valor do campo input
    setTimeout(() => {
      location.reload();
    }, 5000);
    isValid = false;
    document.getElementById('height').value = '';
  }

  const weightRegex = /^[0-9]{2,3}$/;
  if (!weightRegex.test(weight)) {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Peso inválido";
    errorMessage.style.color = "red";
    document.getElementById('weight').parentNode.appendChild(errorMessage);
    // Recarregar a página depois de 5000 milisegundos se cair no error e resetar o valor do campo input
    setTimeout(() => {
      location.reload();
    }, 5000);
    isValid = false;
    document.getElementById('weight').value = '';
  }

  if (physicalActivityLevel !== '1.2' && physicalActivityLevel !== '1.375' && physicalActivityLevel !== '1.55' && physicalActivityLevel !== '1.725' && physicalActivityLevel !== '1.9') {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Nível de atividade física inválida";
    errorMessage.style.color = "red";
    document.getElementById('physicalActivityLevel').parentNode.appendChild(errorMessage);
    // Recarregar a página depois de 5000 milisegundos se cair no error e resetar o valor do campo input
    setTimeout(() => {
      location.reload();
    }, 5000);
    isValid = false;
    document.getElementById('physicalActivityLevel').value = '';
  }

  // Se os campos são válidos, chamar a função calculateDailyConsumption e exibir os resultados
  if (isValid) {
    // Chamar a função calculateDailyConsumption e armazenar o resultado em uma variável
    const result = calculateDailyConsumption(ageValue, sex, height, weight, physicalActivityLevel);

      // Exibir os resultados na página HTML
    document.getElementById("get").textContent = `Seu gasto energético total é: ${result.get} Kcal/dia`;
    document.getElementById("proteinas").textContent = `Cálculo da quantidade diária de macronutrientes recomendada: ${result.proteinas} Gramas de proteína`;
    document.getElementById("carboidratos").textContent = `Cálculo da quantidade diária de macronutrientes recomendada: ${result.carboidratos} Gramas de carboidrato`;
    document.getElementById("gorduras").textContent = `Cálculo da quantidade diária de macronutrientes recomendada: ${result.gorduras} Gramas de gordura`;
    document.getElementById("calcio").textContent = `Cálculo da quantidade diária de micronutrientes recomendada: ${result.calcio} Miligramas de calcio por dia`;
    document.getElementById("ferro").textContent = `Cálculo da quantidade diária de micronutrientes recomendada: ${result.ferro} Miligramas de ferro por dia`;
  document.getElementById("vitaminaC").textContent = `Cálculo da quantidade diára de vitaminaC recomendada: ${result.vitaminaC} Miligramas de vitaminaC por dia`;
}});