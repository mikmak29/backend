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

export const updateData = async (req, res, next) => {
	try {
		const updateData = await pokemonData.updateData(req.params.id, req.body, { new: true });

		res.status(201).json({
			message: "Data updated",
			data: updateData,
		});
	} catch (error) {
		next(error);
	}
};

export const deleteData = async (req, res, next) => {
	try {
		const data = req.params.id;
		const deletePokemon = await pokemonData.deleteData(data);

		res.status(201).json({
			message: "Deleted data successfully",
			deletedPokemon: deletePokemon,
		});
	} catch (error) {
		next(error);
	}
};
