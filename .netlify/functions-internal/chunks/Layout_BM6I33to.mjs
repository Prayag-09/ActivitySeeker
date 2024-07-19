import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_Bvlzwaks.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                       */

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentPath } = Astro2.props;
  return renderTemplate` ${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <span id="data"${addAttribute(currentPath, "data-current-path")} data-astro-cid-3ef6ksr2></span> <span class="logo" role="presentation" title="Plant in pot emoji" data-astro-cid-3ef6ksr2>🪴</span> <nav data-astro-cid-3ef6ksr2> <a href="/"${addAttribute([{ active: currentPath === "/" }], "class:list")} data-astro-cid-3ef6ksr2>Home</a> <a href="/browse"${addAttribute([{ active: currentPath === "/browse" }], "class:list")} data-astro-cid-3ef6ksr2>Browse</a> <a href="/add"${addAttribute([{ active: currentPath === "/add" }], "class:list")} data-astro-cid-3ef6ksr2>Add</a> <div class="header__userButton" id="user-button" data-astro-cid-3ef6ksr2></div> </nav> </header>  `;
}, "E:/WebDev/Projects/activityseeker/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪴</text></svg>"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Young+Serif&display=swap" rel="stylesheet"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- OG base data --><meta property="og:url" content="https://activity-seeker.netlify.app/"><meta property="og:title" content="Find Something ToDo"><meta property="og:description" content="Bored? Want to procrastinate and look productive? Find something ToDo. And tell others what to do."><meta property="og:site_name" content="activity-seeker.netlify.app"><meta property="og:locale" content="en_GB">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "currentPath": pathname })} ${renderSlot($$result, $$slots["default"])} <footer><p>Made by Prayag </p></footer>  </body></html>`;
}, "E:/WebDev/Projects/activityseeker/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
