const formBody = document.getElementById("form-body");

const objectStroage = [];
var count = 0;
var a =1;
document.getElementById("new_page").addEventListener("click", function (a) {
  a.preventDefault();
  console.log("test")

  const  htmlform=`
  <div id="hidden_part" class="p-3">
    <button id="close-button" class="btn">x</button>
      <div class="form-group">
        <label for="pname">Product Name</label>
        <input type="text" class="form-control" name = "pname">
      </div>
      <div class="form-group">
        <label for ="description">Description</label>
        <input type="text" class="form-control" name ="description">
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="number" class="form-control" name="quantity">
      </div>
      <div class="form-group">
        <label for="rate">Rate</label>
        <input type="number" class="form-control" name="rate">
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" class="form-control" name ="amount">
      </div>
  </div>
`
const htmlBody= document.createElement("div");
htmlBody.innerHTML=htmlform;

formBody.appendChild(htmlBody);

  // formBody.innerHTML += 

})

const form = document.querySelector('form');
form.addEventListener('submit', function (a) {

  a.preventDefault();
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);
  const json = JSON.stringify(obj);
  objectStroage[count]=json;
  count += 1;
  a+=1;
  console.log(json);
  console.log(objectStroage);
})



