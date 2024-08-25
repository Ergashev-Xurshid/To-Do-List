const itemInput =document.querySelector('input[type = "text"]');
const form  = document.querySelector("form");
const list  = document.querySelector("ul");

form.addEventListener("submit",addItem);

function addItem (e){
  e.preventDefault();
  let newItem = itemInput.value;
  let li = document.createElement("li");
  let checkBtn = document.createElement('input')
  checkBtn.type="checkbox"
  li.appendChild(checkBtn)

  let p = document.createElement("p")
  p.textContent= newItem;
  li.appendChild(p);

  let delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("-"))
  delBtn.className = "btn"

  delBtn.addEventListener("click" , () => {
    li.remove();
  })

  li.appendChild(delBtn)
  list.appendChild(li);
  itemInput.value = ""



  checkBtn.addEventListener("click" , ()=> {
      p.style.textDecoration = "line-through" 
  })

}
