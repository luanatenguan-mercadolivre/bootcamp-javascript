/*
Faça uma função chamada "calcularPreco" que receba dois parâmetros, sendo o primeiro o node de um produto (ex: laptop), e o segundo o preço desse
produto (sem o sinal $). Esta função deve imprimir o nome do produto, o custo de envio e o preço final no console. 
*/

function calcularPreco(produto, preco) {
    let custoDeEnvio;
    if(preco > 1 && preco <= 2000) {
        custoDeEnvio = 300
    } else if(preco > 2000 && preco <= 4000) {
        custoDeEnvio = 450
    } else {
        custoDeEnvio = 700
    }

    let precoFinal = preco + custoDeEnvio;

    return ('O produto ' + produto + " custa R$" + preco + ". Seu custo de envio é R$" + custoDeEnvio + ". Portanto, o preço final é R$" + precoFinal);
}

let macbook = calcularPreco('Macbook', 2500);
let celular = calcularPreco('Celular', 500);
let playstation = calcularPreco('Playstation', 4500);

console.log(macbook);
console.log(celular);
console.log(playstation);