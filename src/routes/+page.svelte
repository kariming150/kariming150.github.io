<script lang="ts">
    import { onMount } from "svelte";
    export let data;

    /** get teaser image from portfolio entry*/
    function getTeaserImage(entry) {
        console.log(entry.teaser)
        return entry.teaser;
    }

    // One for each folder in `routes/portfolio`
    $: CADwork = data.portfolio.filter((p) => p.TYPE.toLowerCase() == "cad");
    $: artwork = data.portfolio.filter((p) => p.TYPE.toLowerCase() == "artwork");
    $: photography = data.portfolio.filter((p) => p.TYPE.toLowerCase() == "photography");

    onMount(() => {
        console.log(CADwork)
        console.log(data)

    });
</script>

<svelte:head>
    <title>Karissa Hoover</title>
</svelte:head>

<base target="_blank" />

<div class="mb-12 mt-8 flex flex-col">
    <div class="">
        <h1
            class="text-3xl font-semibold mb-2 border-b-4 max-w-fit border-blue-400"
        >
            Karissa Hoover
        </h1>
        <h2 class="text-xl">Biomedical Engineer &amp; Artist</h2>
        <h2 class="text-xl text-gray-400 mb-2">
            I paint. I draw. I build. I dream.
            Merging a passion for art and practical engineering to solve problems and stuffs. yay
        </h2>
        <p class="text-3xl italic text-blue-500 ml-10">A portfolio of my (mostly personal) projects. </p>

    </div>
</div>

{#if CADwork}
    <h2 class="text-2xl font-bold mb-2">CAD</h2>

    <div class="flex flex-col gap-y-4 md:flex md:flex-wrap">
        {#each CADwork as p}
            <div class="front-card max-w-[400px] hover:bg-gray-100 p-4 rounded-sm">
                <a href={p.SLUG} class="hover:cursor-pointer w-fit" >
                    <div class="entry-card">
                        <img src={getTeaserImage(p)} alt="teaser" />
                        <h3 class="font-semibold text-xl">{p.title}</h3>
                        <p class="text-gray-500 leading-5">{p.description}</p>
                    </div>
                </a>
            </div>
        {/each}
    </div>
{/if}

<style lang="postcss">
    /* .news-list :global(a) {
        border-bottom: 2px solid rgba(96, 165, 250, 0.631);
    }

    a {
        border-bottom: 2px solid rgba(96, 165, 250, 0.631);
    }

    no-border {
        border: 0px !important;
    }

    .me {
        @apply font-bold;
    }

    .news-grid {
        display: grid;
        grid-template-columns: max-content auto;
    }

    .left-gutter {
        @apply col-start-1 col-end-3;
    }

    .right-gutter {
        @apply col-start-11 col-end-13;
    }

    .main-col {
        @apply col-start-3 col-end-11;
    }

    .full-col {
        @apply col-start-1 col-end-13;
    } */
</style>
