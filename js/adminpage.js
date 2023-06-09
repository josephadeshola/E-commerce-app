let deliveryProduct = localStorage.allCarts
  ? (carts = JSON.parse(localStorage.getItem("allCarts")))
  : (carts = []);
document.getElementById("badge").innerHTML =
  carts.length == 0 ? "" : carts.length;
document.getElementById("badg").innerHTML =
  carts.length == 0 ? "" : carts.length;

let adminData;
adminData = localStorage.adminInput ? JSON.parse(localStorage.adminInput) : [];
const signInAdmin = () => {
  adminUserName.value = "DOCpay125d";
  adminUserPassword.value = "125DOCpay_@";
  let adminDataOne = {
    username: userName.value,
    password: passWord.value,
    adminUserName: adminUserName.value,
    adminPassword: adminUserPassword.value,
  };

  adminData.push(adminDataOne);
  localStorage.setItem("adminInput", JSON.stringify(adminData));
  console.log(adminData);

  if (
    userName.value !== adminUserName.value ||
    passWord.value !== adminUserPassword.value
  ) {
    alertError.innerHTML = "incorrect password ";
    alertError.className = "form-control is-invalid alert alert-danger ";
    alertErr.innerHTML = "incorrect username";
    alertErr.className = "form-control is-invalid alert alert-danger ";
  } else {
    alertError.className = "form-control is-valid alert alert-success ";
    alertErr.className = "form-control is-valid alert alert-success";
    alertError.innerHTML = "Successful";
    alertErr.innerHTML = "Successful";
    window.location.href = "upload.html";
  }
};
let adminDataSm;
adminDataSm = localStorage.adminInputSm
  ? JSON.parse(localStorage.adminInputSm)
  : [];
const signIAdmin = () => {
  adminUserNameSm.value = "DOCpay125d";
  adminUserPasswordSm.value = "125DOCpay_@";
  let adminSm = {
    usernameSm: userNameSm.value,
    passwordSm: passWordSm.value,
    adminUserNameSm: adminUserNameSm.value,
    adminPasswordSm: adminUserPasswordSm.value,
  };
  adminDataSm.push(adminSm);
  localStorage.setItem("adminInputSm", JSON.stringify(adminDataSm));
  if (
    userNameSm.value !== adminUserNameSm.value ||
    passWordSm.value !== adminUserPasswordSm.value
  ) {
    alertEror.innerHTML = "incorrect password";
    alertEror.className = "form-control is-invalid alert alert-danger ";
    alertEr.innerHTML = "incorrect username";
    alertEr.className = "form-control is-invalid alert alert-danger ";
  } else {
    alertEror.className =
      "form-control is-valid text-center alert alert-success ";
    alertEr.className =
      "form-control is-valid  text-center alert alert-success";
    alertEror.innerHTML = "Successful";
    alertEr.innerHTML = "Successful";
    window.location.href = "upload.html";
  }
};
