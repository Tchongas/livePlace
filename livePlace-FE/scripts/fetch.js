let infoArray = null;
async function getData() {
    try {
        console.log("Fetching data...");
        const response = await fetch("http://127.0.0.1:5000/info");
        let infoArray = await response.text(); infoArray = infoArray.split(""); 
        update(infoArray);
    } catch (error) {
        document.getElementsByClassName("error")[0].style.visibility = "visible";
        console.error("Error fetching data:", error);
    }
}