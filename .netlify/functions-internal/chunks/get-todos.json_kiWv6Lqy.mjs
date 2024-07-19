import { MongoClient } from 'mongodb';

async function initDatabase() {
  const mongoClient = await MongoClient.connect("mongodb+srv://prayagtushar:activityseeker007@activityseek.fa4pjqa.mongodb.net/", {
    appName: "activityseek"
  });
  return mongoClient;
}
async function GET({ params, request }) {
  const mongo = await initDatabase();
  const todos = mongo.db("activityseek").collection("todos");
  const todosNotFlagged = await todos.find({ flagged: false }).sort({ date_created: -1 }).toArray();
  return new Response(
    JSON.stringify({
      todos: todosNotFlagged
    })
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { GET as G, _page as _ };
