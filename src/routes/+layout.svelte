<script>
	import Header from "../lib/Header.svelte";
	import "./app.css";
</script>

<svelte:head>
	<script src="//code.iconify.design/1/1.0.6/iconify.min.js"></script>
</svelte:head>

<main class="px-4 max-w-[968px] mx-auto">
	<Header />

	<div class="w-[90%] mx-auto">
		<slot />
	</div>
</main>

<style lang="postcss">

</style>
