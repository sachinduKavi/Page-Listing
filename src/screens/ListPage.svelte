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
    let legendaryProducts = []
    let gridState = true // Grid state variable


    const loadProducts = async () => {
        const response = await getProductList()
        categoryList = response.data.products.map(element => {
            return element.category
        })
        categoryList = [...new Set(categoryList)]
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

            legendaryProducts = productList

        }
    }

    // Toggle between grid and list layouts
    const toggleGridState = (state) => {
        gridState = state
    }

    // Category filtering 
    const filterCategory = (e) => {
        const categories = new Set(e.detail);
        productList = legendaryProducts.filter(product => categories.has(product.category));
        console.log('product list', productList)
    }

    

    onMount(() => {
        loadProducts()
    })
    
</script>


<div class="page-border list-page">
    <TopBar userName="Sachindu Kavishka"/>

    <Search {toggleGridState} {gridState}/>


    <div class='content-layout'>
        <Filter {categoryList} on:filterCategory={filterCategory}/>

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