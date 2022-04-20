/**
 * 
 * Version: 1.1 
 * Intended for beginner users.
 * Intermediate, please see version 1.2 where the code is cleared of explanatory comments.
 * 
 * 
 * Script Purpose: 
 * 
 * When a user inputs data into certain cells on "Sheet 1"; wait for them to click the "Submit" button; then send the input data to the first empty row on "Sheet 2".
 * After that create a new empty row.
 * Then reset the data in "Sheet 1" back to its defaults; and wait for new input data.
 * 
 * 
 * Pre-Setup
 * 
 * Before you can use the code, you must add the code to a google app script file and create a submission button on your "sheet 1".
 * Create the google app script file by going to "extensions > app script > Files + > Script" and then naming the file and paste in the code below.
 * Create the submission button on your excel "sheet 1", by going to "insert > drawing" and using the shape and text tool to create the button. Then "Save and Close".
 * Last, right click on the button and select "assign script" and enter the function name of this script "inputData".
 * 
 * 
 * Important Notes: 
 * 
 * 1. The purpose of the console log function in this code example is for educational and debugging purposes. The console log funtions have been detailed to show the 
 * exactly what data was input and which row/cell the function is currently on. The console log can also make it easier to track/debug an errors should they arise.
 * Feel free to comment out or delete the console log functions as neeeded.
 * 
 * 2. When using this code for your own google app script projects, please use the tool "rename symbol " to rename the code to your shees and/or cell name. 
 * To use the "Rename Symbol" tool, highlight the sheet/cell name you would like to replace and then right click inside the google scripts editor and select "rename symbol".
 * Note the purpose of the "rename symbol" tool will allow you to rename sheets or cells, all at once, each time it appears in the code without creating errors.
 * 
 * 3. This script works for dropdown menu selections as well. Please be sure to place the dropdown menu in both "sheet 1" and "sheet 2"
 */


function inputData() {

    /** TASK: GET SPREADSHEET SHEETS  */
    let ss = SpreadsheetApp.getActiveSpreadsheet(); //get google spreadsheet
    let sheet1 = ss.getSheetByName('Sheet 1'); // get google "sheet 1" (the sheet we will pull data from)
    let sheet2 = ss.getSheetByName('Sheet 2'); // get google "sheet 2" (the sheet we will paste the data into)

    /** TASK: GET CELL DATA TO BE COPIED */
    let category = sheet1.getRange('A14').getValue(); // go to "sheet 1" and get the specific cell(s) to pull the data from.
    let description = sheet1.getRange('B15').getValue();
    let amount = sheet1.getRange('B16').getValue();
    let date = sheet1.getRange('B17').getValue();

    /** LOG: COPIED DATA */ // log the data that was input into each specific cell(s)
    console.log(   
    `
    Category: ${category} 
    Description: ${description} 
    Amount: ${amount} 
    Date: ${date};
    `
    ); 

    /** TASK: GET LAST ROW CONTAINING DATA */
    let lastRow = sheet2.getLastRow(); // go to "sheet 2" and find the row number of the last row that contains any data
    console.log(`the last row that contains data is Row#${lastRow}`); // log that row number 



    pasteInputData(lastRow); // run the function below named "pasteInputData" AND pass the last row number that contains any data through the function



    function pasteInputData() {   // start of the function that will paste the input data from "sheet 1" to "sheet 2"

        lastRow++; // each time you enter the function, take the last row number that contains any data and increment the row number by +1 (this makes sure the new data is pasted into the next empty row)
        

        /** TASK: GET CELLS TO PASTE DATA IN */
        let col_A = "A" + lastRow; // on "sheet 2" take the letter of each specific column(s) that we want to paste the data into; and concatenate (add) the empty row number that we are now on
        let col_B = "B" + lastRow;
        let col_C = "C" + lastRow;
        let col_D = "D" + lastRow;

        console.log(`current cells to paste to: ${col_A}, ${col_B}, ${col_C}, ${col_D}`); // log each cell (column + row) that we will paste data into (i.e Column A, Row 1 will show as A1)

        /** TASK: PASTE DATA TO CELL */
        sheet2.getRange(col_A).setValue(category); // on "sheet 2" get the specific cell (column + row) and set the value of that cell equal to the data we pulled from the specific cell in  "sheet 1"
        sheet2.getRange(col_B).setValue(description);
        sheet2.getRange(col_C).setValue(amount);
        sheet2.getRange(col_D).setValue(date);

        /** TASK: INCREMENT LAST ROW BY +1 */
        lastRow++; // each time you get this far, create a new empty row (so that the next time new data is submitted it is entered on the empty row)

        console.log(`the next empty row to put data into is Row#${lastRow}`); // log the next empty row that new input data should be place in when recived 

        let clear; // create/intialize a variable that contains no value (i.e the variable is equal to nothing)

        clearInputData(clear = 'yes'); /* each time that the "pasteInputData" function is completed successfully; run the function named "clearInputData" AND set the variable "clear" that contains nothing
                                        equal to 'yes'. Then pass it through the function*/
    } 

    function clearInputData() { // start of the function that will clear the input data and replace it with its default placeholder text
        if (clear = 'yes') {  // when the variable named "clear" is passed through the function check that it is equal to 'yes' and if it is then set the original input data on "sheet 1" back to its default placeholder text
            /** RESET ORIGINAL ORIGINAL INPUT DATA TO DEFAULT */
            sheet1.getRange('A14').setValue('** Select Category **'); // (note: if you have no placeholder text in the specific cell(s) on your "sheet 1", delete only the text inside of ".set value()" )
            sheet1.getRange('B15').setValue('enter description');
            sheet1.getRange('B16').setValue('enter amount');
            sheet1.getRange('B17').setValue('enter date');
        } else { } // if "clear" not equal to "yes" when pssed through, do nothing 
    }


}


/**
 * 
 * Script Created By:
 * 
 * Natia Lollie 
 * GitHub: https://github.com/natiaLollie
 * Portfolio: natialollie.success-way.co
 */


