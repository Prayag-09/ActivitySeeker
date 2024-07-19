import { ObjectId, MongoClient } from 'mongodb';
export { renderers } from '../../renderers.mjs';

async function initDatabase() {
  const mongoClient = await MongoClient.connect("mongodb+srv://prayagtushar:activityseeker007@activityseek.fa4pjqa.mongodb.net/", {
    appName: "activityseek"
  });
  return mongoClient;
}
const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const id = body.id;
    const objId = new ObjectId(id);
    const mongo = await initDatabase();
    const result = await mongo.db("activityseek").collection("todos").findOneAndUpdate(
      { _id: objId },
      {
        $set: {
          flagged: true
        }
      },
      { returnDocument: "after" }
    );
    const { flagged } = result;
    return new Response(
      JSON.stringify({
        success: flagged === true
      })
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
