import React from "react";
import {StyleSheet, Text, View,} from 'react-native';
import { Button, Header } from 'react-native-elements';


  export let numEmp = 0;


import * as Taxdue from "./Backend"



export default function  App () {

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







/**
 * let testemployment;

function totalinc() {
  if (employment != '') {
    testemployment = parseInt(employment.value,10)
  } else testemployment = 0 
};
 * 
 */

let sumOfy = array.reduce(function(a, b){
  return a + b;
},0);

console.log(sumOfy)
//console.log(incomeTotal)


let incomeTotal = numDiv + numEmp + numRent + numInt + numSelf;

let [ass, setAss] = React.useState(numInt);


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
  //ass = numEmp;
  setAss(Taxdue.personalAllowance);
  Taxdue.calcpersonalAllowance(sumOfy);
  console.log(numEmp, Taxdue.personalAllowance, ass); 
}
;

//function Cat(props) {
  let [isHungry, setIsHungry] = React.useState(true);
  // ...


 {
return (
    <View style={styles.container}>

<Header
  backgroundColor = 'midnightblue'
  leftComponent={{ icon: 'menu', color: 'white' }}
  centerComponent={{ text: 'Otis.bitesize', style: { color: 'palevioletred' } }}
  rightComponent={{ icon: 'home', color: 'white' }}
/>


<Text style={styles.instructions}> Hello World, welcome to Otis Bitesize. </Text>


<Text style={styles.instructions}>Tax is hard, but it shouldn't be folks! Input your income below and let the code do the talking.

</Text>  

<Text> and I am {isHungry ? "hungry" : "full"}! and also asss {ass}</Text>

<Text> Based on the information that you have provided, your personal Allowance is  {isHungry ? "12,500" : Taxdue.personalAllowance}!</Text>

<div >


      <form 
      onSubmit={handleSubmit}> 
      <p>
        <label>
        <Text>Employment Income : </Text>
        <input
        name = "employment"
        type = "number"
        value = {employment}
        onChange ={e => setEmployment(e.target.value)}
        placeholder = "Monthly allowance"
       
        />
        </label>

      </p>


        <label>
       Dividend Income :
        <input
        name = "dividend"
        type = "number"
        placeholder = "Money from shares"
        value = {dividend}
        onChange ={e => setDividend(e.target.value)}
      
        />
        </label>
       
<p>   
        <label>
        Rental Profit :
        <input
        name = "rental"
        type = "number"
        placeholder = "Homes under the hammer, I guess."
        value = {rental}
        onChange ={e => setRental(e.target.value)}
        
        />
        </label> </p>


<p>
               <label>
        Interest Income :
        <input
        name = "interest"
        type = "number"
        placeholder = "Remember when interest rates were high."
        value = {interest}
        onChange ={e => setInterest(e.target.value)}
        
        />
        </label>

        </p>

        <p marginHorizontal = "auto"> 

        <label>
        Self Employment Profit :
        <input
        name = "selfemployment"
        type = "number"
        value = {selfemployment}
        onChange ={e => setSelfemployment(e.target.value)}
      
        />
        </label>
</p>
   
      <Button  style={styles.button} title= "Calculate"  type = "solid" onPress={handleOnPress} /*  onclick = callback function, maybe put some if functions there as well like =! NAN*/ > </Button> 
    
    <Button  disabled={!isHungry} title ={isHungry  ? 'Pour me some milk, please!' : 'Thank you!'}  onPress={() => 
    setIsHungry(false)
  }> </Button>
      </form>
      </div>


<div> 
<form>
<p>
  <label > Total Income : 
<input 

type = "number"
value = {sumOfy}

readOnly/>
</label></p>
</form>
</div>

    </View>
  );
}


}


  
  




//**************   STYLE SHEET  *************/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'palevioletred',
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign :'center'
  },
  button : {
    padding: 5,
    borderRadius: 1,
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