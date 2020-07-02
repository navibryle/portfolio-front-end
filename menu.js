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
    onclick of the menu change it to x
        addContent();
        activate();
        deactivate();
        displayAllContent();
        displayLogo();
    */
    constructor(){
        this._content = [];
        this._menu = document.createElement("div");
        this._menu.id = "vertical-nav";
        this._menu.className = "nav-activation-animation";
        this._isActive = false;
        this._parentId = "verical-nav";
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
        /*a navigatin bar that will take up half the screen will appear 
        */
       var parent = document.getElementById(this._parentId);
       for (var i = 0;i<this._content.length;i++){
        this._menu.appendChild(this._content[i].getNode())
    }
       parent.appendChild(this._menu);
        
    }
    deactivate(){
        //this class will just delete the nav from the dom tree
        //might need to create a method that checks if the menu needs to be deactivated
        var parent = document.getElementById(this._parentId);
        var child = document.getElementById(this._menu.id);
        parent.removeChild(child);
    }
    displayLogo(){
        const menuLogo = document.createElement("span");
        const mainWrapper = document.getElementById("main-wrapper");
        menuLogo.id = "menu-logo";
        menuLogo.className = "fas fa-bars center menu-logo";
        mainWrapper.appendChild(menuLogo);
    }
    getNode(){
        return this._menu;
    }
}