var slide = document.querySelector('.slide');
var select = document.querySelector('.select');
var first_level = document.querySelectorAll('li.first-level');
var two_level = document.querySelectorAll('.two-level');
var thrid_level = document.querySelectorAll('.thrid-level');

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

function rozwin(event){
    event.stopPropagation();
    var row = document.querySelector("#"+this.id+" div p");
    row.classList.toggle('more');
    var c = this.lastElementChild; 
    if(c.nodeName == "UL"){
        c.classList.toggle('hidden');
        heigher_node = this.id;
    }
    if(c = document.querySelector("#"+this.id+" div img"))
        c.classList.toggle("arrow");
    else if(c = document.querySelector("#"+this.id+" div input")){
        all = document.querySelector("#wszystkie")
        if(c.id == "wszystkie"){
            c = document.querySelectorAll("#"+heigher_node+" input");

            if(all.checked)
                all.checked = false;
            else 
                all.checked = true;

            for(i=1;i<c.length;i++){
                if(all.checked){
                    if(!c[i].checked){
                        c[i].previousElementSibling.classList.toggle("more");
                        c[i].checked = true;
                    }
                }
                else{
                    c[i].checked = false;
                    c[i].previousElementSibling.classList.toggle("more");;
                }
            }

        }
        else if(c.checked){
            c.checked = false;
            all.checked = false;
            if(all.previousElementSibling.classList.contains("more"))
                all.previousElementSibling.classList.toggle('more');
        }
        else
            c.checked = true
    }
}

slide.onclick = change;
for(i=0;i<first_level.length;i++){
    first_level[i].onclick = rozwin;
}

for(i=0;i<two_level.length;i++){
    two_level[i].onclick = rozwin;
}

for(i=0;i<thrid_level.length;i++){
    thrid_level[i].onclick = rozwin;
}