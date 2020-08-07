
/*

import Likes from './models/Likes';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
*/


//import {TotalIncomeEarned} from "./App";

import * as TotalIncomeEarnings from "./App"


// Personal allowance

// run a foreachloop to see if any number returns undefined

// export let backendtest = TotalIncomeEarned.numRent;

// export const juice = `${TotalIncomeEarned.numSelf}343`

export let xTotalNonSavings = 8600
;
let xTotalSavings = 10000;
let xTotalDividends  = 40000;
export let xTotalIncome = 86000

; //= test (xTotalDividends + xTotalNonSavings +  xTotalSavings);

export let personalAllowance;

//(function () {  
 
export function calcpersonalAllowance (a) {
if ( a //xTotalIncome 
    >= 125000)  {
  personalAllowance = 0 
} else if ( a //xTotalIncome 
    <= 100000) {
    personalAllowance = 12500
} else //( x > 100000 && x < 125000) 
{personalAllowance = 12500 - (( a //xTotalIncome 
    - 100000)/2)
};
};
        
 calcpersonalAllowance();
    
//})();

console.log(`Total Income is ${xTotalIncome}`)
console.log(`Personal Allowance is ${personalAllowance}`)
console.log(`TotalNonSaving ${xTotalNonSavings}`)



let basicRateNonsavings;
let higherRateNonsavings;

(function () {  


function calcNonSavingsBR() {
    if (xTotalNonSavings <= 12500 && xTotalIncome <= 100000){
      basicRateNonsavings = 37500  
    } else if (xTotalNonSavings >= 50000) {
        basicRateNonsavings = 0 
    } else if ( xTotalNonSavings < 50000 && xTotalNonSavings > 12500 && xTotalIncome <= 100000) {
        basicRateNonsavings = 50000 - xTotalNonSavings
    } else if (xTotalIncome >= 125000 && xTotalNonSavings <= 37500) {
        basicRateNonsavings = 37500 - xTotalNonSavings
    }
    else if ( xTotalIncome > 100000 && xTotalIncome < 125000 && personalAllowance > xTotalNonSavings)
        {
            basicRateNonsavings = 37500
    }
    else if (  xTotalIncome > 100000 && xTotalIncome < 125000 && personalAllowance <= xTotalNonSavings) {
           basicRateNonsavings = 37500 - (xTotalNonSavings - personalAllowance)
       }
};

calcNonSavingsBR();

})();


console.log( `basicRateNonsavings ${basicRateNonsavings} `);

(function () {  

function calcNonSavingsHR () {
    if ( xTotalNonSavings <= 50000){
        higherRateNonsavings = 112500
    } else if (xTotalNonSavings >= 150000) {
        higherRateNonsavings = 0
    } else if (xTotalNonSavings > 50000 && xTotalIncome <= 100000) {
        higherRateNonsavings = 162500 - xTotalNonSavings
    } else if (xTotalNonSavings > 100000 && xTotalNonSavings <= 125000) { 
    higherRateNonsavings = 112500 - (xTotalNonSavings - personalAllowance - 37500)}
    else if (xTotalNonSavings > 125000 && xTotalNonSavings <= 150000) {
        higherRateNonsavings = 150000 - xTotalNonSavings
    } else if (xTotalNonSavings > 50000 && xTotalIncome <= 125000 && xTotalIncome > 100000) {
        higherRateNonsavings = 112500 - (xTotalNonSavings - personalAllowance - 37500)
    }  else if (xTotalNonSavings > 37500 && xTotalIncome > 125000) {
        higherRateNonsavings = 112500 - (xTotalNonSavings - 37500)
    };
}

calcNonSavingsHR();

})();


console.log( 'Non Savings higher rate = ' + higherRateNonsavings);
console.log('savings = '+ xTotalSavings);


let basicRateSavings = basicRateNonsavings;
let higherRateSavings = higherRateNonsavings;

console.log('savings higher rate = ' + higherRateSavings);

let basicRateDividends = (xTotalSavings < basicRateSavings) ? (basicRateSavings - xTotalSavings) : 0 ;


   
let higherRateDividends; // IIFE function below

(function () {
    

    if (higherRateSavings != 112500 && xTotalSavings < higherRateSavings) {
        higherRateDividends = higherRateSavings - xTotalSavings
    } else if (higherRateSavings != 112500 && xTotalSavings > higherRateSavings) {
        higherRateDividends = 0 
    }  else if (higherRateSavings == 112500 && xTotalSavings > 112500) {
        higherRateDividends = 0 
    }
    else if (higherRateSavings == 112500 && xTotalSavings > basicRateSavings ) 
    
    {higherRateDividends = 112500 - (xTotalSavings - basicRateSavings )} 
     else {higherRateDividends = 112500}; 
    
})();


console.log('Dividends higher rate = ' + higherRateDividends);


    let taxat20;
    let taxat40;
    let taxat45;

