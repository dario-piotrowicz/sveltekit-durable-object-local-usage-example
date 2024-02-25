/** @type {import('./$types').PageLoad} */
export async function load({ platform }) {

	const myDo = platform!.env.MY_DO;

	const doId = myDo.idFromName('my-do-name');
	const doObj = myDo.get(doId);
	const doResp = await doObj.fetch('http://0.0.0.0');
	const doRespText = await doResp.text();

	return {
		text: doRespText
	};
}