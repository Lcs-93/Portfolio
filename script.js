
let darkmode = false;

function changedarkmode(){
    if(darkmode){
//light mode
darkmode = false;
 document.documentElement.style.setProperty("--text-color","black");
 document.documentElement.style.setProperty("--background-color","#efe7e5");
 document.getElementById("dark-light-mode").innerHTML="Dark mode";
    } else {
        //dark mode
        darkmode = true;
        document.documentElement.style.setProperty("--text-color","white");
        document.documentElement.style.setProperty("--background-color","#1E1E1E");
        document.getElementById("dark-light-mode").innerHTML="Light mode";
        document.getElementById("caca").innerHTML="Light mode";
    }
};

