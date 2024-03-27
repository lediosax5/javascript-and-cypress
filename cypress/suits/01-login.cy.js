// -Imports
//import { it } from "node:test";
import headerPage from "../pageObjet/headerPage";
import loginPage from "../pageObjet/loginPage";
import navPage from "../pageObjet/navPage";
import registerPage from "../pageObjet/registerPage";

// -Constants
const homePage = "index.php?route=common/home";
const firstName = "Guido";
const lastName = "Piaggio";
const email = "guidopiaggio@hotmail.es";
const telephone = "+541135167932";
const password = "password";

// -Tests
describe("Negative login", function(){
    it("empty fields", function(){
        cy.visit(homePage);
        navPage.clickRegisterBtn()
        registerPage.typeName(firstName)
        registerPage.clickYesSuscribeBox()
        registerPage.clickNoSuscribeBox()
        registerPage.clickPrivacyBox()
        registerPage.clickContinueBtn()
    });
    it("empty password",function(){
        cy.visit(homePage);
        navPage.clickLoginBtn()
    });
    it("empty user",function(){
        cy.visit(homePage);
        navPage.clickContactBtn();
    });
    it("invalid fields",function(){
        cy.visit("");
    });
})
describe("Positive login", function(){
    it("correct user", function(){
        cy.visit(homePage);
        
    });
})