(function () {

    
    function calc20 () {
        if (xTotalNonSavings >= 150000) {
            taxat20 = 37500
        } else if ((xTotalNonSavings - personalAllowance) > 37500 ) {
            taxat20 = 37500
        } else if ((xTotalNonSavings - personalAllowance) <= basicRateNonsavings && (xTotalNonSavings - personalAllowance) >0  )
        {taxat20 = xTotalNonSavings - personalAllowance
        }
         else if (xTotalIncome > 125000 && xTotalNonSavings <= 37500 ) {
            taxat20 = xTotalNonSavings
        } else if (xTotalNonSavings < 12500) {
            taxat20 = 0
        }
        else if (xTotalIncome <= 125000 && xTotalNonSavings > personalAllowance && xTotalNonSavings <= 50000)
        {
            taxat20 = xTotalNonSavings - personalAllowance
        };
        
    };

    
  
    calc20();
    console.log('taxed at 20% :' + taxat20)

  function calc40 () {
      if ((xTotalNonSavings - personalAllowance) > 37500 && xTotalNonSavings <= 150000) {
          taxat40 = xTotalNonSavings - taxat20 - personalAllowance
      } 
      else if ((xTotalNonSavings - personalAllowance) > 150000) {
          taxat40 = taxat20 + 75000
      } 
      else {taxat40 = 0}
  };

calc40();
console.log('taxed at 40% :'+ taxat40)
    
    
taxat45 = ((xTotalNonSavings - personalAllowance) > 150000) ? (xTotalNonSavings - 150000) : 0 ; 


console.log('taxed at 45% :'+ taxat45)  
    

    
})();

//console.log(taxat20 + taxat40 + taxat45);

let nonSavingstax = taxat20 + taxat40 + taxat45;

console.log(nonSavingstax);




 let taxsavings20;
 let taxsavings40;
 let taxsavings45;


 let psa;

 function calcPSA() {
    
     if (xTotalIncome <= 50000) {
         psa = 1000
     } else if (xTotalIncome <= 150000 && xTotalIncome >50000) {psa = 500} 
     else if (xTotalSavings < 1) {psa = 0}
     else {psa = 0};
 }

calcPSA()

function calcSavingsTax20 (){ 
    
    if ((taxat40 > 0)  || (xTotalIncome <= 12500) || (xTotalSavings == 0) || (xTotalSavings <= psa)) 
        { taxsavings20 = 0 } 
    
    else if (basicRateNonsavings == 37500 && xTotalIncome <= 125000 && (xTotalSavings - psa) <= basicRateNonsavings && xTotalIncome > 12500 ) {
        taxsavings20 = xTotalSavings - psa - (personalAllowance - xTotalNonSavings)
    } 
    
    else if (basicRateNonsavings == 37500 && xTotalIncome <= 100000 && (xTotalSavings - psa) > basicRateNonsavings && xTotalIncome > 12500 && xTotalNonSavings <= 12500 )
    { taxsavings20 = 37500
      //taxsavings40 = xTotalSavings - psa - 37500
    }
    
   
    
    
    // PSA
    /*
    //PSA
    
    
    else if (xTotalIncome <= 50000 && xTotalSavings <= 1000) {
        taxsavings20 = 0
    } 
        
    else if (xTotalIncome <= 50000 && xTotalSavings > 1000) {
        taxsavings20 = xTotalSavings - 1000 - (personalAllowance - xTotalNonSavings)
    } 
    
     

    // PSA
    else if (xTotalIncome <= 150000 && xTotalSavings <= 500 ) {
        taxsavings20 = 0
    } 
    
   else if (xTotalIncome <= 150000 && xTotalSavings > 500 && (xTotalSavings >= basicRateSavings)) {

    taxsavings20 = basicRateSavings,
    taxsavings40 = xTotalSavings - basicRateSavings -500} 
    
    */
    

    
    // Basic Rate Bands 
    
    /*
    
    else if ( (xTotalNonSavings + xTotalDividends) <= 17500  && xTotalSavings > 0 ) 
    {
        let zerorateSavingsredx = (17500 - (xTotalNonSavings + xTotalDividends));
        
            if ((xTotalNonSavings + xTotalDividends) > 12500  && xTotalSavings <= zerorateSavingsredx) { taxsavings20 = 0 } 
        
            else if ((xTotalNonSavings + xTotalDividends) > 12500  && xTotalSavings > zerorateSavingsredx && (xTotalSavings - zerorateSavingsredx) < basicRateSavings) 
            {  taxsavings20 = xTotalSavings - zerorateSavingsredx}
        
            else if ((xTotalNonSavings + xTotalDividends) > 12500  && xTotalSavings > zerorateSavingsredx && (xTotalSavings - zerorateSavingsredx) > basicRateSavings) 
            {taxsavings20 = basicRateSavings, taxsavings40 = xTotalSavings - basicRateSavings - zerorateSavingsredx}
        
    }  */
    
        
    else if (xTotalSavings >= basicRateSavings) {
        taxsavings20 = basicRateSavings
    } else if (xTotalSavings < basicRateSavings && xTotalNonSavings > 12500) {
        taxsavings20 = xTotalSavings
    };
    
};

 
calcSavingsTax20();



