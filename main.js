/*===========intro section=============*/
function disappearOnScroll(bouncingArrow,mainWrapper){
    const scrollSupport = 'scrollBehavior' in document.documentElement.style;
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
function loadIntro(){
    var bouncingArrow = document.getElementById("bouncing-arrow");
    var mainWrapper = document.body;
    mainWrapper.addEventListener("scroll",function(){disappearOnScroll(bouncingArrow,mainWrapper)});
}
/*===========intro section end=============*/
/*==========project section================*/
function loadProjects(){
    var idGen = new IdGen();
    /*future projects will be stored as json files and will be called here*/
    const projects = [["Weather Calculator","https://github.com/navibryle/web-weather-app","web-weather-app/weather-home.html","weather_app.png",idGen.getIdIncrement().toString()],
    ["Youtube Comment","https://github.com/navibryle/youtube-search-api","youtube-api/youtube-api/yt-api-home.html","yt-api.png",idGen.getIdIncrement().toString()]]
    for (var i = 0;i < projects.length;i++){
        let aProject = new Project(projects[i][0],projects[i][1],projects[i][2],projects[i][3],projects[i][4]);
        if (window.matchMedia("(pointer: coarse;)").matches){
            aProject.displayProjectTap();
            aProject.setTap();
        }else{
        aProject.displayProject();
            aProject.setHover();
        }
    }
}

/*==========project section end================*/
/*==========contact button section ============*/
function copyEmailToClip(){
    //will copy my email to clipboard
    var email = document.createElement("textarea");
    document.body.appendChild(email);
    email.value = "ipenales.dev@gmail.com";
    email.select();
    document.execCommand("copy");
    document.body.removeChild(email);
}
function clipBoardNotif(){
    //
    var notif = document.createElement("span");
    const notifSpawn = document.getElementById("notif-spawn");
    notif.id = "notif";
    notif.className = "text-color notif-border fade-out-2s";
    notif.textContent = "Copied to clipboard";
    notifSpawn.appendChild(notif);
    window.setTimeout(function(){notifSpawn.removeChild(notif)},2*1000);
}
function spawnContact(button,defaultHTML,contactHTML) {
    //button is where i am displaying the text instruction for user and defaultHTML is the 'get in touch' text and the contactHTML is the my email
    if (button.innerHTML == defaultHTML){
        button.innerHTML = contactHTML;
        copyEmailToClip()
        clipBoardNotif()
    }else{
        button.innerHTML = defaultHTML;
    }
}
function loadContactButton(){
    let button = document.getElementById("contact-button");
    console.log(button);
    let defaultHTML = "get in touch";
    let contactHTML = `
            <div id = "email">ipenales.dev@gmail.com</div>
            <div>(403)913-5645</div>`;
    button.addEventListener("click",function(){spawnContact(button,defaultHTML,contactHTML)});
}
/*==========contact button section end=========*/
//===================sticky/burger menu======================
function displayCoarseMenu(){
    var idGen = new IdGen();
    var menu = new Menu("menu-logo");
    menu.addContent("fab fa-github","https://github.com/navibryle",idGen.getIdIncrement().toString(),"Github");
    menu.addContent("fab fa-hackerrank","https://www.hackerrank.com/naviivan321?hr_r=1",idGen.getIdIncrement().toString(),"Hackerrank");
    menu.displayLogo();
}
function displayFineMenu(){
    
    var stickyParent = document.getElementById("sticky-parent");
    stickyParent.innerHTML = `
    <a href = "https://github.com/navibryle" target = "_blank"><span class="fab fa-github text-color logo-size hover-button"></span></a><br></br>
    <a href = "https://www.hackerrank.com/naviivan321?hr_r=1" target = "_blank"><span class="fab fa-hackerrank text-color logo-size hover-button"></span></a>
    `;
}
function loadMenu(){
    if (matchMedia('(pointer:coarse').matches){
        displayCoarseMenu();
    }else{
        displayFineMenu();
    }
}
//==================sticky/burger menu end===================
function main(){
    loadIntro();
    loadProjects();
    loadContactButton();
    loadMenu();
}
main();
