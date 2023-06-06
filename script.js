let area_tijolo = 0.0336;

let nome_pessoa = prompt('OLÁ, QUAL SEU NOME?');
           alert(`SEJA BEM VINDO(A) AO CALCULADOR DE TIJOLOS ${nome_pessoa}, A PRÓXIMA ETAPA É SÓ ME PASSAR ALGUMAS INFORMAÇÕES BÁSICAS`);
let altura_parede = prompt('QUAL A ALTURA DA PAREDE?\n');
let largura_parede = prompt('AGORA ME DIGA A LARGURA DA PAREDE?\n');

let area_parede = altura_parede * largura_parede;
let quantidade_tijolos = Math.ceil(area_parede / area_tijolo);

document.write('A quantidade de tijolos que você precisa é de:', quantidade_tijolos);


