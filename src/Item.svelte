<script lang="ts">
    import {fly} from 'svelte/transition';
    import { sineInOut } from 'svelte/easing';
    import type { PortfolioEntry } from "./portfolio";
    export let item : PortfolioEntry;

    let currentImage = 0;
    let lastChange = 1;

    let myFly = (node: Element, isIn: boolean) => {
        if (isIn)
            return fly(node, {x : 700 * lastChange, duration : 700, opacity : 1, easing: sineInOut});
        else
            return fly(node, {x : -700 * lastChange, duration : 700, opacity : 1, easing: sineInOut});
    }

    let changeImage = (change : number) => {
        currentImage += change;
        lastChange = change;
        if (currentImage < 0)
            currentImage = item.images.length - 1;
        if (currentImage > item.images.length - 1)
            currentImage = 0;
    };

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
        {#each item.images as image, index}
            {#if index == currentImage}
                <div class="image" style="background-image:url(images/{image})" 
                    in:myFly={true} out:myFly={false}></div>
            {/if}
        {/each}
        {#if item.images.length > 1}
            <a href={"javascript:void(0);"} class="next" on:click={e => changeImage(1)}><span>&gt;</span></a>
            <a href={"javascript:void(0);"} class="prev" on:click={e => changeImage(-1)}><span>&lt;</span></a>
        {/if}
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
    a {
        box-shadow: 4px 4px 8px #ddd, -4px -4px 8px #fff;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        color:#222;
        background-color: #eee;
    }
    div.links > a {
        margin:0 1rem 1rem 0;
        padding:0.5rem;
        display: inline-block;
    }
    div.links > a.primary {
        background-color: #333;
        box-shadow: 4px 4px 8px #bbb, -4px -4px 8px #fff;
        color:#eee;
    }
    a:hover {
        background-color: #f5f5f5;
    }
    a:active {
        box-shadow: inset 4px 4px 8px #bbb;
    }
    div.links > a.primary:active {
        box-shadow: inset 4px 4px 8px #000;
    }
    div.links > a.primary:hover {
        background-color: #222;
    }
    div.images {
        display: grid;
        grid-template-rows: 1;
        grid-template-columns: 1;
        overflow: hidden;
        box-shadow: 4px 4px 8px #bbb, -4px -4px 8px #fff;
        border-radius: 0.5rem;
        position: relative;
    }
    div.images a {
        opacity: 0;
        transition: opacity 0.2s;
        position: absolute;
        top:50%;
        padding: 0.75rem 0.75rem 1rem;
        font-size: 1.5rem;
        box-shadow: 4px 4px 8px #888;
        transform: translateY(-50%);
    }
    div.images a:active {
        box-shadow: inset 4px 4px 8px #bbb;
    }
    div.item:hover div.images a {
        opacity: 1;
    }
    div.images a.prev {
        left:1rem;
    }
    div.images a.next {
        right:1rem;
    }
    div.images div.image {
        grid-row: 1;
        grid-column: 1;
        height:20rem;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>