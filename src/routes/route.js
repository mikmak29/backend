import express from "express";
import { fetchData, createData, deleteData } from "../controllers/pokemon.controller.js";

const route = express.Router();

route.get("/", fetchData);
route.post("/postData", createData);
route.delete("/pokemon/:id", deleteData);

// route.post("/postPokemonName", async (req, res, next) => {
// 	try {
// 		const data = req.body.name;
// 		const sendName = await pokemonData(data);
// 		res.status(200).send(sendName);
// 	} catch (error) {
// 		next(error);
// 	}
// });

export default route;
