/*===========intro section=============*/
var bouncingArrow = document.getElementById("bouncing-arrow");
var mainWrapper = document.body;

function disappearOnScroll(){
    const scrollSupport = 'scrollBehavior' in document.documentElement.style;
    console.log(!scrollSupport)
    if ( !scrollSupport) {
        bouncingArrow.style["opacity"] = "0";
    }else{
        if (mainWrapper.scrollTop != 0){
            bouncingArrow.style["opacity"] = "0";
        }else{
            bouncingArrow.style["opacity"] = "100";
        }
    }
}
mainWrapper.addEventListener("scroll",disappearOnScroll);
/*===========intro section end=============*/

/*==========project section================*/
var idGen = new IdGen();
var id = idGen.getIdIncrement().toString();
/*future projects will be stored as json files and will be called here*/
const projects = [["Weather Calculator","https://github.com/navibryle/web-weather-app","web-weather-app/weather-home.html","weather_app.png",idGen.getIdIncrement().toString()],
["Youtube Comment","https://github.com/navibryle/youtube-search-api","youtube-api/youtube-api/yt-api-home.html","yt-api.png",idGen.getIdIncrement().toString()]]
for (var i = 0;i < projects.length;i++){
    let aProject = new Project(projects[i][0],projects[i][1],projects[i][2],projects[i][3],projects[i][4]);
    aProject.displayProject()
    aProject.setHover()
}
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
