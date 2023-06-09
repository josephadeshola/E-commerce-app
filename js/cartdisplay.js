
let carts = [];

const getlocal = () => {
  getlocalItem()
  renderTotal()

}
function getlocalItem() {
  localStorage.allCarts ? carts = JSON.parse(localStorage.getItem("allCarts")) : carts = [];
  if (carts.length == 0) {
    setTimeout(()=>{
      productNotFound.innerHTML="<center><div class='border part rounded shadow border-1 '><center>  <div class='border roundimg mt-4 shadow text-info  border-1 py-2 '><i class='mt-2 bi bi-cart-dash-fill  cartImg'></i></div> <b>Your cart is empty!</b> <br> <h4>item is not added yet </h4><div class='mb-5'><button class='btn btn-info text-light'> <a href='./shopingpagr.html' class='text-decoration-none text-light'> Start Shopping</a></button></div></center> </div></center>"
      
    },1000)
    // productNotFound.innerHTML=""
  }
  else {
    
    document.querySelector(".displaycontainer").innerHTML = ""
    carts.forEach((val) => {
      
      document.querySelector(".displaycontainer").innerHTML += `
            
            <div class="py-3 ">
            <div class="d-flex ">
            <div>
            <img height="250vh" width="" class="rounded shadow " src="${val.cart.image}" alt="">
            </div>
            <div>
            <div class="d-flex">
            <h3 class=" px-3" >${val.cart.description}</h3>
           
            </div>
            <div class=" col-11  mt-5 py-4 price">
            <b class="text-danger"> ₦${val.cart.price}</b>
            <div class="d-flex mx-auto">
            <div class="border text-center py-1 border-1 show btn btn-info " onclick="changeNumOfUnit('minus',${val.id})">-</div>
            <div class="border text-center py-1 border-1 show" id="nooo">${val.no_order}</div>
            <div class="border text-center py-1 border-1 show btn btn-info" onclick="changeNumOfUnit('plus',${val.id})">+</div>
            </div>
            <div class="d-flex  mt-4 ">
           <span>  ${val.cart.instock} items left </span> 
           <div class="progress col-8 mx-auto mt-2" role="progressbar" aria-label="Success example" aria-valuenow="${val.instock}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar  bg-warning"
            ' style="width: ${val.cart.instock}%"></div>
            </div>
            <i class="bi bi-trash3 ms-3  fs-5" onclick="deleteItem(${val.id})"></i> <div id="showNow"></div>
            </div>
            <hr>          
            </div>
            </div>  
            </div>            
            </div>`
          
    })
  
  }
}
getlocalItem()

function changeNumOfUnit(action, id) {
  const index = carts.findIndex((item) => item.id === id);
  const cartItem = carts[index];
  if (action === "plus" && cartItem.no_order < 50) {
    cartItem.no_order++;
  } else if (action === "minus") {
    cartItem.no_order--;
    if (cartItem.no_order < 1) {
      cartItem.no_order = 1;
    }
  }
  localStorage.setItem("allCarts", JSON.stringify(carts));
  getlocalItem();
  renderTotal();
  
}

const renderTotal = () => {
  carts.map((amount) => {
    let totalPrice = 0
    totalItem = 0
    carts.forEach((eachAmount) => {
      // console.log(eachAmount.no_order);
      totalPrice += eachAmount.cart.price * eachAmount.no_order
      totalItem += eachAmount.no_order
      console.log(totalItem);
    })
    // localStorage.setItem("ride",JSON.stringify(carts))
    totalprice.innerHTML = `${totalItem} items : ₦${Number(totalPrice)}`
    document.getElementById("badge").innerHTML = carts.length == 0 ? "" :carts.length
    document.getElementById("badg").innerHTML = carts.length == 0 ? "" : carts.length;
    document.querySelector(".showCart").innerHTML=`CARTS(${carts.length})`
    fiex.innerHTML = `<button class="btn text-light btn-info  w-100 btnheight " onclick="checkUser()">CHECKOUT  (₦${Number(totalPrice)})</button>
    </div>`
  })
  
}
let allUser =localStorage.localStore?JSON.parse(localStorage.localStore):[]
allUser.map((eachUser)=>{

  showUser.innerHTML=`Hi, ${eachUser.first_name}`
})
const checkUser=()=>{
  if(allUser.length == 0){
    swal({
      title: "User Is Not Found Yet, Kindly Signup!",
      icon: "info",
     
    });
    setTimeout(()=>{
      window.location.href="signup.html"
    },3000)
  }
  else{
    window.location.href="checkout.html"
  }
 console.log(allUser);
}
getlocal()


const deleteItem = (id) => {
  const index = carts.findIndex((del) => del.id === id)
  carts.splice(index, 1);
  localStorage.setItem("allCarts", JSON.stringify(carts));
  getlocalItem();
  renderTotal();
  window.location.reload()
 
}
