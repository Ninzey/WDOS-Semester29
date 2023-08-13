//get references to the interactive elements
//no.of guests input
const sadultInput = document.getElementById("sadult");
const schildInput = document.getElementById("schild");
const fadultInput = document.getElementById("fadult");
const fchildInput = document.getElementById("fchild");
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

const date = document.getElementById("date");

//disable past dates in the calendar
const today = new Date().toISOString().split('T')[0];
date.setAttribute('min', today);

//Date input, store in LS and output
function displayDate() {
	const dateInput = document.getElementById("date");
	const selectedDate = dateInput.value;

	//display date
	tdateOutput.innerHTML = selectedDate;

	//store date in LS
	dateChoices = document.getElementById("date").value;

	dateinput = localStorage.setItem("Date", dateChoices);
}


//Time duration selection

function selectfun(){
	timeChoices = document.getElementById("timedue").value;

	selectinput = localStorage.setItem("Time", timeChoices);

	timeOutput.innerHTML=localStorage.getItem("Time");

    //calculation input
    let sadult = parseInt(sadultInput.value);
    let schild = parseInt(schildInput.value);
    let fadult = parseInt(fadultInput.value);
    let fchild = parseInt(fchildInput.value);

    //calculations
    if(timeChoices == "07.00 a.m. - 08.00 a.m."){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum calculation
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
    
        //display Sum
        tvsumsum.innerText=`$ ${sumcal}`
    }else if(timeChoices == "08.00 a.m. - 09.00 a.m."){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum calculation
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
    
        //display Sum
        tvsumsum.innerText=`$ ${sumcal}`
    }else if(timeChoices == "09.00 a.m. - 10.00 a.m."){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        //sum calculation
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
    
        //display Sum
        tvsumsum.innerText=`$ ${sumcal}`
    }else if(timeChoices == "01.00 p.m. - 02.00 p.m."){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum calculation
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
    
        //display Sum
        tvsumsum.innerText=`$ ${sumcal}`
    }else if(timeChoices == "02.00 p.m. - 03.00 p.m."){
        let vadult=(sadult)*4;
        tvsladultOutput.innerText=`$ ${vadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vadult);
        let vchild=(schild)*2;
        tvslchildtOutput.innerText=`$ ${vchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vchild);
        let vfadult=(fadult)*10;
        tvfladultOutput.innerText=`$ ${vfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vfadult);
        let vfchild=(fchild)*5;
        tvfchildOutput.innerText=`$ ${vfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vfchild);
        //sum calculation
        let sumcal = vadult + vchild + vfadult + vfchild;
        sumout = localStorage.setItem("SUM", sumcal);
    
        //display Sum
        tvsumsum.innerText=`$ ${sumcal}`
    }else{
        let vvadult=(sadult)*6;
        tvsladultOutput.innerText=`$ ${vvadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Adult Value", vvadult);
        let vvchild=(schild)*3;
        tvslchildtOutput.innerText=`$ ${vvchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("SL Child Value", vvchild);
        let vvfadult=(fadult)*13;
        tvfladultOutput.innerText=`$ ${vvfadult.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Adult Value", vvfadult);
        let vvfchild=(fchild)*8;
        tvfchildOutput.innerText=`$ ${vvfchild.toFixed(2)}`
        sladultvalueOut = localStorage.setItem("F Child Value", vvfchild);
        //sum calculation
        let sumcal = vvadult + vvchild + vvfadult + vvfchild;
        sumout = localStorage.setItem("SUM", sumcal);
    
        //display Sum
        tvsumsum.innerText=`$ ${sumcal}`
    }
}


//no. of guests input, store and output
//Numbers of Guests
var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');

//Increment
for(var i = 0; i < incrementButton.length; i++){
    var button = incrementButton[i];
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[2];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue;

		guestChoices = document.getElementById("sadult").value;
        guestChoices1 = document.getElementById("schild").value;
        guestChoices2 = document.getElementById("fadult").value;
        guestChoices3 = document.getElementById("fchild").value;
        guestChoices5 = document.getElementById("sfinfant").value;

		guestinput = localStorage.setItem("SL Adult", guestChoices);
        guestinput = localStorage.setItem("SL Child", guestChoices1);
        guestinput = localStorage.setItem("F Adult", guestChoices2);
        guestinput = localStorage.setItem("F Child", guestChoices3);
        guestinput = localStorage.setItem("S F Infant", guestChoices5);

		tsladultOutput.innerHTML=localStorage.getItem("SL Adult");
        tslchildtOutput.innerHTML=localStorage.getItem("SL Child");
        tfladultOutput.innerHTML=localStorage.getItem("F Adult");
        tfchildOutput.innerHTML=localStorage.getItem("F Child");
        tsfinfantOutput.innerHTML=localStorage.getItem("S F Infant");

    })
}

//Decrement
for(var i = 0; i < decrementButton.length; i++){
    var button = decrementButton[i];
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[2];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) - 1;
        if(newValue >= 0){
            input.value = newValue;
        }
        else{
            alert('Quantity cannot be less than ZERO')
        }

		guestChoices = document.getElementById("sadult").value;
        guestChoices1 = document.getElementById("schild").value;
        guestChoices2 = document.getElementById("fadult").value;
        guestChoices3 = document.getElementById("fchild").value;
        guestChoices5 = document.getElementById("sfinfant").value;

		guestinput = localStorage.setItem("SL Adult", guestChoices);
        guestinput = localStorage.setItem("SL Child", guestChoices1);
        guestinput = localStorage.setItem("F Adult", guestChoices2);
        guestinput = localStorage.setItem("F Child", guestChoices3);
        guestinput = localStorage.setItem("S F Infant", guestChoices5);

		tsladultOutput.innerHTML=localStorage.getItem("SL Adult");
        tslchildtOutput.innerHTML=localStorage.getItem("SL Child");
        tfladultOutput.innerHTML=localStorage.getItem("F Adult");
        tfchildOutput.innerHTML=localStorage.getItem("F Child");
        tsfinfantOutput.innerHTML=localStorage.getItem("S F Infant");
    })
}















//sfichoiceinpt = localStorage.setItem("S F Infant", sfinfantChoices);







//calculation input
//let sadult = parseInt(sadultInput.value);
//let schild = parseInt(schildInput.value);
//let fadult = parseInt(fadultInput.value);
//let fchild = parseInt(fchildInput.value);

