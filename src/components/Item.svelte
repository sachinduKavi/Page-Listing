<script>
    export let singleWidth = 200, product 

</script>


<div class="single-item-layout" style="width: {singleWidth + "px"}">
    <div class="image-wrapper">
        <img src={product.image} alt="">
    </div>

    <div class="details">
        <h2>${product.price}</h2>
        <h3>{product.title}</h3>
    </div>

    <button class="cart">ADD CART</button>
    
</div>


<style>

    .cart {
        margin: 10px;
        padding: 10px 15px;
        border-radius: 5px;
        border: 0;
        max-width: fit-content;
        font-weight: bold;
        color: white;
        background-color: #FEA724;
        align-self: flex-end;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 10px;
        flex: 1 1 0;
    }

    .details h3 {
        color: #767676;
        text-align: left;
    }
    .single-item-layout {
        aspect-ratio: 10/12;
        margin-left: 18px;
        margin-top: 10px;
        border-radius: 10px;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 5px;
        display: flex;
        cursor: pointer;
        flex-direction: column;
    }

    .single-item-layout:hover {
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.082);
        transition: box-shadow 0.3s;
    }

    .image-wrapper {
        width: 100%;
        max-width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
    }

    .single-item-layout img {
        max-height: 100%;
    }
</style>