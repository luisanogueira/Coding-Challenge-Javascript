const info = document.getElementById("dataHotel");
const eachDay = document.getElementById("eachDay");
const url = "https://switch-dev.seekda.com/properties/DEMO_CODE_01/bookability.json";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function checkAvailability() {
    info.innerHTML = "";
    eachDay.innerHTML = "";
    let calendar = document.getElementById("calendar").value;
    let number = document.getElementById("number").value;
    let language = document.getElementById("language").value;
    
    fetch(url + `?startDate=${calendar}&numberOfDays=${number}`)
    .then(resp => resp.json())
    .then(result => {
        let dataHotel = result.data;
        let description = createNode('div');

       /* description.innerHTML = `<p>Languages: <br />${dataHotel.availableLanguages}</p>
        <p>Time Zone: <br />${dataHotel.timeZone}</p>
        <p>Currency: <br />${dataHotel.defaultCurrency}</p>`; */

        let days = dataHotel.availabilities[0];
        let nextDay = new Date(calendar);

        for(let i=0; i < days.length; i++) {
            let day = createNode('div');

            if(days[i] == 0) {
                day.innerHTML = 
                `<div class="card"><h5 class="card-title">${nextDay.toLocaleDateString(language)}</h5><p>Not available</p></div>`;
            } else {
                day.innerHTML = 
                `<div class="card"><h5 class="card-title">${nextDay.toLocaleDateString(language)}</h5><p>Not available</p></div>`;
            }
            nextDay.setDate(nextDay.getDate() + 1);
            append(eachDay, day);
        }

        append(info, description);
        
        })
}