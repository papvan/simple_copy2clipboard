const copyButtonImg = "./icons/copy-icon.png"

document.addEventListener('DOMContentLoaded', function(){
    let blocks = document.querySelectorAll(".copy2clipboard");
    blocks.forEach((block) => {
        if (navigator.clipboard) {

            let button = document.createElement("div");
            button.className = "copy2clipboard-btn";
            button.innerText = "";
            button.addEventListener("click", copyCode);

            let image = document.createElement('i');
            image.className = 'copy2clipboard-icon-copy'
            let icon = document.createElement('span');
            // icon.src = copyButtonImg;
            icon.className = "copy2clipboard-icon";
            icon.appendChild(image);


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