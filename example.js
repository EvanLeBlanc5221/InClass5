var list = document.getElementsByTagName("ul");

// ADD NEW ITEM TO END OF LIST
var n1 = document.createElement("li");
var end = document.createTextNode("cream");
n1.appendChild(end);
list[0].appendChild(n1);
n1.setAttribute('class', 'cool');

// ADD NEW ITEM START OF LIST
var n2 = document.createElement("li");
var start = document.createTextNode("kale");
var first = document.getElementById("one");
n2.appendChild(start);
list[0].insertBefore(n2, first);
n2.setAttribute('class', 'cool');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var one, two, three, four, five, zero;
one = document.querySelector("#one");
one.setAttribute('class', 'cool');
two = document.querySelector("#two");
two.setAttribute('class', 'cool');
three = document.querySelector("#three");
three.setAttribute('class', 'cool');
four = document.querySelector("#four");
four.setAttribute('class', 'cool');

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var len = document.getElementsByTagName("li")
var total = len.length;
var listL = document.createElement("span");
var head = document.getElementsByTagName("h2");
listL.append(total);
console.log(listL);
head[0].append(listL);
