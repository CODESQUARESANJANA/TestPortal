
console.log("pathname-----", window.location.pathname)
var pathname = window.location.pathname;
function GetCategory() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.1.28/EXAMPANEL/admin/get_category", true);
  xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2RhdGEiOnsiaVVzZXJJZCI6IjEiLCJ2Rmlyc3ROYW1lIjoiQWFzaHV0b3NoIiwidkxhc3ROYW1lIjoiTmFtZGVvIiwiZUdlbmRlciI6Im1hbGUiLCJ2RW1haWwiOiJhYXNodXRvc2gubmFtZGVvQGNvZGVzcXVhcmV0ZWNoLmNvbSIsInZQYXNzd29yZCI6ImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlIiwidlBob25lTm8iOiI3MDQ5MjQ2NDIwIiwidlByb2ZpbGVQaWMiOm51bGwsImlBZGRlZEJ5IjoiMCIsImlVcGRhdGVkQnkiOiIwIiwiZHRBZGRlZERhdGUiOiIyMDIyLTA3LTIxIDE2OjEyOjU4IiwiZHRVcGRhdGVkRGF0ZSI6bnVsbCwiZVN0YXR1cyI6IkFjdGl2ZSJ9LCJ1c2VyX3R5cGUiOiJhZG1pbiIsIkFQSV9USU1FIjoxNjU4NzUxMjEzfQ.RyNSaHEKe3VjLw2oY7u-k2uAgzpCTXS0K6cecsHRDLI")
  //    xhttp.setRequestHeader("Access-Control-Allow-Origin","*")
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var category = JSON.parse(this.responseText);
      console.log("--", category)
      if (pathname === "/category_details.html") {
        category.forEach(element => {
          document.getElementById("category_data").innerHTML += `
          <tr>
          <td scope="row">${element.iCategoryId}</td>
          <td>${element.vCategoryName}</td>
          <!-- <td class="d-flex mr-1" > -->

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
          `
        });
      } else {
        category.forEach(element => {
          document.getElementById("getCategory").innerHTML += `
      <option value="${element.iCategoryId}">${element.vCategoryName}</option>
      `
        })
      }


    }
  };

  xhttp.send();
}
GetCategory()