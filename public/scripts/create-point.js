function callApi(endpoint, apiId, apiElement){
    let url = endpoint; //This must be a string
    let Id = apiId;
    let element = apiElement;
    fetch(url)
    .then((res) => {return res.json()})
    .then(states => {
        for(const element of elements){
            stateSelect.innerHTML += `<option value="${Id}">${apiElement}</option>`;
        }
    })
}

function populateUfs(){
    const stateSelect = document.querySelector("select[name=uf");
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    fetch(url)
    .then((res) => {return res.json()})
    .then(states => {
        for(const state of states){
            stateSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }
    });
}

populateUfs();

function getCities(event){
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");
    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
    console.log(event.target.value);

    
    citySelect.innerHTML = "<option value>Seleciona a cidade</option>";
    citySelect.disabled = true;
    fetch(url)
    .then((res) => {return res.json()})
    .then(cities => {

        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
        }
        citySelect.disabled = false;
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


    const itemsToCollect = document.querySelectorAll(".items-grid li")

    for(const item of itemsToCollect){
        item.addEventListener("click", handleSelectedItem);
    }

    const collectedItems = document.querySelector("input[name=items]");
    let selectedItems = [];

    function handleSelectedItem(event){
        const itemLi = event.target;

        //add or remove a class with JS
        itemLi.classList.toggle("selected");

        const itemId = event.target.dataset.id;
        console.log(event.target);

        //Check if there are any selected items
        const alreadySelected = selectedItems.findIndex(item => {
            const itemFound = item === itemId;
            return itemFound;
        });

        //If yes remove from the selection
            if(alreadySelected >= 0){
                const filteredItems = selectedItems.filter(item => {
                    const itemIsDifferent = item != itemId;
                    return itemIsDifferent;
                })
                //console.log(filteredItems);
                selectedItems = filteredItems;
            }

            else{
                selectedItems.push(itemId);
            }

            console.log(selectedItems);
            collectedItems.value = selectedItems;
    }