<script>
    import { onMount } from 'svelte';

    import TopBar from '../components/TopBar.svelte'
    import Search from '../components/Search.svelte'
    import Filter from '../components/Filter.svelte';
    import ItemLayout from '../components/ItemLayout.svelte';

    import {getProductList} from '../queries/listPageQuery.js'
    
    let productList = []
    let categoryList = []
    const loadProducts = async () => {
        const response = await getProductList()
        console.log(response)
        if(response.status === 200) {
            response.data.products.forEach(element => {
                productList.push({
                    id: element.id,
                    title: element.title,
                    category: element.category,
                    description: element.description,
                    image: element.images[0],
                    brand: element.brand,
                    price: element.price,
                    rating: element.rating
                })
            });

        }
    }

    

    onMount(() => {
        loadProducts()
    })
    
</script>


<div class="page-border list-page">
    <TopBar userName="Sachindu Kavishka"/>

    <Search/>


    <div class='content-layout'>
        <Filter/>

        <ItemLayout {productList}/>
    </div>

</div>


<style>
    .content-layout {
        flex: 1 1 0;
        display: flex;
        flex-direction: row;
    }

    .list-page {
        background-color: #F3F3F3;
    }

</style>