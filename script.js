var slide = document.querySelector('.slide');
var select = document.querySelector('.select');
var option = document.querySelectorAll('li.first-level');

alert(option);
function change() {
    var bullet = document.querySelector('.bullet');
    if (bullet.classList.contains("bullet-lft")) {
        bullet.classList.replace("bullet-lft", "bullet-rgt");
        select.style.display = "block";
    } else if (bullet.classList.contains("bullet-rgt")) {
        bullet.classList.replace("bullet-rgt", "bullet-lft");
        select.style.display = "none";
    }
}

function rozwin(){
    var row = document.querySelector("#"+this.id+" div p");
    row.classList.toggle('more');
    alert(row);
    //row.style.color = "black";
}

slide.onclick = change;
for(i=0;i<option.length;i++){
    option[i].onclick = rozwin;
}