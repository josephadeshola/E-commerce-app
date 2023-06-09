let uploadedProduct = localStorage.productUpload
  ? JSON.parse(localStorage.productUpload)
  : [];
uploadedProduct.map((eachItem, i) => {
  myTable.innerHTML += `
 
    <div class="mt-4">
    <tr>
    <td>${i + 1}</td>
    <td><img height="40pc" width="40pc" class="rounded" src="${
      eachItem.product_image}"></td>
    <td>${eachItem.product_price}</td>
    <td>${eachItem.product_description}</td>
    <td>${eachItem.product_category}</td>
    <td>${eachItem.total_product} </td>
    <td class="d-flex ms-1 gap-1">
    <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete </button>
    <button class="btn btn-warning">Edit</button>
    </td>
    </tr>
    `;
     });

const exportProduct = () => {
  let exported = JSON.parse(localStorage.getItem("productUpload"));
  localStorage.setItem("i", JSON.stringify(exported));
  setTimeout(() => {
    window.location.href="index.html"
  },1000);
  console.log(uploadedProduct);
};
const deleteProduct=(more)=>{

  window.location.reload()
  uploadedProduct.splice(more,1)
  localStorage.setItem("productUpload", JSON.stringify( uploadedProduct ))
  deleteProduct()

}

const logOut=()=>{
  window.location.href="index.html"
}
