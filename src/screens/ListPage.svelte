<script>
    import { onMount } from 'svelte';

    import TopBar from '../components/TopBar.svelte'
    import Search from '../components/Search.svelte'
    import Filter from '../components/Filter.svelte';
    import ItemLayout from '../components/ItemLayout.svelte';
    import ItemLayout02 from '../components/ItemLayout02.svelte';
    import Footer from '../components/Footer.svelte';

    import {getProductList} from '../queries/listPageQuery.js'
    
    let productList = []
    let categoryList = []
    let legendaryProducts = []
    let gridState = true // Grid state variable
    let maxValue = 0
    let tempCategoryList = []
    let isLoading = true


    const loadProducts = async () => {
        const response = await getProductList()
        categoryList = response.data.products.map(element => {
            return element.category
        })
        categoryList = [...new Set(categoryList)]
        tempCategoryList = categoryList
        if(response.status === 200) {
            productList = response.data.products.map(element => {
                if(maxValue < element.price) maxValue = element.price
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
        isLoading = false
    }

    // Toggle between grid and list layouts
    const toggleGridState = (state) => {
        gridState = state
    }

    // Category filtering 
    const filterCategory = (e) => {
        const categories = new Set(e.detail)
        tempCategoryList = e.details
        productList = legendaryProducts.filter(product => {
            return categories.has(product.category)
        });
       
    }

    // FIlter according to the product price
    const filterPrice = (price) => {
        let tempCat = new Set(tempCategoryList)
        productList = legendaryProducts.filter(element => {
            console.log(element.price <= price.detail && tempCat.has(element.category))
            console.log(price.detail, element.price)
            return element.price <= price.detail && tempCat.has(element.category)
        })
    }
    

    onMount(() => {
        loadProducts()
    })
    
</script>


<div class="page-border list-page">
    <TopBar userName="Sachindu Kavishka"/>

    <Search {toggleGridState} {gridState}/>

    {#if !isLoading}
    <div class='content-layout'>
        <Filter {categoryList} {maxValue} on:filterCategory={filterCategory} on:filterPrice={filterPrice} {productList}/>

        {#if gridState}
        <ItemLayout {productList}/>
        {:else}
        <ItemLayout02 {productList}/>
        {/if}
    </div>
    {/if}

    <Footer/>

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