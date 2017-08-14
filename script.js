function firstfocus(){
	 document.getElementsByName("userid")[0].focus();
}

function userid_validation(x,y){
 var inputUserid = document.getElementsByName("userid")[0].value;
 console.log ("you have entered", inputUserid)
 
 if (inputUserid.length == 0) {
        console.log("USER ID should not be empty");	
     } else if (inputUserid.length < 5) {
 			console.log("USER ID should be more than 5 characters");
 			} else if (inputUserid.length > 12) {
    				console.log("USER ID should be less than 12 characters");
 			} else {
	 			document.getElementsByName("passid")[0].focus();
	}

}

function passid_validation(a,b){
 var inputPassid = document.getElementsByName("passid")[0].value;	
 console.log("you have entered",inputPassid);

if (inputPassid.length == 0) {
        console.log("USER Password should not be empty");	
     } else if (inputPassid.length < 7) {
 			console.log("USER Password should be more than 7 characters");
 			} else if (inputPassid.length > 12) {
    				console.log("USER Password should be less than 12 characters");
 			} else {
	 			document.getElementsByName("username")[0].focus();
	}

}

function allLetter(){
 var inputUsername = document.getElementsByName("username")[0].value;	
 console.log("you have entered",inputUsername);

 var allLetters = /^[A-Za-z]+$/;

 if (inputUsername.match(allLetters)) {
 	document.getElementsByName("email")[0].focus();
 	} else {
 		console.log("User’s name should have alphabet characters only!");
 	}	
}

function ValidateEmail(){
 var inputEmail = document.getElementsByName("email")[0].value;	
 console.log("you have entered",inputEmail);

    var atpos  = inputEmail.indexOf("@");
    var dotpos = inputEmail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputEmail.length) {
    console.log("You have entered an invalid email format!");
   }
}

