import mongoose from "mongoose";

const PokemonData = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name required."],
	},
	weight: {
		type: Number,
		required: [true, "Height required."],
	},
	height: {
		type: Number,
		required: [true, "Height required."],
	},
});

export default mongoose.model("User", PokemonData, "prac3_users");
