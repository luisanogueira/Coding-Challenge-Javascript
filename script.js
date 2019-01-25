const info = document.getElementById("dataHotel");
const url = "https://switch-dev.seekda.com/properties/DEMO_CODE_01/bookability.json";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(url)
.then((resp) => resp.json())
.then(function(result){
    let dataHotel = result.data;
    let div = createNode('div');
    let days = dataHotel.availabilities[0];

    div.innerHTML = `<p>Languages: <br />${dataHotel.availableLanguages}</p>
    <p>Time Zone: <br />${dataHotel.timeZone}</p>
    <p>Currency: <br />${dataHotel.defaultCurrency}</p>`;

    for(let i=0; i < days.length; i++) {

        if(days[i] == 0) {
            document.getElementById("eachDay").innerHTML = `<td>Not available ${days[i]}</td>`;
        } else {
            document.getElementById("eachDay").innerHTML = `<td>Available ${days[i]}</td>`;
        }
    }
    append(info, div);
    })