const moment = require("moment");
const Commands = require("../Commands");
const {expect} = require("chai");

//I verify timeline has 12 data point with 2 hour gap from current hour
class DarkskyHomepage{
    //locator
    commands = new Commands;
    hoursLocator = '//span[@class="hour"]'
    addBtnLocators = '//span[@class="toggle"]//span[@class="open"]'


    //functions
    async verifyTwoHourGap(){
        const hours = await this.commands.findWebElements(this.hoursLocator);
        const array = [];
        const newarray = [];
        const compare = [];

        for (const hour of hours){
            array.push(await this.commands.getTextFromWebElement(hour));
        }
        
        // array[0].substring(0,3);
        for(let i = 0 ; i<= 10 ; i++){
            if(array[i].includes('a')){
                const h = array[i].split('a');
                newarray.push(h[0]);
            }
            else{
                const h = array[i].split('p');
                newarray.push(h[0]);
            }
        }
        console.log(newarray);
        const now = moment().format('h');
        console.log(`\n\n${now}\n\n`);

        for(let num = now ; compare.length<=10 ; num++){
            if(num > 12){
                num = 1;
            }
            compare.push(num);
        }
        // console.log(`\n\n${compare}\n\n`);
        const compareWith = ["''",compare[2],"''",compare[4], "''",compare[6], "''",compare[8], "''",compare[10], "''" ]
        console.log(`\n\n${compareWith}\n\n`);
        expect(await compareWith,'Not 2 hour intervals').to.be.eql(newarray);
    }
    async clickAddButton(){
        //save locators in array
        //get index 0
        //scroll and click
        const addBtns = this.commands.findWebElements(this.addBtnLocators);
        const addBtn = addBtns[0];
        await this.commands.scrollAndClickWebElement(addBtn);
    }


}
module.exports = DarkskyHomepage;