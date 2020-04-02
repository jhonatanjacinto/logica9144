// pede números com casa decimal para o usuário
function pegaFloat(mensagem)
{
    return parseFloat(prompt(mensagem).replace(',', '.'))
}

// Pede números inteiros para o usuário
function pegaInt(mensagem)
{
    return parseInt(prompt(mensagem).replace(',', '.'))
}
