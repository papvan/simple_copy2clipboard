const copyButtonImg = "icons/copy-icon.png"

document.addEventListener('DOMContentLoaded', function(){
    let blocks = document.querySelectorAll(".copy2clipboard");
    blocks.forEach((block) => {
        if (navigator.clipboard) {

            let button = document.createElement("div");
            button.className = "copy2clipboard-btn";
            button.innerText = "";
            button.addEventListener("click", copyCode);

            let icon = document.createElement('img');
            icon.src = copyButtonImg;
            icon.className = "copy2clipboard-icon";


            let tooltip = document.createElement("span");
            tooltip.className = "tooltiptext";

            button.appendChild(icon);
            button.appendChild(tooltip);

            block.appendChild(button);
        } else {
            alert("Do not support")
        }
    });
});

async function copyCode(event) {
    const img = event.srcElement;
    const button = img.parentElement;
    const textElement = button.parentElement;
    let tooltip = button.querySelector(".tooltiptext");
    let text = textElement.innerText;
    await navigator.clipboard.writeText(text);
    tooltip.className = "tooltiptext copied";
    setTimeout(() => {
        let tooltip = document.querySelector(".tooltiptext.copied")
        if (tooltip) {
            tooltip.className = "tooltiptext";
        }
    }, 3000);
}