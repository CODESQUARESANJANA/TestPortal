
function AddOpt(){
  // document.getElementById('question_type').enabled = true;
    x = document.getElementById('question_type').value;
    console.log(x);

    if(x=="radio"){
      for(let i=0;i<4;i++){
        document.getElementById("Multiple_Options").innerHTML += `<div style="font-weight:bold">Options</div>
        <div class="d-flex">
          <div style="padding:2%">
          
          <input type="radio" name="radio" id='k${i}' class="k${i}" ></div> 
          <input type="text"  id='${i}' class="pl-2 options " style="width:100%">
          <i class="fa fa-trash p-2 bg-secondary" aria-hidden="true">

          </i>

          
        </div>`
        // document.getElementById('question_type').disabled = true;
    }
  }

    else if(x=="check"){
      for(let i=0;i<4;i++){
        document.getElementById("Multiple_Options").innerHTML += `<div style="font-weight:bold">Options</div>
        <div class="d-flex">
          <div style="padding:2%">
          
          <input type="checkbox" id='k${i}' ></div> 
          <input type="text"  id='${i}' class="pl-2 options " style="width:100%">
          <i class="fa fa-trash p-2 bg-secondary" aria-hidden="true">

          </i>

          
        </div>`
        // document.getElementById('question_type').disabled = true;
    }
    }


    // if(x=="True&False"){
    //     document.getElementById("Multiple_Options").innerHTML += `<div style="font-weight:bold">Options</div>
    //     <div class="d-flex">
    //       <div style="padding:2%">
    //       <input type="checkbox" ></div> 
    //       <input type="text" class="pl-2" style="width:100%">
    //       <div style="padding:2%">
    //       <input type="checkbox" ></div> 
    //       <input type="text" class="pl-2" style="width:100%">
    //       <i class="fa fa-trash p-2 bg-secondary" aria-hidden="true">

    //       </i>

          
    //     </div>`
        
    // }    

    if(x=="Write_Answer"){
      for(let i=0;i<1;i++){
        document.getElementById("Multiple_Options").innerHTML += `<div style="font-weight:bold">Options</div>
        <div class="d-flex">
          <div style="padding:2%">
          <input type="checkbox" ></div> 
          <textarea cols="60" class="form-control" style="max-width: 100%;" id='${i}' class="options"></textarea>
        
        
          <i class="fa fa-trash p-2 bg-secondary" aria-hidden="true" style="height:1%">

          </i>

          
        </div>`
        // document.getElementById('Option_Adding').disabled = true;

        
    }   
  } 

    

}


