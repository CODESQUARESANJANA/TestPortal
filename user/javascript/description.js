 


 $(document).ready(function(){
    let cookie = {};
    var cokiesArray = document.cookie.split(';');
    for (let i = 0; i < cokiesArray.length; i++) {
        let [key, value] = cokiesArray[i].split('=');
        cookie[key.trim()] = value;
        console.log(cookie);
    }
    console.log(cookie.token);
        $.ajax({
      url: 'http://192.168.1.28/EXAMPANEL/user/getmytest',
      method: 'POST',
    headers:{"Authorization":`${cookie.token}`,
    
},
data:{"vTestCode" : "MS100"},
      success: function (response) {
        console.log(response);
        
        if (response.success == true) {
        
        }
        else {
          alert(response.message);
        }

      },
      error: function (response) {
        console.log(response)

      }
    });   
   
})
     
   