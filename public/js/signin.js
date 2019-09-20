$('#users').submit((list)=>{
    list.preventDefault()
    let signup = $('#userEmail').val();
    let pass = $('#userPass').val();
    
    $.ajax({url: 'http://localhost:3000/accountUsers', method: 'post', data: {signup,pass}
}).done((list)=>{
window.location="signin.html"
alert("Registration Completed")

        
    })
})

$('#login').submit((list)=>{
    list.preventDefault()
    let email = $('#uname').val();
    let passkey = $('#upass').val();
    
    $.ajax({url: 'http://localhost:3000/accountUsers', method: 'get', data: {email,passkey}
}).done((list)=>{
    for (let i = 0; i <list.length; i++) {
        if (list[i].signup === email && list[i].pass === passkey) {
            localStorage.setItem("uname","upass")  
            window.location="action.html"    
        }
        else {
            console.log("Wrong login details")
        }
    }



    })
})

