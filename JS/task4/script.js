// function emailvalidate(input)
// {
     

//         var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
//         if (input.value.match(validRegex)) {
      
//           alert("Valid email address!");
      
//           document.form1.text1.focus();
      
//           return true;
      
//         } else {
      
//           alert("Invalid email address!");
      
//           document.form1.text1.focus();
      
//           return false;
      
//         }
      
      
// }

function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phno = document.getElementById('phno').value;
    var password = document.getElementById('password').value;

    console.log(name);
    console.log(email);
    console.log(phno);
    console.log(password);

    if (name.trim() == "") {
        alert("Name is empty");
    } else if (password.trim() == "") {
        alert("Password is empty");
    }
    else if (phno.toString().length !== 10) {
        alert("Invalid phone number");
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        {
          alert("invalid mail")
        }
       
        
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password))
    {
        alert("give strong password")
    }
    else{
        document.getElementById("children").innerHTML="form submitted succesfully "
        document.getElementById("children").style.fontSize="30px"
        document.getElementById("children").style.color="white"
        document.getElementById("children").style.boxShadow="none";
        document.getElementById("children").style.textAlign="center"
        document.getElementById("children").style.backgroundColor="lightblue"
        document.getElementById("children").style.width="200px"
        document.getElementById("children").style.height="200px"
        document.querySelector("body").style.backgroundColor="white"
        return false



    }
 
  
}
