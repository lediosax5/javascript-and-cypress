// -Constants
const lastName = '#input-lastname';
const name = '#input-firstname';
const email = '#input-email';
const telephone = '#input-telephone';
const password = '#input-password';
const passwordConfirm = '#input-confirm';
const yesSuscribeBox = '.col-sm-10 > :nth-child(1) > input';
const noSuscribeBox = '.col-sm-10 > :nth-child(2) > input';
const privacyBox = '[type="checkbox"]';
const continueBtn = '.pull-right > .btn';

// -Tests
class registerPage{
    typeName (String){
        cy.get(name).should('have.attr', 'placeholder', 'First Name').click();
        cy.get(name).type(String);
    }

    typeLastName (String){
        cy.get(lastName).should('have.attr', 'placeholder', 'Last Name').click();
        cy.get(lastName).type(String);
    }

    typeEmail (String){
        cy.get(email).should('have.attr', 'placeholder', 'E-Mail').click();
        cy.get(email).type(String);
    }

    typeTelephone (String){
        cy.get(telephone).should('have.attr', 'placeholder', 'Telephone').click();
        cy.get(telephone).type(String);
    }

    typePassword (String){
        cy.get(password).should('have.attr', 'placeholder', 'Password').click();
        cy.get(password).type(String);
    }

    typePasswordConfirm (String){
        cy.get(passwordConfirm).should('have.attr', 'placeholder', 'Password Confirm').click();
        cy.get(passwordConfirm).type(String);
    }

    clickYesSuscribeBox (){
        cy.get(yesSuscribeBox).should('have.attr', 'value', '1').click();
    }

    clickNoSuscribeBox (){
        cy.get(noSuscribeBox).should('have.attr', 'value', '0').click();
    }

    clickPrivacyBox (){
        cy.get(privacyBox).should("have.attr","type", "checkbox").click();
    }

    clickContinueBtn (){
        cy.get(continueBtn).should("have.attr", "value", "Continue").and('have.class', 'btn').click();
    }
}

// -Export
export default new registerPage()
