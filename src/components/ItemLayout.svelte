<script>
    export let productList = []
    console.log(productList, productList.length)

  import { onMount } from "svelte";
  import Item from "./Item.svelte";

  

    let singleWidth
    onMount(() => {
        const itemLayout = document.getElementById('item-layout')
        singleWidth = (itemLayout.clientWidth/4) -25;

        console.log(itemLayout.clientWidth, singleWidth)
    })
    
    
</script>


<div id="item-layout" >
    
    <div class="row">
    {#each productList as product}
        
        
            <Item {singleWidth} {product} />
        
    {/each}

    </div>

        
        
    
</div>


<style>
    #item-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(singleWidth, 1fr));
        gap: 10px;
        flex: 1 1 0;
        max-width: 79%;
        overflow-y: scroll;
        background-color: inherit;
    }

    #item-layout .row {
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        max-width: calc(100%);
        overflow-y: hidden;
        flex-wrap: wrap;
    }
</style>