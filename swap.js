'use strict';

const readline = require('readline');
const express = require('express');
const bp = require('body-parser');
  

let app = express();
    app.use(bp.json());
    app.use(bp.urlencoded({extended: true}));
//let arr = [],
  //  swapNums = [],
//    i = 1;
    
app.post('/app/list', (req, res) =>{
   console.log(req.body.data); 
   res.send('All good man');
});

app.listen(6000);
/*const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });*/

//Function that generates the list of values. Checkes for duplicates, list can be a mix of ints and strings.
/*function getUserInput(){
    rl.question('Value'+' '+i+': ', (answer) =>{
        if(arr.includes(answer)){
            console.log('\nWoops! Sorry, no duplicate values. Please try again.\n');
            getUserInput();
        }
        else{
            arr.push(answer);
            i++;  
            
        if(arr.length == 10){
            console.log('\nYour values looks like this: '+'\n\n'+arr+' '+'\n');
            swapValues(arr);
        }
        else{
            getUserInput();
        }
      }
   }); 
};*/

//Function that gets the two values to swap from the user. Swaps the values and prints the new ordered list.
/*
function swapValues(numericList){
    console.log('Please enter one of the values from the list you wish to swap:\n')
    rl.question('Value:', (answer) =>{
        if(numericList.includes(answer)){
            swapNums.push(answer);
            if(swapNums.length == 2){
                rl.close();
                let answer1 = numericList.indexOf(swapNums[0]),
                    answer2 = numericList.indexOf(swapNums[1]);
                
                    numericList[answer1] = swapNums[1];
                    numericList[answer2] = swapNums[0];

                console.log('\nThe new swapped list is:\n\n'+numericList+'\n');
            }
            else{
                swapValues(numericList);
            }     
           }
        else{
            console.log('\n'+'Woops! It seems you entered a value that is not in the list. Please try again. \n');
            swapValues(numericList);
        }
    });
};
*/

//Start it off.
//console.log('\nPlease enter 10 values below:\n\n');
//getUserInput(i);
