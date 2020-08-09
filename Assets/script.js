//start password generation


 //this funtion takes the values of the form in the modal, and passes them to the makepassword() function, then displays them to the user
 function makePass() {
    let length = document.getElementById("myRange").value;
    //makePassword(length);
    document.getElementById("sub-heading").textContent = "Here is your generated password:" + "\n" + makePassword(length);
    modal.classList.toggle("show-modal");
 }

function updateValue(val){
    document.getElementById('rangeValue').textContent=val;
}


function makePassword(length) {
    let result  = '';
    let characters = '';
    let numbers           = "";
    let uppercase         = "";
    let lowercase         = "";
    let special           = "";
   if (document.getElementById("numbers").checked != true && document.getElementById("lowercase").checked != true && document.getElementById("uppercase").checked != true && document.getElementById("special-characters").checked != true){
      result = "Password not generated. Please select at least one character type. "
      return result
      //break
   }

    //doing usable space -4 to make sure any one type of character does not take up the entire selected length
    let usableSpace = length -4;


   //Numbers 

    if (document.getElementById("numbers").checked == true){
      numbers           += "0123456789";
      randomNumber = Math.floor(Math.random() * usableSpace);
      if( usableSpace < 6) {
         randomNumber = 1;
      }
      for ( var i = 0; i < randomNumber; i++ ) {
         result += numbers.charAt(Math.floor(Math.random() * numbers.length ));
      }
      usableSpace -= randomNumber
      characters += numbers;
    };

    //uppercase 

    if (document.getElementById("uppercase").checked == true){
      uppercase         += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      randomNumber = Math.floor(Math.random() * usableSpace );
      if( usableSpace < 6) {
         randomNumber = 1;
      }
      uppercase         += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for ( var i = 0; i < randomNumber; i++ ) {
         result += uppercase.charAt(Math.floor(Math.random() * uppercase.length ));
      }

      usableSpace -= randomNumber;
      characters += uppercase;
    };

    //Lowercase 

   if (document.getElementById("lowercase").checked == true){
      lowercase          += "abcdefghijklmnopqrstuvwxyz"
      randomNumber = Math.floor(Math.random() * usableSpace );
      if( usableSpace < 6) {
         randomNumber = 1;
      }
      for ( var i = 0; i < randomNumber; i++ ) {
         result += lowercase.charAt(Math.floor(Math.random() * lowercase.length ));
      }

      usableSpace -= randomNumber;
      characters += lowercase;
    };


    //special-character 


    if (document.getElementById("special-characters").checked == true){
      special            += "!@#$%^&*";
      randomNumber = Math.floor(Math.random() * usableSpace ) + 1;
      if( usableSpace < 6) {
         randomNumber = 1;
      }
      for ( var i = 0; i < randomNumber; i++ ) {
         result += special.charAt(Math.floor(Math.random() * special.length ));
      }
      usableSpace -= randomNumber;
      characters += special;
      characters += special;
    };

    let fullSpace = usableSpace + 4;
    //Fill Remaining Space with Random Characters 
    for ( var i = 0; i < fullSpace; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * characters.length ));
    }
    let shuffledResult = shuffle(result);



    return shuffledResult;
 }

// Here I split apart the returned string and shuffle it to make the generated password less predictable
 function shuffle(result) {
   let a = result.split(""),
       n = a.length;

   for(var i = n - 1; i > 0; i--) {
       var sh = Math.floor(Math.random() * (i + 1));
       var tmp = a[i];
       a[i] = a[sh];
       a[sh] = tmp;
       
   }
   let shuffled = a.join("")
   return shuffled;
}