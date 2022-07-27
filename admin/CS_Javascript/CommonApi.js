var pathname = window.location.pathname.toString();
let cookie = {};
var cokiesArray = document.cookie.split(";");
for (let i = 0; i < cokiesArray.length; i++) {
  let [key, value] = cokiesArray[i].split("=");
  cookie[key.trim()] = value;
  console.log(cookie.token);
}
function GetCategory() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.1.28/EXAMPANEL/admin/get_category", true);
  xhttp.setRequestHeader("Authorization", `${cookie.token}`);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var category = JSON.parse(this.responseText);
      if (pathname === "/admin/category-details.html") {
        category.forEach((element) => {
          document.getElementById("category_data").innerHTML += `
          <tr>
          <td scope="row">${element.iCategoryId}</td>
          <td>${element.vCategoryName}</td>
          <td>
            <button
              class="btn btn-warning btn-sm"
              onclick="window.location.href='set-exam.html'"
            >
              Edit
            </button>
            <button
              class="btn btn-success btn-sm"
              style="background-color: #17a2b8"
            >
              Delete
            </button>
          </td>
        </tr>
          `;
        });
      } else {
        category.forEach((element) => {
          document.getElementById("getCategory").innerHTML += `
      <option value="${element.iCategoryId}">${element.vCategoryName}</option>
      `;
        });
      }
    }
  };
  xhttp.send();
}
if (
  pathname === "/admin/category-details.html" ||
  pathname === "/admin/add-question.html"
) {
  GetCategory();
}
const CreateExam = () => {
  let test_name = document.getElementById("exam_name").value;
  let test_code = document.getElementById("exam_code").value;
  let test_description = document.getElementById("summernote").value;
  let test_instruction = document.getElementById("exam_instruction").value;
  let test_start_time = document.getElementById("exam_start_time").value;
  let test_end_time = document.getElementById("exam_end_time").value;
  let test_duration = document.getElementById("exam_duration").value
  if (test_name === "") {
    alert("Please enter exam name...");
  } else if (test_code === "") {
    alert("Please enter exam code...");
  } else if (test_description === "") {
    alert("Please enter exam description...");
  } else if (test_instruction === "") {
    alert("Please enter exam instruction...");
  } else if (test_start_time === "") {
    alert("Please select start time...");
  } else if (test_end_time === "") {
    alert("Please select end time...");
  } else if (test_duration === "") {
    alert("Please enter exam duration")
  } else {
    const exam_data = {
      vTestName: test_name,
      tTestDescription: test_description,
      tTestInstruction: test_instruction,
      dStartTestDate: test_start_time,
      dEndTestDate: test_end_time,
      vTestCode: test_code,
      iTestDuration: test_duration
    };
    let data = JSON.stringify(exam_data);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://192.168.1.28/EXAMPANEL/admin/addtest", true);
    xhttp.setRequestHeader("Authorization", `${cookie.token}`);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        alert(response.message);
      }
    };
    xhttp.send(data);
  }
};

const GetExamDetails = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.1.28/EXAMPANEL/admin/getalltest", true);
  xhttp.setRequestHeader("Authorization", `${cookie.token}`);

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log("res-", response);
      response.data.forEach((element) => {
        document.getElementById("exam_details_data").innerHTML += `
                <tr style="font-size: 14px;">
                <td scope="row">${element.iTestId}</td>
                <td>${element.vTestName}</td>
                <td>${element.vTestCode}</td>
                <td>${element.tTestInstruction}</td>
                <td style="text-align: center;">${element.dStartTestDate}</td>
                <td style="text-align: center;">${element.dEndTestDate}</td>
                <td class="d-flex mr-1" ><a class="btn btn-secondary btn-sm mx-2"   style="background-color: #f8f9fa; color:#444; font-size: 12px;" href='/admin/exam-question.html?testId=${element.iTestId}' >Questions</a><button class="btn btn-warning btn-sm " style="font-size: 12px;" onclick="window.location.href='add-exam-detail.html'">Edit</button></td>
              </tr>`;
      });
    }
  };
  xhttp.send();
};
if (pathname === "/admin/exam-details.html") {
  GetExamDetails();
}

