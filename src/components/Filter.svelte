<script>
    import {createEventDispatcher, onMount} from 'svelte'
    const dispatch = createEventDispatcher()

    export let categoryList, productList = []
    let maxValue = 0, range = 0
    let categoryStatus = []
    
    productList.forEach(element => {
        if(element.price > maxValue) maxValue = element.price
    })
    range = maxValue


    const checkChange = () => {
        if(categoryStatus.length <= 0) {
            dispatch('filterCategory', categoryList)
        } else {
            dispatch('filterCategory', categoryStatus)
        }
        
    }
</script>



<!-- svelte-ignore non-top-level-reactive-declaration -->
<!-- svelte-ignore non-top-level-reactive-declaration -->
<div class="filter-outline">
    <h2>Filter By</h2>


    <hr width="100%">

    <h3>Category</h3>
        <ul type='none' class="list">
            {#each categoryList as category}
            <li><input type="checkbox" value={category} bind:group={categoryStatus} on:change={checkChange}> {category.charAt(0).toUpperCase() + category.slice(1)}</li>
            {/each}
            
        </ul>

        <h3>Price Range ${range.toFixed(2)}</h3>
        <input type="range" class="price-range"  min="0" bind:value={range} max={maxValue} on:change={(e) => {
            dispatch('filterPrice', e.target.value)
        }}>
</div>


<style>

    .price-range {
        width: 100%;
    }
    h3 {
        margin-top: 15px;
    }

    .list {
        display: flex;
        flex-direction: column;
        align-items:flex-start;

    }

    hr {
        margin: 15px 0;
        border:2px solid rgba(187, 187, 187, 0.466);
    }

    .filter-outline {
        width: 20%;
        height: fit-content;
        padding: 20px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
    }
</style>