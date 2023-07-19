var UserID = JSON.parse(sessionStorage.getItem("currentlogin"));

var User = JSON.parse(localStorage.getItem("Accounts"));
var currentuser= User[UserID];
document.getElementById("welcome").innerHTML=`<i class="fa-solid fa-user"></i> ${currentuser.name}`;

document.getElementById("name").innerText=`${currentuser.name}`;
document.getElementById("tel").innerText=`${currentuser.phone}`;

var tbody=document.getElementById("body")
book=User[UserID].Booking;

for (let index = 0; index < book.length; index++) {
   var  Name=document.createElement("td");
   Name.innerText=book[index].PaitentName;
   var  Age=document.createElement("td");
   Age.innerText=book[index].Age;
   var  dat=document.createElement("td");
   dat.innerText=book[index].date;
   var  time=document.createElement("td");
   time.innerText=book[index].Slot;

var tr=document.createElement("tr");
    tr.appendChild(Name);
    tr.appendChild(Age);
    tr.appendChild(dat);
    tr.appendChild(time);

    tbody.appendChild(tr);
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
