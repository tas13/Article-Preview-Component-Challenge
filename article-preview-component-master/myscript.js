document.getElementById("share").addEventListener("click", remover)

function remover() {

 document.getElementById("share").src = "images/icon-share2.svg"
 document.getElementById("share").style.backgroundColor= "hsl(214, 17%, 51%)"
 document.getElementById("shareLinks").style.opacity = '1'
}