/*===========intro section=============*/
var bouncingArrow = document.getElementById("bouncing-arrow");
var mainWrapper = document.getElementById("main-wrapper");
function disappearOnScroll(){
    console.log(mainWrapper.scrollTop);
    if (mainWrapper.scrollTop != 0){
        bouncingArrow.style["opacity"] = "0";
    }else{
        bouncingArrow.style["opacity"] = "100";
    }
    
}
mainWrapper.addEventListener("scroll",disappearOnScroll);
/*===========intro section end=============*/

/*==========project section================*/
var project = new Project("Weather Calculator","https://github.com/navibryle/web-weather-app","weather_app.png");
project.displayProject();
/*==========project section end================*/
