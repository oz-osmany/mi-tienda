import $ from 'jquery';
class MobileMenu {
    constructor() {
    this.menuIcon=$(".site-header__icon-menu");

    this.events();
    }
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    toggleTheMenu(){
        this.menuIcon.toggleClass("site-header__icon-menu__close-x");

    }




}
export default MobileMenu;