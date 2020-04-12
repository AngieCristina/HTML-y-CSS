switch(val){
    case  "1"{
    return answer = "alpha"
    break
    }
    case "2"{
    return answer = "beta"
    break
    }
    case "3"{
    return answer = "gamma"
    break
    }
    case "4"{
    return answer = "delta"
    break
    }
//Basic JavaScript: Counting Cards
if(card == 1){
    return count === 2,3,4,5,6 + "Bet"
  }
  else if (card == 0){
    return count = 7, 8, 9
  }
  else if (card == -1){
    return count = 10, 'J', 'Q', 'K', 'A' + "Hold"
  }
}


function lookUpProfile(name, prop){
  // Only change code below this line
  for (let index = 0; index < contacts.length; index++) {
  if(contacts[index].firstname === name){
    if(contacts[index].hasOwnProperty(prop)){
      return contacts[index][prop];
    } else{ return "No such property"
  }
  } 
  }
  return "No such contact"
  // Only change code above this line
  }
  
  // Change these values to test your function
  lookUpProfile("Akira", "likes");
  