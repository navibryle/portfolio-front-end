/* this will create the project object and all its methods
super is parent class constructor*/

class Project{
    constructor(name,gitLink,demoLink,imgSrc,id){
        /*all args are strings*/
        this._name = name;
        this._gitLink = gitLink;
        this._demoLink = demoLink;
        this._parent = document.getElementById("projects");
        this._imgSrc = imgSrc;
        this._id = id;
        this._isTaped = false;//only used for devices that have coarse pointer.
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
        let projectHtml = 
        `<div class = "a-project">
            <a href = "${this._gitLink}" target = "_blank" class = "expand" ><img class = "img_size" src="${this._imgSrc}" alt="scrrenshot of website"></a>
            <div class = "absolute-center text-align">
                <span class = "on-hover-vis margin-center" id = "${this._id +"links"}">
                    <a  href = "${this._demoLink}" target = "_blank" ><span class="fas fa-arrow-left text-color logo-size hover-button"></span></a>
                    <a href = "${this._gitLink}" target = "_blank" ><span class="fab fa-github text-color logo-size hover-button"></span></a>
                </span>
            </div>
        </div>`;
        projectParent.innerHTML = projectHtml;
        this._parent.appendChild(projectParent);
    }
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
}