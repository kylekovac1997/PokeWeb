import pokemonClickedSound from "../sound/PokemonButton.mp3";

function ClickedSound() {
  const sound = new Audio(pokemonClickedSound);

  return sound.play();
}

export default ClickedSound;
