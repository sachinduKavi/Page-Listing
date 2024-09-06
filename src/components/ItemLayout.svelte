<script>
    export let productList = []
    console.log(productList)

  import { onMount } from "svelte";
  import Item from "./Item.svelte";

  

    let singleWidth
    onMount(() => {
        const itemLayout = document.getElementById('item-layout')
        singleWidth = (itemLayout.clientWidth/3) -25;

        console.log(itemLayout.clientWidth, singleWidth)
    })
    
    
</script>


<div id="item-layout" >
    <div class="row">
        {#each productList as product}
        
            return (<Item {singleWidth} {product}/>)
        {/each}

        
        
       
    </div>
    
</div>


<style>
    #item-layout {
        display: flex;
        flex-direction: column;
        flex: 1 1 0;
    }

    #item-layout .row {
        display: flex;
        margin-top: 10px;
        flex-direction: row;
    }
</style>