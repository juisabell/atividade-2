document.getElementById("lampada").addEventListener("click",function(){
    let img = document.getElementById("lampada");

    if(img.scroll.match("r.JPG")){
        img.src = "Capturar.JPG";
    } else{ 
        img.src = "r.JPG"
    }
})