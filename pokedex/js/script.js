const imgPokemon = document.querySelector("#imgPokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const numeroPokemon  = document.querySelector("#idPokemon");
const inputText = document.querySelector("#inputText");
const form = document.querySelector("#form-busca")
const buttonPrev = document.querySelector("#btnPrevious")
const buttonNext = document.querySelector("#btnNext")
const typePokemon = document.querySelector("#typePokemon")
const weightPokemon = document.querySelector("#weightPokemon")
const heightPokemon = document.querySelector("#heightPokemon")
const cryAudio = document.querySelector("#cry_audio")
const background = document.querySelector("#backgroundimage")
const backgroundMusic = document.querySelector("#backgroundmusic")

let idPokemon = 1;
let bgnum = false;

const fetchPokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;

}



const showPokemon = async (pokemon) => {

    bgnum = true;

    if (pokemon === "missingno." || pokemon < 1) {
        console.log("teste");

        idPokemon = "???"
        numeroPokemon.innerHTML = idPokemon
        nomePokemon.innerHTML = "MissingNo."
        imgPokemon.src = "imgs/Missingno_image.webp"
        background.src = "imgs/lavender.gif"
        cryAudio.src = "audio/missignoCry.ogg"
        backgroundMusic.src = "audio/lavender-town.ogg"
        
        
        const typeText = document.getElementById(`type0`)
        typeText.textContent = " "
        for (let i = 0; i < 3; i++) {
        
                const text = document.getElementById(`type${i}`)
                console.log(i);
                text.textContent = "a "
            
            
            
        }
        const text = document.getElementById("heightPoke");
        text.textContent = " "
    
        const text1 = document.getElementById("weightPoke");
        text1.textContent = " "
    
        
    
        cryAudio.play();
    
    
        
    } else {
        const pokemonData = await fetchPokemon(pokemon)
    idPokemon = pokemonData.id
    numeroPokemon.innerHTML = idPokemon
    nomePokemon.innerHTML = pokemonData.name
    imgPokemon.src = pokemonData.sprites.front_default //.versions['generation-v']['black-white'].animated.
    background.src = "imgs/d9spuwer2c491.webp"
    cryAudio.src = pokemonData.cries.latest
    for (let i = 0; i < pokemonData.types.length; i++) {
        if (pokemonData.types.length < 2) {
            const text = document.getElementById(`type0`)
            const text1 = document.getElementById(`type1`)
            console.log(i + "é menor que 2");
            text.textContent = " " + pokemonData.types[i].type.name
            text1.textContent = " " 
        }else {
            const text = document.getElementById(`type${i}`)
            console.log(i);
            text.textContent = " " + pokemonData.types[i].type.name 

        }
        
        
    }
    const text = document.getElementById("heightPoke");
    const alturaConvert = pokemonData.height / 10
    text.textContent = " " + alturaConvert + "m"
    heightPokemon.appendChild(text)

    const text1 = document.getElementById("weightPoke");
    const pesoConvert = pokemonData.weight / 10
    text1.textContent = " " + pesoConvert + "kg"
    weightPokemon.appendChild(text1)

    

    cryAudio.play();

    }

    
}


inputText.addEventListener('input', () => 
    idPokemon = toString(inputText.value)
)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    showPokemon(inputText.value.toLowerCase());

})

buttonPrev.addEventListener('click' , () => {

    idPokemon --;
    showPokemon(idPokemon);


})

buttonNext.addEventListener('click' , () => {

    idPokemon ++;
    showPokemon(idPokemon);


})


showPokemon(idPokemon);




