const addbutt=document.getElementById("addbut");
const addbutton=()=>{
    const targetpage=window.open("bag.html");
    targetpage.onload=function (){
        const targetelement=targetpage.document.getElementById("parag");
        const string=targetelement.innerHTML+"+1";
        targetelement.innerHTML=eval(string);
        localStorage.setItem("save",targetelement.innerHTML);
        
    }
    
}
const para=document.getElementById("parag");
para.innerHTML=localStorage.getItem("save");


// saved();
//     //  window.open();
    
// }
// function saved (){
//     const para=getElementsByTagName('p');
//     localStorage.setItem("save",para[0]);
// }

// function show (){
//     const para1=getElementsByTagName('p');
//     para1[0].innerHTML=localStorage.getItem("save");
// }
// show();
