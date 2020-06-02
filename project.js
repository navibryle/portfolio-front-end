/* this will create the project object and all its methods
super is parent class constructor*/

class Project{
    constructor(name,gitLink,imgSrc){
        this._name = name;
        this._gitLink = gitLink;
        this._parent = document.getElementById("projects");
        this._imgSrc = imgSrc;
    }
    getName(){
        return this._name;
    }
    getLink(){
        return this._gitLink;
    }
    displayProject(){
        let projectHtml = 
        /*might need to fix z-index so that the link logos appear on top of the  image on hover*/
        `<div class = "a-project-parent">
            <div class = "a-project">
                    <a href = "${this._gitLink}" target = "_blank"><img class = "img_size" src="${this._imgSrc}" alt="scrrenshot of website"></a>
                    <div class = "absolute-center" id = "${this._id +"links"}"></div>
            </div>
        </div>`;
        this._parent.appendChild(projectHtml);
    }
    onHover(){
        let project = document.getElementById(this._id+"links");
        let aProject = 
        `
        <a href = "${this._gitLink}" target = "_blank"><span class="fab fa-github text-color logo-size hover-button"></span></a>
        <a href = "${this._gitLink}" target = "_blank"><span class="fab fa-github text-color logo-size hover-button"></span></a>
        `;
        project.appendChild(aProject);
    }
}