"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let userIDAutoIncrement = 1000;
let medicineIDAutoIncrement = 100;
let orderIDAutoIncrement = 3000;
let currentLoggedInUser;
let isNewUserMailValid = false;
let isNewUserPasswordValid = false;
let isNewUserNameValid = false;
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5069/api/userinfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
    });
}
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5069/api/userinfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5069/api/userinfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    });
}
function fetchMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5069/api/medicine';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch medicine');
        }
        return yield response.json();
    });
}
function addMedicine(medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5069/api/medicine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to add medicine');
        }
    });
}
function updateMedicine(id, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5069/api/medicine/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to update medicine');
        }
    });
}
function deleteMedicine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5069/api/medicine/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete medicine');
        }
    });
}
function fetchOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5069/api/orderinfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        return yield response.json();
    });
}
function addOrder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5069/api/orderinfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to add order');
        }
    });
}
function updateOrder(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5069/api/orderinfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update order');
        }
    });
}
function SignUpPage() {
    let indexPage = document.getElementById("home");
    indexPage.style.display = "none";
    let signUpPage = document.getElementById("signup");
    signUpPage.style.display = "block";
}
function SignUp() {
    let newUserName = document.getElementById("userName");
    let newUserMailID = document.getElementById("signupEmail");
    let newUserPassword = document.getElementById("signupConfirmPassword");
    if (isNewUserMailValid && isNewUserPasswordValid && isNewUserNameValid) {
        const user = {
            userID: 0,
            userName: newUserName.value,
            userMailID: newUserMailID.value,
            userPassword: newUserPassword.value,
            walletBalance: 0
        };
        addUser(user);
        alert("Signed up Successfully");
        Back("signup");
    }
    else {
        alert("Please fill out the form fully");
    }
}
function SignInPage() {
    let indexPage = document.getElementById("home");
    indexPage.style.display = "none";
    let signInPage = document.getElementById("signin");
    signInPage.style.display = "block";
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let userMailID = document.getElementById("signinEmail");
        let userPassword = document.getElementById("signinPassword");
        let isValidUser = true;
        var user = yield fetchUser();
        user.forEach(element => {
            if (userMailID.value === (element.userMailID) && userPassword.value === (element.userPassword)) {
                isValidUser = false;
                currentLoggedInUser = element;
                HomePage();
            }
        });
        if (isValidUser) {
            alert("Invalid Credentials");
        }
    });
}
function HomePage() {
    let mainPage = document.getElementById("page");
    let homePage = document.getElementById("homePage");
    mainPage.style.display = "none";
    homePage.style.display = "block";
    WelcomePage();
}
function MedicineDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        let medicinesDiv = document.getElementById("medicinesDiv");
        medicinesDiv.style.display = "block";
        let welcomePage = document.getElementById("welcome");
        welcomePage.style.display = "none";
        let purchasePage = document.getElementById("purchase");
        purchasePage.style.display = "none";
        let walletRechargePage = document.getElementById("walletRechargePage");
        walletRechargePage.style.display = "none";
        let showBalancePage = document.getElementById("showWalletBalance");
        showBalancePage.style.display = "none";
        let orderHistoryPage = document.getElementById("orderHistoryPage");
        orderHistoryPage.style.display = "none";
        let cancelOrderPage = document.getElementById("cancelOrderPage");
        cancelOrderPage.style.display = "none";
        let editDiv = document.getElementById("editDiv");
        editDiv.style.display = "none";
        medicinesDiv.innerHTML = "null";
        medicinesDiv.innerHTML = "<br><button onclick=\"AddMedicineDiv()\" id=\"AddButton\">Add Medicine</button><table cellpadding=\"5px\" border=\"2px\" id=\"medicineDetails\"><tr><th>Medicine Name</th><th>Available Count</th><th>Price</th><th>Date of Expiry</th><th>Action</th></tr></table>";
        let addButton = document.getElementById("AddButton");
        addButton.style.display = "block";
        let medicineTable = document.getElementById("medicineDetails");
        var medicine = yield fetchMedicine();
        medicine.forEach(element => {
            medicineTable.innerHTML += `<tr><td>${element.medicineName}</td><td>${element.availableCount}</td><td>${element.price}</td><td>${((element.dateOfExpiry.toString()).slice(0, 10)).split('-').reverse().join('/')}</td><td><button onclick=\"EditDiv(${element.medicineID})\" class=\"edit\" >Edit</button>&nbsp;&nbsp;<button class=\"delete\" onclick=\"Delete(${element.medicineID})\" >Delete</button></td></tr>`;
        });
    });
}
function CheckNewUserEmail(id) {
    let newUserMailID = document.getElementById(id);
    let newUserMailIDMessage = document.getElementById(id + "Message");
    if ((/^([\w\-\.]+)@([\w-]+\.)+[\w-]{2,}$/).test(newUserMailID.value)) {
        newUserMailIDMessage.style.visibility = "hidden";
        isNewUserMailValid = true;
    }
    else {
        newUserMailIDMessage.innerHTML = "Please enter a Valid email";
        newUserMailIDMessage.style.color = "red";
        newUserMailIDMessage.style.visibility = "visible";
        newUserMailIDMessage.style.fontSize = "20px";
    }
}
function CheckNewUserName(id) {
    let newUserName = document.getElementById(id);
    let newUserNameMessage = document.getElementById(id + "Message");
    if ((/[a-zA-Z]{2,25}$/).test(newUserName.value)) {
        newUserNameMessage.style.visibility = "hidden";
        isNewUserNameValid = true;
    }
    else {
        newUserNameMessage.innerHTML = "Please enter a Valid name";
        newUserNameMessage.style.color = "red";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.fontSize = "20px";
    }
}
function CheckNewUserPassword(id) {
    let newUserPassword = document.getElementById(id);
    let newUserPasswordMessage = document.getElementById(id + "Message");
    if ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(newUserPassword.value)) {
        newUserPasswordMessage.style.visibility = "hidden";
    }
    else {
        newUserPasswordMessage.innerHTML = "Please enter the strong password ";
        newUserPasswordMessage.style.color = "red";
        newUserPasswordMessage.style.visibility = "visible";
        newUserPasswordMessage.style.fontSize = "20px";
    }
}
function CheckNewUserConfirmPassword(id) {
    let newUserPassword = document.getElementById("signupPassword");
    let newUserConfirmPassword = document.getElementById("signupConfirmPassword");
    let newUserConfirmPasswordMessage = document.getElementById(id + "Message");
    if (newUserPassword.value === newUserConfirmPassword.value) {
        newUserConfirmPasswordMessage.style.visibility = "hidden";
        isNewUserPasswordValid = true;
    }
    else {
        newUserConfirmPasswordMessage.innerHTML = "Password doesn't Match";
        newUserConfirmPasswordMessage.style.color = "red";
        newUserConfirmPasswordMessage.style.visibility = "visible";
        newUserConfirmPasswordMessage.style.fontSize = "20px";
    }
}
function Back(id) {
    let backToMainPage = document.getElementById(id);
    backToMainPage.style.display = "none";
    let mainPage = document.getElementById("home");
    mainPage.style.display = "block";
}
function PurchasePage() {
    return __awaiter(this, void 0, void 0, function* () {
        let medicinesDiv = document.getElementById("medicinesDiv");
        medicinesDiv.style.display = "none";
        let welcomePage = document.getElementById("welcome");
        welcomePage.style.display = "none";
        let purchasePage = document.getElementById("purchase");
        purchasePage.style.display = "block";
        let showBalancePage = document.getElementById("showWalletBalance");
        showBalancePage.style.display = "none";
        let walletRechargePage = document.getElementById("walletRechargePage");
        walletRechargePage.style.display = "none";
        let orderHistoryPage = document.getElementById("orderHistoryPage");
        orderHistoryPage.style.display = "none";
        let cancelOrderPage = document.getElementById("cancelOrderPage");
        cancelOrderPage.style.display = "none";
        let editDiv = document.getElementById("editDiv");
        editDiv.style.display = "none";
        let count = document.getElementById("requiredCount");
        count.style.display = "none";
        let medicineDetailsDiv = document.getElementById("purchaseDetails");
        medicineDetailsDiv.innerHTML = "null";
        medicineDetailsDiv.innerHTML = "<table cellpadding=\"5px\" border=\"2px\" id=\"medicineTable\"><tr><th>Medicine Name</th><th>Available Count</th><th>Price</th><th>Date of Expiry</th><th>Action</th></tr></table>";
        let medicinesTable = document.getElementById("medicineTable");
        let medicines = yield fetchMedicine();
        medicines.forEach(element => {
            if (element.dateOfExpiry.toString().substring(0, 10) >= new Date().toISOString().substring(0, 10) && element.availableCount > 0) {
                medicinesTable.innerHTML += `<tr><td>${element.medicineName}</td><td>${element.availableCount}</td><td>${element.price}</td><td>${((element.dateOfExpiry.toString()).slice(0, 10)).split('-').reverse().join('/')}</td><td><button class=\"buy\"onclick=\"Buy(${element.medicineID})\">Buy</button></td></tr>`;
            }
        });
    });
}
function Buy(id) {
    let count = document.getElementById("requiredCount");
    count.style.display = "block";
    count.style.visibility = "visible";
    count.style.fontSize = "20px";
    count.style.marginLeft = "4em";
    let purchaseButton = document.getElementById("purchaseButton");
    purchaseButton.innerHTML = `<button type=\"submit\" onclick=\"Purchase(${id})\">Purchase</button>`;
}
function Purchase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let requiredCount = document.getElementById("count");
        let purchase = false;
        var medicine = yield fetchMedicine();
        medicine.forEach(element => {
            if (element.medicineID == id) {
                if (element.availableCount >= parseInt(requiredCount.value)) {
                    if (currentLoggedInUser.walletBalance >= element.price * parseInt(requiredCount.value)) {
                        element.availableCount -= parseInt(requiredCount.value);
                        currentLoggedInUser.walletBalance -= element.price * parseInt(requiredCount.value);
                        var order = { orderID: 0, userID: currentLoggedInUser.userID, medicineID: element.medicineID, medicineCount: parseInt(requiredCount.value), totalPrice: element.price * parseInt(requiredCount.value), orderDate: new Date(), orderStatus: "Ordered" };
                        addOrder(order);
                        updateMedicine(id, element);
                        updateUser(currentLoggedInUser.userID, currentLoggedInUser);
                        alert(`${requiredCount.value} ${element.medicineName} Purchased Successfully`);
                        PurchasePage();
                    }
                    else {
                        alert("Insufficient Balance Please recharge your wallet");
                    }
                }
                else {
                    purchase = confirm(`We have only ${element.availableCount} ${element.medicineName} Do you want to Purchase ${element.availableCount} ${element.medicineName} ? `);
                    if (purchase) {
                        if (currentLoggedInUser.walletBalance >= element.price * parseInt(requiredCount.value)) {
                            currentLoggedInUser.walletBalance -= element.price * parseInt(requiredCount.value);
                            var order = { orderID: 7, userID: currentLoggedInUser.userID, medicineID: element.medicineID, medicineCount: parseInt(requiredCount.value), totalPrice: element.price, orderDate: new Date(), orderStatus: "Ordered" };
                            addOrder(order);
                            alert(`${element.availableCount} ${element.medicineName} Purchased Successfully`);
                            element.availableCount = 0;
                            PurchasePage();
                        }
                        else {
                            alert("Insufficient Balance Please recharge your wallet");
                        }
                    }
                }
            }
        });
    });
}
function WelcomePage() {
    let greet = document.getElementById("welcome");
    greet.innerHTML = `<h2 style="text-align:center;font-size:3rem;">Welcome ${currentLoggedInUser.userName} !</h2>`;
    let welcomePage = document.getElementById("welcome");
    welcomePage.style.display = "block";
    let purchasePage = document.getElementById("purchase");
    purchasePage.style.display = "none";
    let medicinesDiv = document.getElementById("medicinesDiv");
    medicinesDiv.style.display = "none";
    let walletRechargePage = document.getElementById("walletRechargePage");
    walletRechargePage.style.display = "none";
    let showBalancePage = document.getElementById("showWalletBalance");
    showBalancePage.style.display = "none";
    let orderHistoryPage = document.getElementById("orderHistoryPage");
    orderHistoryPage.style.display = "none";
    let cancelOrderPage = document.getElementById("cancelOrderPage");
    cancelOrderPage.style.display = "none";
    let editDiv = document.getElementById("editDiv");
    editDiv.style.display = "none";
}
function WalletRechargePage() {
    let welcomePage = document.getElementById("welcome");
    welcomePage.style.display = "none";
    let purchasePage = document.getElementById("purchase");
    purchasePage.style.display = "none";
    let medicinesDiv = document.getElementById("medicinesDiv");
    medicinesDiv.style.display = "none";
    let orderHistoryPage = document.getElementById("orderHistoryPage");
    orderHistoryPage.style.display = "none";
    let cancelOrderPage = document.getElementById("cancelOrderPage");
    cancelOrderPage.style.display = "none";
    let editDiv = document.getElementById("editDiv");
    editDiv.style.display = "none";
    let walletRechargePage = document.getElementById("walletRechargePage");
    walletRechargePage.style.display = "block";
    let walletRechargeMessage = document.getElementById("walletRechargeMessage");
    walletRechargeMessage.style.visibility = "hidden";
    let showBalancePage = document.getElementById("showWalletBalance");
    showBalancePage.style.display = "none";
}
function WalletRecharge() {
    return __awaiter(this, void 0, void 0, function* () {
        let amount = document.getElementById("amount");
        currentLoggedInUser.walletBalance += parseInt(amount.value);
        let rechargeForm = document.getElementById("rechargeForm");
        updateUser(currentLoggedInUser.userID, currentLoggedInUser);
        let walletRechargeMessage = document.getElementById("walletRechargeMessage");
        walletRechargeMessage.style.visibility = "visible";
        walletRechargeMessage.innerHTML = `<br><br><h2>Wallet Recharged and Your Wallet Balance is ${currentLoggedInUser.walletBalance}</h2>`;
        rechargeForm.reset();
    });
}
function ShowBalance() {
    let welcomePage = document.getElementById("welcome");
    welcomePage.style.display = "none";
    let purchasePage = document.getElementById("purchase");
    purchasePage.style.display = "none";
    let medicinesDiv = document.getElementById("medicinesDiv");
    medicinesDiv.style.display = "none";
    let walletRechargePage = document.getElementById("walletRechargePage");
    walletRechargePage.style.display = "none";
    let orderHistoryPage = document.getElementById("orderHistoryPage");
    orderHistoryPage.style.display = "none";
    let cancelOrderPage = document.getElementById("cancelOrderPage");
    cancelOrderPage.style.display = "none";
    let editDiv = document.getElementById("editDiv");
    editDiv.style.display = "none";
    let showBalancePage = document.getElementById("showWalletBalance");
    showBalancePage.style.display = "block";
    showBalancePage.innerHTML = `<br><br><h1>Available Balance in your Wallet is ${currentLoggedInUser.walletBalance}</h1>`;
}
function OrderHistoryPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcome");
        welcomePage.style.display = "none";
        let purchasePage = document.getElementById("purchase");
        purchasePage.style.display = "none";
        let medicinesDiv = document.getElementById("medicinesDiv");
        medicinesDiv.style.display = "none";
        let walletRechargePage = document.getElementById("walletRechargePage");
        walletRechargePage.style.display = "none";
        let showBalancePage = document.getElementById("showWalletBalance");
        showBalancePage.style.display = "none";
        let cancelOrderPage = document.getElementById("cancelOrderPage");
        cancelOrderPage.style.display = "none";
        let editDiv = document.getElementById("editDiv");
        editDiv.style.display = "none";
        let orderHistoryPage = document.getElementById("orderHistoryPage");
        orderHistoryPage.style.display = "block";
        let isOrdered = false;
        let orders = yield fetchOrder();
        orders.forEach(element => {
            if (currentLoggedInUser.userID === element.userID) {
                isOrdered = true;
            }
        });
        if (isOrdered) {
            orderHistoryPage.innerHTML = "null";
            orderHistoryPage.innerHTML = "<table cellpadding:\"5px\"; border=\"2px\" id=\"orderHistory\"><tr><th>Order ID</th><th>Medicine ID</th><th>Purchased Count</th><th>Total Price</th><th>Ordered Date</th><th>Order Status</th></tr></table>";
            let orderHistoryTable = document.getElementById("orderHistory");
            orders.forEach(element => {
                if (currentLoggedInUser.userID === element.userID) {
                    orderHistoryTable.innerHTML += `<tr><td>${element.orderID}</td><td>${element.medicineID}</td><td>${element.medicineCount}</td><td>${element.totalPrice}</td><td>${(element.orderDate.toString().slice(0, 10)).split('-').reverse().join('/')}</td><td>${element.orderStatus}</td></tr>`;
                }
            });
        }
        else {
            orderHistoryPage.innerHTML = "<br><br><h1>No Order History to Show</h1>";
        }
    });
}
function CancelOrderPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcome");
        welcomePage.style.display = "none";
        let purchasePage = document.getElementById("purchase");
        purchasePage.style.display = "none";
        let medicinesDiv = document.getElementById("medicinesDiv");
        medicinesDiv.style.display = "none";
        let walletRechargePage = document.getElementById("walletRechargePage");
        walletRechargePage.style.display = "none";
        let showBalancePage = document.getElementById("showWalletBalance");
        showBalancePage.style.display = "none";
        let orderHistoryPage = document.getElementById("orderHistoryPage");
        orderHistoryPage.style.display = "none";
        let editDiv = document.getElementById("editDiv");
        editDiv.style.display = "none";
        let cancelOrderPage = document.getElementById("cancelOrderPage");
        cancelOrderPage.style.display = "block";
        let isOrdered = false;
        let orders = yield fetchOrder();
        orders.forEach(element => {
            if (currentLoggedInUser.userID === element.userID && element.orderStatus === "Ordered") {
                isOrdered = true;
            }
        });
        if (isOrdered) {
            cancelOrderPage.innerHTML = "null";
            cancelOrderPage.innerHTML = "<table border=\"2px\" id=\"cancelOrder\"><tr><th>Order ID</th><th>Medicine ID</th><th>Purchased Count</th><th>Total Price</th><th>Ordered Date</th><th>Order Status</th><th>Action</th></tr>";
            let orderHistoryTable = document.getElementById("cancelOrder");
            orders.forEach(element => {
                if (currentLoggedInUser.userID === element.userID) {
                    if (element.orderStatus === "Ordered") {
                        isOrdered = false;
                        orderHistoryTable.innerHTML += `<tr><td>${element.orderID}</td><td>${element.medicineID}</td><td>${element.medicineCount}</td><td>${element.totalPrice}</td><td>${(element.orderDate.toString().slice(0, 10)).split('-').reverse().join('/')}</td><td>${element.orderStatus}</td><td><button onclick=\"CancelOrder(${element.orderID})\">Cancel</button></td></tr>`;
                    }
                }
            });
        }
        else {
            cancelOrderPage.innerHTML = "<br><br><h1>No Order History to Show</h1>";
        }
    });
}
function CancelOrder(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let orders = yield fetchOrder();
        let medicines = yield fetchMedicine();
        orders.forEach(element => {
            if (currentLoggedInUser.userID == element.userID) {
                if (element.orderID === id) {
                    element.orderStatus = "Cancelled";
                    currentLoggedInUser.walletBalance += element.totalPrice;
                    medicines.forEach(medicine => {
                        if (element.medicineID === medicine.medicineID) {
                            medicine.availableCount += element.medicineCount;
                            updateUser(currentLoggedInUser.userID, currentLoggedInUser);
                            updateMedicine(medicine.medicineID, medicine);
                            updateOrder(element.orderID, element);
                            alert("Order Cancelled Succesfully");
                            CancelOrderPage();
                        }
                    });
                }
            }
        });
    });
}
function CheckCount() {
    let count = document.getElementById("count");
    let countMessage = document.getElementById("countMessage");
    if ((/^[0-9]{1,2}/).test(count.value)) {
        countMessage.style.visibility = "hidden";
    }
    else {
        countMessage.innerHTML = "Please enter a valid count";
        countMessage.style.visibility = "visible";
        countMessage.style.color = "red";
        countMessage.style.fontSize = "20px";
    }
}
function EditDiv(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let editDiv = document.getElementById("editDiv");
        editDiv.style.display = "block";
        let editButton = document.getElementById("editButton");
        editButton.innerHTML = `<button onclick=\"EditDetails(${id})\">submit</button>`;
        let addButton = document.getElementById("AddButton");
        addButton.style.display = "none";
        let medicineName = document.getElementById("medicineName");
        let availableCount = document.getElementById("availableCount");
        let price = document.getElementById("price");
        let expiryDate = document.getElementById("expiryDate");
        let medicines = yield fetchMedicine();
        medicines.forEach(element => {
            if (element.medicineID === id) {
                medicineName.value = element.medicineName;
                availableCount.value = element.availableCount.toString();
                price.value = element.price.toString();
                expiryDate.value = element.dateOfExpiry.toString();
            }
        });
    });
}
function EditDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let localName = document.getElementById("medicineName");
        let localCount = document.getElementById("availableCount");
        let localPrice = document.getElementById("price");
        let localExpiryDate = document.getElementById("expiryDate");
        let editForm = document.getElementById("editForm");
        let medicines = yield fetchMedicine();
        medicines.forEach(element => {
            if (element.medicineID === id) {
                element.medicineName = localName.value.trim();
                element.availableCount = parseInt(localCount.value.trim());
                element.price = parseInt(localPrice.value.trim());
                element.dateOfExpiry = new Date(localExpiryDate.value);
                updateMedicine(id, element);
                alert("Details Edited");
                editForm.reset();
                MedicineDetails();
            }
        });
    });
}
function Delete(id) {
    deleteMedicine(id);
    alert("Medicine Deleted");
    MedicineDetails();
}
function AddMedicineDiv() {
    let editDiv = document.getElementById("editDiv");
    editDiv.style.display = "block";
    let editButton = document.getElementById("editButton");
    editButton.innerHTML = `<button onclick=\"AddMedicine()\">Add</button>`;
    let addButton = document.getElementById("AddButton");
    addButton.style.display = "none";
    let addForm = document.getElementById("editForm");
    addForm.reset();
}
function AddMedicine() {
    let localMedicineName = document.getElementById("medicineName");
    let localAvailableCount = document.getElementById("availableCount");
    let localPrice = document.getElementById("price");
    let localExpiryDate = document.getElementById("expiryDate");
    let addForm = document.getElementById("editForm");
    var medicine = { medicineID: 0, medicineName: localMedicineName.value, availableCount: parseInt(localAvailableCount.value), price: parseInt(localPrice.value), dateOfExpiry: new Date(localExpiryDate.value) };
    addMedicine(medicine);
    addForm.reset();
    alert("Medicine Added");
    MedicineDetails();
}
function LogOut() {
    let homePage = document.getElementById("homePage");
    let indexPage = document.getElementById("page");
    let mainPage = document.getElementById("home");
    let signUpPage = document.getElementById("signup");
    let signinPage = document.getElementById("signin");
    let signUpForm = document.getElementById("signUpForm");
    let signinForm = document.getElementById("signinForm");
    homePage.style.display = "none";
    indexPage.style.display = "flex";
    signUpPage.style.display = "none";
    signinPage.style.display = "none";
    mainPage.style.display = "block";
    mainPage.style.placeContent = "center";
    signUpForm.reset();
    signinForm.reset();
}
//# sourceMappingURL=medicalstore.js.map