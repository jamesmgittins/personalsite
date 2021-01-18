<script lang="ts">
    import type { PortfolioEntry } from "./portfolio";
    export let item : PortfolioEntry;
</script>

<div class="item">
    <div class="panel">
        <h5>{item.title}</h5>
        <p>{item.description}</p>
    </div>
    <div class="links">
        {#each item.links as link}
            <a href={link.url} class:primary={link.primary} target="_blank">{link.text}</a>
        {/each}
    </div>
</div>

<style>
    div.item {
        background-color: #eee;
        width: 80%;
        padding: 1rem 2rem 2rem;
        margin: 1rem auto;
        /* box-shadow: 5px 5px 9px #ddd, -5px -5px 9px #ffffff; */
        color:#222;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
    }
    div.item > .panel > h5 {
        font-size : 2rem;
        margin: 0;
    }
    div.links {
        margin-top: auto;
    }
    div.links > a {
        margin:0.5rem 1rem 0 0;
        padding:0.5rem;
        box-shadow: 4px 4px 8px #ddd, -4px -4px 8px #fff;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        color:#222;
    }
    div.links > a.primary {
        background-color: #333;
        color:#eee;
    }
    div.links > a:hover {
        background-color: #f5f5f5;
    }
    div.links > a.primary:hover {
        background-color: #222;
    }
</style>