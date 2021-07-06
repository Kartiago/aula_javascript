
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://projudi.tjba.jus.br/projudi/");
    //window.location.href = "https://projudi.tjba.jus.br/projudi/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1 + n2;
} */

/*var validar=0

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual sua idade");
validaIdade(idade)
console.log(validar);*/

//alert(soma(5, 10));


/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*var count;
for(count=0; count <= 5; count++){
    alert(count);
}*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}*/

/*var idade = prompt("Qual a sua idade?");
var idade = 18;
if (idade >= 18){
    alert("maior de idade");    
}else{
    alert("menor de idade");
};*/

/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("-"));




/*var nome = "Karlos Thiago";
var n1 = 5;
var n2 = 3;
var frase = "Brasil é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Brasil", "Bahia"));*/
