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

let buttonCalculate = document.getElementById("button-calculate");
buttonCalculate.addEventListener("click", function() {
  let age = parseFloat(prompt("Digite sua idade:"));
  let sex = prompt("Digite seu sexo:");
  let height = parseFloat(prompt("Digite sua altura em metros:"));
  let weight = parseFloat(prompt("Digite seu peso em kg:"));
  let physicalActivityLevel = parseFloat(prompt("Digite seu nivel de atividade física (1.2 para sedentário, 1.375 para levemente ativo, 1.55 para moderadamente ativo, 1.725 para muito ativo e 1.9 para extremamente ativo):"));
  
  let result = calculateDailyConsumption(age, sex, height, weight, physicalActivityLevel);
  
  // Exibir os resultados na página HTML
  document.getElementById("get").textContent = `Seu gasto energético total é: ${result.get} Kcal/dia`;
  document.getElementById("proteinas").textContent = `Cálculo da quantidade diária de macronutrientes recomendada: ${result.proteinas} Gramas de proteína`;
  document.getElementById("carboidratos").textContent = `Cálculo da quantidade diária de macronutrientes recomendada: ${result.carboidratos} Gramas de carboidrato`;
  document.getElementById("gorduras").textContent = `Cálculo da quantidade diária de macronutrientes recomendada: ${result.gorduras} Gramas de gordura`;
  document.getElementById("calcio").textContent = `Cálculo da quantidade diária de micronutrientes recomendada: ${result.calcio} Miligramas de calcio por dia`;
  document.getElementById("ferro").textContent = `Cálculo da quantidade diária de micronutrientes recomendada: ${result.ferro} Miligramas de ferro por dia`;
  document.getElementById("vitaminaC").textContent = `Cálculo da quantidade diára de vitaminaC recomendada: ${result.vitaminaC} Miligramas de vitaminaC por dia`;
});