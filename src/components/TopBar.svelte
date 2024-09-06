<script>
    export let userName = "Guest user"
</script>


<div class="navigation-bar">
    <div class="container">
        <h1 class="top-heading">SK</h1>
        <h3>Products</h3>
    </div>

    <div class="container">
        <div class="column">
            <h3>Welcome</h3>
            <h4>{userName}</h4>
    
            
        </div>

        <div class="profile">
            <img src="assets/images/user.png" alt="" width="100%">
        </div>
    </div>
    
    
</div>


<style>

    .profile {
        background-color: #D0CCC6;
        height: 50px;
        aspect-ratio: 1;
        border-radius: 100%;
        margin: 0 0 0 30px;
        overflow: hidden;
    }

    .top-heading {
        color: #FEA724;
        
    }

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-height: min-content;
        padding: 5px;
        
        /* background-color: blue; */
    }
    
    

    .column {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    .column h3 {
        padding: 0;
    }

    h4 {
        color: #D0CCC6;
        padding: 0;
    }

    h3 {
        color: #D0CCC6;
        padding: 3px 10px;
        align-self: flex-end;
    }

    .navigation-bar {
        width: 100vw;
        height: fit-content;
        padding: 0 20px;
        background-color: #313131;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

</style>