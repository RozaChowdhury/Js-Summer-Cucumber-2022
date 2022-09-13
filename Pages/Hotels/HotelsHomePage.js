const Commands = require("../Commands")

class HotelsHomePage {

    commands = new Commands();
    //locator
    learnAboutLinkLocator = '//a[contains(text(),"Learn about Hotels.com")]'
    joinNowLocator = "//a[text()='Join Now']"
    emailField = '#signupFormEmailInput'
    firstNameField = '#signupFormFirstNameInput'
    lastNameField = '#signupFormLastNameInput'
    passwordField = '#signupFormPasswordInput'


    //functions
    async clickOnLearnAboutLink(){
        /**
         * scroll page
         * click locator
         */

        await this.commands.scrollAndClickWebElement(this.learnAboutLinkLocator);

    }
    async windowCount(){
        return this.commands.getWindowsCount();
    }
    async clickJoinNow(){
        // await this.commands.scrollAndClickWebElement(this.joinNowLocator);
        // await this.commands.getCurrentWindowHandle(handle);
        await this.commands.scrollAndClickWebElement(this.joinNowLocator);
    }
    async verifyEmptyEmail(){
        return await this.commands.isWebElementDisplayed(this.emailField);
    }


}

module.exports = HotelsHomePage;