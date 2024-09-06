<script>
    export let singleWidth = 200, product 
    console.log(product)

</script>


<div class="single-item-layout" style="width: {singleWidth + "px"}">
    <img src={product.image} alt="">
</div>


<style>
    .single-item-layout {
        height: 300px;
        margin-left: 18px;
        border-radius: 10px;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
</style>