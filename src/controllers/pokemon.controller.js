import * as pokemonData from "../services/pokemon.services.js";

export const fetchData = async (req, res, next) => {
	try {
		const data = await pokemonData.fetchAllData();

		res.status(200).send(data);
	} catch (error) {
		next(error);
	}
};

export const createData = async (req, res, next) => {
	try {
		const pokemonName = req.body.name || req.params.name;

		if (!pokemonName) {
			return res.status(400).json({ error: "Pokemon name is required" });
		}

		const data = await pokemonData.createData(pokemonName);

		res.status(201).json({
			message: "Pokemon data created successfully",
			data: data,
		});
	} catch (error) {
		next(error);
	}
};
