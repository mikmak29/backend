import express from "express";
import { pokemonData } from "../constant/constants.js";

const route = express.Router();

route.get("/", async (req, res, next) => {
	try {
		const fetchedData = await pokemonData();
		console.log(fetchedData);
		res.status(200).send(fetchedData);
	} catch (error) {
		next(error);
	}
});

route.post("/postPokemonName", async (req, res, next) => {
	try {
		const data = req.body.name;
		const sendName = await pokemonData(data);
		res.status(200).send(sendName);
	} catch (error) {
		next(error);
	}
});

export default route;
