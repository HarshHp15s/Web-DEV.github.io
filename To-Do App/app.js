let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let input = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;
    ol.appendChild(item);
    input.value = "";
    
let delBtn = document.createElement("button");
delBtn.innerText = "delete";
delBtn.classList.add("delete");

 item.appendChild(delBtn);
 ol.appendChild(item);
 input.value = ""   
});

ol.addEventListener("click",function (e) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("DELETED");
    }
})

