package stepDefinations;


import org.openqa.selenium.WebDriver;

import commonFunction.FunctionLibrary;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
public class StepDefination {
	WebDriver driver;
	@Given("^user navigets to the browser$")
	public void launchBrowser() throws Throwable {
		driver = FunctionLibrary.startBrowser();
	    
	}

	@When("^user launch URL \"([^\"]*)\" in the browser$")
	public void launchUrl(String Url) throws Throwable {
		FunctionLibrary.openUrl(Url);
	    
	}

	@When("^user wait for username with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void waitForUsername(String LocatorType, String LocatorValue) throws Throwable {
	   FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("^user enter username with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterUsername(String LocatorType, String LocatorValue, String TestData) throws Throwable {
	    FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user enter password with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterPassword(String LocatorType, String LocatorValue, String TestData) throws Throwable {
	   FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user click login button with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clickLoginButton(String LocatorType, String LocatorValue) throws Throwable {
		FunctionLibrary.clickAction(LocatorType, LocatorValue);
	    
	}

	@When("^user wait for supplier link with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void waitForSupplierLink(String LocatorType, String LocatorValue) throws Throwable {
	   FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("^user click supplier link with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clickSupplierLink(String LocatorType, String LocatorValue) throws Throwable {
	    FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("^user wait for Add icon \"([^\"]*)\" and \"([^\"]*)\"$")
	public void waitForAddIcon(String LocatorType, String LocatorValue) throws Throwable {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	   
	}

	@When("^user clck Add icon \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clickAddIcon(String LocatorType, String LocatorValue) throws Throwable {
	   FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("^user wait for supplier Number with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void waitForSupplierNumber(String LocatorType, String LocatorValue) throws Throwable {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	   
	}

	@When("^user capture suppplier Number with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void captureSuppplierNumber(String LocatorType, String LocatorValue) throws Throwable {
	    FunctionLibrary.captureSup(LocatorType, LocatorValue);
	}

	@When("^user enter suppplier Name with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void supplierName(String LocatorType, String LocatorValue, String TestData) throws Throwable {
		FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	    
	}
	@When("^user enter suppplier Address with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterAddress(String LocatorType, String LocatorValue, String TestData) throws Throwable {
	    FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user enter suppplier city with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterCity(String LocatorType, String LocatorValue, String TestData) throws Throwable {
	   FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user enter Country with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterCountry(String LocatorType, String LocatorValue, String TestData) throws Throwable {
		FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user enter Cperson with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterCperson(String LocatorType, String LocatorValue, String TestData) throws Throwable {
		FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user enter Pnumber with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterPnumber(String LocatorType, String LocatorValue, String TestData) throws Throwable {
		FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user enter Email with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterEmail(String LocatorType, String LocatorValue, String TestData) throws Throwable {
		FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user enter Mnumber with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterMnumber(String LocatorType, String LocatorValue, String TestData) throws Throwable {
		FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("^user enter Notes with \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterNotes(String LocatorType, String LocatorValue, String TestData) throws Throwable {
		FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	

	@When("^user click Add button with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clickAddButton(String LocatorType, String LocatorValue) throws Throwable {
		FunctionLibrary.clickAction(LocatorType, LocatorValue);
		
	   
	}

	@When("^user wait for confirm ok button with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void waitForConfirmOkButton(String LocatorType, String LocatorValue) throws Throwable {
	    FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("^user click on confirm ok buton with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clickConfirmOkButton(String LocatorType, String LocatorValue) throws Throwable {
	    FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("^user Wait for Alert ok button with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void waitForAlertOkButtom(String LocatorType, String LocatorValue) throws Throwable {
	   FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("^user click Alert ok button with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clcikAlertOkButton(String LocatorType, String LocatorValue) throws Throwable {
	    FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("^Validate supplier table$")
	public void supplierTable() throws Throwable {
	   FunctionLibrary.supplerTable();
	}

	@When("^user click logout link with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clickLogout(String LocatorType, String LocatorValue) throws Throwable {
	   FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("^close browser$")
	public void closeBrowser() throws Throwable {
		FunctionLibrary.closeBrowser();
	   
	}
	

}
