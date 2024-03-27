// -Constants
const accountBtn = '.list-inline > .dropdown > .dropdown-toggle';
const registerBtn = '.dropdown-menu > :nth-child(1) > a';
const loginBtn = '.dropdown-menu > :nth-child(2) > a';
const contactBtn = '.list-inline > :nth-child(1) > a';
const cartBtn = ':nth-child(4) > a > .hidden-xs';

// -Tests
class navPage{
    clickRegisterBtn (){
        cy.get(accountBtn).should("contain", "My Account").click();
        cy.get(registerBtn).focused().should("have.attr", "href", "https://opencart.abstracta.us:443/index.php?route=account/account");
        cy.get(registerBtn).should("contain", "Register").click();
        cy.url().should('eq', 'https://opencart.abstracta.us/index.php?route=account/register');
    }

    clickLoginBtn (){
        cy.get(accountBtn).should("contain", "My Account").click();
        cy.get(loginBtn).focused().should("have.attr", "href", "https://opencart.abstracta.us:443/index.php?route=account/account");
        cy.get(loginBtn).should("contain", "Login").click();
        cy.url().should('eq', 'https://opencart.abstracta.us/index.php?route=account/login');
    }

    clickContactBtn (){
        cy.get('.list-inline > :nth-child(1)').should("contain", "123456789");
        cy.get(contactBtn).should("have.attr", "href", "http://opencart.abstracta.us:80/index.php?route=information/contact");
        cy.get(contactBtn).click();
        cy.url().should('eq', 'http://opencart.abstracta.us/index.php?route=information/contact');
    }
    
    clickCartBtn (){
        cy.get(cartBtn).should("contain", "Shopping Cart");
        cy.get(cartBtn).should("have.attr", "href", "http://opencart.abstracta.us:80/index.php?route=checkout/cart").click();
        cy.url().should('eq', 'http://opencart.abstracta.us/index.php?route=checkout/cart');
    }
}

// -Export
export default new navPage()
