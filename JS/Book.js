var User=JSON.parse(localStorage.getItem("Accounts")); 

var id = JSON.parse(sessionStorage.getItem("currentlogin"));
console.log(User[id]);
var welcome = document.getElementById("welcome");
welcome.innerHTML = `<i class="fa-solid fa-user"></i> ${User[id].name}`;
var selecteddate=sessionStorage.getItem("selecteddate");

var update=JSON.parse(localStorage.getItem(selecteddate));
var timings =document.getElementsByClassName("slot1");
var array=[];
for(let i=0;i<update.length;i++)
{
  if(update[i].flag)
  {
    var temp=update[i].Slot;
    console.log(update[i]);
    for(let i=0;i<timings.length;i++)
    {
      if(timings[i].getElementsByTagName("h3")[0].innerText == temp)
      {
        timings[i].classList.add("selected");
        timings[i].removeAttribute("onclick");
      console.log(timings[i]);
      }
    }

  }
}

function show(event) {
  event.preventDefault();
  var evening = document.getElementById("Evening");
  var morning = document.getElementById("Morning");
  var selected = document.getElementById("time");

  if (selected.value == "Evening") {
    evening.style.display = "block";
    morning.style.display = "none";
  } else if (selected.value == "Morning") {
    morning.style.display = "block";
    evening.style.display = "none";
  }
}

function selected(element) {
  var confirm = document.getElementById("confirm");
  var cancel = document.getElementById("cancel");
  var form = document.getElementById("form");
  var slot=element.getElementsByTagName("h3")[0].innerText;
  document.getElementById("seldate").innerText=`Date : ${selecteddate}`;
  document.getElementById("selslot").innerText= `Slot : ${slot}`;


  form.style.display = "block";
  console.log(element);
  

  confirm.addEventListener("click", () => {
      var book={
          PaitentName:``,
          date:``,
          Age:`` ,
          Slot:``
        }
      var paitent = document.getElementById("name");
      var age = document.getElementById("age");
    var verify = document.getElementById("checkbox");

    
    if (verify.checked && paitent.value!="" && age.value!="") 
    {
      book={PaitentName: paitent.value,date:selecteddate ,Age: age.value,Slot: slot}
      console.log(book);
      User[id].Booking.push(book);
      localStorage.setItem("Accounts",JSON.stringify(User));

  var update=JSON.parse(localStorage.getItem(selecteddate));
  for(var i=0;i<update.length;i++ )
  {
    if(update[i].Slot==slot)
    {
      update[i].flag=true;
      localStorage.setItem(`${selecteddate}`,JSON.stringify(update));
      break;
   }
  }
      element.classList.add("selected");
      var button = element.getElementsByTagName("button")[0];
      button.innerText = "Selected";
      form.style.display = "none";
      var paitentname = document.getElementById("name");
      paitentname.value = "";
      age.value = "";
      alert("Appointments Successfully Confirmed !")
      window.location.href=`home.html`;

    } else {
      alert("Fill reCapcha");
    }
  });
  
  
  cancel.addEventListener("click", () => {
    var form = document.getElementById("form");
    form.style.display = "none";
    element=null;
  });
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
