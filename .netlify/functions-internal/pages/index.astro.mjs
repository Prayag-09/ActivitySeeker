import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Bvlzwaks.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BM6I33to.mjs';
import { G as GET } from '../chunks/get-todos.json_kiWv6Lqy.mjs';
import { T as ToDos } from '../chunks/ToDos_BE3VMdPQ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await GET(Astro2);
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Find Something ToDo", "description": "Bored? Want to procrastinate but also be productive? Find something ToDo. And suggest tasks for others too.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <p class="bored" data-astro-cid-j7pv25f6>Feeling Bored?</p> <p class="want_to" data-astro-cid-j7pv25f6>Want to procrastinate <span data-astro-cid-j7pv25f6><em data-astro-cid-j7pv25f6>and</em> still be productive?</span></p> <h1 data-astro-cid-j7pv25f6>Find Something ToDo</h1> <h2 data-astro-cid-j7pv25f6>Current Tasks People Are Doing</h2> ${renderComponent($$result2, "ToDos", ToDos, { "todos": data.todos, "limit": "9", "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/WebDev/Projects/activityseeker/src/components/ToDos.jsx", "client:component-export": "ToDos", "data-astro-cid-j7pv25f6": true })} <div class="ctas" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Want to Join the Fun?</h3> <a href="/add" data-astro-cid-j7pv25f6>Add Your ToDo</a> <a href="/browse" data-astro-cid-j7pv25f6>Browse All ToDos</a> </div> </main> ` })} `;
}, "E:/WebDev/Projects/activityseeker/src/pages/index.astro", void 0);

const $$file = "E:/WebDev/Projects/activityseeker/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
