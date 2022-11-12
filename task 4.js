let frut = ["apple", "banana", "tomato", " orange "];
let list = document.getElementById("fruts");
data.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});
