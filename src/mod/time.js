function time() {
    const data = new Date();

    const dia = data.getDate();
    const hora = data.getHours();
    let minuto = data.getMinutes();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    if (minuto < 10) {
        minuto = '0' + minuto;
    }

    const datatime = `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
    return datatime;
}

module.exports = time;