/* this will create the project object and all its methods
super is parent class constructor*/

class Project{
    constructor(name,gitLink,demoLink,imgSrc,id,description,techStack){
        /*all args are strings*/
        this._name = name;
        this._gitLink = gitLink;
        this._demoLink = demoLink;
        this._description = description
        this._techStack = techStack
        this._parent = document.getElementById("projects");
        this._imgSrc = imgSrc;
        this._id = id;
        this._isTaped = false;//only used for devices that have coarse pointer.
        this.displayProject = this.displayProject.bind(this)
        this.displayProjectInfo = this.displayProjectInfo.bind(this)
    }
    getName(){
        return this._name;
    }
    getLink(){
        return this._gitLink;
    }
    getId(){
        return this._id;
    }
    displayProject(){
        let projectParent = document.createElement('div');
        projectParent.className += "a-project-parent";
        projectParent.id = `${this._id}`;
        const demo = this._demoLink === null? '':`<a  href = "${this._demoLink}" target = "_blank" ><span class="fas fa-arrow-left text-color logo-size hover-button"></span></a>`
        let projectHtml = 
        `<div class = "a-project">
            <a href = "${this._gitLink}" target = "_blank" class = "expand" ><img class = "img_size" src="${this._imgSrc}" alt="scrrenshot of website"></a>
                <div class = "on-hover-vis margin-center project-link-wrapper" id = "${this._id +"links"}">
                    ${demo}
                    <a href = "${this._gitLink}" target = "_blank" ><span class="fab fa-github text-color logo-size hover-button"></span></a>
                    <span id = "${this._id}Info" class = "fas fa-info-circle logo-size hover-button text-color"></span>
                </div>
        </div>`;
        projectParent.innerHTML = projectHtml;
        this._parent.appendChild(projectParent);
        this.setDisplayListerner()
    }
    //==========mobile support =====================
    displayProjectTap(){
        let projectParent = document.createElement('div');
        projectParent.className += "a-project-parent";
        projectParent.id = `${this._id}`;
        let projectHtml = 
        `<div class = "a-project" id = "a-project${this._id}">
            <img class = "img_size" src="${this._imgSrc}" alt="scrrenshot of website">
            <div class = "absolute-center text-align z-index-2">
                <span class = "on-hover-vis margin-center" id = "${this._id +"links"}">
                    <a href = "${this._demoLink}" target = "_blank" ><span class="fas fa-arrow-left text-color logo-size hover-button"></span></a>
                    <a href = "${this._gitLink}" target = "_blank" ><span class="fab fa-github text-color logo-size hover-button"></span></a>
                </span>
            </div>
        </div>`;
        projectParent.innerHTML = projectHtml;
        this._parent.appendChild(projectParent);
    }
    //==========mobile support end===================
    setHover() {
        var project = document.getElementById(this._id);
        var projectLinks = document.getElementById(this._id+"links");
        project.addEventListener("mouseover",function () {
            projectLinks.style["opacity"] = "1";
        });
        project.addEventListener("mouseout",function () {
            projectLinks.style["opacity"] = "0";
        });
    }
    setInfo(){
        const infoBtn = document.getElementById(`${this._Id}Info`)
        infoBtn.addEventListener("click",function(){

        })
    }
    setTap(){
        // need to also scale the project by 5% on tap and then descale on the second tap
        var project = document.getElementById(this._id);
        var projectLinks = document.getElementById(this._id+"links");
        var anchorParent = document.getElementById(`a-project${this._id}`);
        var link  = document.createElement("a");
        link.href = this._gitLink;
        link.id = `anchor${this._id}`;
        link.classList.add("expand");
        link.target = "_target";
        var id = this._id;
        //oncllick is equivalent to on tap
        //need to add anchor element if this._isTaped is true and need to remove it if this._isTaped is false
        var tapState = this._isTaped;
        project.addEventListener("click",function () {
            console.log(tapState)
            if (tapState === false){
                projectLinks.style["opacity"] = "1";
                projectLinks.style["zIndex"] = "3";
                project.classList.add("scale");
                tapState = true;
                anchorParent.appendChild(link);
            }else{
                projectLinks.style["opacity"] = "0";
                project.classList.remove("scale");
                tapState = false;
                var toRemove = document.getElementById(`anchor${id}`)
                anchorParent.removeChild(toRemove);
            }   
        });
    }
    setDisplayListerner(){
        const infoBtn = document.getElementById(`${this._id}Info`)
        infoBtn.addEventListener("click",this.displayProjectInfo)
    }
    createTechStack(){
        //this will return an html for each tech stack. Each tech will be a div and inside the div will be two spans one for the image and one for the name
        var output = '<h2 id = "tech-stack-header">Tech stack</h2>'
        const techLen = this._techStack.length
        for (var i = 0;i<techLen;i++){
            output += `<div id = "tech-container" >`
            switch (this._techStack[i].toLowerCase()){
                case "react":
                    output += `
                    <span id = "tech-logo" class="fab fa-react logo-size text-color" ></span>
                    <span id = "tech-description">react</span>
                    </div>`
                    break
                case "django":
                    output += `
                    <span id = "tech-logo" class="fab fa-python logo-size text-color" ></span>
                    <span id = "tech-description">django</span>
                    </div>`
                    break
                case "javascript":
                    output += `
                    <span id = "tech-logo" class="fab fa-js logo-size text-color" ></span>
                    <span id = "tech-description">javascript</span>
                    </div>`
                    break
                case "apache":
                    output += `
                    <span id = "tech-logo" class="fas fa-feather-alt logo-size text-color" ></span>
                    <span id = "tech-description">apache</span>
                    </div>`
                    break
                case "c":
                    output += `
                    <span id = "tech-logo" class="fas fa-microchip logo-size text-color" ></span>
                    <span id = "tech-description">C</span>
                    </div>`
                    break
                case "risc-v":
                    output += `
                    <span id = "tech-logo" class="fas fa-microchip logo-size text-color" ></span>
                    <span id = "tech-description">risc-v</span>
                    </div>`
                    break
                case "sql":
                    output += `
                    <span id = "tech-logo" class="fas fa-database logo-size text-color" ></span>
                    <span id = "tech-description">sql</span>
                    </div>`
                    break
                case "berkeley db":
                    output += `
                    <span id = "tech-logo" class="fas fa-database logo-size text-color" ></span>
                    <span id = "tech-description">berkely db</span>
                    </div>`
                    break
                case "python":
                    output += `
                    <span id = "tech-logo" class="fab fa-python logo-size text-color" ></span>
                    <span id = "tech-description">python</span>
                    </div>`
                    break
                case "java":
                    output += `
                    <span id = "tech-logo" class="fab fa-java logo-size text-color" ></span>
                    <span id = "tech-description">java</span>
                    </div>`
                    break
                case "firestore":
                    output += `
                    <span id = "tech-logo" class="fas fa-database logo-size text-color" ></span>
                    <span id = "tech-description">firestore</span>
                    </div>`
                    break
                case "github actions":
                    output += `
                    <span id = "tech-logo" class="fas fa-microchip logo-size text-color" ></span>
                    <span id = "tech-description">github actions</span>
                    </div>`
                    break
                case "html":
                    output += `
                    <span id = "tech-logo" class="fab fa-html5 logo-size text-color" ></span>
                    <span id = "tech-description">html</span>
                    </div>`
                    break 
                case "css":
                    output += `
                    <span id = "tech-logo" class="fab fa-css3-alt logo-size text-color" ></span>
                    <span id = "tech-description">css</span>
                    </div>`
                    break
                case "svg":
                    output += `
                    <span id = "tech-logo" class="fas fa-shapes logo-size text-color" ></span>
                    <span id = "tech-description">svg</span>
                    </div>`
                    break
                case "bootstrap":
                    output += `
                    <span id = "tech-logo" class="fab fa-bootstrap logo-size text-color" ></span>
                    <span id = "tech-description">bootstrap</span>
                    </div>`
                    break
                case "android":
                    output += `
                    <span id = "tech-logo" class="fab fa-android logo-size text-color" ></span>
                    <span id = "tech-description">android</span>
                    </div>`
                    break
                case "bash":
                    output += `
                    <span id = "tech-logo" class="fas fa-terminal logo-size text-color" ></span>
                    <span id = "tech-description">bash</span>
                    </div>`
                    break
                default:
                    console.error(`unknown tech for project ${this._id}`)
            }
        }
        return output
    }
    blurListener(){
        const blurrer = document.getElementById(BLURRER_ID)
        const infoRoot = document.getElementById(PROJECT_INFO_ROOT_ID)
        if (blurrer.getAttribute("listener") !== "true"){
            blurrer.addEventListener("click",function(event){
                event.stopPropagation()
                infoRoot.innerHTML = ""
                infoRoot.className = PROJECT_INFO_OFF
                blurrer.className = PROJECT_INFO_OFF
            })
            blurrer.setAttribute("listener","true")
        }
    }
    createLinks(){
        //this will return the html as a string for the links. each link will have to be a span
        if (this._demoLink != null){
            return `
            <a  href = "${this._demoLink}" target = "_blank" ><span class="fas fa-arrow-left text-color logo-size hover-button"></span></a>
            <a href = "${this._gitLink}" target = "_blank" ><span class="fab fa-github text-color logo-size hover-button"></span></a>`
        }else{
            return `<a href = "${this._gitLink}" target = "_blank" ><span class="fab fa-github text-color logo-size hover-button"></span></a>`
        }
    }
    displayProjectInfo(event){
        //event.stopPropagation()
        const infoRoot = document.getElementById(PROJECT_INFO_ROOT_ID)
        infoRoot.innerHTML = ` 
        <div id = "desc-links">   
            <div id = "proj-description">
                <h1 style = "text-align:center;" class="margin-top text-color center">${this._name}</h1>
                <p id = "proj-description-text" class="margin-top text-color">
                </p>
            </div>
            <div id = "proj-links">
                <div id = "proj-links-text" class="text-color margin-bottom margin-top">
                </div>
            </div>
        </div>
        <div id = "proj-tech-stack" class="text-color"></div>`
        const projDesc = document.getElementById(PROJ_DESC_ID)
        const projLinks = document.getElementById(PROJ_LINKS_ID)
        const projStack = document.getElementById(PROJ_TECH_STACK_ID)
        const blurrer = document.getElementById(BLURRER_ID)
        projStack.innerHTML = this.createTechStack()
        projDesc.innerHTML = this._description
        projLinks.innerHTML = this.createLinks()
        infoRoot.className = `${PROJECT_INFO_ON} on-load-resize`
        blurrer.classList = BLURRER_ON
        this.blurListener()
    }
}