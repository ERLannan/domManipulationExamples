var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function(){
        toggleClass(this, "green");
    });
    
    lis[i].addEventListener("mouseout", function(){
        toggleClass(this, "green");   
    });

    lis[i].addEventListener("click", function(){
        toggleClass(this, "done");
    });
}

function toggleClass(obj, className) {
    obj.classList.toggle(className);
}