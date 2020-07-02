class Option{
    /*
    methods:
        displayOption();
    */
   constructor(logoLink,link,id,text){
       this._logoLink = logoLink;
       this._link = link;
       this._id = id;
        this._text = text;
   }
   getNode(){
    //will return an html node that will span the whole container
    //option css class will implement the onhover funcitonality
    let option = document.createElement('a');
    let img = document.createElement('span');
    let text = document.createElement('span');
    text.textContent = this._text;
    text.className = "option-title";
    img.className = `${this._logoLink} logo-size-menu`;
    option.href = this._link;
    option.target = "_blank";
    option.id = `${this._link}${this._id}`;
    option.className = "option";
    option.appendChild(img);
    option.appendChild(text);
    return option;
   }
   getNodeId(){
       return `${this._link}${this._id}`;
   }
}
class Menu{
    /*
    need to make it so that when the 
    */
    constructor(menuLogo){
        //menuLogo is the id of the menuLogo and there will be a css selector that defines its position
        this._content = [];
        this._menu = document.createElement("span");
        this._menuLogo = document.createElement("span");
        this._blackScreen = document.getElementById("black-screen");
        this._menuLogo.id = menuLogo;
        this._menuLogo.className = "fas fa-bars menu-logo";
        this._menu.id = "vertical-nav";
        this._menu.className = "nav-activation-animation";
        this._isActive = false;
        this._navParentId = "nav-parent";
    }
    addContent(logoLink,link,id,text){
        var newOption = new Option(logoLink,link,id,text);
        this._content.push(newOption);
    }
    isActive(){
        return this._isActive;
    }
    navInit(){
        for (var i = 0;i<this._content.length;i++){
            this._menu.appendChild(this._content[i].getNode());
            }
    }
    activate(){
        /*
        screen turns black and navbar comesout successfully
        */
        var parent = document.getElementById(this._navParentId);
        this._blackScreen.classList.add("nav-black-screen-activate");
        parent.appendChild(this._menu);
        this._isActive = true;
    }
    deactivate(){
        //this class will just delete the nav from the dom tree
        //might need to create a method that checks if the menu needs to be deactivated
        var parent = document.getElementById(this._navParentId);
        var child = this._menu;
        this._menu.classList.add("nav-deactivation-animation");
        
        setTimeout(function(){
            parent.removeChild(child);
            object._menu.classList.remove("nav-deactivation-animation");
        },200);
        var object = this;
        this._isActive = false;
        this._blackScreen.classList.remove("nav-black-screen-activate");
        
    }
    getNode(){
        return this._menu;
    }
    addMenuLogoListener(){
        let object = this;
        this._menuLogo.addEventListener("click",function (){
            if (object._isActive === false){
                object.activate();
            }
        });
        
        //this._isActive = isActive;
    }
    addBlackScreenListener(){
        let object = this;
        this._blackScreen.addEventListener("click",function(){
            if (object._isActive === true){
                object.deactivate();
            }
        });
    }
    displayLogo(){
        console.log("here");
        this.addMenuLogoListener();
        this.addBlackScreenListener();
        this.navInit();
        const mainWrapper = document.getElementById("main-wrapper");
        mainWrapper.appendChild(this._menuLogo);   
    }
    
}