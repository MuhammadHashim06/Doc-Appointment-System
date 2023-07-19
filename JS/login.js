
function login(event) {


    event.preventDefault();

    if(!(localStorage.getItem("Accounts")))
    {
      let acc=[];
      localStorage.setItem("Accounts",JSON.stringify(acc));
    }
    var email = document.getElementById("email").value;
    var password = document.getElementById("Password").value;
    var Account = JSON.parse(localStorage.getItem("Accounts"));
  
    var found = false; // Flag to track if the account is found
  console.log(Account);
  
    for (var i = 0; i < Account.length; i++) {
      var checkemail = Account[i].email;
      var pass = Account[i].password;

      if (checkemail == email && password == pass) {
        found = true;
        sessionStorage.setItem("currentlogin",i.toString())
        break;
      }
    }
  
    if (found) {
      window.location.href = `./home.html`; // Redirect to the index.html page
    } else {
      var wrong = document.getElementById("wrong");
      wrong.style.color = "red";
      wrong.innerHTML = "Account Doesn't Exist";
      setTimeout(()=>wrong.innerHTML="",1000);
    }
    return found;
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

  // document.getElementById("submitbtn").addEventListener("click",login(event));
