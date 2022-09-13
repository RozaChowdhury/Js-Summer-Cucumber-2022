const Commands = require("../Commands")

class Loginpage{

    commands = new Commands();
    //locators
     loginErrorlocator = '//div[contains(text(), "The email or mobile")]';



    //functions
    /**
     * function to get if error is displayed
     */

    async isLoginErrorDisplayed(){
        const loginErrMsg = this.commands.getTextFromWebElement(this.loginErrorlocator);
        return await this.commands.isWebElementDisplayed(this.loginErrMsg);
    }

}
module.exports = Loginpage;