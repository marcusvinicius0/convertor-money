const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const convertValues = async () => {
    const inputReais = document.getElementById("value").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("curreny-value-text")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    // const bitcoin = data.BTCBRL.bid

    console.log(data)
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    // if (select.value === "₿ Bitcoin") {
    //     currencyValueText.innerHTML = "0"
    //     currencyValueText.innerHTML = inputReais / bitcoin
    // }
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/usa.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.svg"
    }

    // if (select.value === '₿ Bitcoin') {
    //     currencyName.innerHTML = "Bitcoin"
    //     currencyImage.src = "./assets/btc.png"
    // }

    convertValues() // CADA VEZ QUE EU SELECIONAR ALGUMA MOEDA, CONVERTE AUTOMATICO, SEM PRECISAR CLICAR NO BUTTON
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)