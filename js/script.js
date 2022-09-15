const menu = document.querySelector(".bars-container");
const menu_items = document.querySelector(".mobile-menu-items")

menu.addEventListener("click", function(){
    menu_items.classList.toggle("hidden");
    setTimeout(function(){
        if(menu_items.classList.contains("bg-transparent")){
            menu_items.classList.remove("bg-transparent")
            menu_items.classList.add("bg-white")
        }else{
            menu_items.classList.add("bg-transparent")
            menu_items.classList.remove("bg-white")
        }   
    },10)
})

