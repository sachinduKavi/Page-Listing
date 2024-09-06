<script>
  export let product;


</script>


<div class="item-02-border">
    <div class="image-wrapper">
        <img src={product.image} alt="">
    </div>
</div>


<style>
    .item-02-border {
        width: 100%;
        height: 350px;
        background-color: white;
        max-width: 1200px;
        margin: 10px;
        display: flex;
        flex-direction: row;
        padding: 10px;
    }

    .item-02-border .image-wrapper {
        max-height: 100%;
        aspect-ratio: 1;
        max-width: 100%;
        background-color: red;
        margin-right: 50px;
        overflow: hidden;
        display: grid;
        
    }

    .item-02-border img {
        max-height: 100%;
        max-width: 100%;
    }
</style>