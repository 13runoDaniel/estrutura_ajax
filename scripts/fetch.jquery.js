$(document).ready(function () {
    $('#cep').mask('00000-000');

    $('#btn-search-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const button = $(this);

        $(button).find('i').addClass('d-none');
        $(button).find('span').removeClass('d-none');

        fetch(endpoint)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (json) {
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const localidade = json.localidade;
                const estado = json.uf;
                const address = `${logradouro}, ${bairro}, ${localidade}, ${estado}`;

                setTimeout(function () {
                    $('#address').val(address);
                }, 1300);
            })
            .catch(function (error) {
                alert('Ocorreu um erro ao buscar o endereço, tente novamente mais tarde');
            })
            .finally(function () {
                setTimeout(function () {
                    $(button).find('i').removeClass('d-none');
                    $(button).find('span').addClass('d-none');
                }, 1000);
            });
    });

    $('#order-form').submit(function (event) {
        event.preventDefault();
        if ($('#name').val().length == 0) {
            throw new Error('Informe o seu nome');
        }
    });
});
