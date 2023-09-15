window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    /**
     * Retrieves the visit count from the server and updates the count on the website.
     *
     * @return {number} The visit count.
     */

    let count = 30;
    fetch(functionApi).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("count").innerHTML = count;
    }).catch(error => {
        console.log(error);
    });

    return count;

}
