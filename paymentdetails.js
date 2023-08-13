//get references to the interactive elements
//no.of guests input
const cardnoInput = document.getElementById("crdno");
const cardnameInput = document.getElementById("namecrd");
const datecardInput = document.getElementById("dtecrd");
const cvvcardInput = document.getElementById("cvvcrd");
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

//disable past dates in the calendar
const today = new Date().toISOString().split('T')[0];
datecardInput.setAttribute('min', today);

//continue with purchase button
const btnsubmititcard=document.getElementById("submititcard");

//add event listners
//continue with purchase button
btnsubmititcard.addEventListener("click",storecarddetailsLS);

//form
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

// store data and use function
function storecarddetailsLS(){
    //get input data
    cardnumChoice = document.getElementById("crdno").value;
    nmecrdChoice = document.getElementById("namecrd").value;
    cardateChoice = document.getElementById("dtecrd").value;
    cvvChoice = document.getElementById("cvvcrd").value;

    //set input data in local storage
    rdnonumInput = localStorage.setItem("Card Number", cardnumChoice);
    namecardcardInput = localStorage.setItem("Name on Card", nmecrdChoice);
    datedateInput = localStorage.setItem("Card Expiry Date", cardateChoice);
    cvcvcdsInput = localStorage.setItem("Card CVV / CVC", cvvChoice);
}

//Form validation function
function checkInputs(){
    const cardnoValue = cardnoInput.value.trim();
    const cardnameValue = cardnameInput.value.trim();
    const datecardValue = datecardInput.value.trim();
    const cvvcardValue = cvvcardInput.value.trim();

    //form validation conditions
    if(cardnoValue === '') {
		setErrorFor(crdno, 'Incomplete Field');
	} else {
		setSuccessFor(crdno);
	}

    if(cardnameValue === '') {
		setErrorFor(namecrd, 'Incomplete Field');
	} else {
		setSuccessFor(namecrd);
	}

    if(datecardValue === '') {
		setErrorFor(dtecrd, 'Incomplete Field');
	} else {
		setSuccessFor(dtecrd);
	}

    if(cvvcardValue === '') {
		setErrorFor(cvvcrd, 'Incomplete Field');
	} else{
		setSuccessFor(cvvcrd);
		window.location.href = "./confirmation.html";
	}
}

function setErrorFor(input, message) {
	const inputbox = input.parentElement;
	const small = inputbox.querySelector('small');
	inputbox.className = 'input-box error';
	inputbox.classname = 'input-box1 error'
	small.innerText = message;
}

function setSuccessFor(input) {
	const inputbox = input.parentElement;
	inputbox.className = 'input-box success';
	inputbox.className = 'input-box1 success';
}

//character limitations for inputs
//Phone number
cvvcardInput.addEventListener("input",function(){
    var textLength = cvvcardInput.value.length;

    if(textLength > 3){
        alert(`You're exeeding number limit`);
        setErrorFor(cvvcrd, 'please enter a valid CVC / CVV Number');
        window.location.href = "./paymentdetails.html";
    } else {
        setSuccessFor(cvvcrd);
    }
})