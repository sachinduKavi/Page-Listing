<script>
  import { onMount } from "svelte";
  import Item from "./Item.svelte";

    let singleWidth
    onMount(() => {
        const itemLayout = document.getElementById('item-layout')
        singleWidth = (itemLayout.clientWidth/3) -10;

        console.log(itemLayout.clientWidth, singleWidth)
    })
    
    
</script>


<div id="item-layout" >
    <div class="row">
        <Item {singleWidth}/>
        <Item {singleWidth}/>
        <Item {singleWidth}/>
       
    </div>
    
</div>


<style>
    #item-layout {
        display: flex;
        flex-direction: column;
        flex: 1 1 0;
        background-color: red;
    }

    #item-layout .row {
        display: flex;
        flex-direction: row;
    }
</style>