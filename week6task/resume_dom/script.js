let header1 = document.createElement("div");
header1.setAttribute("class", "header1");

let img1 = document.createElement("img");
img1.setAttribute("class", "profilepic");
img1.setAttribute("src", "bpic.jpg");
img1.setAttribute("alt", "dp");
header1.appendChild(img1);

let overlap = document.createElement("div");
overlap.setAttribute("class", "overlap");
header1.appendChild(overlap);

let name1 = document.createElement("div");
name1.setAttribute("class", "name1");

let x = document.createElement("span");
x.setAttribute("class", "sname");
x.innerText = "Bablu Verma";
name1.appendChild(x);
header1.appendChild(name1);

let address = document.createElement("div");
address.setAttribute("class", "address");

let paddress = document.createElement("p");
paddress.setAttribute("class", "paddress");
paddress.innerText = "+91-9345868696 | xyz@gmail.com | California,America";

address.appendChild(paddress);

let column = document.createElement("div");
column.setAttribute("class", "column");

let profile = document.createElement("div");
profile.setAttribute("class", "profile");

let fas = document.createElement("i");
fas.setAttribute("class", "fas fa-id-card-alt");

let span = document.createElement("span");
span.classList.add("span");
span.innerHTML = "&nbsp;&nbsp;Profile";

let content1 = document.createElement("h4");
content1.innerText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolores fugiat esse incidunt, voluptatum excepturi eos doloribus fugit voluptatem quo accusantium beatae dolore optio laboriosam aperiam ut quisquam blanditiis numquam.";

profile.append(fas, span, content1);

column.appendChild(profile);

let skills = document.createElement("div");
skills.setAttribute("class", "skills");

let fas1 = document.createElement("i");
fas1.setAttribute("class", "fas fa-atom");
let span1 = document.createElement("span");
span1.classList.add("span");
span1.innerHTML = "&nbsp;&nbsp;Skills <br>";
let break3 = document.createElement("br");
skills.append(fas1, span1, break3);
let break1 = document.createElement("br");

let table1 = document.createElement("table");
let break2 = document.createElement("br");

let bold1 = document.createElement("b");
bold1.innerText = "Technical Skills";

table1.append(bold1, break1, break2);

skills.appendChild(table1);

let tablerow1 = document.createElement("tr");
let tablecolumn1 = document.createElement("td");
tablecolumn1.innerText = "JavaScript";
let tablecolumn2 = document.createElement("td");
let slide1 = document.createElement("input");
slide1.setAttribute("type", "range");
slide1.setAttribute("min", "1");
slide1.setAttribute("max", "100");
slide1.setAttribute("value", "80");
slide1.setAttribute("class", "slider");
slide1.setAttribute("id", "myRange");
slide1.setAttribute("disabled", "");

tablerow1.append(tablecolumn1, tablecolumn2, slide1);
table1.appendChild(tablerow1);

let tablerow2 = document.createElement("tr");
let tablecolumn3 = document.createElement("td");
tablecolumn3.innerText = "HTML";
let tablecolumn4 = document.createElement("td");
let slide2 = document.createElement("input");
slide2.setAttribute("type", "range");
slide2.setAttribute("min", "1");
slide2.setAttribute("max", "100");
slide2.setAttribute("value", "70");
slide2.setAttribute("class", "slider");
slide2.setAttribute("id", "myRange");
slide2.setAttribute("disabled", "");

tablerow2.append(tablecolumn3, tablecolumn4, slide2);
table1.appendChild(tablerow2);

let tablerow3 = document.createElement("tr");
let tablecolumn5 = document.createElement("td");
tablecolumn5.innerText = "CSS";
let tablecolumn6 = document.createElement("td");
let slide3 = document.createElement("input");
slide3.setAttribute("type", "range");
slide3.setAttribute("min", "1");
slide3.setAttribute("max", "100");
slide3.setAttribute("value", "70");
slide3.setAttribute("class", "slider");
slide3.setAttribute("id", "myRange");
slide3.setAttribute("disabled", "");

tablerow3.append(tablecolumn5, tablecolumn6, slide3);
table1.appendChild(tablerow3);

let tablerow4 = document.createElement("tr");
let tablecolumn7 = document.createElement("td");
tablecolumn7.innerText = "React";
let tablecolumn8 = document.createElement("td");
let slide4 = document.createElement("input");
slide4.setAttribute("type", "range");
slide4.setAttribute("min", "1");
slide4.setAttribute("max", "100");
slide4.setAttribute("value", "70");
slide4.setAttribute("class", "slider");
slide4.setAttribute("id", "myRange");
slide4.setAttribute("disabled", "");

tablerow4.append(tablecolumn7, tablecolumn8, slide4);
table1.appendChild(tablerow4);

let tablerow5 = document.createElement("tr");
let tablecolumn9 = document.createElement("td");
tablecolumn9.innerText = "Agile";
let tablecolumn10 = document.createElement("td");
let slide5 = document.createElement("input");
slide5.setAttribute("type", "range");
slide5.setAttribute("min", "1");
slide5.setAttribute("max", "100");
slide5.setAttribute("value", "70");
slide5.setAttribute("class", "slider");
slide5.setAttribute("id", "myRange");
slide5.setAttribute("disabled", "");

tablerow5.append(tablecolumn9, tablecolumn10, slide5);
table1.appendChild(tablerow5);

let tablerow6 = document.createElement("tr");
let tablecolumn11 = document.createElement("td");
tablecolumn11.innerText = "API Testing";
let tablecolumn12 = document.createElement("td");
let slide6 = document.createElement("input");
slide6.setAttribute("type", "range");
slide6.setAttribute("min", "1");
slide6.setAttribute("max", "100");
slide6.setAttribute("value", "70");
slide6.setAttribute("class", "slider");
slide6.setAttribute("id", "myRange");
slide6.setAttribute("disabled", "");

