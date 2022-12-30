const button = document.getElementById("convert-button")
const select = document.getElementById("select")



const ConvertValues = async () => {
    const inputReal = document.getElementById("input-real").value 
    const realText = document.getElementById("real-text")
    const currencyValueText = document.getElementById("currency-value-text")



    const data = await fetch ( "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then (response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realText.innerHTML = new Intl.NumberFormat("pt-BR", {
               style:"currency",
               currency:"BRL"
            }).format(inputReal)

     
    
   
        
    if (select.value === "US$ Dólar americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD",
           }).format(inputReal/dolar) 
        
    }

    if (select.value=== "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR",
           }).format(inputReal/euro)
         
    }
    
    
    if (select.value=== "Bitcoin"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"decimal",
            currency:"BTC",
           }).format(inputReal/bitcoin)
        
    }

    }
    


changeCurrency = () =>{
    const currencyName = document.getElementById("currency-name")
    const img = document.getElementById("currency-img")

    if (select.value === "€ Euro" ){
        currencyName.innerHTML = "Euro"
        img.src="./assets/euro.png"
        
    }

    if (select.value === "US$ Dólar americano" ){
        currencyName.innerHTML = "Dólar Americano"
        img.src="./assets/eua.png"
    }

    if (select.value === "€ Euro" ){
        currencyName.innerHTML = "Euro"
        img.src="./assets/euro.png"
    }

    if (select.value === "Bitcoin" ){
        currencyName.innerHTML = "Bitcoin"
        img.src="./assets/bitcoin.png"
    }

    ConvertValues()
    
    
}





button.addEventListener("click", ConvertValues)
select.addEventListener("change", changeCurrency)