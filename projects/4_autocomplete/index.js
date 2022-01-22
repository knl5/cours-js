import { getJson } from "./fetchData.js";

//create dom
function createForm() {
  let div = document.createElement("form");
  return div;
}
function createInput() {
  let input = document.createElement("input");
  input.type = "text";
  return input;
}
function createDiv() {
  let div = document.createElement("div");
  div.id = 'result';
  return div;
}
function createTodoDiv() {
  let div = document.createElement("div");
  div.id = 'todo';
  return div;
}

function createButton() {
  let button = document.createElement("button");
  button.textContent = 'Add to TODO';
  return button;
}

function addFormButton() {
  let div = createForm();
  let button = createButton();
  document.body.append(div);
  button.id = 'button';
  div.append(button);
  return div;
}

function appendInput(form) {
  let input = createInput();
  form.append(input);
  return input;
}

function appendDiv() {
  let div1 = createDiv();
  div.append(div1);
  return div1;
}
function appendTODODiv() {
  let div2 = createTodoDiv();
  document.body.append(div2);
  return div2;
}
let div = addFormButton();


let input = appendInput(div);
const divTodo = appendDiv();
let todo = appendTODODiv();

let p = document.createElement("p");
todo.append(p);
p.textContent = 'TODO Address :';



function useValue() {
  let nameValue = input.value;
  return nameValue;
}

function createLi(adress) {
  const li = document.createElement('li');
  li.textContent = adress;
  return li;
}

function createOl(adressAll) {
  const ol = document.createElement('ol');

  adressAll.forEach(adress => {
    const li = createLi(adress);
    li.classList.add('li-class');
    ol.append(li);
  });

  return ol;
}
//function search adress, select one and add it to TODO + add delete and modified an item in TODO
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const url = 'https://api-adresse.data.gouv.fr/search/';
    const autocomplete = '&autocomplete=1';
    input.addEventListener("input", async function (e) {
      let res = document.getElementById('result');

      let addressValue = useValue();
      let encodeInput = `?q=${encodeURIComponent(addressValue)}`;
      let finalUrl = url + encodeInput + autocomplete;
      if (addressValue == ' ') {
        return;
      }
      let apiData = await getJson(finalUrl);

      let apiDataFeatures = apiData.features;
      let datas = apiDataFeatures.map(function (data) {
        let displayLi = data.properties.label;
        return displayLi;
      });

      res.innerHTML = '';
      let ol = createOl(datas);
      res.append(ol);


      let li = document.getElementsByClassName('li-class');

      if (li) {
        for (var i = 0; i < li.length; i++) {

          li[i].addEventListener("click", function (event) {

            addressValue = event.target.textContent;
            input.value = addressValue;
          });
        }
      }


      const button = document.getElementById('button');
      let deleteBtn = document.createElement('button');
      let modifBtn = document.createElement('button');
      let list = document.createElement('li');

      // add an item/adress to todo
      function addAdressToTodo() {
        deleteBtn.className = 'deletebtn';
        modifBtn.className = 'modif';
        list.className = 'todoAddress';
        deleteBtn.textContent = 'Delete';
        modifBtn.textContent = 'Modif';
        list.innerHTML = addressValue;
        list.appendChild(deleteBtn);
        list.appendChild(modifBtn);
        todo.appendChild(list);
      }

      const createObject = () => {
        addAdressToTodo()
        let items = [...document.querySelectorAll('.todoAddress')];

        return items.map(item => {
          return allItems.push({
            item,
            deleteBtn: item.querySelector('.deletebtn'),
            modifBtn: item.querySelector('.modif'),
            inputModif: item.querySelector('input')
          })
        })
      }

      

      
      let allItems = [];
      button.addEventListener("click", (e) => {
        e.preventDefault();
        createObject();
      });

      // delete an item in todo

      async function deleteItem(arr) {
        arr.forEach(item => {
          item.deleteBtn.addEventListener('click', () => {
            item.item.remove()
          })
        })
      }
      deleteBtn.addEventListener('click', () => {
        deleteItem(allItems)
      })

      let divModif = document.createElement('div')
      let inputModif = document.createElement('input');
      let validBtn = document.createElement('button');
      
      //modifie an address in todo
      function modifAddress() {
        inputModif.type = "text";
        list.appendChild(divModif);
        divModif.appendChild(inputModif)
        divModif.appendChild(validBtn);
        validBtn.textContent = 'Valid';
        inputModif.setAttribute("value", document.querySelector('.todoAddress').innerText);
        inputModif.value
      }

      /* allItems.forEach((e) => {
        e.modifBtn.addEventListener('click', () => {
          modifAddress();
          console.log(e)
        })
      }) */

      modifBtn.addEventListener('click', () => {
        modifAddress();
      })

      //bug
      /* function addModifAddress() {
      allItems.forEach((e) => {
        e.inputModif.value = e.item.innerText;
      })
      
      
        
      }
      
      validBtn.addEventListener('click', () => {
        list.remove(inputModif);
        e.preventDefault()
        addModifAddress();
        inputModif.value = "";
      }) */



    });



    function noRefresh() {
      button.addEventListener("click", (e) => {
        e.preventDefault()
        input.value = "";
      })
    }
    noRefresh();





  }, { once: true });