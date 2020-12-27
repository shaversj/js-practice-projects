
let formElements = document.getElementById("contact-form").elements;
let sendMessageListener = document.getElementById('send-message-button').addEventListener("click", sendEmail)

async function formToJSON(){
    let formToJSON = {};
    for(let i = 0; i < formElements.length; i++){
        let element = formElements[i];
        if(element.type === "button"){
            continue;
        }
        formToJSON[element.name] = element.value;
    }
    return formToJSON;
}

async function postMessage(message){

    let response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    });
}

async function sendEmail(){
    formToJSON().then((message) => postMessage(message));

}



