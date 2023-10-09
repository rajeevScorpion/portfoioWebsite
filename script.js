document.onscroll = function(){showlogo()};

function showlogo(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("logosmall").style.display = "block";
        document.getElementById("mainNav").classList.add("sticky");
    }else{
        document.getElementById("logosmall").style.display = "";
        document.getElementById("mainNav").classList.remove("sticky");
    }
}



//trying if else 
let morning = "Greeting of the day!";
let evening = "Very Good Evening to you!";

if(new Date().getHours() <18){
    console.log(morning);
    }
    else{
        console.log(evening);
    }
