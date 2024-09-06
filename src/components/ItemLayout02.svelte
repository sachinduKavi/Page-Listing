<script>
    export let productList = []

    import Item02 from "./Item02.svelte";
</script>


<div class='layout02'>
    {#each productList as product}
        <Item02 {product}/>
    {/each}
</div>


<style>
    .layout02 {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex: 1 1 0;
    }

</style>