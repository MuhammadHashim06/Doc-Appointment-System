var User=JSON.parse(localStorage.getItem("Accounts")); 

var id = JSON.parse(sessionStorage.getItem("currentlogin"));
console.log(User[id]);
var welcome = document.getElementById("welcome");

welcome.innerHTML=`<i class="fa-solid fa-user"></i> ${User[id].name}`;

//var date= new Date(); //Sun Jul 09 2023 12:38:17 GMT+0500 (Pakistan Standard Time)
//date=date.toISOString(); //2023-07-09T07:37:53.694Z
// console.log(date);
var today = new Date().toISOString().split("T")[0]; //2023-07-09
var maxdate= new Date(Date.now()+3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
console.log(maxdate);
console.log(today);
var date=document.getElementById("date");
date.setAttribute("value",today)
date.setAttribute("min",today);
date.setAttribute("max",maxdate);

function setdate(event)
{
    var currentdate=date.value;
    event.preventDefault();
var Dates=[
    {
        Slot:"9AM - 9:30AM",
        flag:false
    },{
        Slot:"9:30AM - 10AM",
        flag:false
    },{
        Slot:"10AM - 10:30AM",
        flag:false
    },{
        Slot:"10:30AM - 11AM",
        flag:false
    },{
        Slot:"11AM - 11:30AM",
        flag:false
    },{
        Slot:"11:30AM - 12PM",
        flag:false
    },{
        Slot:"7PM - 7:30PM",
        flag:false
    },{
        Slot:"7:30PM - 8PM",
        flag:false
    },{
        Slot:"8PM - 8:30PM",
        flag:false
    }
    ,{
        Slot:"8:30PM - 8PM",
        flag:false
    },{
        Slot:"9PM - 9:30PM",
        flag:false
    },{
        Slot:"9:30PM - 10PM",
        flag:false
    },{
        Slot:"10PM - 10:30PM",
        flag:false
    },{
        Slot:"10:30PM - 11PM",
        flag:false
    },{
        Slot:"11PM - 11:30",
        flag:false
    }]
    
    if(!(localStorage.getItem(currentdate))){
     localStorage.setItem(`${currentdate}`, JSON.stringify(Dates));
    }
    sessionStorage.setItem("selecteddate",currentdate)
    // var Dates=["9AM - 9:30AM","9:30AM - 10AM","10AM - 10:30AM","10:30AM - 11AM"
    // ,"11AM - 11:30AM","11:30AM - 12PM","12PM - 12:30PM","7PM - 7:30PM"
    // ,"7:30PM - 8PM","8PM - 8:30PM","8:30PM - 9PM","9PM - 9:30PM","9:30PM - 10PM"
    // ,"10PM - 10:30PM","10:30PM - 11PM","11PM - 11:30"]
    // if(!(localStorage.getItem(currentdate)))
    // localStorage.setItem(`${currentdate}`, currentdate);
    // alert(currentdate);
    //     currentname ="Hashim";
    //     `${currentdate}`= ["Hello","Buddy"]
    // console.log(Hashim);
    window.location.href=`./Bookappointment.html`
}
function toggle(event)
  {
    event.preventDefault();
        var links=document.getElementById("link");
    if(links.style.display=="none")
    {
      links.style.display="block";
    }else
    {
      links.style.display="none";
    }
  }