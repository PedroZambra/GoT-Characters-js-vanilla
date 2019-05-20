const go = document.getElementById("call");
const lannister = document.getElementById("lannister");
const stark = document.getElementById("stark");
const targaryen = document.getElementById("targaryen");
const baratheon = document.getElementById("baratheon");
const greyjoy = document.getElementById("greyjoy");
const martell = document.getElementById("martell");



go.addEventListener('click', function(){house("all")});
lannister.addEventListener('click', function(){house("Lannister")});
stark.addEventListener('click', function(){house("Stark")});
targaryen.addEventListener('click', function(){house("Targaryen")});
baratheon.addEventListener('click', function(){house("Baratheon")});
greyjoy.addEventListener('click', function(){house("Greyjoy")});
martell.addEventListener('click', function(){house("Martell")});

function house(family){
    fetch(`https://raw.githubusercontent.com/jeffreylancaster/game-of-thrones/master/data/characters.json`)
        .then(res => res.json())
        .then( data => {   
            const list = document.getElementById("container");
            list.innerHTML = '';
            
            console.log(family)
            if(family!=='all'){
                for(let x=0;x<data.characters.length;x++){
                    if(data.characters[x].houseName === family){
                        console.log(data.characters[x]); 
                        showCharacters(data, x);
                    }
                }
            }else{
                for(let x=0;x<data.characters.length;x++){
                    showCharacters(data, x);
                }
            }
        }) 
        .catch(err => {console.log('No se ha podido conectar con la API', err)});
}

//CHARACTERS
function showCharacters(data, x){
    document.getElementById("container").innerHTML+= `<div class="character">
                                                        <h2>${data.characters[x].characterName}<h2>
                                                        <img src="${(data.characters[x].characterImageFull) ? data.characters[x].characterImageFull : "img/got.jpg" }" alt="Imagen no disponible" class="imgCharacter">
                                                    </div>`;
}