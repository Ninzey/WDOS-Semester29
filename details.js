//get references to the interactive elements
//no.of guests input
const fnameInput = document.getElementById("fnameinpt");
const phnoInput = document.getElementById("phno");
const mailInput = document.getElementById("emailinpt");
const confirmmailInput = document.getElementById("confomail");
const form = document.getElementById("form");

//summary tableoutput
const tdateOutput = document.getElementById("tdate123");
const timeOutput = document.getElementById("ttime1");
const tsladultOutput = document.getElementById("tsadultv1");
const tslchildtOutput = document.getElementById("tschildv1");
const tfladultOutput = document.getElementById("tfadultv1");
const tfchildOutput = document.getElementById("tfchildv1");
const tsfinfantOutput = document.getElementById("tsfinfantv1");
const tvsladultOutput = document.getElementById("tsadultv");
const tvslchildtOutput = document.getElementById("tschildv");
const tvfladultOutput = document.getElementById("tfadultv");
const tvfchildOutput = document.getElementById("tfchildv");
const tvsumsum = document.getElementById("tsumsum");

//use local storage data
tdateOutput.innerHTML=localStorage.getItem("Date");
timeOutput.innerHTML=localStorage.getItem("Time");
tsladultOutput.innerHTML=localStorage.getItem("SL Adult");
tslchildtOutput.innerHTML=localStorage.getItem("SL Child");
tfladultOutput.innerHTML=localStorage.getItem("F Adult");
tfchildOutput.innerHTML=localStorage.getItem("F Child");
tsfinfantOutput.innerHTML=localStorage.getItem("S F Infant");
tvsladultOutput.innerHTML="$ "+localStorage.getItem("SL Adult Value");
tvslchildtOutput.innerHTML="$ "+localStorage.getItem("SL Child Value");
tvfladultOutput.innerHTML="$ "+localStorage.getItem("F Adult Value");
tvfchildOutput.innerHTML="$ "+localStorage.getItem("F Child Value");
tvsumsum.innerHTML="$ "+localStorage.getItem("SUM");

//continue with purchase button
const btnsubmitit=document.getElementById("submitit");

//add event listners
//continue with purchase button
btnsubmitit.addEventListener("click",storedetailsLS);

//form
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

// store data and use function
function storedetailsLS(){
    //get input data
    fnameChoice = document.getElementById("fnameinpt").value;
    phnoChoice = document.getElementById("phno").value;
    mailChoice = document.getElementById("emailinpt").value;

    //set input data in local storage
    fnamefornInput = localStorage.setItem("Full name", fnameChoice);
    phnoformInput = localStorage.setItem("Phone number", phnoChoice);
    mailformInput = localStorage.setItem("Email address", mailChoice);
}

//Form validation function
function checkInputs(){
    const firstnameValue = fnameInput.value.trim();
    const phonenoValue = phnoInput.value.trim();
    const emailaddressValue = mailInput.value.trim();
    const confoemailValue = confirmmailInput.value.trim();

    //form validation conditions
    if(firstnameValue === '') {
		setErrorFor(fnameinpt, 'Please add the Full Name');
	} else {
		setSuccessFor(fnameinpt);
	}

    if(phonenoValue === '') {
		setErrorFor(phno, 'Please add the Phone number');
	} else {
		setSuccessFor(phno);
	}

    if(emailaddressValue === '') {
		setErrorFor(emailinpt, 'Email cannot be blank');
	} else if (!isEmail(emailaddressValue)) {
		setErrorFor(emailinpt, 'Add a valid Email ID');
	} else {
		setSuccessFor(emailinpt);
	}

    if(confoemailValue === '') {
		setErrorFor(confirmmailInput, 'Email cannot be blank');
	} else if(emailaddressValue !== confoemailValue) {
		setErrorFor(confirmmailInput, 'Email does not match');
	} else{
		setSuccessFor(confirmmailInput);
        window.location.href = "./paymentdetails.html";
	}
}

function setErrorFor(input, message) {
	const inputbox = input.parentElement;
	const small = inputbox.querySelector('small');
	inputbox.className = 'input-box error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const inputbox = input.parentElement;
	inputbox.className = 'input-box success';
}

//Display gender name
let radioBtns = document.querySelectorAll("input[name='gender']");
let result = document.getElementById("result");

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click",findSelected);
});

function findSelected(){
    let selected = document.querySelector("input[name='gender']:checked").value;
    result.textContent = `Gender - ${selected}`;

    gender123Input = localStorage.setItem("Gender", selected);
}

//character limitations for inputs
//Full name
fnameInput.addEventListener("input",function(){
    var textLength = fnameInput.value.length;

    if(textLength > 100){
        alert(`You're exeeding word limit`);
    }
})

//Phone number
phnoInput.addEventListener("input",function(){
    var textLength = phnoInput.value.length;

    if(textLength > 12){
        alert(`You're exeeding word limit`);
        setErrorFor(phno, 'please enter a valid Phone Number');
        window.location.href = "./details.html";
    } else {
        setSuccessFor(phno);
    }
})

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}