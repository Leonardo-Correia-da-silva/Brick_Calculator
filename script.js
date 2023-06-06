let area_tijolo = 0.0336;

let nome_pessoa = prompt('Olá, Qual o seu nome?');
           alert(`Seja bem vindo(a) ao calculador de tijolos ${nome_pessoa}, a próxima etapa é só me passar algumas informações básicas, ok?`);
let altura_parede = prompt('Qual a altura da parade em metros?\n');
let largura_parede = prompt('Agora me diga a largura da parede em metros? \n');

let area_parede = altura_parede * largura_parede;
let quantidade_tijolos = Math.ceil(area_parede / area_tijolo);

document.write('A quantidade de tijolos que você precisa é de:', quantidade_tijolos);


