import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bvlzwaks.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BM6I33to.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Add Something ToDo", "description": "Add your ToDos for somebody else to do.", "data-astro-cid-idr4ht26": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-idr4ht26>  <div data-signed-in data-astro-cid-idr4ht26> <h1 data-astro-cid-idr4ht26>Add Something ToDo</h1> <p data-astro-cid-idr4ht26>Offload those tasks!</p> <form action="/api/add-todo" method="POST" data-astro-cid-idr4ht26> <label for="todo" data-astro-cid-idr4ht26>Your ToDo, make it <em data-astro-cid-idr4ht26>productive!</em></label> <input id="todo" name="todo" type="text" value="" placeholder="Be the best version of yourself" required data-astro-cid-idr4ht26> <p data-warning data-astro-cid-idr4ht26>⚠️ Please don't use bad words!</p> <p data-error data-astro-cid-idr4ht26>Sorry, something went wrong. Please try again.</p> <input type="hidden" name="user_id" value="" data-user-id data-astro-cid-idr4ht26> <button type="submit" data-astro-cid-idr4ht26>Add ToDo</button> </form> <p data-astro-cid-idr4ht26>Fun fact, <em data-astro-cid-idr4ht26>you'll</em> never see <em data-astro-cid-idr4ht26>your</em> ToDo again. It's gone forever. You can relax, now!</p> </div> </main> ` })} `;
}, "E:/WebDev/Projects/activityseeker/src/pages/add.astro", void 0);

const $$file = "E:/WebDev/Projects/activityseeker/src/pages/add.astro";
const $$url = "/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
