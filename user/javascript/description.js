 


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
          var x= response.data
          // for(let i=0; i<x.length;i++){
          //   console.log(x[i]);
            
          
          document.getElementById("desp").innerHTML = x[0].tTestDescription;
          document.getElementById("testname").innerHTML = x[0].vTestName;
          document.getElementById("testcode").innerHTML = x[0].vTestCode;
          document.getElementById("totalques").innerHTML = x[0].totalQuestions;
          document.getElementById("totaltime").innerHTML = x[0].iTestDuration;
          document.getElementById("instructions").innerHTML = x[0].tTestInstruction;
          }
        
        else {
          alert(response.message);
        }
        

      },
      error: function (response) {
        console.log(response)

      }
      
    });   
    // f
    // 
   
     
   
})
     
   