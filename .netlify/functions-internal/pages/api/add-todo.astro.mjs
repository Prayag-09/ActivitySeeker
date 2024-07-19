import { MongoClient } from 'mongodb';
export { renderers } from '../../renderers.mjs';

async function initDatabase() {
  const mongoClient = await MongoClient.connect("mongodb+srv://prayagtushar:activityseeker007@activityseek.fa4pjqa.mongodb.net/", {
    appName: "ActivitySeek"
  });
  return mongoClient;
}
const POST = async ({ request, redirect }) => {
  const data = await request.formData();
  const user_id = data.get("user_id");
  const todo = data.get("todo");
  const newTodo = {
    description: todo,
    user_id,
    times_done: 0,
    date_created: /* @__PURE__ */ new Date(),
    flagged: false
  };
  const mongo = await initDatabase();
  const todos = mongo.db("activityseek").collection("todos");
  try {
    const response = await todos.insertOne(newTodo);
    if (response.acknowledged === true) {
      return new Response(
        JSON.stringify({
          success: true
        }),
        {
          status: 201,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: false
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error inserting todo:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal Server Error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } finally {
    mongo.close();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
