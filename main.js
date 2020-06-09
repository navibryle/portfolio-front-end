/*===========intro section=============*/
var bouncingArrow = document.getElementById("bouncing-arrow");
var mainWrapper = document.body;
function disappearOnScroll(){
    if (mainWrapper.scrollTop != 0){
        bouncingArrow.style["opacity"] = "0";
    }else{
        bouncingArrow.style["opacity"] = "100";
    }
}
mainWrapper.addEventListener("scroll",disappearOnScroll);
/*===========intro section end=============*/

/*==========project section================*/
var idGen = new IdGen();
var id = idGen.getIdIncrement().toString();
/*future projects will be stored as json files and will be called here*/
var project1 = new Project("Weather Calculator","https://github.com/navibryle/web-weather-app","weather_app.png",id);
var project2 = new Project("Youtube Comment","https://github.com/navibryle/youtube-search-api","weather_app.png","2");
project2.displayProject();
project1.displayProject();
project1.setHover();
project2.setHover();
/*==========project section end================*/
/*==========contact button section ============*/
var buttonWrapper = document.getElementById("contact-button-wrapper");
var button = document.getElementById("contact-button");
var contactHTML = `
        <div id = "email">ipenales.dev@gmail.com</div>
        <div>(403)913-5645</div>`
var defaultHTML = "get in touch"
function copyEmailToClip(){
    var email = document.createElement("textarea");
    document.body.appendChild(email);
    email.value = "ipenales.dev@gmail.com";
    email.select();
    document.execCommand("copy");
    document.body.removeChild(email);
}
function clipBoardNotif(){
    const curWinTop = document.body.scrollTop;
    const viewPortHeight = window.innerHeight;
    const notifYPos = (viewPortHeight * 0.9) + curWinTop;
    var notif = document.createElement("span");
    const notifSpawn = document.getElementById("notif-spawn");
    notif.id = "notif";
    notif.className = "text-color notif-border fade-out-2s";
    notif.textContent = "Copied to clipboard";
    notifSpawn.appendChild(notif);
    window.setTimeout(function(){notifSpawn.removeChild(notif)},2*1000);
}
function spawnContact() {
    if (button.innerHTML == defaultHTML){
        button.innerHTML = contactHTML;
        copyEmailToClip()
        clipBoardNotif()
    }else{
        button.innerHTML = defaultHTML;
    }
}
button.addEventListener("click",spawnContact);
/*==========contact button section end=========*/
