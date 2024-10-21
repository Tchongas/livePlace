let infoArray = null;
async function getData() {
    try {
        const response = await fetch("http://127.0.0.1:5000/info");
        let infoArray = await response.text(); infoArray = infoArray.split(""); 
        update(infoArray);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}