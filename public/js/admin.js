
$('#login').submit((list)=>{
    list.preventDefault()
    let email = $('#uname').val();
    let passkey = $('#upass').val();
    
    $.ajax({url: 'http://localhost:3000/accountAdmin', method: 'get', data: {email,passkey}
}).done((list)=>{
    for (let i = 0; i <list.length; i++) {
        if (list[i].signup === email && list[i].pass === passkey) {
            localStorage.setItem("uname","upass")  
            window.location="modify.html"    
        }
        else {
            alert("Wrong login details")
        }
    }



    })
})

