const formBody= document.getElementById("form-body");


document.getElementById("new_page").addEventListener("click",function(){
    console.log("test")
    formBody.innerHTML+=`
    <form>
        

        <div id="hidden_part" class="p-3">
          <button id="close-button" class="btn">x</button>
            <div class="form-group">
              <label>Product Name</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group">
              <label>Description</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group">
              <label>Quantity</label>
              <input type="number" class="form-control">
            </div>
            <div class="form-group">
              <label>Rate</label>
              <input type="number" class="form-control">
            </div>
            <div class="form-group">
              <label>Amount</label>
              <input type="number" class="form-control">
            </div>
        </div>
        
      </form>
    `
    
})



