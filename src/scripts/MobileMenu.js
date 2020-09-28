import $ from 'jquery';
class MobileMenu {
    constructor() {
        this.menuIcon=$(".site-header__icon-menu");
        this.menuNav=$(".nav");
        this.prodMenu=$(".submenu");

    this.events();
    this.slideEvent();
    }
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    slideEvent(){
        $(".submenu").click(function (){

            $(this).children("ul").slideToggle();


        })


        $("ul").click(function (p){
            p.stopPropagation();
        })
    }

    toggleTheMenu(){

        this.menuNav.toggleClass("nav__visible");
        this.menuIcon.toggleClass("site-header__icon-menu__close-x");
        $("li.submenu").toggleClass("submenu__gg");
    }


}
export default MobileMenu;