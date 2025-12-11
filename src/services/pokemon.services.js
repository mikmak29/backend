import PokemonData from "../models/PokemonData.js";
import { pokemonData } from "../constant/constants.js";

export const fetchAllData = () => {
	return PokemonData.find();
};

/**
 * Creates Pokemon data by fetching from PokeAPI and mapping to schema
 * @param {string} pokemonName - Name of the Pokemon to fetch
 * @returns {Promise} Created Pokemon document
 *
 * How it works:
 * 1. Calls pokemonData() from constants.js which fetches from PokeAPI
 * 2. PokeAPI returns: { name, weight, height, ...other fields }
 * 3. Maps only name, weight, height to match our schema
 * 4. Creates and saves to database
 */
export const createData = async (pokemonName) => {
	try {
		const apiResponse = await pokemonData(pokemonName);

		const mappedData = {
			name: apiResponse.name, // String - matches schema
			weight: apiResponse.weight, // Number (in hectograms) - matches schema
			height: apiResponse.height, // Number (in decimetres) - matches schema
		};

		const created = new PokemonData(mappedData);

		await created.save();

		return created;
	} catch (error) {
		throw new Error("CREATE: ", error.message);
	}
};

export const deleteData = async (reqId) => {
	try {
		const data = await PokemonData.findByIdAndDelete(reqId);

		return data;
	} catch (error) {
		throw new Error("DELETE: ", error.message);
	}
};
