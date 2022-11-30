<script context="module">
	/**@type {import('@sveltejs/kit').Load}*/
	export function load(error) {
		return { message: ' error signing in!' };
	}
</script>

<script>
	/** @type string */
	export let message;
</script>

<h1>Oh Snap!!</h1>

<p>Something went wrong! {message}</p>
