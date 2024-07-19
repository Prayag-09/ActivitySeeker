import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BveHuwHP.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/netlify-functions.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/add.astro.mjs');
const _page2 = () => import('./pages/api/add-todo.astro.mjs');
const _page3 = () => import('./pages/api/flag-todo.astro.mjs');
const _page4 = () => import('./pages/api/get-todos.json.astro.mjs');
const _page5 = () => import('./pages/api/increment-todo.astro.mjs');
const _page6 = () => import('./pages/browse.astro.mjs');
const _page7 = () => import('./pages/sign-in.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');


const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/add.astro", _page1],
    ["src/pages/api/add-todo.js", _page2],
    ["src/pages/api/flag-todo.js", _page3],
    ["src/pages/api/get-todos.json.js", _page4],
    ["src/pages/api/increment-todo.js", _page5],
    ["src/pages/browse.astro", _page6],
    ["src/pages/sign-in.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware
});
const _args = {};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const handler = _exports['handler'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, pageMap };
