$(document).ready(function(){



    // $('#submit').prop('disabled', false);
   
    
    $('#showResult').click(()=>{
        window.location.href="../html/result_detail.html"
    })
    history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});

    
    var deadline = new Date("July 27, 2022 12:40:25").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = 
            hours + "h " + minutes + "m " + seconds + "s ";
        if (t = 5000) {
            // clearInterval(x);
            document.getElementById("demo").style.cssText.color = "red";
            window.location.href = "#";
            // document.getElementById("demo").innerHTML = "EXPIRED";
        }
        else if (t == 0) {

        }
    }, 1000);




        //TIMER QUESTION WISE FOR 
        
        // if(sec!=0){
        //     $("#save_previous").prop('disabled',true);
        //     $("#mark_review").prop('disabled',true);
        
        // }
        // else{
        //     $("#save_previous").prop('disabled',false);
        //     $("#mark_review").prop('disabled',false);
        // }
        // var sec = 60;
        // var time = setInterval(myTimer, 1000);

        // function myTimer() {
        //     document.getElementById('timer').innerHTML = sec + "sec left";
        //     sec--;
        //     if (sec == -1) {
        //         clearInterval(time);
        //         alert("Time out!! :(");
        //     }
        // }


    //     var temp_id = ''; 

    //     for (let i = 1; i < Question_data.length; i++) {
    //         // console.log(`${Question_data[i].qid - 1}`);
    //         var id= `${Question_data[i].qid-1}`;
    //         document.getElementById('nav_question').innerHTML += `
            
    //         <div class="col-md-3 m-2" onclick="NextQuestion(${Question_data[i].qid -2})"  class="opt" id="navigate${Question_data[i].qid}"
    //                                 style="background-color: rgb(174, 170, 170);  width:20% ;">
    //                                 <p>${Question_data[i].qid - 1}</p>
    //                             </div>
                             
            
    //         `
          
    
    //     }
    
    //     // for(let j=0;j< Question_data.length;i++)
    //     // {
    //     //     if(document.getElementById("option1").checked)
    //     //             {
    //     //         document.getElementById(`${Question_data[i].qid}`).setAttribute("style", "background-color: green;");
    //     //     }
    //     // }
    
    //     function option()
    //     {
    //         // console.log(temp_id);
    //         // // alert(temp_id);
    //         // console.log(document.getElementById("option1"));
    
    
    //       if(document.getElementById("option1").checked == true || document.getElementById("option2").checked  == true|| document.getElementById("option3").checked== true || document.getElementById("option4").checked == true)
    //       {
    //         console.log("green");
    //         document.getElementById("navigate"+(parseInt(temp_id)+1)).setAttribute("style", "background-color: lightgreen;");
    
    //       }
         
    //     }
    
       
    
    
    //     function NextQuestion(a) {
          
    //  temp_id = Question_data[a].qid;
    // console.log(Question_data);
    //         document.getElementById('question_append').innerHTML = `
    //   <div class="card-header">
    //                     <div ><p><b>Questions :${Question_data[a].qid}</b> <span id="timer" style="margin-left: 80%;"></span></p>
    //                         <p id="uQuestioN">${Question_data[a].question}</p>
    //                     </div>
    //                 </div>
    //                 <div class="card-body m-4">
    //                     <div id="uOptions" class="pt-2 m-3">
    //                         <div class="row">
    //                     <div class="col-sm-6 ">
    //                              <input type="${Question_data[a].qtype}" onchange=option() value="${Question_data[a].options[0]}" name="l1" id="option1" class="pt-2"><label for="l1">${Question_data[a].options[0]}</label><br>
    //                              <input type="${Question_data[a].qtype}" name="l2" onchange=option() id="option2" ><label for="l2">${Question_data[a].options[1]}</label>
    //                         </div>
    //                     <div class="col-sm-6"> 
    //                             <input type="${Question_data[a].qtype}" name="l1" onchange=option() id="option3"><label for="l1">${Question_data[a].options[2]}</label><br>
    //                             <input type="${Question_data[a].qtype}" name="l1" onchange=option() id="option4"><label for="l1">${Question_data[a].options[3]}</label><br></div>
    //                     </div>
                       
                           
    //                     </div>
    //                 </div>     
    
    //   `
    //   document.getElementById("navigate"+(parseInt(temp_id)+1)).setAttribute("style", "background-color: lightblue;");
    
    
    
    //     }
    

})