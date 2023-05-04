const formBody = document.getElementById("form-body");

const objectStroage = [];
var count = 0;
var remaining =0;
var removedString;
document.getElementById("new_page").addEventListener("click", function (a) {
  a.preventDefault();
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
    <button onclick="remove(this.id)" id=${"close_button" + count} type="button" class="btn close-button">x</button>
    <div class="form-group">
      <label for="pname">Product Name</label>
      <input type="text" class="form-control product-name-input" id = ${"product_name" + count} name = "pname">
    </div>
    <div class="form-group">
      <label for ="description">Description</label>
      <input type="text" class="form-control product-description" id = ${"product_description" + count} name ="description">
    </div>
    <div class="form-group">
      <label for="quantity">Quantity</label>
      <input type="number" class="form-control product-quantity" id = ${"product_quantity" + count} name="quantity">
    </div>
    <div class="form-group">
      <label for="rate">Rate</label>
      <input type="number" class="form-control product-rate" id = ${"product_rate" + count} name="rate">
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input type="number" class="form-control product-amount" id = ${"product_amount" + count} name ="amount">
    </div>
  </div>
`
  const htmlBody = document.createElement("div");
  htmlBody.innerHTML = htmlform;

  formBody.appendChild(htmlBody);
  count = count + 1;
  remaining ++;
});

const form = document.querySelector('form');


function remove(closeId) {

  let removedId = document.getElementById(closeId);
  removedId.parentNode.remove();
  remaining --;
  // for (let i = 0; i <= count; i++) {
  //   if (x.includes(i)) {
  //     removedString = i;
  //     var node = "hidden_part" + i;
  //   }
  // }

  // let removedPart = document.getElementById(node);
  // removedPart.parentNode.removeChild(removedPart);
}
document.getElementById("submit").addEventListener('click', function (a) {
  a.preventDefault();
  objectStroage.length = 0;

  const products = document.getElementsByClassName("hidden-part");
  for (let i = 0; i < remaining; i++) {
    // let productObject = {
    //   ProductName: document.getElementById("product_name" + i)?.value,
    //   ProductDescription: document.getElementById("product_description" + i)?.value,
    //   Quantity: document.getElementById("product_quantity" + i)?.value,
    //   Rate: document.getElementById("product_rate" + i)?.value,
    //   Amount: document.getElementById("product_amount" + i)?.value
    // };
    // if(products[i].querySelector(".product-name-input").value==="undefined"){
    //   continue;
    // }

      const productName = products[i].querySelector(".product-name-input").value;
      const productDescription = products[i].querySelector(".product-description").value;
      const productQuantity = products[i].querySelector(".product-quantity").value;
      const productRate = products[i].querySelector(".product-rate").value;
      const productAmount = products[i].querySelector(".product-amount").value;
  
      console.log('productName',{ productName});
      console.log('productDescription',{ productDescription});
      console.log('productQuantity',{ productQuantity});
      console.log('productRate',{ productRate});
      console.log('productAmount',{ productAmount});
    

    // const json = JSON.stringify(productObject);
    // if (typeof productObject.ProductName !== "undefined") {
    //   objectStroage.push(productObject);
    // }

  }
  console.log(objectStroage.length);
  console.log(objectStroage);

})

// for(let x=0;x<=test;x++){
  
// }