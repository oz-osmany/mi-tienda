import $ from 'jquery';
class MobileMenu {
    constructor() {
        this.menuIcon=$(".site-header__icon-menu");
        this.menuContent=$(".site-header__menu-content");

    this.events();
    }
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    toggleTheMenu(){
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.menuIcon.toggleClass("site-header__icon-menu__close-x");


    }




}
export default MobileMenu;