/** @type {import('./$types').PageLoad} */
export async function load({ platform }) {

	await platform!.env.EXAMPLE_KV.put("my_key", "Hello");
	const kv_value_before = await platform?.env?.EXAMPLE_KV.get("my_key");

	const myDo = platform!.env.MY_DO;

	const doId = myDo.idFromName('my-do-name');
	const doObj = myDo.get(doId);
	const doResp = await doObj.fetch('http://0.0.0.0');
	const doRespText = await doResp.text();

	const kv_value_after = await platform?.env?.EXAMPLE_KV.get("my_key");


	return {
		text: doRespText,
		kv_value_before,
		kv_value_after
	};
}