function calcSavingsTax40 () { 

if (taxat45 > 0 ) {
    taxsavings40 = 0
} else if  ((xTotalSavings - psa) > basicRateSavings && ((xTotalSavings - psa) - taxsavings20 ) <= higherRateSavings && xTotalNonSavings > 12500) {
    taxsavings40 = xTotalSavings - taxsavings20
}   
    else if (basicRateNonsavings == 37500 && xTotalIncome <= 125000 && (xTotalSavings - psa) > basicRateNonsavings && xTotalIncome > 12500 && xTotalNonSavings <= 12500 && personalAllowance >= xTotalNonSavings )
    { //taxsavings20 = 37500,
      taxsavings40 = xTotalSavings - psa - 37500 - (personalAllowance - xTotalNonSavings)
    }
    
      else if ( xTotalIncome <= 125000 && (xTotalSavings - psa) > basicRateNonsavings && xTotalIncome > 12500 && xTotalNonSavings <= 12500 && personalAllowance < xTotalNonSavings )
    {
      taxsavings40 = xTotalSavings - psa - basicRateNonsavings
    }
    
    
    /*
    else if (basicRateNonsavings == 37500 && xTotalIncome > 100000 xTotalIncome <= 125000 && (xTotalSavings - psa) > basicRateNonsavings && xTotalIncome > 12500 && xTotalNonSavings <= 12500 ) {
        
    }*/
    
    
    else if (xTotalSavings > basicRateSavings && (xTotalSavings - taxsavings20 ) > higherRateSavings) {
    taxsavings40 = higherRateSavings
}  else { taxsavings40 = 0 } ;
};


calcSavingsTax40();


function calcSavingsTax45 () { 

if ( (taxsavings20 + taxsavings40) >= xTotalSavings) {
    taxsavings45 = 0
}  else if ( taxat45 >= 1) { taxsavings45 = xTotalSavings}  
else if ((taxsavings20 + taxsavings40) < xTotalSavings && (taxsavings40 > 0) && xTotalSavings > (basicRateSavings + higherRateSavings)
    )
{ taxsavings45 = xTotalSavings - taxsavings20 - taxsavings40
} else { taxsavings45 = 0 }

};

calcSavingsTax45()

console.log(taxsavings20, taxsavings40, taxsavings45);



//let Savingstax = 

let taxdividends7;
let taxdividends32;
let taxdividends38;


function calcDividendstax7 () {

    if (xTotalIncome <= 12500 || xTotalDividends <= 2000 || taxat40 > 0 || taxsavings40 > 0 ) {
        taxdividends7 = 0
    } else if (xTotalDividends > 2000 && (xTotalDividends - 2000) <= basicRateDividends) { taxdividends7 = xTotalDividends - 2000}
    
    else if ((xTotalDividends - 2000) > basicRateDividends) {
        taxdividends7 = basicRateDividends
    } 
    else if ((xTotalNonSavings + (xTotalSavings - psa)) <= 12500 && (xTotalDividends - 2000) <= 50000 && xTotalIncome > 12500 ) {
        taxdividends7 = xTotalIncome - personalAllowance  - 2000 - psa
    };

;}


calcDividendstax7();
    


function calcDividendstax32 () {
  
    if (taxat45 >0 || taxsavings45 > 0 ) {
        taxdividends32 = 0 
    } else if ((xTotalDividends - 2000) > basicRateDividends && (xTotalDividends - taxdividends7 - 2000) <= higherRateDividends)
        taxdividends32 = xTotalDividends - 2000 - taxdividends7
     else if ((xTotalDividends - 2000) > basicRateDividends && (xTotalDividends - taxdividends7 - 2000) > higherRateDividends ) {taxdividends32 = higherRateDividends}
     else {taxdividends32 = 0 }
};


calcDividendstax32 ();


function calcDividendstax38 () {
  
    if ((calcDividendstax7 + calcDividendstax32 - 2000) >= 
        (xTotalDividends - 2000))
        {taxdividends38 = 0}
    else if ( taxat45 > 1 || taxsavings45 > 1 )
     { taxdividends38 = xTotalDividends - 2000}
    else if ((taxdividends7 + taxdividends32) < (xTotalDividends - 2000) && 
            xTotalDividends > 2000 && taxdividends32 > 0 
            
            ){xTotalDividends - 2000 - taxdividends7 - taxdividends32}
            
    else { taxdividends38 = 0 }
};



calcDividendstax38()
;

console.log(' D 7.5 % : ' + taxdividends7, ' D 32.5 % : ' + taxdividends32, ' D 38.1 % : ' +  taxdividends38);





// when doing dividends look at tax at values instead of remaining values as it will include personal savings allowance

// run catch that says if undefined do an alert that points to problem
    
// check remaining dividend rates are affected by PSA and Basic rate