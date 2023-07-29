import pokemonClickedSound from "../sound/PokemonButton.mp3";

function ClickedSound() {
  const sound = new Audio(pokemonClickedSound);

  return sound.play();
}

export default ClickedSound;

// async function ClickedSound() {
//   try {
//     const soundModule = await import("../sound/PokemonButton.mp3");
//     const sound = new Audio(soundModule.default);
//     sound.play();
//   } catch (error) {
//     console.log("Error loading sound:", error);
//   }
// }
// export default ClickedSound;
