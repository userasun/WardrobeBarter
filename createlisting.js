'use strict';
var result;

function toast(){
    var notification = document.getElementById('toast');
    
    notification.className = "show";
    setTimeout(function(){ notification.className = notification.className.replace("show", ""); }, 3000);
}

async function checkImage(image) {
    const url = 'https://nsfw-image-classification3.p.rapidapi.com/nsfwjs/check/upload';
    const data = new FormData();
    data.append(image, '');
    
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '1069e46928mshbafb82001b32f42p1ad73fjsn5c834972fd4c',
            'X-RapidAPI-Host': 'nsfw-image-classification3.p.rapidapi.com'
        },
        body: data
    };
    
    try {
        const response = await fetch(url, options);
        result = await response.text();

        if (result=='false'){
            console.log('appropriate picture');
            return false;
        }
        else { 
            console.log('inappropriate picture');
            return true;
        }
    } catch (error) {
        console.error(error);
    }

}


const display = document.querySelector('.addPhotos');
const input = document.querySelectorAll('.file');
var uploaded_img = "";
let elementId;


for(let i = 0; i < input.length; i++){
input[i].addEventListener('change', ()=>{
    let reader = new FileReader();

    reader.addEventListener('load', ()=>{
        uploaded_img = reader.result;
        (async () => {
            let APIresult = await checkImage(uploaded_img);

            if(i == 0){elementId = 'picToastBig'}
            else {elementId = 'picToastSmall'}

            APIresult = false;
            if(!APIresult){
                var notification = document.getElementById(elementId);
                notification.className = "show";
                setTimeout(function(){ notification.className = notification.className.replace("show", ""); }, 3000);
            }
        })();
    });
    reader.readAsDataURL(input[i].files[0]);

});
}


