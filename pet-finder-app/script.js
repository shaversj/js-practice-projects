let age = ["baby", "young", "adult", "senior"]
let gender = ["male", "female", "unknown"]
let petTypes = ["Dog", "Cat", "Rabbit", "Small & Furry", "Horse", "Bird", "Scales, Fins & Other", "Barnyard"]

let menus = ["ageMenu", "genderMenu", "typeOfPetMenu", "breedMenu", ];
let menuDescriptions = ["Age", "Gender", "Type", "Breed"]

let bodyDiv = document.getElementById("app");
let menuLayout = document.createElement("div");
let ig = document.createElement("div");
ig.id = "image-gallery";
menuLayout.id = "menuLayout";
bodyDiv.appendChild(menuLayout);
bodyDiv.appendChild(ig);

function createDropDownMenus(){
    for(let i = 0; i < menus.length; i++){
        let ml = document.getElementById("menuLayout")

        // Create Label
        let label = document.createElement("label");
        label.setAttribute("for", menus[i]);
        label.innerHTML = menuDescriptions[i];

        // Create Input
        let menu = document.createElement("input");
        menu.type = "list";
        menu.setAttribute("list", menus[i] + "-list")
        menu.id = menus[i];


        // Create Data List
        let dl = document.createElement("datalist");
        dl.id = menus[i] + "-list";




        // Add to DOM
        ml.appendChild(label);
        ml.appendChild(dl);
        ml.appendChild(menu);

    }
}


async function getToken() {
    let key = "";
    let secret = "";

    let response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    if (response.status === 200) {
        return await response.json();
    }

    throw new Error(response.status);
}

async function getAnimals(token){
    let response = await fetch('https://api.petfinder.com/v2/animals?type=dog', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });

    if (response.status === 200) {
        return await response.json();
    }

    throw new Error(response.status);

}


function populateAgeMenu(){
    let ageMenu = document.getElementById('ageMenu-list');
    for(let i = 0; i < age.length; i++){
        ageMenu.innerHTML += '<option value="' + age[i] + '" />';
    }
}

function populateGenerMenu(){
    let genderMenu = document.getElementById('genderMenu-list');
    for(let i = 0; i < gender.length; i++){
        genderMenu.innerHTML += '<option value="' + gender[i] + '" />';
    }
}

function populatePetTypeMenu(){
    let typeMenu = document.getElementById('typeOfPetMenu-list');
    for(let i = 0; i < petTypes.length; i++){
        //console.log(pet);

        typeMenu.innerHTML += '<option value="' + petTypes[i] + '" />';
    }
}

function buildImageGallery(data){
    console.log(data["animals"][0])
    // Image Gallery
    let ig = document.getElementById("image-gallery");

    for(let i = 0; i < data["animals"].length; i++){
        if (Object.keys(data["animals"][i]["photos"]).length === 0){
            continue
        }
        console.log(i, data["animals"][i]);
        let photo_url = data["animals"][i]["photos"][0]["medium"];

        let image = document.createElement("div");
        image.className = "item";
        image.innerHTML += '<img src="' + photo_url + '" />' + '<p>' + data["animals"][i]["description"] + '"</p>';
        ig.appendChild(image);
    }
}

async function main(){

    ig.id = "image-gallery";
    menuLayout.id = "menuLayout";
    bodyDiv.appendChild(menuLayout);
    bodyDiv.appendChild(ig);

    createDropDownMenus();
    populatePetTypeMenu();
    populateAgeMenu();
    populateGenerMenu();

    let result = await getToken();
    let animals = await getAnimals(result["access_token"]);
    buildImageGallery(animals);
}

main().catch(console.log);


// populate dropdown menus
// create list of dogs from list