tablerow6.append(tablecolumn11, tablecolumn12, slide6);
table1.appendChild(tablerow6);

skills.appendChild(table1);
column.appendChild(skills);

let workexp = document.createElement("div");
workexp.setAttribute("class", "workexp");

// let break15 = document.createElement("br");

let fas2 = document.createElement("i");
fas2.setAttribute("class", "fas fa-briefcase");

let span2 = document.createElement("span");
span2.setAttribute("class", "span");
span2.innerHTML = "&nbsp;&nbsp;Work Experirnce";

// let break4 = document.createElement("br");

// let break5 = document.createElement("br");
workexp.append(fas2, span2);

column.appendChild(workexp);

let workexp_sub = document.createElement("div");
workexp_sub.setAttribute("class", "workexp_sub");

let bold2 = document.createElement("b");
bold2.innerHTML =
  "Lorem ipsum dolor sit------------------ dec 2014-Present <br>";
workexp_sub.appendChild(bold2);

let break6 = document.createElement("br");

workexp_sub.appendChild(break6);

let content3 = document.createElement("h3");
content3.innerText = "Lorem ipsum dolor";

workexp_sub.appendChild(content3);

let ul1 = document.createElement("ul");
let list1 = document.createElement("li");
list1.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul1.appendChild(list1);

let list2 = document.createElement("li");
list2.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul1.appendChild(list2);

let list3 = document.createElement("li");
list3.innerText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul1.appendChild(list3);

let list4 = document.createElement("li");
list4.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul1.appendChild(list4);

let list5 = document.createElement("li");
list5.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul1.appendChild(list5);
workexp_sub.appendChild(ul1);

workexp.appendChild(workexp_sub);
column.appendChild(workexp);

let projects = document.createElement("div");
projects.setAttribute("class", "projects");

let break13 = document.createElement("br");
let break14 = document.createElement("br");

projects.append(break13, break14);

let fas3 = document.createElement("i");
fas3.setAttribute("class", "fas fa-project-diagram");
let span3 = document.createElement("span");
span3.setAttribute("class", "span");
span3.innerHTML = "&nbsp;&nbsp;Projects";

projects.append(fas3, span3);

let break7 = document.createElement("br");

projects.appendChild(break7);

let ul2 = document.createElement("ul");
let list6 = document.createElement("li");
let bold3 = document.createElement("b");
bold3.innerText = "Lorem ipsum dolor sit amet";

list6.appendChild(bold3);
ul2.appendChild(list6);
projects.appendChild(ul2);

let ul3 = document.createElement("ul");
ul3.setAttribute("type", "square");
let list7 = document.createElement("li");
list7.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul3.appendChild(list7);
ul2.appendChild(ul3);
projects.appendChild(ul2);

let list8 = document.createElement("li");
list8.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul3.appendChild(list8);
ul2.appendChild(ul3);

let list9 = document.createElement("li");
list9.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul3.appendChild(list9);

ul2.appendChild(ul3);

let list10 = document.createElement("li");
let bold4 = document.createElement("b");
bold4.innerText = "Lorem ipsum dolor sit amet";

list10.appendChild(bold4);
ul2.appendChild(list10);

let ul4 = document.createElement("ul");
ul4.setAttribute("type", "square");
let list11 = document.createElement("li");
list11.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul4.appendChild(list11);
ul2.appendChild(ul4);

let list12 = document.createElement("li");
list12.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul4.appendChild(list12);
ul2.appendChild(ul4);

let list13 = document.createElement("li");
list13.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul4.appendChild(list13);
ul2.appendChild(ul4);

let list14 = document.createElement("li");
list14.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima maiores. Mollitia facere earum labore nemo! Consectetur";

ul4.appendChild(list14);
ul2.appendChild(ul4);

projects.appendChild(ul2);

column.appendChild(projects);

let education = document.createElement("div");
education.setAttribute("class", "education");

let fas4 = document.createElement("i");
fas4.setAttribute("class", "fas fa-graduation-cap");
let span4 = document.createElement("span");
span4.setAttribute("class", "span");
span4.innerHTML = "&nbsp;&nbsp;Education";

education.append(fas4, span4);

let break8 = document.createElement("br");
education.appendChild(break8);

let break9 = document.createElement("br");
education.appendChild(break9);

let bold5 = document.createElement("b");
bold5.innerText = " Lorem ipsum dolor ---------- 2010-2014";
education.appendChild(bold5);

let break10 = document.createElement("br");
education.appendChild(break10);

let p2 = document.createElement("p");
p2.innerText = "Lorem ipsum dolor sit amet";

education.appendChild(p2);

column.appendChild(education);

let language = document.createElement("div");
language.setAttribute("class", "language");

let fas5 = document.createElement("i");
fas5.setAttribute("class", "fas fa-language");
let span5 = document.createElement("span");
span5.setAttribute("class", "span");
span5.innerHTML = "&nbsp;&nbsp;Language Known";

language.append(fas5, span5);
let break11 = document.createElement("br");
language.appendChild(break11);
let break12 = document.createElement("br");
language.appendChild(break12);

let ul5 = document.createElement("ul");
let list15 = document.createElement("li");
list15.innerText = "English";

let list16 = document.createElement("li");
list16.innerText = "Hindi";

let list17 = document.createElement("li");
list17.innerText = "Bengali";

ul5.append(list15, list16, list17);

language.appendChild(ul5);

column.appendChild(language);

document.body.append(header1, address, column);
