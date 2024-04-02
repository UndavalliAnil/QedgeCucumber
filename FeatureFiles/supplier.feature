@tag
Feature: As Admin user login to the Stock project
  and should validate supplier

  @supplier
  Scenario Outline: Validate supplier with mutiple data
    Given user navigets to the browser
    When user launch URL "http://webapp.qedgetech.com/" in the browser
    When user wait for username with "name" and "username"
    When user enter username with "name" and "username" and "admin"
    When user enter password with "xpath" and "//input[@id='password']" and "master"
    When user click login button with "id" and "btnsubmit"
    When user wait for supplier link with "xpath" and "(//a[starts-with(text(),'Suppliers')])[2]"
    When user click supplier link with "xpath" and "(//a[starts-with(text(),'Suppliers')])[2]"
    When user wait for Add icon "xpath" and "(//span[@data-caption='Add'])[1]"
    When user clck Add icon "xpath" and "(//span[@data-caption='Add'])[1]"
    When user wait for supplier Number with "name" and "x_Supplier_Number"
    When user capture suppplier Number with "name" and "x_Supplier_Number"
    When user enter suppplier Name with "id" and "x_Supplier_Name" and "<SupplierName>"
    When user enter suppplier Address with "id" and "x_Address" and "<Address>"
    When user enter suppplier city with "xpath" and "//input[@id='x_City']" and "<City>"
    When user enter Country with "xpath" and "//input[@id='x_Country']" and "<Country>"
    When user enter Cperson with "xpath" and "//input[@id='x_Contact_Person']" and "<Cperson>"
    When user enter Pnumber with "xpath" and "//input[@id='x_Phone_Number']" and "<Pnumber>"
    When user enter Email with "xpath" and "//input[@id='x__Email']" and "<Email>"
    When user enter Mnumber with "xpath" and "//input[@id='x_Mobile_Number']" and "<Mnumber>"
    When user enter Notes with "xpath" and "//textarea[@id='x_Notes']" and "<Notes>"
    When user click Add button with "id" and "btnAction"
    When user wait for confirm ok button with "xpath" and "//button[normalize-space()='OK!']"
    When user click on confirm ok buton with "xpath" and "//button[normalize-space()='OK!']"
    When user Wait for Alert ok button with "xpath" and "//button[@class='ajs-button btn btn-primary']"
    When user click Alert ok button with "xpath" and "//button[@class='ajs-button btn btn-primary']"
    When Validate supplier table
    When user click logout link with "xpath" and "(//a[starts-with(text(),' Logout')])[2]"
    When close browser

    Examples: 
      | SupplierName | Address  | City      | Country | Cperson | Pnumber    | Email          | Mnumber      | Notes |
      | Anil1        | Ameerpet | Hyderabad | India   | Qedge1  | 9857485964 | Test@gmail.com | 9857485964 |Supply Goods|
      | Anil2        | Ameerpet | Hyderabad | India   | Qedge1  | 9857485964 | Test@gmail.com | 9857485964 |Supply Goods|
     
