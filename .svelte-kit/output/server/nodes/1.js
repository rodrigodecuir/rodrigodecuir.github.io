

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4efe6cf6.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.19b44a2f.js"];
export const stylesheets = [];
export const fonts = [];
