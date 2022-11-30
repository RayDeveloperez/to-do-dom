/**
 -Do to List DOM notes
 * Users have the ability to add to-do items

- form
-text input box and sumbit (get input from the user and add it to the list when they click submit)
-document.createElement to create the list items
-appendChild to add to our list

*Users have the ability to view to-do items

-list to keep track of our to-do items
-querySelectorAll(or bubbling) can be utilized to access the array of our list items
-Allow users to clear all to-do list items


 */


//Query Selectors
let todoForm = document.querySelector("#todoForm");
let todoInput = document.querySelector("#todoInput");
let addItems = document.querySelector("#addItems");
let removeItems = document.querySelector("#removeItems");
let removeAllItems = document.querySelector("#removeAllItems");
let toDoList = document.querySelector("#todoitems");
let toDoListItems = document.querySelector(`#todoitems li`);
let submit = document.querySelector("#submit")

//EventListeners
todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    let newListItem = document.createElement("li");
    newListItem.innerText = todoInput.value;
    console.log(newListItem)
    list.appendChild(newListItem);
    todoInput.value = "";
    alert("New item added to the list")
})

//clearing the input text box
todoInput.value = "";
//adding new items into list
 toDoList.appendChild(newListItem);


 //ADDITEMS
 addItems.addEventListener("click", function(){
    let newListItem = document.createElement("li");
    newListItem.innerText = todoInput.value;
    newListItem.addEventListener("click", function(){
        newListItem.style.textDecoration = "line-through";
    })
    todoInput.value = "";
    toDoListItems = document.querySelectorAll("#todoItems li");
    toDoList.appendChild(newListItem);
})
//Remove completed
removeItems.addEventListener(`click`,function(event){
    toDoListItems = document.querySelectorAll("#todoItems li");
    for(let i = 0; i < toDoListItems.length; i++){
        if(toDoListItems[i].style.textDecoration === "line-through"){
            toDoListItems[i].remove();
        }
}})
//remove all
removeAll.addEventListener(`click`,function(){
    toDoListItems = document.querySelectorAll("#todoItems li");
        for(let i = 0; i < toDoListItems.length; i++){
            toDoListItems[i].remove();
        }
        console.log("POST-REMOVAL");
        console.log(toDoListItems)
    })
    
  