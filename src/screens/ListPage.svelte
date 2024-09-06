<script>
    import { onMount } from 'svelte';

    import TopBar from '../components/TopBar.svelte'
    import Search from '../components/Search.svelte'
    import Filter from '../components/Filter.svelte';
    import ItemLayout from '../components/ItemLayout.svelte';
    import ItemLayout02 from '../components/ItemLayout02.svelte';

    import {getProductList} from '../queries/listPageQuery.js'
    
    let productList = []
    let categoryList = []
    let gridState = false // Grid state variable


    const loadProducts = async () => {
        const response = await getProductList()
        console.log(response)
        if(response.status === 200) {
            productList = response.data.products.map(element => {
                return {
                    id: element.id,
                    title: element.title,
                    category: element.category,
                    description: element.description,
                    image: element.images[0],
                    brand: element.brand,
                    price: element.price,
                    rating: element.rating
                }
            });

        }
    }


    const toggleGridState = (state) => {
        console.log(state)
        gridState = state
    }

    

    onMount(() => {
        loadProducts()
    })
    
</script>


<div class="page-border list-page">
    <TopBar userName="Sachindu Kavishka"/>

    <Search {toggleGridState} {gridState}/>


    <div class='content-layout'>
        <Filter/>

        {#if gridState}
        <ItemLayout {productList}/>
        {:else}
        <ItemLayout02 {productList}/>
        {/if}
    </div>

</div>


<style>
    .content-layout {
        flex: 1 1 0;
        display: flex;
        flex-direction: row;
        background-color: #F3F3F3;
    }

    .list-page {
        background-color: #F3F3F3;
    }

</style>