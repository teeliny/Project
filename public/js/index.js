/* ("#search").submit((list)=>{
    list.preventDefault() */
$.ajax({
    url: 'http://localhost:3000/HotelListing', method: 'get',
}).done((list)=>{
    $("#tbody tr").remove();
        for (let i = 0; i < list.length; i++){
            if 
            (list[i].state == $("#sub-btn").val()||
             list[i].name == $("#sub-btn").val()) {
                $('#tbody').append(
                    `<tr>
                    <td>${i + 1}</td>
                    <td>${list[i].name}</td>
                    <td>${list[i].state}</td>
                    <td>${list[i].address}</td>
                    <td>${list[i].description}</td>
                    <td>${list[i].rooms}</td>
                    <td>${list[i].amount}</td>
                    </tr>`
                    )
                }
               
                }
            }) 
})