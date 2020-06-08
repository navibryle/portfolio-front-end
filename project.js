/* this will create the project object and all its methods
super is parent class constructor*/

class Project{
    constructor(name,gitLink,imgSrc,id){
        /*all args are strings*/
        this._name = name;
        this._gitLink = gitLink;
        this._parent = document.getElementById("projects");
        this._imgSrc = imgSrc;
        this._id = id;
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
            <a href = "${this._gitLink}" target = "_blank"><img class = "img_size" src="${this._imgSrc}" alt="scrrenshot of website"></a>
            <span class = "absolute-center on-hover-vis" id = "${this._id +"links"}">
                <a style = href = "${this._gitLink}" target = "_blank" class = "oh-hover-vis"><span class="fas fa-arrow-left text-color logo-size hover-button"></span></a>
                <a href = "${this._gitLink}" target = "_blank" class = "oh-hover-vis"><span class="fab fa-github text-color logo-size hover-button"></span></a>
            </span>
        </div>`;
        projectParent.innerHTML = projectHtml;
        this._parent.appendChild(projectParent);
    }
    setHover() {
        var projectLinks = document.getElementById(this._id);
        var project = document.getElementById(this._id+"links");
        projectLinks.addEventListener("mouseover",function () {
            project.style["opacity"] = "100%";
        });
        projectLinks.addEventListener("mouseout",function () {
            project.style["opacity"] = "0";
        });
    }
    
}