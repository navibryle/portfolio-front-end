class Option{
    /*
    methods:
        displayOption();
    */
   constructor(logoLink,link,id){
       this._logoLink = logoLink;
       this._link = link;
       this._id = id;
   }
   getNode(){
    //will return an html node that will span the whole container
    //option css class will implement the onhover funcitonality
    let option = document.createElement('a');
    let img = document.createElement('span');
    img.className = `this._logoLink logo-size`;
    option.href = this._link;
    option.target = "_blank";
    option.id = `${this._link}${this._id}`;
    option.className = "option expand";
    option.appendChild(img);
    return option;
   }
}
class Menu{
    /*
    need to make it so that when the 
    */
    constructor(menuLogo){
        //menuLogo is the id of the menuLogo and there will be a css selector that defines its position
        this._content = [];
        this._menu = document.createElement("div");
        this._menuLogo = document.createElement("span");
        this._blackScreen = document.getElementById("black-screen");
        this._menuLogo.id = this._menuLogoId;
        this._menuLogo.className = "fas fa-bars menu-logo";
        this._menu.id = "vertical-nav";
        this._menu.className = "nav-activation-animation";
        this._isActive = false;
        this._navParentId = "nav-parent";
        this._menuLogoId = menuLogo;
    }
    addContent(logoLink,link,id){
        var newOption = new Option(logoLink,link,id);
        this._content.push(newOption);
    }
    isActive(){
        return this._isActive;
    }
    initNav(){
        const verticalNav = document.getElementById(this._menu.id);
        for (var i = 0;i<this._content.length;i++){
            verticalNav.appendChild(this._content[i].getNode())
        }
    }
    activate(){
        /*
        screen turns black and navbar comesout successfully
        */
       var parent = document.getElementById(this._navParentId);
       for (var i = 0;i<this._content.length;i++){
        this._menu.appendChild(this._content[i].getNode());
        }
        
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
        var object = this;
        setTimeout(function(){
            parent.removeChild(child);
            object._menu.classList.remove("nav-deactivation-animation");
        },150);
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
        this.addMenuLogoListener();
        this.addBlackScreenListener();
        const mainWrapper = document.getElementById("main-wrapper");
        mainWrapper.appendChild(this._menuLogo);
    }
    
}