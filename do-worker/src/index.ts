export interface Env {
	MY_DO: DurableObjectNamespace;
	EXAMPLE_KV: KVNamespace;
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
	env;
	constructor(public state: DurableObjectState, env: Env) {
		this.state = state;
		this.env = env;
	}

	async fetch() {
		this.env.EXAMPLE_KV.put("my_key", "Hello back to you");
	  return new Response("Hello from DurableObject!");
	}
}