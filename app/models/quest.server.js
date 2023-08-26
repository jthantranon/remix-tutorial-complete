import { json } from "@remix-run/node";
const { mongodb } = require("~/db.mongo-server");

async function getQuests() {
  let db = await mongodb.db("app");
  let collection = await db.collection("quests");
  let quests = await collection.find({}).toArray();
  return quests;
}

async function getQuestById(id) {
  let db = await mongodb.db("app");
  let collection = await db.collection("quests");
  return await collection.findOne({ id: id });
}

async function createQuest(newQuest) {
  let db = await mongodb.db("app");
  let collection = await db.collection("quests");
  const result = await collection.insertOne(newQuest);
  return result.ops[0];
}

async function updateQuest(id, updatedQuest) {
  let db = await mongodb.db("app");
  let collection = await db.collection("quests");
  const result = await collection.updateOne({ id: id }, { $set: updatedQuest });
  return result.modifiedCount > 0;
}

async function deleteQuest(id) {
  let db = await mongodb.db("app");
  let collection = await db.collection("quests");
  const result = await collection.deleteOne({ id: id });
  return result.deletedCount > 0;
}

module.exports = {
  getQuests,
  getQuestById,
  createQuest,
  updateQuest,
  deleteQuest
};
