import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bvlzwaks.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BM6I33to.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$SignIn = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in to Find Something ToDo", "description": "Sign in to add ToDos, complete ToDos, and feel productive.", "data-astro-cid-4d26bl7g": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main data-astro-cid-4d26bl7g> <h1 data-astro-cid-4d26bl7g>Sign in</h1> <p data-astro-cid-4d26bl7g>Add ToDos, complete ToDos, <span data-astro-cid-4d26bl7g>feel productive</span>.</p> <div id="sign-in" data-astro-cid-4d26bl7g></div> </main> ` })}  `;
}, "E:/WebDev/Projects/activityseeker/src/pages/sign-in.astro", void 0);

const $$file = "E:/WebDev/Projects/activityseeker/src/pages/sign-in.astro";
const $$url = "/sign-in";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SignIn,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
