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
    const projects = 
    [
    ["Weather app",
    "https://github.com/navibryle/web-weather-app",
    "http://localhost:4000/",
    "images/weather_app.png",
    idGen.getIdIncrement().toString(),
    `Weather app is web app that uses openweather map api  to get a snapshot of the current weather in a city.
    A user can create an acount to save the data. A user can also create multiple datasets which holds weather related 
    data from various cities of the user's choosing. More details are present in the github page which is linked below
    along with the website.`,
    ["django","react","apache","html","css","bootstrap"]],
    ["Graph algorithm simulator",
    "https://github.com/navibryle/graph-viz",
    "graph-viz/index.html",
    "images/hello_world.png",
    idGen.getIdIncrement().toString(),
    `Graph algorithm simulator simulates graph traversal algorithms by creating shapes that resemble nodes and edges with the use of svg.
    I decided to write this project in plain javascript rather than a framework like react due to the convenience of being able to
    manipulate the DOM directly. More details are present in the github page which is linked below along with the website`,
    ["javascript","html","css","svg"]],
    ["Booktracker app",
    "https://github.com/CMPUT301F20T11/Cloud8",
    null,
    "images/bookTracker.png",
    idGen.getIdIncrement().toString(),
    `Booktracker is an android app for tracking borrowed,owned, and lent books. This app was my CMPUT 301 project, introduction to software engineering.
    I worked with a team and we followed scrum practices and agile principles in the development process. I am responsible for majority of the asynchronous 
    task that are used in the app along with the layout of the database. I also integrated continous integration with github actions during our 
    development period. The app is well documented in our github wiki. The github page is linked below.`,
    ["java","android","firestore","github actions"]
    ],
    ["Risc-v to wast transpiler",
    "https://github.com/navibryle/riscv-to-wasm",
    null,
    "images/riscv-wasm.png",
    idGen.getIdIncrement().toString(),
    `This is a transpiler that converts a subset of risc-v instructions to wasm source code. This was my last lab in CMPUT 229,
    Computer Organization and Architecture, it was very involved in terms of interpreting the binary representation of instructions and writing assembly code.
    Details and examples of execution can be seen on the github link.`,
    ["risc-v","bash"]
    ],
    ["Float-conversion",
    "https://github.com/navibryle/float-conversion",
    null,
    "images/c.png",
    idGen.getIdIncrement().toString(),
    `This is a module that will perform floating point operations such as basic arithmetic and converting the float to a string. The float is 16 bits with
    8 bits for the mantissa, 7 bits for the exponent, and a single bit for the sign more details about the module can be seen in the github page linked below.`,
    ["C","bash"]
    ],
    [
    "SQL-traffic",
    "https://github.com/BZEEE/CMPUT291_MiniGroupProject1",
    null,
    "images/sql.webp",
    idGen.getIdIncrement().toString(),
    `This is a small sql project for my CMPUT 291 class,Introduction to File and Database Management. This project simulates the database and queries 
    needed for a traffic management system.`,
    ["sql","python"]
    ],
    [
    "Berkeley-DB-project",
    "https://github.com/navibryle/cmput291_mini-project2",
    null,
    "images/sql.webp",
    idGen.getIdIncrement().toString(),
    `This is a small project that uses the NoSQL database berkeley db. This project generates the index for the dataset in order to perform fast queries.`,
    ["berkeley db","python"]
    ]
]
    for (var i = 0;i < projects.length;i++){
        let aProject = new Project(projects[i][0],projects[i][1],projects[i][2],projects[i][3],projects[i][4],projects[i][5],projects[i][6]);
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
    email.value = "ipenales@ualberta.ca";
    email.select();
    document.execCommand("copy");
    document.body.removeChild(email);
}
function clipBoardNotif(){
    if (document.getElementById("notif") === null){
        var notif = document.createElement("span")
        const notifSpawn = document.getElementById("notif-spawn")
        notif.id = "notif"
        notif.className = "text-color notif-border fade-out-2s"
        notif.textContent = "Copied email to clipboard!"
        notifSpawn.appendChild(notif)
        window.setTimeout(function(){
            notifSpawn.removeChild(notif)
        },2*1000);
    }
    
}
function spawnContact(button,defaultHTML,contactHTML) {
    //button is where i am displaying the text instruction for user and defaultHTML is the 'get in touch' text and the contactHTML is the my email
    if (button.getAttribute("triggered") === "false"){
        button.innerHTML = contactHTML;
        copyEmailToClip()
        clipBoardNotif()
        button.setAttribute("triggered","true")
    }else{
        button.innerHTML = defaultHTML;
        button.setAttribute("triggered","false")
    }
}
function loadContactButton(){
    let button = document.getElementById("contact-button");
    let defaultHTML = `Get in touch  <span class="fas fa-info-circle"></span>`
    let contactHTML = `
            <div id = "email">ipenales@ualberta.ca</div>
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
function resumeListener(){
    const blurrer = document.getElementById(BLURRER_ID)
    const resume = document.getElementById(RESUME_ID)
    const resumeCanvas = document.getElementById(RESUME_CANVAS_ID)
    resume.addEventListener("click",() => {
        blurrer.classList = BLURRER_ON
        resumeCanvas.classList = `${RESUME_ON} on-load-resize`
        resumeCanvas.innerHTML = `<embed src="images/resume.pdf" width="100%" height="100%" />`
    })
    blurrer.addEventListener("click", () => {
        blurrer.classList = PROJECT_INFO_OFF
        resumeCanvas.classList = PROJECT_INFO_OFF
        resumeCanvas.innerHTML = ""
    })
}
function aboutMeListener(){
    const blurrer = document.getElementById(BLURRER_ID)
    const aboutMeCanvas = document.getElementById(ABOUT_ME_ID)
    const aboutMeBtn = document.getElementById(ABOUT_ME_BTN_ID)
    aboutMeBtn.addEventListener("click",() =>{
        blurrer.classList = BLURRER_ON
        aboutMeCanvas.classList = `${ABOUT_ME_ON} on-load-resize`
        aboutMeCanvas.innerHTML = `
        <h2 class = "about-me-header">About me</h2>
        <p>
            I am a third year student in the university of alberta with a specilization in computing science.
        In addition to my course work which consist mostly of computing science courses i have also taught
        myself various concepts in web development such as asynchronous programming and the REST API. I am looking
        for an intership, preferably a long term internship.
        </p>
        `
    })
    blurrer.addEventListener("click", () => {
        blurrer.classList = PROJECT_INFO_OFF
        aboutMeCanvas.classList = PROJECT_INFO_OFF
        aboutMeCanvas.innerHTML = ""
    })
}
//==================sticky/burger menu end===================
function main(){
    loadIntro()
    loadProjects()
    loadContactButton()
    loadMenu()
    resumeListener()
    aboutMeListener()
}
main()
