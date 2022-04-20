--------------------
# Table of Contents 
--------------------

## Overview

### Project Built With

#### About the Files Versions

##### Process Overview

###### Notes / Resources 

####### Continued Development 



< >


## Overview
--------------------


Howdy there! This script is intended for beginners to Google App Script and well... Javascript. The purpose of the script is to take data from one google sheet and deposit it into another sheet upon the click of a button!! I came about coding this solution when attempting to create a google sheet "dashboard" for my financial budget tracker. The dashboard has a small randomized section, where the user inputs their purchase: by selecting a category from the dropdown menu, inputting a description of the purchase, amount, and finally the date of purchase. Once the submission button is clicked the data is sent to another google sheet that holds all of the purchases for the month. And Last, the dashboard is then reset to the default placeholder text and awaits for the next purchase input. When looking across the web; many, if not all, solutions I came across were for moving entire rows, columms, or sheets. So for those of you who need it here is a script that is easy to follow, simple to change, and great for moving the data of a few cells into a single row. 

	This code snippet is intended for those who are:

	▪ Only looking to move a small amount of data from specific cells (recommended max: 10 cells) to another sheet
	▪ Or are a beginner in need of a line by line explanation 
	▪ Or are simply looking for a more simple/vanilla way of making this functionaility happen 


Note: This code snippet is best used for those users who would like to copy/paste dynamic data for 1-10 specific cells, into a single row on another sheet. 
If you are looking to move entire rows, columns, or sheets; please feel free to use this repository to get a general understanding of how the process works; but please consider utilizing another tutorial, as this code snippet is not intended for moving large amounts of data.


Script Created By:
 
	Natia Lollie 
	GitHub: https://github.com/natiaLollie
	Portfolio: natialollie.success-way.co



### Project Built With 
-----------------------

▪ Javascript 
▪ Google App Script
▪ Google Sheets




#### About the Files Versions
------------------------------


File Version 1.1 

▪ Is intended for beginners who would like a line by line breakdown of what to do and how the code works. Version 1.1 includes a general overiew of the script, how to setup your google sheet and script file, important notes about how to alter your code, and a line by line breakdown of the code.



File Version 1.2

▪ Is intended for intermediate users who already have some idea of Google App Script, basic Javascript, and simply want to dump the cleaned version of the code into their editor.




#####  Process Overview
------------------------

▪ General Overview 

1. Create a button 
2. Paste script into editor 
3. Link button to script
4. Thats it use code!


▪ Code Overview 

1. Get the spreadsheet and sheet names 
2. Get the specific cell(s) and data from first sheet to be copied
3. Get the last row in the second sheet that contains data 
4. Paste the data from the first sheet into the first empty row on the second sheet
5. Once completed, reset the data on the first sheet back to the original placeholder text (if any)

	


######  Notes / Resources 
--------------------------

For those of you looking to move active and/or entire rows, columns, or sheets please try this script by JaredCoche on Github which can assist: https://github.com/jaredcohe/Introduction-To-Startup-Technology/blob/main/moveRows.js





####### Continued Development 
--------------------------------


For any new functionality I add to the code, or bugs/errors I find, I will come back and update this repository! 




Script Created By:
 
	Natia Lollie 
	GitHub: https://github.com/natiaLollie
	Portfolio: natialollie.success-way.co














