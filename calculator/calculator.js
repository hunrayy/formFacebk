// let screen = document.getElementById("header");
// let buttons = document.querySelectorAll(".action");
// let equal = document.querySelector(".equal");
// let del = document.querySelector(".del");





// (function(){
//     buttons.forEach(function(button){
//         button.addEventListener("click", function(e){
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });





//     equal.addEventListener("click", function(e){
//         if(screen.value === ""){
//             screen.value = "";
//         }
//         else{
//             let answer = eval(screen.value);
//             screen.value = answer;
//         }
//     });




//     del.addEventListener("click", function(e){
//         screen.value = "";
//     })


// })();



function display(val){
    let input = document.getElementById("header").value += val;
    // console.log(header);
}
function calc(){
    let y = document.getElementById("header").value;
    let x = eval(y)
    document.getElementById("header").value = x
}
function clean(){
    document.getElementById("header").value = "";
}

















//working on the open and close function of the calculator

//code for the open function of the calculator
document.getElementById("mybtnnn").addEventListener("click", ()=>{
    // alert("works")
    document.getElementById("cover").style.display = "block"
    document.getElementById("first").style.display ="none"
    document.getElementById("mybtnnn").style.display = "none"
    document.getElementById("mybtnn").style.display = "block"
    // document.getElementById("first").style.rotate ="90deg"

})

//code for the close function of the calculator
document.getElementById("mybtnn").addEventListener("click", ()=>{
    // alert("works")
    document.getElementById("cover").style.display = "none"
    document.getElementById("first").style.display ="block"
    document.getElementById("mybtnnn").style.display = "block"
    document.getElementById("mybtnn").style.display = "none"
})