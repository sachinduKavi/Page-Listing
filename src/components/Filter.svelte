<script>
    export let categoryList
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    let categoryStatus = []


    const checkChange = () => {
        if(categoryStatus.length <= 0) {
            dispatch('filterCategory', categoryList)
        } else {
            dispatch('filterCategory', categoryStatus)
        }
        
    }
</script>



<div class="filter-outline">
    <h2>Filter By</h2>


    <hr width="100%">

    <h3>Category</h3>
        <ul type='none' class="list">
            {#each categoryList as category}
            <li><input type="checkbox" value={category} bind:group={categoryStatus} on:change={checkChange}> {category.charAt(0).toUpperCase() + category.slice(1)}</li>
            {/each}
            
        </ul>

        <h3>Price Range</h3>
        <input type="range" class="price-range">
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