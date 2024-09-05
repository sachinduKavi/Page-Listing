<script>
    import GridIcon from '../assets/icons/grid.png';
    
    let searchKey = ""
    
</script>


<div class="search-container">
    <div class="container">
        
    </div>

    <div class="search-wrapper container">
        <input type="text" bind:value={searchKey} placeholder="Search" id="search-box">
    </div>

    <div class="container">
        <div class="layout-formatter">
            <img src={GridIcon} alt="load failed">
        </div>
    </div>

</div>


<style>
    .search-wrapper {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    

    #search-box {
        width: 100%;
        border: 0;
        background-color: #F3F3F3;
        border-radius: 5px;
        padding: 10px;
        margin: auto;
    }

    #search-box:focus-visible {
        outline: 0;
    }

    .search-container {
        width: 100vw;
        margin-bottom: 5px;
        height: 50px;
        background-color: white;
        box-shadow: 0 2px 5px 1px rgba(58, 58, 58, 0.171);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

</style>