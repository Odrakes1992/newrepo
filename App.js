import React, { Component, Children } from "react";
import {StyleSheet, Text, View,} from 'react-native';
import { Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

const navigateHomeButton = (event) => {window.location = "https://otistax.co.uk/"}

const myButton = (
  <Icon.Button
    name="home"
    onPress={navigateHomeButton}
    style = {{ justifyContent : 'center', backgroundColor : 'midnightblue' , backgroundSize : '20px' , alignItems : 'center', paddingLeft : 25 , }}
  >
  </Icon.Button>
);





/**
 * 
 * 
 * class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  };

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}
 * 
 * class ErrorTester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numSelf};
  }
  render() {
    if (this.state.numSelf === 50000000000) {
      // Simulate a JS error
      throw new Error('I crashed, is that a real number!');
    }
    return;
  }
};


 * 
 * 
 */








let numEmp;

let xTotalNonSavings ;
let xTotalSavings ;
let xTotalDividends ;
let xTotalIncome;


let personalAllowance;

//(function () {  
 
function calcpersonalAllowance (a) {
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
        

    
//})();


let basicRateNonsavings;
let higherRateNonsavings;
 

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


let basicRateDividends; 
let higherRateDividends; // IIFE function below

let basicRateSavings;
let higherRateSavings;
  
  function calcHRdividends () {

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

  };
  
    let taxat20;
    let taxat40;
    let taxat45;
    
    function calc20() {
      if (xTotalIncome <= 125000 && xTotalNonSavings > personalAllowance && xTotalNonSavings <= 50000)
      {
          taxat20 = xTotalNonSavings - personalAllowance
      }
      else if (xTotalNonSavings >= 150000) {
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
        else
        {
       taxat20 = 0
        };
        
    };


  function calc40 () {
      if ((xTotalNonSavings - personalAllowance) > 37500 && xTotalNonSavings <= 150000) {
          taxat40 = xTotalNonSavings - taxat20 - personalAllowance
      } 
      else if ((xTotalNonSavings - personalAllowance) > 150000) {
          taxat40 = taxat20 + 75000
      } 
      else {taxat40 = 0}
  };

 let taxsavings20;
 let taxsavings40;
 let taxsavings45;


 let psa;

 let zeroSavingsrate;

 function calczeroSavingsrate () {

    if (xTotalNonSavings >= 17500) {zeroSavingsrate = 0}
    else if (xTotalNonSavings <= 12500) { zeroSavingsrate = 5000}
    else {zeroSavingsrate = 5000 - xTotalNonSavings - personalAllowance};
 }

 function calcPSA() {
    
     if (xTotalIncome <= 50000) {
         psa = 1000
     } else if (xTotalIncome <= 150000 && xTotalIncome >50000) {psa = 500} 
     else if (xTotalSavings < 1) {psa = 0}
     else {psa = 0};
 };


function calcSavingsTax20 (){ 
    
    if ((taxat40 > 0)  || (xTotalIncome <= 12500) || (xTotalSavings == 0) || (xTotalSavings <= psa) || (xTotalNonSavings + xTotalNonSavings <= (psa + zeroSavingsrate + personalAllowance
        ))
        ) 
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

function calcSavingsTax45 () { 

if ( (taxsavings20 + taxsavings40) >= xTotalSavings) {
    taxsavings45 = 0
}  else if ( taxat45 >= 1) { taxsavings45 = xTotalSavings}  
else if ((taxsavings20 + taxsavings40) < xTotalSavings && (taxsavings40 > 0) && xTotalSavings > (basicRateSavings + higherRateSavings)
    )
{ taxsavings45 = xTotalSavings - taxsavings20 - taxsavings40
} else { taxsavings45 = 0 }

};



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




function calcDividendstax32 () {
  
    if (taxat45 >0 || taxsavings45 > 0 ) {
        taxdividends32 = 0 
    } else if ((xTotalDividends - 2000) > basicRateDividends && (xTotalDividends - taxdividends7 - 2000) <= higherRateDividends)
        taxdividends32 = xTotalDividends - 2000 - taxdividends7
     else if ((xTotalDividends - 2000) > basicRateDividends && (xTotalDividends - taxdividends7 - 2000) > higherRateDividends ) {taxdividends32 = higherRateDividends}
     else {taxdividends32 = 0 }
};


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









export default function  App () {


 









  class ErrorBoundary extends React.Component {
    state = { hasError: false }
  
    static getDerivedStateFromError (error) {
      return { hasError: true }
    }
  
    componentDidCatch (error, info) {
      logErrorToService(error, info.componentStack)
    }
  
    render () {
      return this.state.hasError
        ? <FallbackComponent />
        : this.props.children
    }
  }
  
  
  const Appcatcherror = () => (
    <ErrorBoundary>
      <Children />
    </ErrorBoundary>
  )
  
















let [employment , setEmployment] = React.useState("");
let [rental , setRental] = React.useState("");
let [dividend , setDividend] = React.useState("");
let [interest , setInterest] = React.useState("");
let [selfemployment , setSelfemployment] = React.useState("");


numEmp = parseInt(employment,10)||0;
 let numRent = parseInt(rental,10)||0;
 let numDiv = parseInt(dividend,10)||0;
 let numInt = parseInt(interest,10)||0;
let numSelf = parseInt(selfemployment,10)||0;

let array = [numInt,numEmp,0,numRent,numDiv,numSelf];


 let sumOfy = array.reduce(function(a, b){
  return a + b;
},0);

console.log(sumOfy)



xTotalIncome = sumOfy;
xTotalNonSavings = numEmp + numSelf + numRent;
xTotalDividends = numDiv;
xTotalSavings = numInt;

calcNonSavingsBR();
calcNonSavingsHR();
calcpersonalAllowance(sumOfy);

basicRateSavings = basicRateNonsavings;
higherRateSavings = higherRateNonsavings;
basicRateDividends = (xTotalSavings < basicRateSavings) ? (basicRateSavings - xTotalSavings) : 0 ;

calcHRdividends();
calc20();
calc40();
calczeroSavingsrate();
calcPSA();

taxat45 = ((xTotalNonSavings - personalAllowance) > 150000) ? (xTotalNonSavings - 150000) : 0 ; 
let nonSavingstax = (taxat20 * 0.2 ) + (taxat40 * 0.40 ) + (taxat45 * 0.45);
let savingsTax = (taxsavings20 * 0.2) + (taxsavings40 * 0.4 ) + (taxsavings45 * 0.45 );
let dividendTax = (taxdividends7 * 0.07) + (taxdividends32 * 0.32) + (taxdividends38 * 0.381)

calcSavingsTax20();
calcSavingsTax40();
calcSavingsTax45();


calcDividendstax7();
calcDividendstax32 ();
calcDividendstax38();


let incomeTotal = numDiv + numEmp + numRent + numInt + numSelf;

let [appPersonalAll, setAppPersonalAll] = React.useState(numInt);


const handleSubmit = (event) => {
  console.log(`
    Employment Income: ${employment}
    Rental Profit: ${rental}
    Dividend Income: ${dividend}
    Interest Income: ${interest}
    Self Employment Profit: ${selfemployment}
  `);
  
  event.preventDefault();
}


const handleOnPress = (event) => {
  //appPersonalAll = numEmp;
  setAppPersonalAll(personalAllowance);
  calcpersonalAllowance(sumOfy);
  console.log(appPersonalAll); 
}
;


//function Cat(props) {
  let [isHungry, setIsHungry] = React.useState(true);
  // ...
 
 /*I have set the value of the I am hungry iffunction with the onload right before the render instruction.*/

  onload = () => {
    setIsHungry(false) 
  
  }


    console.log(taxat20);
    console.log('Personal allowance is ' + personalAllowance);

// BECAUSE OF THE PERSONAL ALLOWANCE NAN ISSUE THE TAX AT 20 DOESNT REGISTER TO THE DOM STRAIGHT AWAY SO YOU NEED TO PRESS CALCULATE BUT CAN BE SOLVED I THINK 



console.log( `basicRateNonsavings ${basicRateNonsavings} `);

console.log( 'Non Savings higher rate = ' + higherRateNonsavings);
console.log('savings = '+ xTotalSavings);
console.log('savings higher rate = ' + higherRateSavings);
console.log('The Total Income / sumof y :' + xTotalIncome + basicRateNonsavings + basicRateSavings);
console.log('Dividends higher rate = ' + higherRateDividends);

console.log('NS taxed at 20% :' + taxat20)
console.log('NS taxed at 40% :'+ taxat40)
console.log('NS taxed at 45% :'+ taxat45) 
console.log('NS total tax is :' + nonSavingstax);


console.log('S taxed at 20% :' + taxsavings20, 'S taxed at 40% : ' + taxsavings40, 'S tax at 45% :' + taxsavings45);
console.log(' D 7.5 % : ' + taxdividends7, ' D 32.5 % : ' + taxdividends32, ' D 38.1 % : ' +  taxdividends38);

























 {
return (



 


    <View style={styles.container}>

      <View style = {styles.container2}>  
<Header
  placement = "left"
  backgroundColor = 'midnightblue'
  leftComponent={{ icon: 'menu', color: 'white',justifyContent : 'space-around' }}
  centerComponent={{ text: 'Otis.bitesize', style: { color: 'palevioletred', fontSize : 20 } }}
  rightComponent={myButton}
  containerStyle = {{justifyContent : "space-around", padding : 10, color : 'white', paddingLeft : 700 , paddingEnd : 700 , }}
/>

</View>



<Text style={styles.instructions}> Hello World, welcome to Otis Bitesize. </Text>

<Text style={styles.instructions}>Tax is hard, but it shouldn't be folks! Input your income below and let the code do the talking.
</Text>  

<Text style ={styles.secondTextstyle}> and I am {isHungry ? "hungry" : "full"}! and also your personal allowance = {appPersonalAll}
</Text>

<Text style ={styles.secondTextstyle}> Based on the information that you have provided, your Personal Allowance is {appPersonalAll}.  </Text>

{Appcatcherror}

<div >
      <form
      onSubmit={handleSubmit}> 
  
        
        <div>  
        <label>
        <Text style={styles.instructions}> Employment Income : </Text>
        <input
        name = "employment"
        type = "number"
        value = {employment}
        onChange ={e => setEmployment(e.target.value)}
        placeholder = "Monthly allowance"
        />
        </label>
        </div>


      <div>   
        <label>
        <Text style={styles.instructions}> Dividend Income : </Text>
        <input
        name = "dividend"
        type = "number"
        placeholder = "Money from shares"
        value = {dividend}
        onChange ={e => setDividend(e.target.value)}
      
        />
        </label>
        </div>


      <div> 
        <label>
        <Text style={styles.instructions}> Rental Profit : </Text>
        <input
        name = "rental"
        type = "number"
        placeholder = "Homes under the hammer, I guess."
        value = {rental}
        onChange ={e => setRental(e.target.value)}
        
        />
        </label> 
        </div>

      <div> 
      
               <label>
               <Text style={styles.instructions}> Interest Income : </Text>
        <input
        name = "interest"
        type = "number"
        placeholder = "Remember when interest rates were high."
        value = {interest}
        onChange ={e => setInterest(e.target.value)}
        
        />
        </label>
        </div>



        
<div>   
        <label>
        <Text style={styles.instructions}> Self Employment Profit : </Text>
        <input
        name = "selfemployment"
        placeholder = "Lemonade stand money "
        type = "number"
        value = {selfemployment}
        onChange ={e => setSelfemployment(e.target.value)}
      
        />
        </label> </div>

  
      </form>
      </div>
       

      <Button style={styles.button} title= "Calculate"  type = "solid" onPress={handleOnPress} > </Button> 

<div> 
<form> 
  <label> <Text style={styles.instructions}> Total Income : </Text>  
<input 

type = "number"
value = {sumOfy}

readOnly/>

</label>
</form> 
</div>


 
<Text style = {styles.secondTextstyle}> The total tax that you should expect to pay this year is X. 
  Broken down as:          

      NS - {nonSavingstax}  being the tax on your non savings income (Self-Employment and Emp Income) 
</Text>

<Text style = {styles.instructions}>S : {savingsTax} being the tax on your savings income (Interest income in this instance).</Text>
<div>  
<Text style = {styles.instructions}>D : {dividendTax} being the tax on the dividends that you recieved.</Text>
</div>




<Button variant = "success" color= "#f194ff" style={styles.button} title = "Big Truss" > </Button>


    </View>
  );
};


}















//**************   STYLE SHEET  *************/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'palevioletred',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'midnightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 6,
  },
  logo : {
    width :310,
    height : 160,
    marginBottom : 10,
  },
  instructions :{
    color: 'white',
    fontSize : 18,
    marginHorizontal : 24,
    textAlign :'center',
    padding: 10,
  },
  button : {
    padding: 30,
    borderRadius: 1,
    justifyContent: 'space-between',
    // marginLeft : '160%',
    // marginRight : '160',
  },
  buttonText : {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 500,
    height: 500,
    resizeMode: "contain"
  }, secondTextstyle :{
    color: 'navy',
    fontSize : 18,
    marginHorizontal : 24,
    textAlign :'center',
    padding: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});





/** 
 * 
 *  <label>
        Self Employment Profit :
        <input
        name = "selfemployment"
        type = "number"
        value = {selfemployment}
        onChange ={e => setSelfemployment(e.target.value)}
        required  // required means that it has to be filled
        />
        </label>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/

