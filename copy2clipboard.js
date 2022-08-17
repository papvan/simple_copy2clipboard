document.addEventListener('DOMContentLoaded', function(){
    let blocks = document.querySelectorAll(".copy2clipboard");
    blocks.forEach((block) => {
        if (navigator.clipboard) {

            let button = document.createElement("div");
            button.className = "copy2clipboard-btn";
            button.innerText = "";
            button.addEventListener("click", copyListener);

            let image = document.createElement('i');
            image.className = 'copy2clipboard-icon-copy'
            let icon = document.createElement('span');
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

async function copyListener(event) {
    const img = event.srcElement;
    const button = img.parentElement;
    const textElement = button.parentElement;
    let tooltip = button.querySelector(".tooltiptext");
    let text = textElement.innerText;

    // await navigator.clipboard.writeText(text);
    let isSuccess = await copyData(text);

    if (isSuccess) {
        tooltip.className = "tooltiptext copied";
        setTimeout(() => {
            let tooltip = document.querySelector(".tooltiptext.copied")
            if (tooltip) {
                tooltip.className = "tooltiptext";
            }
        }, 3000);
    }
}

async function copyData(text) {
    if (navigator.clipboard) {
        return await navigator.clipboard.writeText(text)
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            })
        ;
    } else {
        // if version of browser is too old and don't have a Naviagtor clipboard in WebBrowser API using deprecated execCommand
        let textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        let isSuccess = document.execCommand('copy');

        document.body.removeChild(textArea)
        return isSuccess;
    }
}