<script>
    import { onMount } from 'svelte';

    import TopBar from '../components/TopBar.svelte'
    import Search from '../components/Search.svelte'
    import Filter from '../components/Filter.svelte';
    import ItemLayout from '../components/ItemLayout.svelte';

    import {getProductList} from '../queries/listPageQuery.js'
  
    const loadProducts = async () => {
        const response = await getProductList()
        console.log(response)
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

        <ItemLayout/>
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