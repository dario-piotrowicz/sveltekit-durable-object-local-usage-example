export interface Env {
	MY_DO: DurableObjectNamespace;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const doId = env.MY_DO.idFromName('my-do-name');

		const doObj = env.MY_DO.get(doId);

		const resp = await doObj.fetch(request.url);

		const txt = await resp.text();

		return new Response(`Response from DO: \n\n\n${txt}`);
	},
};

export class DurableObjectClass {
	constructor() {}

	async fetch() {
	  return new Response("Hello from DurableObject!");
	}
}