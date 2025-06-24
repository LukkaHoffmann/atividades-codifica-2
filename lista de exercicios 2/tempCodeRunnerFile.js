const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    const diasPorMes = [31, bissexto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return mes >= 1 && mes <= 12 && dia >= 1 && dia <= diasPorMes[mes - 1];
}

const dia = parseInt(prompt("Digite o dia: "));
const mes = parseInt(prompt("Digite o mês: "));
const ano = parseInt(prompt("Digite o ano: "));

console.log(ehDataValida(dia, mes, ano) ? "✅ Data válida" : "❌ Data inválida");