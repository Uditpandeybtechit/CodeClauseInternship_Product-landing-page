const elem=document.getElementById("threeline");
console.log(elem);
function clickbut() {
    const elem2=document.getElementsByTagName("nav");
    if(elem2[0].style.display=="none"){
        elem2[0].style.display="block";
}
    else{
        elem2[0].style.display="none";
    }
    
}