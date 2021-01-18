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
    {#if item.images.length > 0}
    <div class="images">
        <div class="image" style="background-image:url(images/{item.images[0]})">

        </div>
    </div>
    {/if}
</div>

<style>
    div.item {
        background-color: #eee;
        width: 80%;
        padding: 1rem 2rem 2rem;
        margin: 1rem auto 4rem;
        box-shadow: 4px 4px 8px #333;
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
        margin:0 1rem 1rem 0;
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
        box-shadow: 4px 4px 8px #bbb, -4px -4px 8px #fff;
        color:#eee;
    }
    div.links > a:hover {
        background-color: #f5f5f5;
    }
    div.links > a:active {
        box-shadow: inset 4px 4px 8px #bbb;
    }
    div.links > a.primary:active {
        box-shadow: inset 4px 4px 8px #000;
    }
    div.links > a.primary:hover {
        background-color: #222;
    }
    div.images div.image {
        box-shadow: 4px 4px 8px #bbb, -4px -4px 8px #fff;
        border-radius: 0.5rem;
        height:20rem;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>