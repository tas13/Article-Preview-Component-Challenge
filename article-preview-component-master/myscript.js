document.getElementById("share").addEventListener("click", remover)

function remover() {
 console.log(document.getElementById("shareLinks").style.display = "")
 document.getElementById("share").src = "images/icon-share2.svg"
 document.getElementById("share").style.backgroundColor= "hsl(214, 17%, 51%)"
}