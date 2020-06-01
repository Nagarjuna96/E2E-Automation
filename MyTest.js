describe("My Test Suite", () => {
    it("My test case", async() =>{
        
        var a=["standard_user","problem_user","performance_glitch_user"];
        var i=0
        for( i=0; i<a.length; i++){
            await browser.url("https://www.saucedemo.com/");
            var element=await browser.$('//input[@id="user-name"]');
            await element.waitForExist({timeout:5000});
            await element.setValue(a[i]);
             element=await browser.$('//input[@id="password"]');
            await element.waitForExist({timeout:5000});
            await element.setValue('secret_sauce');
             element=await browser.$('//input[@type="submit"]');
            await element.waitForExist({timeout:5000});
            await element.click();
             element=await browser.$('(//button[text()="ADD TO CART"])[1]');
            await element.waitForExist({timeout:5000});
            await element.click();
             element=await browser.$('//div[@id="shopping_cart_container"]//a');
            await element.waitForExist({timeout:5000});
            await element.click();
             element=await browser.$('//a[text()="CHECKOUT"]');
            await element.waitForExist({timeout:5000});
            await element.click();
             element=await browser.$('//input[@id="first-name"]');
            await element.waitForExist({timeout:5000});
            await element.setValue("Nagarjuna");
             element=await browser.$('//input[@id="last-name"]');
            await element.waitForExist({timeout:5000});
            await element.setValue("Konanki");
             element=await browser.$('//input[@id="postal-code"]');
            await element.waitForExist({timeout:5000});
            await element.setValue("523226");
             element=await browser.$('//input[@value="CONTINUE"]');
            await element.waitForExist({timeout:5000});
            await element.click();
             element=await browser.$('//a[text()="FINISH"]');
            await element.click();
             element=await browser.$('//button[text()="Open Menu"]');
            await element.click();
            await element.waitForExist({timeout:5000});
             element=await browser.$('//a[text()="Logout"]');
            await element.click();
            
            


        }
       
    })
})