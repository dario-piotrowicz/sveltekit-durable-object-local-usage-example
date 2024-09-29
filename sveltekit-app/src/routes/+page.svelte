<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.text}</h1>
<h2>KV value before Durable Object call is: <code style="color:#bada55">{data.kv_value_before}</code></h2>
<h2>KV value AFTER Durable Object call is: <code style="color:#bada55">{data.kv_value_after}</code></h2>