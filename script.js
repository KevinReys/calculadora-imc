const calcular = document.getElementById('calcular');
//Pego uma variável 'nome','altura','peso' (que é o elemento HTML)... e atribuo ao documento

function imc () { 
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

        if (nome!== '' && altura !== '' && peso !== '') { //Se (if), o nome for (!==) diferente de ('')vazio..
        
        const valorIMC = (peso / (altura * altura)).toFixed(1); //fazendo o cálculo

        let classificacao = '';
        
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        }else if (valorIMC < 25){
            classificacao = 'peso ideal. Parabéns';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'obesidade grau II. Parabéns';
        }else { 
            classificacao = 'obesidade grau III, cuidado!';
        }
        
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

        }else{
        resultado.textContent = 'Preencha todos os campos!';
        }
    }
       calcular.addEventListener('click', imc);
    