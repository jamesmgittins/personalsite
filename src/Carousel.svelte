<script lang="ts">
    import {fly} from 'svelte/transition';
    import { sineInOut } from 'svelte/easing';

    export let images : string[];
    export let hovered : boolean;

    let currentImage = 0;
    let lastChange = 1;
    let okayToChange = true;

    let myFly = (node: Element, isIn: boolean) => {
        if (isIn)
            return fly(node, {x : 700 * lastChange, duration : 700, opacity : 1, easing: sineInOut});
        else
            return fly(node, {x : -700 * lastChange, duration : 700, opacity : 1, easing: sineInOut});
    }

    let changeImage = (change : number) => {
        if (!okayToChange)
            return;
        okayToChange = false;
        setTimeout(() => {
            okayToChange = true;
        }, 700);
        currentImage += change;
        lastChange = change;
        if (currentImage < 0)
            currentImage = images.length - 1;
        if (currentImage > images.length - 1)
            currentImage = 0;
    };

</script>

<div class="images">
    {#each images as image, index}
        {#if index == currentImage}
            <div class="image" style="background-image:url(images/{image})" 
                in:myFly={true} out:myFly={false}></div>
        {/if}
    {/each}
    {#if hovered}
        <a href={"javascript:void(0);"} class="next" on:click={e => changeImage(1)} transition:fly="{{ x: 100, duration: 300, easing: sineInOut }}"><span>&gt;</span></a>
        <a href={"javascript:void(0);"} class="prev" on:click={e => changeImage(-1)} transition:fly="{{ x: -100, duration: 300, easing: sineInOut }}"><span>&lt;</span></a>
    {/if}
</div>


<style>
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
        box-shadow: 4px 4px 8px #ddd, -4px -4px 8px #fff;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        color:#222;
        background-color: #eee;
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