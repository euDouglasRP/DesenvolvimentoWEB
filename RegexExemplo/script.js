var cpfInput = document.getElementById("cpf");

document.getElementById("btFormatar").addEventListener("click", function () {
    var cpfValue = cpfInput.value.replace(/[\D.-]/g, '');

    if (/^\d{11}$/.test(cpfValue)) {
        var formattedCPF = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        alert("CPF formatado: " + formattedCPF);
    } else {
        alert("CPF inválido. Insira 11 dígite números.");
    }
});