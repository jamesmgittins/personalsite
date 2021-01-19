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
	}
	:global(#canvas-container) {
		height:100% !important;
		position:fixed;
		bottom:0;
		left:0;
		z-index: -10;
	}
	:global(#canvas-container::before, #canvas-container::after) {
		content: "";
		display: block;
		position: absolute;
		background-color: rgb(31, 102, 31);
		width:50%;
		height:100%;
		top:0;
		transition: width 4s ease-in-out;
	}
	:global(#canvas-container::before) {
		left:0;
	}
	:global(#canvas-container::after) {
		right:0;
	}
	:global(#canvas-container.ready::before, #canvas-container.ready::after) {
		width: 0;
	}
</style>