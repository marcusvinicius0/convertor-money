const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.6
const euro = 6.3
const iene = 20.240
const renminbi = 0.89
const bitcoin = 265000

const convertValues = () => {
    const inputReais = document.getElementById("value").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("curreny-value-text")

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

    if (select.value === "¥ Iene") {
        currencyValueText.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputReais / iene)
    }

    if (select.value === "元 Renminbi") {
        currencyValueText.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputReais / renminbi)
    }

    if (select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = "0"
        currencyValueText.innerHTML = inputReais / bitcoin
    }
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

    if (select.value === '¥ Iene') {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/japao.png"
    }

    if (select.value === '元 Renminbi') {
        currencyName.innerHTML = "Renminbi"
        currencyImage.src = "./assets/china.png"
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/btc.png"
    }

    convertValues() // CADA VEZ QUE EU SELECIONAR ALGUMA MOEDA, CONVERTE AUTOMATICO, SEM PRECISAR CLICAR NO BUTTON
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)