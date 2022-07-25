function AddOpt(){
    x = document.getElementById('QType').value;
    console.log(x);

    if(x=="MCQ"){
        document.getElementById("Multiple_Options").innerHTML += `<div style="font-weight:bold">Options</div>
        <div class="d-flex">
          <div style="padding:2%">
          
          <input type="radio" ></div> 
          <input type="text" class="pl-2" style="width:100%">
          <i class="fa fa-trash p-2 bg-secondary" aria-hidden="true">

          </i>

          
        </div>`
    }

    if(x=="Single_Choice"){
        document.getElementById("Multiple_Options").innerHTML += `<div style="font-weight:bold">Options</div>
        <div class="d-flex">
          <div style="padding:2%">
          <input type="radio"  name="Radio_Answer" ></div> 
          <input type="text" class="pl-2" style="width:100%">
          <i class="fa fa-trash p-2 bg-secondary" aria-hidden="true">

          </i>

          
        </div>`
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
        document.getElementById("Multiple_Options").innerHTML += `<div style="font-weight:bold">Options</div>
        <div class="d-flex">
          <div style="padding:2%">
          <input type="checkbox" ></div> 
          <textarea cols="60" class="form-control" style="max-width: 100%;" id="texting" class="padding:2px"></textarea>
        
        
          <i class="fa fa-trash p-2 bg-secondary" aria-hidden="true" style="height:1%">

          </i>

          
        </div>`
        
    }    

    

}


