<script>
    // import tailwind from 'tailwindcss'

    import TopBar from '../components/TopBar.svelte'
    import Search from '../components/Search.svelte'
</script>


<div class="page-border list-page">
    <TopBar userName="Sachindu Kavishka"/>

    <Search/>
</div>


<style>

    .list-page {
        background-color: #F3F3F3;
    }

</style>