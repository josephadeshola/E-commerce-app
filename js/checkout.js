let deliveryProduct = localStorage.allCarts ? carts = JSON.parse(localStorage.getItem("allCarts")) : carts = [];
document.getElementById("badge").innerHTML= carts.length==0 ? "":carts.length
carts.map((one) => {
    let totalPrice = 0
    totalItem = 0
    carts.forEach((eachAmount) => {
        totalPrice += Number(eachAmount.cart.price) * Number(eachAmount.no_order)
        totalItem += eachAmount.no_order

    })
    showAmount.innerHTML = `<b>₦${totalPrice}</b>`
    showAmoun.innerHTML = `<b>₦${totalPrice}</b>`
    totalItemNum.innerHTML = `Item's total <b> (${totalItem})</b>`
})

let allUser = localStorage.localStore ? JSON.parse(localStorage.localStore) : []
allUser.map((eachUser) => {
    fn.value  = (eachUser.first_name);
   ln.value = (eachUser.last_name);
});

// const textarea = document.querySelector("textarea");
// const initalHeight = parseInt(getComputedStyle
//     (textarea).getPropertyValue('height'))
//     textarea.addEventListener("input", () => {
//     textarea.style.height = `${initalHeight}px`
//     const newHeight = textarea.scrollHeight - initalHeight;
//     textarea.style.height = `${newHeight}px`
// })


const save = () => {
    if (!pn.value || !tt.value || !ps.value || !sl || !cy.value) {
        pn.className="form-control mt-2 is-invalid"
        tt.className="form-control mt-2 is-invalid"
        ps.className="form-control mt-2 is-invalid"
        sl.className="form-control mt-2 is-invalid"
        cy.className="form-control mt-2 is-invalid"
        validationServer05Feedback.innerHTML = "<small class='text-danger'>   Please provide a valid details</small>"
        validationServer05Fk.innerHTML = "<small class='text-danger'>  Please provide a valid details</small>"
        validationSeedback.innerHTML = "<small class='text-danger'>  Please provide a valid details</small>"
        validatier05onSeredback.innerHTML = "<small class='text-danger'>  Please provide a valid details</small>"
        validatieeredback.innerHTML = " <small class='text-danger'> Please provide a valid details</small>"
    }
    else {
        validationServer05Feedback.innerHTML = ""
        validationServer05Fk.innerHTML = ""
        validationSeedback.innerHTML = ""
        validatier05onSeredback.innerHTML = ""
        validatieeredback.innerHTML = ""
        pn.className="form-control mt-2 is-valid"
        tt.className="form-control mt-2 is-valid"
        ps.className="form-control mt-2 is-valid"
        sl.className="form-control mt-2 is-valid"
        cy.className="form-control mt-2 is-valid"

        let userDeliveryInformation = localStorage.detailsToSave ? JSON.parse(localStorage.detailsToSave) : []
        let userDelivery = {
            phoneNumber: pn.value,
            delivAdd: tt.value,
            password: ps.value,
            pickTown: sl.value,
            cityInput: cy.value
        }
        userDeliveryInformation.push(userDelivery)
        localStorage.setItem("detailsToSave", JSON.stringify(userDeliveryInformation))
        console.log(userDeliveryInformation);

    }
}





