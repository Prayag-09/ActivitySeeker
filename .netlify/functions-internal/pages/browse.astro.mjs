import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Bvlzwaks.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BM6I33to.mjs';
import { G as GET } from '../chunks/get-todos.json_kiWv6Lqy.mjs';
import { T as ToDos } from '../chunks/ToDos_BE3VMdPQ.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Browse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Browse;
  const response = await GET(Astro2);
  const data = await response.json();
  const { url } = Astro2;
  const success = url.searchParams.get("success");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Browse Something ToDo", "description": "Browse ToDos that other people want you to do.", "data-astro-cid-ynzk3njx": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main data-astro-cid-ynzk3njx> ${success && renderTemplate`<p data-astro-cid-ynzk3njx>Congrats! Your ToDo will be done by somebody else.</p>`} <div data-signed-in data-astro-cid-ynzk3njx> <h1 data-astro-cid-ynzk3njx>Browse Something ToDo</h1> <p data-astro-cid-ynzk3njx>Click it, if you did it!</p> <a href="/add" class="add" data-astro-cid-ynzk3njx>Add a ToDo</a> ${renderComponent($$result2, "ToDos", ToDos, { "todos": data.todos, "limit": null, "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/WebDev/Projects/activityseeker/src/components/ToDos.jsx", "client:component-export": "ToDos", "data-astro-cid-ynzk3njx": true })} </div> </main> ` })} `;
}, "E:/WebDev/Projects/activityseeker/src/pages/browse.astro", void 0);

const $$file = "E:/WebDev/Projects/activityseeker/src/pages/browse.astro";
const $$url = "/browse";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Browse,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
