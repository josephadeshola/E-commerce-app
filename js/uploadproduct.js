let deliveryProduct = localStorage.allCarts
  ? (carts = JSON.parse(localStorage.getItem("allCarts")))
  : (carts = []);
document.getElementById("badg").innerHTML =
  carts.length == 0 ? "" : carts.length;

let uploadedProduct = localStorage.productUpload
  ? JSON.parse(localStorage.productUpload)
  : [];
  
  let firstBtn=document.getElementById("shbtn")
  let secondBtn=document.getElementById("snbtn")
  firstBtn.style.display="none"
const uploadProduct = () => {
  if(secondBtn.style.display="none"){
      firstBtn.style.display="block"
    }
    else{

      setTimeout(()=>{
        secondBtn.style.display="block"
    },1000)
      }
  
  let imageInput = document.getElementById("productImage");

  if (imageInput.files.length > 0) {
    let file = imageInput.files[0];

    let reader = new FileReader();
    reader.onload = function (e) {
      let imageData = e.target.result;

      let uploadProduct = {
        product_image: imageData,
        product_description:productDisc.value,
        product_price: productPrice.value,
        product_category: productCategory.value,
        total_product: totalProduct.value,

      };
 

      uploadedProduct.push(uploadProduct);
      localStorage.setItem("productUpload", JSON.stringify(uploadedProduct));
      console.log(uploadedProduct);
    };
    reader.readAsDataURL(file);
  } else {
    console.log("No file selected.");
  }

};

const logOut=()=>{
  window.location.href="index.html"
}







