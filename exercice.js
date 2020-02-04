
function ip() {
    const ip = fetch('https://api.openweathermap.org/data/2.5/weather?format=json q=ip')

        .then(resultat => resultat.json())
        .then(json => {
            const ip = json.ip
        });

    alert(ip);
}ip();


    function ville() {
        const ville = fetch('api.openweathermap.org/data/2.5/weather?q=country')
            .then(resultat => resultat.json())
            .then(json => {
                const country = json.city
            });

        alert(ville);
    }ville();


    function longLat() {
        const longitudeLatitude = fetch('api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}')
            .then(resultat => resultat.json())
            .then(json => {
                alert(longitudeLatitude);
            });
        alert(lat);
    }longLat() ;


let nomVille=document.getElementById('affichVille');
    function entree(data){
        if(input.value) {
            let entree=input.value;
            nomVille.data.ip();
            nomVille.data.ville();
            nomVille.data.longLat() ;
            nomVille.innerHTML=entree;
    }
    function temperature(data) {

        let temperature=document.getElementById('temperature');
        temperature.data.ip();
        temperature.data.ville();
        temperature.data.longLat() ;
        temperature.innerHTML=temp;
    }

    function temperatureMax(data){
        let temperatureMax=document.getElementById('tempMax');
        temperatureMax.data.ip();
        temperatureMax.data.ville();
        temperatureMax.data.longLat() ;
        temperatureMax.innerHTML=temperatureMax;//chercher comment lA TEMPERATURE MAX  est exprimée dans ma console
    }

    function temperatureMin(data){
        let temperatureMin=document.getElementById('tempMin');
        temperatureMin.data.ip();
        temperatureMin.data.ville();
        temperatureMin.data.longLat() ;
        temperatureMin.innerHTML=temperatureMin;//chercher comment lA TEMPERATURE Min  est exprimée dans ma console
    }

    function pressionAtmospherique(data){
        let  pressionAtmospherique=document.getElementById('PressionAtmospherique');
        pressionAtmospherique.data.ip();
        PressionAtmospherique.data.ville();
        PressionAtmospherique.data.longLat() ;
        PressionAtmospherique.innerHTML=pression_Atmospherique;//chercher comment lA pression_atmosphérique  est exprimée dans ma console
    }

function vitesseVent(data){
    let  vitesseVent=document.getElementById('vitesseVent');
    vitesseVent.data.ip();
    vitesseVent.data.ville();
    vitesseVent.data.longLat();
    vitesseVent.innerHTML=vitesse_du_vent;//chercher comment lA vitesse du vent est exprimée dans ma console
}

function humidite(data){
    let  humidit=document.getElementById('humidite');
        humidit.data.ip();
        humidit.data.ville();
        humidit.data.longLat() ;
        humidit.innerHTML=humidite;//chercher comment l humidite  est exprimée dans ma console
}


        document.getElementById('btn').addEventListener('click', function () {

        entree(data);
        temperature(data);
        temperatureMax(data);
        temperatureMin(data);
        pressionAtmospherique(data);
        vitesseVent(data);
        humidite(data);
    });}
