document.getElementById("submit").onclick = () => {
    var minPrice = document.getElementById("minprice").value;
    var maxPrice = document.getElementById("maxprice").value;

    fetch(`/api/real-estate-search-results?minprice=${minPrice}&maxprice=${maxPrice}`)
    .then(response => response.json())
    .then(response => buildGraphs(response.posting))
    .catch(err=> console.error(err.stack));
};