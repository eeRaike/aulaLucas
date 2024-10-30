const imgPokemon = document.querySelector("#imgPokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const numeroPokemon  = document.querySelector("#idPokemon");
const inputText = document.querySelector("#inputText");
const form = document.querySelector(".form-busca")
const buttonA = document.querySelector("#btnPrevious")
const buttonB = document.querySelector("#btnNext")


let idPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.com/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;

}