document.getElementById('deleteform').addEventListener('submit',(e)=>{
    e.preventDefault();
    let form = document.getElementById('deleteform');

    let data = {
        ID:form[0].value
    }
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/student/delete",
        data: JSON.stringify(data),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (f) {
            console.log(f);
            alert(f.msg);
        },
        error: function (e) {
            
        }
    });

})