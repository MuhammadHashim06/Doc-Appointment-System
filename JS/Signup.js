function signup(event)
{
    if (!(localStorage.getItem("Accounts"))) {
        let Accounts=[];
        localStorage.setItem("Accounts",JSON.stringify( Accounts));
    }
    event.preventDefault();
    var Accounts=JSON.parse(localStorage.getItem("Accounts")); 
    var name=document.getElementById("Username").value;
    var email=document.getElementById("Email").value;
    var phone=document.getElementById("phone").value;
    var pass=document.getElementById("Password").value;
    var conpass=document.getElementById("conPassword").value;
    var text=document.getElementById("wrong");

    if(!name=="" && !email==""&&!phone==""&& !pass==""&& !conpass=="")
    {
    if(pass==conpass )
    {
    var info={
    "name":name,
    "email":email,
    "phone":phone,
    "password":pass,
    "Booking":[]
    }
    Accounts.push(info);
    Accounts=JSON.stringify(Accounts);
    localStorage.setItem("Accounts",Accounts);
    window.location.href = `index.html`;
    }else
    {
        
        text.style.color="red";
        text.innerText="Password Didn't Match";
    }
}else
{
    text.style.color="red";
    text.innerText="Make Sure that All the fields are Properly filled";
}
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