const addQuestion = () => {
  var enter_description = document.getElementById("summernote").value;

  var enter_category = document.getElementById("getCategory").value;
  var question_type = document.getElementById("question_type").value;
  // var enter_options = document.getElementById('').value ;
  var question_marks = document.getElementById("enter_marks").value;

  option_value = [];
  correct_answer = [];
  for (let i = 0; i < 4; i++) {
    option = document.getElementById(`${i}`).value;

    btn_on = document.getElementById(`k${i}`).checked;

    if (btn_on == true) {
      correct_answer.push(option);
    }
    option_value.push(option);
  }
  console.log("val", option_value);
  console.log("checked", correct_answer);

  option_value_update = option_value.toString();
  correct_answer_update = correct_answer.toString();
  console.log("new ANSWER IN STRING", option_value_update);
  console.log("val", option_value)
  console.log("checked", correct_answer)

  option_value_update = option_value.toString();
  correct_answer_update = correct_answer.toString();
  console.log('new ANSWER IN STRING', option_value_update)

  const add = {
    tQuestionText: enter_description,
    eQuestionType: question_type,
    iCategoryId: enter_category,
    vMarks: question_marks,
    vOption: option_value_update,
    vAnswer: correct_answer_update,
  };
  let data = JSON.stringify(add)
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.1.28/EXAMPANEL/admin/addQuestion", true);
  xhttp.setRequestHeader("Authorization", `${cookie.token}`);
  //    xhttp.setRequestHeader("Access-Control-Allow-Origin","*")
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    }

    window.location.href = "http://127.0.0.1:444/add-question.html";
  };

  xhttp.send(data);
  // window.location.reload();
};

var pathname = window.location.pathname.toString();
console.log("pathname-", pathname);

function GetAllQuestions() {
  console.log("fggj");

  $.ajax({
    url: "http://192.168.1.28/EXAMPANEL/admin/getQuestion",
    type: "GET",
    headers: {
      Authorization:
        `${cookie.token}`,
    },
    data: {},
    success: function (data) {
      console.log(data);
      if (data.success == true) {
        data.data.forEach((element) => {
          //console.log("dfsd",element)
          document.getElementById("question_data1").innerHTML += `<tr>
        <td>
            ${index+1}
        </td>
        <td>
            ${element.iQuestionId}
        </td>
        <td>
            ${element.tQuestionText}

        </td>
        <td>
            ${element.eQuestionType}
        </td>
        <td>
            ${element.vCategoryName}
        </td>
        <td>
              ${element.dAddedDate}
        </td>
        
        <td>
            <button class="btn btn-primary" title="Edit" href=""
                onclick="window.location.href="">
                View
            </button>

            <button class="btn btn-warning" title="Edit" href='"
                onclick="window.location.href='/admin/add-question.html'">
                Edit
            </button>

            <button class="btn btn-danger" id="delete_Que" onclick="DeleteQuestions(${element.iQuestionId})" title="Edit" href=""
                onclick="window.location.href='">
                Delete
            </button>

        </td>
    </tr>`;
        });
      }
    },
  });
}
// GetCategory();

const AddQuestionToTest = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.open("Get", "http://192.168.1.28/EXAMPANEL/admin/getQuestion", true);
  xhttp.setRequestHeader("Authorization", `${cookie.token}`);
  // xhttp.send({})

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log("res-", response);
      response.data.forEach((element, index) => {
        // console.log(element,"element")
        document.getElementById("exam_question_data").innerHTML += `
                <tr style="font-size: 14px;">
                <td scope="row">${index + 1}</td>
                <td><input value="${
                  element.iQuestionId
                }" type="checkbox" name=selectServices onchange="questionPicker(value)"/></td>
                <td>${element.tQuestionText}</td>
                <td>${element.vCategoryName}</td>
                <td style="text-align: center;">${element.eQuestionType}</td>
              </tr>`;
      });
    }
  };
  xhttp.send();
};
if (pathname === "/admin/exam-question.html") {
  AddQuestionToTest();
}

const submitHandler = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const Testid = urlSearchParams.get("testId");

  var questionArr = [];
  $("#services").val(
    $("input[name=selectServices]:checked")
      .map(function () {
        questionArr.push(this.value);
      })
      .get()
  );
  let questIds = questionArr.toString();


  if (questionArr.toString()  === "") {
    alert("Please Select Questions First");
  } else {
    const exam_data = {
      iTestId: Testid,
      iQuestionId: questIds,
    };
    let data = JSON.stringify(exam_data);
    var xhttp = new XMLHttpRequest();
    xhttp.open(
      "POST",
      "http://192.168.1.28/EXAMPANEL/admin/addtestquestion",
      true
    );
    xhttp.setRequestHeader("Authorization", `${cookie.token}`);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        alert(response.message);
      }
    };
    xhttp.send(data);
  }
};

GetAllQuestions();

//Delete Questions from Question box//

var pathname = window.location.pathname.toString();
console.log("pathname-", pathname);

function DeleteQuestions(id) {
  $.ajax({
    url: "http://192.168.1.28/EXAMPANEL/admin/deleteQuestion",
    type: "POST",
    headers: {
      "Authorization": `${cookie.token}`,
      
    },
    
    data: { "iQuestionId": id },
    success: function (data) {
      console.log(data);
     
    },
    error: function (err) {
      console.log("Fs", err);
      console.log("cookie",cookie.token);
    }
    
  });
}
