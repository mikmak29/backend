export const pokemonData = async (pokemonName) => {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		const data = await response.json();

		// console.log(data);
		return data;
	} catch (error) {
		throw new Error({ CONSTANT: error.message });
	}
};
