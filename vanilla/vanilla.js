// const btn = document.getElementById("btn");
// const ul = document.getElementById("ul");


// btn.onclick = function(){
//     // if(ul.style.visibility == hidden){
//     //     ul.style.visibility = visible;
//     // }
//     alert("works")
// }
// document.getElementById("btn").onclick = function(){
//     alert("works")
// }





let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let ul = document.getElementById("ul");
// let span = document.getElementById("span");
// let about = document.getElementById("about");
let label = document.getElementById("label");
let point = document.getElementById("point");
let box = document.getElementById("box");
let lt = document.getElementById("lt");
let dt = document.getElementById("dt");


btn.onclick = function(){
    btn.style.visibility = "hidden";
    ul.style.visibility = "visible";
}
btn2.onclick = function(){
    btn.style.visibility = "visible";
    ul.style.visibility = "hidden";
}
btn2.onmouseover = function(){
    // document.getElementById("span").innerHTML = "close?"
    btn2.style.backgroundColor = "whiteSmoke";
}
btn2.onmouseout = function(){
    // document.getElementById("span").innerHTML = "close?"
    btn2.style.backgroundColor = "";
}
label.onclick = function(){
    point.style.transform = "rotate(90deg)"
    box.style.visibility = "visible"
}
box.onmouseover = function(){
    box.style.visibility = "visible"
}
box.onmouseout = function(){
    box.style.visibility = "hidden"
    point.style.transform = "rotate(0deg)"
    point.style.color = "greenYellow"
}
lt.onmouseover = function(){
    box.style.visibility = "visible"
    point.style.transform = "rotate(90deg)"
    point.style.color = "lightSalmon"
}
lt.onmouseout = function(){
    box.style.visibility = "visible"
    point.style.transform = "rotate(90deg)"
    point.style.color = "greenYellow"
}
dt.onmouseover = function(){
    box.style.visibility = "visible"
    point.style.transform = "rotate(90deg)"
    point.style.color = "black"
}
dt.onmouseout = function(){
    box.style.visibility = "visible"
    point.style.transform = "rotate(90deg)"
    point.style.color = "greenYellow"
}




// setting the theme to local storage to make it persist
lt.onclick = function(){
    document.getElementById("body").style.backgroundColor = "lightSalmon";
    localStorage.setItem("color", "lightSalmon")
}


dt.onclick = function(){
    document.getElementById("body").style.backgroundColor = "black";
    localStorage.setItem("color", "black")
}



// running he onload function to make the current theme persist
window.onload = function(){
    let fetch = localStorage.getItem("color");
    // console.log(fetch);
    document.getElementById("body").style.backgroundColor = fetch
    // localStorage.getItem("color", "white")
    // document.getElementById("body").style.backgroundColor = "white";
    // localStorage.getItem("color", "black")
    // document.getElementById("body").style.backgroundColor = "black";

}
