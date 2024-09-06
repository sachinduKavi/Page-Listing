<script>
    export let toggleGridState
    export let gridState = false;
    console.log(gridState)
    // import GridIcon from './../assets/icons/grid.png';
    
    let searchKey = ""
    
</script>


<div class="search-container">
    <div class="container">
        
    </div>

    <div class="search-wrapper container">
        <input type="text" bind:value={searchKey} placeholder="Search" id="search-box">
    </div>

   
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="layout-formatter">
           
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="min-con" on:click={() => {toggleGridState(true)}} class:selected={gridState}>
                <img src="./assets/icons/grid.png" alt="load failed">
            </div>
            
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="min-con" on:click={() => {toggleGridState(false)}} class:selected={!gridState}>
                <img src="./assets/icons/lines3.png" alt="load failed">
            </div>
        </div>
  

</div>


<style>
    .layout-formatter {
        display: flex;
        flex-direction: row;
        width: 100px;
        justify-content: space-evenly;
        align-items: center;

    }

    .min-con {
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2px;
    }

    .selected {
        background-color: rgba(219, 219, 219, 0.76);
    }

    .min-con img {
        margin: auto;
    }

    .search-wrapper {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
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