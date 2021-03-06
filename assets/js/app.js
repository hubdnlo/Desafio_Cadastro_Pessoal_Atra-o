function isValidCPF(cpf) { 
	console.log(cpf.length);
	if (
    	cpf.length != 11 ||// se O CPF for diferente de 11 digitos, sera falso
        cpf == "00000000000" || // regra para nao validar CPF com 11 digitos iguais // inicio
        cpf == "11111111111" ||
        cpf == "22222222222" || // o || significa "ou"
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"    // regra para nao validar CPF com 11 digitos iguais /. fim
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

	const cpf = dados.inputCPF.value; // variavel CPF recebeu o id inputCPF( que esta dentro no inpunt no html) o value eh o valor digitado

	const resultadoValidacao = isValidCPF(cpf) // aqui a variavel recebeu o resultado da funcao que comeca na linha 1, ele recebe true ou false

	if (resultadoValidacao)   { // se CPF digitado for valido ele executa essa condicao, e aparece icone verde que esta num span do lado do label do CPF
    	const element = document.getElementById('result'); // variavel elemento recebeu o span com o ID result( veja no lado do label do CPF) 
    	element.innerHTML =  '<i class="fas fa-check-circle"></i>' 
    	const colorText = document.getElementById('result').style.color = "#53ff3cf3"; // variavel feita para receber o icone e mudar a cor para verde
	} else {
    	const element = document.getElementById('result');
    	element.innerHTML = '<i class="fas fa-exclamation-triangle"></i>'// variavel elemento recebeu o span com o ID result( veja no lado do label do CPF) 
    	const colorText = document.getElementById('result').style.color = "#f00000f3"; // variavel feita para receber o icone e mudar a cor para vermelho
        
    // A funcao setTimout eh uma funcao que espera algum intervalo para ser executada, no caso aquu foi de 1s
		alert("CPF Invalido, confira o numero digitado!"); /// quantidade de tempo 1000 = 1segundo, ele espera aparecer o icone vermelho e depois de 1s aparece o alert

	}

}