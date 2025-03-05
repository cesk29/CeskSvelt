<script>
    export let title;
    export let description;
    export let image;
</script>


<img class="image" src={image} alt=""/>
<h2>{title}</h2>
<p>{description}</p>


<style>
    .image{
        background-color: aqua;
        width: 200px;
    }
</style>