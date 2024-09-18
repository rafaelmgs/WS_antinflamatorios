/* 
   * quando: 10:38-17-09-2024
   * farmacia: DROGARIA PACHECO
   * nome: Nimesulida 100mg Genérico Cimed 12 Comprimidos
   * preco: 4,99
   * link: https://www.drogariaspacheco.com.br/nimesulida-100mg-generico-cimed-12-comprimidos/p
*/

const urlalvo = 'https://www.drogariaspacheco.com.br/medicamentos/Anti-inflamatórios?PS=48&map=c,specificationFilter_146';

const axios = require('axios');
const cheerio = require('cheerio');
const UserAgent = require('user-agents');
const time = require('./mod/time');

let dados = {};

async function scrap(url) {
    const horadata = time();
    const userAgent = await new UserAgent();
    const {data} = await axios.get(url, {
        'User-Agent':UserAgent.toString()
    });
    const $ = cheerio.load(data);
    $('.descricao-prateleira').map((index,element) =>{
        let quando = horadata;
        let farmacia = 'DROGARIA PACHECO';
        let nome = $(element).find('.collection-link').text();
        let preco = $(element).find('.valor-por').text();
        let urlproduto = $(element).find('.collection-link').attr('href');

        if(preco == ''){    // Para não deixar o preço 'vazio' dos produtos esgotados
            preco = 'Produto Esgotado!';
        }

        dados = {quando, farmacia, nome, preco, urlproduto}

        console.log(dados);
    })
};

let totpgpai = 14;
let count = 1;

async function main() {
    while(count <= totpgpai) {
        const urlfilho = `https://www.drogariaspacheco.com.br/buscapagina?fq=C%3a%2f800%2f&fq=specificationFilter_146%3aAnti-inflamatórios&PS=48&sl=bb3695b9-ec9e-49c5-9e6a-715118583877&cc=48&sm=0&PageNumber=${count}`;
        //console.log(urlfilho);
        await scrap(urlfilho)
        count ++ 
    }
};

main();