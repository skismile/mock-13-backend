const { model, Schema } = require("mongoose");

const gameUserSchema = new Schema({
  name: { type: String, required: true },
  difficulty: { type: String, required: true },
  score: { type: Number, required: true },


});

const GameUserModel = model("gameUser", gameUserSchema);

module.exports = GameUserModel;
