// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('btn-search-cep').addEventListener('click', function () {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
//         xhttp.open('GET', endpoint);
//         xhttp.send();
//     });
// });

$(document).ready(function () {
    $('#cep').mask('00000-000');
    $('#btn-search-cep').click(function () {
        const cep = $('#cep').val();
        const edpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const button = $(this);
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        $.ajax(edpoint).done(function (response) {
            console.log(response);
            const logradouro = response.logradouro;
            const bairro = response.bairro;
            const localidade = response.localidade;
            const estado = response.uf;
            const address = `${logradouro}, ${bairro}, ${localidade}, ${estado}`;

            setTimeout(function () {
                $(button).find('i').removeClass('d-none');
                $(button).find('span').addClass('d-none');
                $('#address').val(address);
            }, 1000);
        });
    });
});
