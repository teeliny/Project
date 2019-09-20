
$.ajax({
    url: 'http://localhost:3000/HotelListing', method: 'get',
}).done((list)=>{
        console.log(list)
        for (let i = 0; i < list.length; i++){
            $('#tbody').append(
                `<tr>
                <td>${i + 1}</td>
                <td>${list[i].name}</td>
                <td>${list[i].state}</td>
                <td>${list[i].address}</td>
                <td>${list[i].description}</td>
                <td>${list[i].rooms}</td>
                <td>${list[i].amount}</td>
                <td>
                <button id="del-${list[i].id}" class="delete-btn">Delete</button>
                <button id="edt-${list[i].id}" class="edit-btn">Edit</button>
                </td>
                </tr>`
                )
                }


                //functionality on delete button
                $('.delete-btn').on('click',(list)=>{
                    let id = list.target.id.split('del-').join('')
                    alert("Delete Successful.")
                    $.ajax({
                        url:`http://localhost:3000/HotelListing/${id}`,
                        method: 'delete'
                    }).done((list)=>{window.location.reload()

                    })
                })


            })
            
            $('#newForm').submit((list)=>{
                console.log(list);
                
                list.preventDefault()
                let name = $('#name').val();
                let state = $('#state').val();
                let address = $('#address').val();
                let description = $('#description').val();
                let rooms = $('#rooms').val();
                let amount = $('#amount').val();
                ///Adding new Hotels to the List by the Admin
                $.ajax({url: 'http://localhost:3000/HotelListing',
                method: 'post',
                data: {name, state, address, description, rooms, amount}
    }).done((list)=>{
        console.log(list)
        $('#tbody').append(
            `<tr>
            <td>${list.name}</td>
            <td>${list.state}</td>
            <td>${list.address}</td>
            <td>${list.description}</td>
            <td>${list.rooms}</td>
            <td>${list.amount}</td>
            </tr>`
            )
                    $('#name').val('');
                    $('#state').val('');
                    $('#address').val('');
                    $('#description').val('')
                    $('#rooms').val('')
                    $('#amount').val('')
                    
                    
                })
})


