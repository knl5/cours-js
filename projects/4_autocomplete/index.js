import promise1 from './fetchData.js'

promise1

/* let containSearch = document.createElement("div");
containSearch.setAttribute("id", "search");
document.body.appendChild(containSearch);
containList.innerHTML ='Rechercher adresse'; */

/* 
let searchBar = containSearch.appendChild(document.createElement("input"));
searchBar.setAttribute("id", "searchBar");  */

 function noRefresh() {
  btn.addEventListener("click", (e) => {
    e.preventDefault()

  })
}
noRefresh()


let input = document.getElementById('searchBar');
let button = document.querySelector('button');
let inputSearch = input.value;


function setInput() {
  input.addEventListener('input', () =>{
    input.value.replace(/ /g, "%20")
    input.setAttribute('value', input.value)
  })
}
setInput()




let searchData = document.querySelector('#searchData');
console.log(searchData)


//make list
function todoList(){ 
  let containList = document.createElement("div");
  containList.id = "divtodo";
  document.body.appendChild(containList);
  containList.innerHTML ='Todo'; 
 }
todoList(); 

 function addTodo() {
  let ul = document.getElementById('divtodo')
  let li = document.createElement('li');
  ul.appendChild(li)
  li.innerHTML = input.value
  let deleteBtn = document.createElement('button')
  
  let deleteTxt = document.createElement('p')
  li.appendChild(deleteBtn) 
 }
addTodo()

btn.addEventListener('click', () => {
  addTodo()
}) 
