<script lang="ts">
	import Hero from './Hero.svelte';
	import Portfolio from './Portfolio.svelte';
</script>

<Hero/>
<Portfolio/>


<style>
	:global(body) {
		font-family: 'Raleway', sans-serif;
		font-size:16px;
		margin:0;
		background-color: darkgreen;
	}
	:global(canvas) {
		height:100% !important;
		position:fixed;
		bottom:0;
		left:0;
		z-index: -10;
	}
	/* :global(html) {
		background-color: #ccc;
	} */
</style>