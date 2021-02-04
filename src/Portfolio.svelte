<script lang="ts">
    import Item from './Item.svelte';
    import {portfolio} from './portfolio';
</script>

<h1>Projects</h1>
<div>
 {#each portfolio as item}
     <Item {item}/>
 {/each}
</div>

<style>
    div {
        display:grid;
        grid-template-columns: repeat(2, 50%);
        margin: 0 2rem 10rem;
    }
    @media only screen and (max-width: 900px) {
        div {
            grid-template-columns: repeat(1, 100%);
            margin: 0 1rem 10rem;
        }
    }
    @media only screen and (min-width: 1500px) {
        div {
            max-width: 1300px;
            margin: 0 auto 10rem;
        }
    }
    h1 {
        font-size: 4rem;
        color:#ccc;
        font-weight: 400;
        text-align: center;
    }
</style>