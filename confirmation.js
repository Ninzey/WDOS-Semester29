//get references to the interactive elements
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

//Summary table use local storage data
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

//Final table tableoutput
const tdateOutput5 = document.getElementById("tdate1235");
const timeOutput5 = document.getElementById("ttime15");
const tsladultOutput5 = document.getElementById("tsadultv15");
const tslchildtOutput5 = document.getElementById("tschildv15");
const tfladultOutput5 = document.getElementById("tfadultv15");
const tfchildOutput5 = document.getElementById("tfchildv15");
const tsfinfantOutput5 = document.getElementById("tsfinfantv15");
const tvsladultOutput5 = document.getElementById("tsadultv5");
const tvslchildtOutput5 = document.getElementById("tschildv5");
const tvfladultOutput5 = document.getElementById("tfadultv5");
const tvfchildOutput5 = document.getElementById("tfchildv5");
const tvsumsum5 = document.getElementById("tsumsum5");
const tvsumsum55 = document.getElementById("namename5");
const tvsumsum56 = document.getElementById("mobil");
const tvsumsum57 = document.getElementById("malli");
const tvsumsum58 = document.getElementById("result123");

//Final table use local storage data
tdateOutput5.innerHTML=localStorage.getItem("Date");
timeOutput5.innerHTML=localStorage.getItem("Time");
tsladultOutput5.innerHTML=localStorage.getItem("SL Adult");
tslchildtOutput5.innerHTML=localStorage.getItem("SL Child");
tfladultOutput5.innerHTML=localStorage.getItem("F Adult");
tfchildOutput5.innerHTML=localStorage.getItem("F Child");
tsfinfantOutput5.innerHTML=localStorage.getItem("S F Infant");
tvsladultOutput5.innerHTML="$ "+localStorage.getItem("SL Adult Value");
tvslchildtOutput5.innerHTML="$ "+localStorage.getItem("SL Child Value");
tvfladultOutput5.innerHTML="$ "+localStorage.getItem("F Adult Value");
tvfchildOutput5.innerHTML="$ "+localStorage.getItem("F Child Value");
tvsumsum5.innerHTML="$ "+localStorage.getItem("SUM");
tvsumsum55.innerHTML=localStorage.getItem("Full name");
tvsumsum56.innerHTML=localStorage.getItem("Phone number");
tvsumsum57.innerHTML=localStorage.getItem("Email address");
tvsumsum58.innerHTML=localStorage.getItem("Gender");