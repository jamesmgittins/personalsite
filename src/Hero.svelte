<script lang="ts">
    import {fly} from 'svelte/transition';
    import { sineInOut } from 'svelte/easing';
    let visible = false;
    setTimeout(() => visible = true, 200);

</script>


<div class="hero">
    <div class="table-cell">
        {#if visible}
            <h1 in:fly={{x: -1000, duration : 3000, easing: sineInOut}}>James Gittins</h1>
            <h2 in:fly={{x: 1000, duration : 3000, easing: sineInOut}}>Software Developer</h2>
        {/if}
    </div>
</div>


<style>
    .hero {width:100%;height:100vh;overflow:hidden;margin-bottom:25px;position:relative;display:table;font-weight:400;}
    .hero > .table-cell {display:table-cell;vertical-align:middle;text-align:center;padding:25px;}
    .hero > .table-cell > h1 {font-size:5rem; margin-top: 0;}
    .hero > .table-cell > h2 {font-size:2rem;}
    .hero h1, .hero h2 {color:#ccc;font-weight: 400;}
</style>