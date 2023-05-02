const formBody = document.getElementById("form-body");

const objectStroage = [];
var count = 0;
var x = 0;
var a = false;
var b = false;
document.getElementById("new_page").addEventListener("click", function (a) {
  a.preventDefault();
  console.log("test")
  // if (x > 0) {
  //   const fd = new FormData(form);
  //   const obj = Object.fromEntries(fd);
  //   const json = JSON.stringify(obj);
  //   // objectStroage[count] = json;
  //   objectStroage[count] = obj;
  //   count += 1;
  //   console.log(count);
  //   console.log(objectStroage);
  // }

  const htmlform = `
  <div id=${"hidden_part" + count} class="p-3 hidden-part">
    <button id=${"close_button" + count} class="btn close-button">x</button>
    <div class="form-group">
      <label for="pname">Product Name</label>
      <input type="text" class="form-control" id = ${"product_name" + count} name = "pname">
    </div>
    <div class="form-group">
      <label for ="description">Description</label>
      <input type="text" class="form-control" id = ${"product_description" + count} name ="description">
    </div>
    <div class="form-group">
      <label for="quantity">Quantity</label>
      <input type="number" class="form-control" id = ${"product_quantity" + count} name="quantity">
    </div>
    <div class="form-group">
      <label for="rate">Rate</label>
      <input type="number" class="form-control" id = ${"product_rate" + count} name="rate">
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input type="number" class="form-control" id = ${"product_amount" + count} name ="amount">
    </div>
  </div>
`
  const htmlBody = document.createElement("div");
  htmlBody.innerHTML = htmlform;

  formBody.appendChild(htmlBody);
  count = count + 1;
})


const form = document.querySelector('form');
// form.addEventListener('submit', function (a) {

//   a.preventDefault();
//   const fd = new FormData(form);
//   const obj = Object.fromEntries(fd);
//   const json = JSON.stringify(obj);
//   objectStroage[count]=json;
//   count += 1;
//   a+=1;
//   console.log(json);
//   console.log(objectStroage);
// })

// for (let i = 0; i <= count; i++) {
//   if (i == count) {
//     let x = "close_button" + i;
//     console.log(x);
//     // document.getElementById("close_button"+i).addEventListener('click', function(a){
//     //   a.preventDefault();
//     // console.log("working");
//     // })
//   }
// }
// function myFunction(a) {
//   a.preventDefault();
//   const x = this.id;
//   for (let i = 0; i <= count; i++) {
//     if (x.contains("x")) {
//       console.log("working");
//     }
//   }
// }


document.getElementById("submit").addEventListener('click', function (a) {
  a.preventDefault();
  for (let i = 0; i < count; i++) {
    let productObject = {
      ProductName: document.getElementById("product_name" + i).value,
      ProductDescription: document.getElementById("product_description" + i).value,
      Quantity: document.getElementById("product_quantity" + i).value,
      Rate: document.getElementById("product_rate" + i).value,
      Amount: document.getElementById("product_amount" + i).value
    };
    objectStroage.push(productObject);
  }
  console.log(objectStroage);
})

// document.getElementById("close-button").addEventListener('click',function(){
//   this.style.display = "none";
// })
// const closeBar = document.querySelector("close-button");
// let clicked = true;
// function myFunction(x) {
//   x.preventDefault();
//   if (clicked) {
//     closeBar.style.display = "none";
//     clicked = false;
//   } else {
//     closeBar.style.display = "none";
//     clicked = true;
//   }
// }
// const closeBar = document.getElementById("close-button");
// closeBar.addEventListener('click', function (a) {
//   a.preventDefault();
//   b = true;
// })