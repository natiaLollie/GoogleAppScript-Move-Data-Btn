/**
 * 
 * Version: 1.2
 * Intended for intermediate users.
 * Beginners, please see version 1.2 where the code is broken down line by line.
 * 
 * 
 * Script Purpose: 
 * 
 * When a user inputs data into certain cells on "Sheet 1"; wait for them to click the "Submit" button; then send the input data to the first empty row on "Sheet 2".
 * After that create a new empty row.
 * Then reset the data in "Sheet 1" back to its defaults; and wait for new input data.
 * 
 * 
 */


function inputData() {

    /** TASK: GET SPREADSHEET SHEETS  */
    let ss = SpreadsheetApp.getActiveSpreadsheet(); 
    let sheet1 = ss.getSheetByName('Sheet 1'); 
    let sheet2 = ss.getSheetByName('Sheet 2'); 

    /** TASK: GET CELL DATA TO BE COPIED */
    let category = sheet1.getRange('A14').getValue(); 
    let description = sheet1.getRange('B15').getValue();
    let amount = sheet1.getRange('B16').getValue();
    let date = sheet1.getRange('B17').getValue();

    /** LOG: COPIED DATA */ 
    console.log(   
    `
    Category: ${category} 
    Description: ${description} 
    Amount: ${amount} 
    Date: ${date};
    `
    ); 

    /** TASK: GET LAST ROW CONTAINING DATA */
    let lastRow = sheet2.getLastRow(); 
    console.log(`the last row that contains data is Row#${lastRow}`); 



    pasteInputData(lastRow); 



    function pasteInputData() {   

        lastRow++; 
        

        /** TASK: GET CELLS TO PASTE DATA IN */
        let col_A = "A" + lastRow; 
        let col_B = "B" + lastRow;
        let col_C = "C" + lastRow;
        let col_D = "D" + lastRow;

        console.log(`current cells to paste to: ${col_A}, ${col_B}, ${col_C}, ${col_D}`); 

        /** TASK: PASTE DATA TO CELL */
        sheet2.getRange(col_A).setValue(category); 
        sheet2.getRange(col_B).setValue(description);
        sheet2.getRange(col_C).setValue(amount);
        sheet2.getRange(col_D).setValue(date);

        /** TASK: INCREMENT LAST ROW BY +1 */
        lastRow++; 

        console.log(`the next empty row to put data into is Row#${lastRow}`); 

        let clear; 

        clearInputData(clear = 'yes'); 
    } 

    function clearInputData() { 
        if (clear = 'yes') {
            /** RESET ORIGINAL ORIGINAL INPUT DATA TO DEFAULT */
            sheet1.getRange('A14').setValue('** Select Category **'); 
            sheet1.getRange('B15').setValue('enter description');
            sheet1.getRange('B16').setValue('enter amount');
            sheet1.getRange('B17').setValue('enter date');
        } else { } 
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


