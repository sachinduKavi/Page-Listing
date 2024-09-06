<script>
  export let product;

</script>


<div class="item-02-border">
    <div class="image-wrapper">
        <img src={product.image} alt="">
    </div>

    <div class="product-details">
        <h1>{product.title}</h1>

        <h2 class="price">${product.price}</h2>

        <div class="row">
            <div class="cell">
                <h5>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h5>
            </div>
           
            <div class="cell">
                <h5>Brand: {product.brand}</h5>
            </div>
            
        </div>

        <div class="description">
            <p>{product.description}</p>
        </div>


        <div class="row" style="justify-content: space-evenly;">
            <button>BUY NOW</button>
            <button class='cart'>ADD CART</button>
        </div>
    </div>

    
</div>


<style>
    * {
        font-family: sans-serif;
    }

    .cart {
        background-color: #D8D8D8!important;
        color: #767676 !important;
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .row button {
        min-width: 40%;
        margin: 10px;
        border-radius: 5px;
        border: 0;
        max-width: fit-content;
        font-weight: bold;
        color: white;
        background-color: #FEA724;
        padding: 10px 15px;
    }

    .description p {
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        color: #847c7ccb;
    }
    .cell {
        flex: 1 1 0;
        display: flex;
        flex-direction: row;
    }
    .row {
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .product-details {
        flex: 1 1 0;  
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: flex-start;
        flex-direction: column;
    }

    .price {
        color: #FEA724;
        font-size: 30px;
    }

    .product-details h1 {
        margin-bottom: 10px;
        font-weight: lighter;
        
    }

    .item-02-border {
        width: 100%;
        height: 350px;
        background-color: white;
        max-width: 1200px;
        cursor: pointer;
        margin: 10px;
        display: flex;
        flex-direction: row;
        padding: 2%;
    }

    .item-02-border:hover {
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.082);
        transition: box-shadow 0.3s;
    }

    .item-02-border .image-wrapper {
        max-height: 100%;
        aspect-ratio: 1;
        max-width: 100%;
        margin-right: 50px;
        overflow: hidden;
        display: grid;
        
    }

    .item-02-border img {
        max-height: 100%;
        max-width: 100%;
    }
</style>