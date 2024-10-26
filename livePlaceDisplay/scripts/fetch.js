
let infoArray = null;
async function getData() {
    try {
        const response = await fetch("https://livesketch-back.fly.dev/info");
        let infoArray = await response.text(); infoArray = infoArray.split(""); 
        update(infoArray);
    } catch (error) {
        document.getElementsByClassName("error")[0].style.visibility = "visible";
    }
}