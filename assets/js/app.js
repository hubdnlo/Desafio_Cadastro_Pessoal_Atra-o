function isValidCPF(cpf) { 
	console.log(cpf.length);
	if (
    	cpf.length != 11 // se O CPF for diferente de 11 digitos, sera falso
    	
	) {
    	return false;
	} else { // condicao para verificar se o CPF eh verdadeiro ou return true
    	var numeros = cpf.substring(0, 9);
    	var digitos = cpf.substring(9);

    	var soma = 0;
    	for (var i = 10; i > 1; i--) {
        	soma += numeros.charAt(10 - i) * i;
    	}
    	console.log(soma);
    	//se a operacao for igual a 0. % eh mod (resto)
    	var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // capturando o resto da variavel soma
    	//validacao do primeiro digito
    	if (resultado != digitos.charAt(0)) {
        	return false;
    	}
    	soma = 0; // soma recebeu zero
    	numeros = cpf.substring(0, 10);

    	for (var k = 11; k > 1; k--) {
        	soma += numeros.charAt(11 - k) * k;
    	}
    	resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    	//validacao do segundo digito
    	if (resultado != digitos.charAt(1)) {
        	return false;
    	}

    	return true; // se toda operacao acima for true, ele retorna true e sera valido

	}
}

function validacao(){
	console.log("Funcao de validacao")

	var cpf = document.getElementById('inputCPF').value; // variavel CPF recebeu o id inputCPF( que esta dentro no inpunt no html) o value eh o valor digitado

	var resultadoValidacao = isValidCPF(cpf) // aqui a variavel recebeu o resultado da funcao que comeca na linha 1, ele recebe true ou false

	if (resultadoValidacao)   { // se CPF digitado for valido ele executa essa condicao, e aparece icone verde que esta num span do lado do label do CPF
    	var element = document.getElementById('result'); // variavel elemento recebeu o span com o ID result( veja no lado do label do CPF) 
    	element.innerHTML =  '<i class="fas fa-check-circle"></i>' 
    	var colorText = document.getElementById('result').style.color = "#53ff3cf3"; // variavel feita para receber o icone e mudar a cor para verde
	} else {
    	var element = document.getElementById('result');
    	element.innerHTML = '<i class="fas fa-exclamation-triangle"></i>'// variavel elemento recebeu o span com o ID result( veja no lado do label do CPF) 
    	var colorText = document.getElementById('result').style.color = "#f00000f3"; // variavel feita para receber o icone e mudar a cor para vermelho
        
        // A funcao setTimout eh uma funcao que espera algum intervalo para ser executada, no caso aquu foi de 1s
		setTimeout( () => { alert("CPF Invalido, confira o numero digitado!"); }, 1000); /// quantidade de tempo 1000 = 1segundo, ele espera aparecer o icone vermelho e depois de 1s aparece o alert

	}

}

// funcao para mostrar "formulario de abertura de conta enviado"
function enviado() {
   alert("Formulario enviado com sucesso!") // funcao onclick no botao enviar, se a pessoa clica ele aparece o alerta
}



