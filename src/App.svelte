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
		background-color: rgb(31, 102, 31);
	}
	:global(#canvas-container) {
		height:100% !important;
		position:fixed;
		overflow: hidden;
		bottom:0;
		left:0;
		z-index: -10;
	}
	:global(#canvas-container::before) {
		content: "";
		display: block;
		position: absolute;
		border:max(100vh, 100vw) solid rgb(31, 102, 31);
  		border-radius:50%;
		top:20%;
		left:50%;
		transform:translate(-50%, -50%);
		width:0;
		height:0;
		transition: all 12s;
	}
	:global(#canvas-container.ready::before) {
		width:max(200vh, 200vw);
  		height:max(200vh, 200vw);
		top:50%;
	}
	:global(#canvas-container.ready.finished::before) {
		content: none;
		display: none;
		width:auto;
  		height:auto;
		position: unset;
		transform: none;
		border: none;
	}
</style>