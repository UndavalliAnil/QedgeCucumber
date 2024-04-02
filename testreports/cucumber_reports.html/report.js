$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("supplier.feature");
formatter.feature({
  "line": 2,
  "name": "As Admin user login to the Stock project",
  "description": "and should validate supplier",
  "id": "as-admin-user-login-to-the-stock-project",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Validate supplier with mutiple data",
  "description": "",
  "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigets to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user launch URL \"http://webapp.qedgetech.com/\" in the browser",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user wait for username with \"name\" and \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user wait for supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user wait for Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clck Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user capture suppplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter suppplier Name with \"id\" and \"x_Supplier_Name\" and \"\u003cSupplierName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter suppplier Address with \"xapth\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\" and \"\u003cAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enter suppplier city with \"xapth\" and \"//input[@id\u003d\u0027x_City\u0027]\" and \"\u003cCity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enter Country with \"xapth\" and \"//input[@id\u003d\u0027x_Country\u0027]\" and \"\u003cCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter Cperson with \"xapth\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\" and \"\u003cCperson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enter Pnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\" and \"\u003cPnumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enter Email with \"xapth\" and \"//input[@id\u003d\u0027x__Email\u0027]\" and \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enter Mnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\" and \"\u003cMnumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter Notes with \"xapth\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\" and \"\u003cNotes\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user click Add button with \"id\" and \"//button[@id\u003d\u0027btnAction\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user wait for confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on confirm ok buton with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Wait for Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate supplier table",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user click logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "When "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;",
  "rows": [
    {
      "cells": [
        "SupplierName",
        "Address",
        "City",
        "Country",
        "Cperson",
        "Pnumber",
        "Email",
        "Mnumber",
        "Notes"
      ],
      "line": 38,
      "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;1"
    },
    {
      "cells": [
        "Anil1",
        "Ameerpet",
        "Hyderabad",
        "India",
        "Qedge1",
        "9857485964",
        "Test@gmail.com",
        "Supply Goods",
        ""
      ],
      "line": 39,
      "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;2"
    },
    {
      "cells": [
        "Anil2",
        "Ameerpet",
        "Hyderabad",
        "India",
        "Qedge1",
        "9857485964",
        "Test@gmail.com",
        "Supply Goods",
        ""
      ],
      "line": 40,
      "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;3"
    },
    {
      "cells": [
        "Anil3",
        "Ameerpet",
        "Hyderabad",
        "India",
        "Qedge1",
        "9857485964",
        "Test@gmail.com",
        "Supply Goods",
        ""
      ],
      "line": 41,
      "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;4"
    },
    {
      "cells": [
        "Anil4",
        "Ameerpet",
        "Hyderabad",
        "India",
        "Qedge1",
        "9857485964",
        "Test@gmail.com",
        "Supply Goods",
        ""
      ],
      "line": 42,
      "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;5"
    },
    {
      "cells": [
        "Anil5",
        "Ameerpet",
        "Hyderabad",
        "India",
        "Qedge1",
        "9857485964",
        "Test@gmail.com",
        "Supply Goods",
        ""
      ],
      "line": 43,
      "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;6"
    },
    {
      "cells": [
        "Anil6",
        "Ameerpet",
        "Hyderabad",
        "India",
        "Qedge1",
        "9857485964",
        "Test@gmail.com",
        "Supply Goods",
        ""
      ],
      "line": 44,
      "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Validate supplier with mutiple data",
  "description": "",
  "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigets to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user launch URL \"http://webapp.qedgetech.com/\" in the browser",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user wait for username with \"name\" and \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user wait for supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user wait for Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clck Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user capture suppplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter suppplier Name with \"id\" and \"x_Supplier_Name\" and \"Anil1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter suppplier Address with \"xapth\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\" and \"Ameerpet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enter suppplier city with \"xapth\" and \"//input[@id\u003d\u0027x_City\u0027]\" and \"Hyderabad\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enter Country with \"xapth\" and \"//input[@id\u003d\u0027x_Country\u0027]\" and \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter Cperson with \"xapth\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\" and \"Qedge1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enter Pnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\" and \"9857485964\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enter Email with \"xapth\" and \"//input[@id\u003d\u0027x__Email\u0027]\" and \"Test@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enter Mnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\" and \"Supply Goods\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter Notes with \"xapth\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\" and \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user click Add button with \"id\" and \"//button[@id\u003d\u0027btnAction\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user wait for confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on confirm ok buton with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Wait for Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate supplier table",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user click logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 40,
  "name": "Validate supplier with mutiple data",
  "description": "",
  "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigets to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user launch URL \"http://webapp.qedgetech.com/\" in the browser",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user wait for username with \"name\" and \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user wait for supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user wait for Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clck Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user capture suppplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter suppplier Name with \"id\" and \"x_Supplier_Name\" and \"Anil2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter suppplier Address with \"xapth\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\" and \"Ameerpet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enter suppplier city with \"xapth\" and \"//input[@id\u003d\u0027x_City\u0027]\" and \"Hyderabad\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enter Country with \"xapth\" and \"//input[@id\u003d\u0027x_Country\u0027]\" and \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter Cperson with \"xapth\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\" and \"Qedge1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enter Pnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\" and \"9857485964\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enter Email with \"xapth\" and \"//input[@id\u003d\u0027x__Email\u0027]\" and \"Test@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enter Mnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\" and \"Supply Goods\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter Notes with \"xapth\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\" and \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user click Add button with \"id\" and \"//button[@id\u003d\u0027btnAction\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user wait for confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on confirm ok buton with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Wait for Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate supplier table",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user click logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 41,
  "name": "Validate supplier with mutiple data",
  "description": "",
  "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigets to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user launch URL \"http://webapp.qedgetech.com/\" in the browser",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user wait for username with \"name\" and \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user wait for supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user wait for Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clck Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user capture suppplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter suppplier Name with \"id\" and \"x_Supplier_Name\" and \"Anil3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter suppplier Address with \"xapth\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\" and \"Ameerpet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enter suppplier city with \"xapth\" and \"//input[@id\u003d\u0027x_City\u0027]\" and \"Hyderabad\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enter Country with \"xapth\" and \"//input[@id\u003d\u0027x_Country\u0027]\" and \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter Cperson with \"xapth\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\" and \"Qedge1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enter Pnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\" and \"9857485964\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enter Email with \"xapth\" and \"//input[@id\u003d\u0027x__Email\u0027]\" and \"Test@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enter Mnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\" and \"Supply Goods\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter Notes with \"xapth\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\" and \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user click Add button with \"id\" and \"//button[@id\u003d\u0027btnAction\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user wait for confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on confirm ok buton with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Wait for Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate supplier table",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user click logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 42,
  "name": "Validate supplier with mutiple data",
  "description": "",
  "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigets to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user launch URL \"http://webapp.qedgetech.com/\" in the browser",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user wait for username with \"name\" and \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user wait for supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user wait for Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clck Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user capture suppplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter suppplier Name with \"id\" and \"x_Supplier_Name\" and \"Anil4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter suppplier Address with \"xapth\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\" and \"Ameerpet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enter suppplier city with \"xapth\" and \"//input[@id\u003d\u0027x_City\u0027]\" and \"Hyderabad\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enter Country with \"xapth\" and \"//input[@id\u003d\u0027x_Country\u0027]\" and \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter Cperson with \"xapth\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\" and \"Qedge1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enter Pnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\" and \"9857485964\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enter Email with \"xapth\" and \"//input[@id\u003d\u0027x__Email\u0027]\" and \"Test@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enter Mnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\" and \"Supply Goods\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter Notes with \"xapth\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\" and \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user click Add button with \"id\" and \"//button[@id\u003d\u0027btnAction\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user wait for confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on confirm ok buton with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Wait for Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate supplier table",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user click logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 43,
  "name": "Validate supplier with mutiple data",
  "description": "",
  "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigets to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user launch URL \"http://webapp.qedgetech.com/\" in the browser",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user wait for username with \"name\" and \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user wait for supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user wait for Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clck Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user capture suppplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter suppplier Name with \"id\" and \"x_Supplier_Name\" and \"Anil5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter suppplier Address with \"xapth\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\" and \"Ameerpet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enter suppplier city with \"xapth\" and \"//input[@id\u003d\u0027x_City\u0027]\" and \"Hyderabad\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enter Country with \"xapth\" and \"//input[@id\u003d\u0027x_Country\u0027]\" and \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter Cperson with \"xapth\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\" and \"Qedge1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enter Pnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\" and \"9857485964\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enter Email with \"xapth\" and \"//input[@id\u003d\u0027x__Email\u0027]\" and \"Test@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enter Mnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\" and \"Supply Goods\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter Notes with \"xapth\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\" and \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user click Add button with \"id\" and \"//button[@id\u003d\u0027btnAction\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user wait for confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on confirm ok buton with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Wait for Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate supplier table",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user click logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 44,
  "name": "Validate supplier with mutiple data",
  "description": "",
  "id": "as-admin-user-login-to-the-stock-project;validate-supplier-with-mutiple-data;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigets to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user launch URL \"http://webapp.qedgetech.com/\" in the browser",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user wait for username with \"name\" and \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user wait for supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click supplier link with \"xpath\" and \"(//a[starts-with(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user wait for Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clck Add icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user capture suppplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter suppplier Name with \"id\" and \"x_Supplier_Name\" and \"Anil6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter suppplier Address with \"xapth\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\" and \"Ameerpet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enter suppplier city with \"xapth\" and \"//input[@id\u003d\u0027x_City\u0027]\" and \"Hyderabad\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enter Country with \"xapth\" and \"//input[@id\u003d\u0027x_Country\u0027]\" and \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter Cperson with \"xapth\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\" and \"Qedge1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enter Pnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\" and \"9857485964\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enter Email with \"xapth\" and \"//input[@id\u003d\u0027x__Email\u0027]\" and \"Test@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enter Mnumber with \"xapth\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\" and \"Supply Goods\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter Notes with \"xapth\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\" and \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user click Add button with \"id\" and \"//button[@id\u003d\u0027btnAction\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user wait for confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on confirm ok buton with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Wait for Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click Alert ok button with \"xpath\" and \"//button[@class\u003d\u0027ajs-button btn btn-primary\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate supplier table",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user click logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});