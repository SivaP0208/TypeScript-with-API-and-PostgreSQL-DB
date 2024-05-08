let userIDAutoIncrement = 1000;
let medicineIDAutoIncrement = 100;
let orderIDAutoIncrement = 3000;

let currentLoggedInUser: UserInfo;

let isNewUserMailValid = false;
let isNewUserPasswordValid = false;
let isNewUserNameValid = false;

interface UserInfo {
    userID: number;
    userName: string
    userMailID: string;
    userPassword: string;
    walletBalance: number;
}

interface Medicine {
    medicineID: number;
    medicineName: string;
    availableCount: number;
    price: number;
    dateOfExpiry: Date;
}

interface OrderInfo {
    orderID: number;
    userID: number;
    medicineID: number;
    medicineCount: number
    totalPrice: number;
    orderDate: Date;
    orderStatus: string;
}

async function addUser(user: UserInfo): Promise<void> {
    const response = await fetch('http://localhost:5069/api/userinfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to add user');
    }
}

async function fetchUser(): Promise<UserInfo[]> {
    const apiUrl = 'http://localhost:5069/api/userinfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
}
async function updateUser(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5069/api/userinfo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }
}

async function fetchMedicine(): Promise<Medicine[]> {
    const apiUrl = 'http://localhost:5069/api/medicine';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch medicine');
    }
    return await response.json();
}

async function addMedicine(medicine: Medicine): Promise<void> {
    const response = await fetch('http://localhost:5069/api/medicine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });
    if (!response.ok) {
        throw new Error('Failed to add medicine');
    }
}

async function updateMedicine(id: number, medicine: Medicine): Promise<void> {
    const response = await fetch(`http://localhost:5069/api/medicine/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });
    if (!response.ok) {
        throw new Error('Failed to update medicine');
    }
}

async function deleteMedicine(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5069/api/medicine/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete medicine');
    }
}

async function fetchOrder(): Promise<OrderInfo[]> {
    const apiUrl = 'http://localhost:5069/api/orderinfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    return await response.json();
}

async function addOrder(order: OrderInfo): Promise<void> {
    const response = await fetch('http://localhost:5069/api/orderinfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Failed to add order');
    }
}
async function updateOrder(id: number, order: OrderInfo): Promise<void> {
    const response = await fetch(`http://localhost:5069/api/orderinfo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Failed to update order');
    }
}

function SignUpPage() {
    let indexPage = document.getElementById("home") as HTMLDivElement;
    indexPage.style.display = "none";

    let signUpPage = document.getElementById("signup") as HTMLDivElement;
    signUpPage.style.display = "block";
}

function SignUp() {
    let newUserName = document.getElementById("userName") as HTMLInputElement;
    let newUserMailID = document.getElementById("signupEmail") as HTMLInputElement;
    let newUserPassword = document.getElementById("signupConfirmPassword") as HTMLInputElement;

    if (isNewUserMailValid && isNewUserPasswordValid && isNewUserNameValid) {
        const user: UserInfo = {
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
    let indexPage = document.getElementById("home") as HTMLDivElement;
    indexPage.style.display = "none";

    let signInPage = document.getElementById("signin") as HTMLDivElement;
    signInPage.style.display = "block";
}

async function SignIn() {
    let userMailID = document.getElementById("signinEmail") as HTMLInputElement;
    let userPassword = document.getElementById("signinPassword") as HTMLInputElement;

    let isValidUser = true;
    var user = await fetchUser();
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
}

function HomePage() {
    let mainPage = document.getElementById("page") as HTMLDivElement;
    let homePage = document.getElementById("homePage") as HTMLDivElement;

    mainPage.style.display = "none";
    homePage.style.display = "block";
    WelcomePage();
}

async function MedicineDetails() {
    let medicinesDiv = document.getElementById("medicinesDiv") as HTMLDivElement;
    medicinesDiv.style.display = "block";
    let welcomePage = document.getElementById("welcome") as HTMLDivElement;
    welcomePage.style.display = "none";
    let purchasePage = document.getElementById("purchase") as HTMLDivElement;
    purchasePage.style.display = "none";
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    walletRechargePage.style.display = "none";
    let showBalancePage = document.getElementById("showWalletBalance") as HTMLDivElement;
    showBalancePage.style.display = "none";
    let orderHistoryPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
    orderHistoryPage.style.display = "none";
    let cancelOrderPage = document.getElementById("cancelOrderPage") as HTMLDivElement;
    cancelOrderPage.style.display = "none";
    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "none";
    let medicineTable=document.getElementById("medicineDetailsTable") as HTMLElement;

    medicineTable.innerHTML = "null";
    medicineTable.innerHTML = "<button onclick=\"AddMedicineDiv()\" id=\"AddButton\">Add Medicine</button><table cellpadding=\"5px\" border=\"2px\" id=\"medicineDetails\"><tr><th>Medicine Name</th><th>Available Count</th><th>Price</th><th>Date of Expiry</th><th>Action</th></tr></table>";

    let addButton = document.getElementById("AddButton") as HTMLButtonElement;
    addButton.style.display = "block";
    let medicineDetailsTable = document.getElementById("medicineDetails") as HTMLTableElement;
    var medicine = await fetchMedicine();
    medicine.forEach(element => {
        medicineDetailsTable.innerHTML += `<tr><td>${element.medicineName}</td><td>${element.availableCount}</td><td>${element.price}</td><td>${((element.dateOfExpiry.toString()).slice(0,10)).split('-').reverse().join('/')}</td><td><button onclick=\"EditDiv(${element.medicineID})\" class=\"edit\" >Edit</button>&nbsp;&nbsp;<button class=\"delete\" onclick=\"Delete(${element.medicineID})\" >Delete</button></td></tr>`;
    });
}

function CheckNewUserEmail(id: string) {
    let newUserMailID = document.getElementById(id) as HTMLInputElement;
    let newUserMailIDMessage = document.getElementById(id + "Message") as HTMLLabelElement;

    if ((/^([\w\-\.]+)@([\w-]+\.)+[\w-]{2,}$/).test(newUserMailID.value)) {
        newUserMailIDMessage.style.visibility = "hidden";
        isNewUserMailValid = true;
    }
    else {
        newUserMailIDMessage.innerHTML = "Please enter a Valid email";
        newUserMailIDMessage.style.color = "red";
        newUserMailIDMessage.style.visibility = "visible";
        newUserMailIDMessage.style.fontSize = "20px"
    }
}

function CheckNewUserName(id: string) {
    let newUserName = document.getElementById(id) as HTMLInputElement;
    let newUserNameMessage = document.getElementById(id + "Message") as HTMLLabelElement;

    if ((/[a-zA-Z]{2,25}$/).test(newUserName.value)) {
        newUserNameMessage.style.visibility = "hidden";
        isNewUserNameValid = true;
    }
    else {
        newUserNameMessage.innerHTML = "Please enter a Valid name";
        newUserNameMessage.style.color = "red";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.fontSize = "20px"
    }
}

function CheckNewUserPassword(id: string) {
    let newUserPassword = document.getElementById(id) as HTMLInputElement;
    let newUserPasswordMessage = document.getElementById(id + "Message") as HTMLLabelElement;

    if ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(newUserPassword.value)) {
        newUserPasswordMessage.style.visibility = "hidden";
    }
    else {
        newUserPasswordMessage.innerHTML = "Please enter the strong password ";
        newUserPasswordMessage.style.color = "red";
        newUserPasswordMessage.style.visibility = "visible";
        newUserPasswordMessage.style.fontSize = "20px"
    }
}

function CheckNewUserConfirmPassword(id: string) {
    let newUserPassword = document.getElementById("signupPassword") as HTMLInputElement;
    let newUserConfirmPassword = document.getElementById("signupConfirmPassword") as HTMLInputElement;
    let newUserConfirmPasswordMessage = document.getElementById(id + "Message") as HTMLLabelElement;

    if (newUserPassword.value === newUserConfirmPassword.value) {
        newUserConfirmPasswordMessage.style.visibility = "hidden";
        isNewUserPasswordValid = true;
    }
    else {
        newUserConfirmPasswordMessage.innerHTML = "Password doesn't Match";
        newUserConfirmPasswordMessage.style.color = "red";
        newUserConfirmPasswordMessage.style.visibility = "visible";
        newUserConfirmPasswordMessage.style.fontSize = "20px"
    }
}

function Back(id: string) {
    let backToMainPage = document.getElementById(id) as HTMLDivElement;
    backToMainPage.style.display = "none";
    
    let mainPage = document.getElementById("home") as HTMLDivElement;
    mainPage.style.display = "block";
}

async function PurchasePage() {
    let medicinesDiv = document.getElementById("medicinesDiv") as HTMLDivElement;
    medicinesDiv.style.display = "none";

    let welcomePage = document.getElementById("welcome") as HTMLDivElement;
    welcomePage.style.display = "none";

    let purchasePage = document.getElementById("purchase") as HTMLDivElement;
    purchasePage.style.display = "block";

    let showBalancePage = document.getElementById("showWalletBalance") as HTMLDivElement;
    showBalancePage.style.display = "none";

    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    walletRechargePage.style.display = "none";

    let orderHistoryPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
    orderHistoryPage.style.display = "none";

    let cancelOrderPage = document.getElementById("cancelOrderPage") as HTMLDivElement;
    cancelOrderPage.style.display = "none";

    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "none";

    let count = document.getElementById("requiredCount") as HTMLDivElement;
    count.style.display = "none";

    let medicineDetailsDiv = document.getElementById("purchaseDetails") as HTMLDivElement;
    medicineDetailsDiv.innerHTML = "null";
    medicineDetailsDiv.innerHTML = "<table cellpadding=\"5px\" border=\"2px\" id=\"medicineTable\"><tr><th>Medicine Name</th><th>Available Count</th><th>Price</th><th>Date of Expiry</th><th>Action</th></tr></table>";

    let medicinesTable = document.getElementById("medicineTable") as HTMLTableElement;
    let medicines=await fetchMedicine();
    medicines.forEach(element => {
        if (element.dateOfExpiry.toString().substring(0,10) >= new Date().toISOString().substring(0,10) && element.availableCount > 0) {
            medicinesTable.innerHTML += `<tr><td>${element.medicineName}</td><td>${element.availableCount}</td><td>${element.price}</td><td>${((element.dateOfExpiry.toString()).slice(0,10)).split('-').reverse().join('/')}</td><td><button class=\"buy\"onclick=\"Buy(${element.medicineID})\">Buy</button></td></tr>`;
        }
    });

}

function Buy(id: number) {
    let count = document.getElementById("requiredCount") as HTMLDivElement;
    count.style.display = "block";
    count.style.visibility = "visible";
    count.style.fontSize = "20px";
    count.style.marginLeft = "4em";

    let purchaseButton = document.getElementById("purchaseButton") as HTMLDivElement;

    purchaseButton.innerHTML = `<button type=\"submit\" onclick=\"Purchase(${id})\">Purchase</button>`;
}
async function Purchase(id: number) {
    let requiredCount = document.getElementById("count") as HTMLInputElement;
    let purchase = false;
    var medicine=await fetchMedicine();
    medicine.forEach(element => {
        if (element.medicineID == id) {
            if (element.availableCount >= parseInt(requiredCount.value)) {
                if (currentLoggedInUser.walletBalance >= element.price * parseInt(requiredCount.value)) {
                    element.availableCount -= parseInt(requiredCount.value);
                    currentLoggedInUser.walletBalance -= element.price * parseInt(requiredCount.value);
                    var order:OrderInfo={orderID:0,userID:currentLoggedInUser.userID,medicineID:element.medicineID,medicineCount:parseInt(requiredCount.value),totalPrice:element.price*parseInt(requiredCount.value),orderDate:new Date(),orderStatus:"Ordered"};
                    addOrder(order);
                    updateMedicine(id,element);
                    updateUser(currentLoggedInUser.userID,currentLoggedInUser)
                    alert(`${requiredCount.value} ${element.medicineName} Purchased Successfully`);
                    PurchasePage();
                }
                else {
                    alert("Insufficient Balance Please recharge your wallet");
                }
            }
            else {
                purchase = confirm(`We have only ${element.availableCount} ${element.medicineName} Do you want to Purchase ${element.availableCount} ${element.medicineName} ? `)
                if (purchase) {
                    if (currentLoggedInUser.walletBalance >= element.price * parseInt(requiredCount.value)) {
                        currentLoggedInUser.walletBalance -= element.price * parseInt(requiredCount.value);
                        var order:OrderInfo={orderID:7,userID:currentLoggedInUser.userID,medicineID:element.medicineID,medicineCount:parseInt(requiredCount.value),totalPrice:element.price,orderDate:new Date(),orderStatus:"Ordered"};
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
}
function WelcomePage() {
    let greet = document.getElementById("welcome") as HTMLDivElement;
    greet.innerHTML = `<h2 style="text-align:center;font-size:3rem;">Welcome ${currentLoggedInUser.userName} !</h2>`

    let welcomePage = document.getElementById("welcome") as HTMLDivElement;
    welcomePage.style.display = "block";
    let purchasePage = document.getElementById("purchase") as HTMLDivElement;
    purchasePage.style.display = "none";
    let medicinesDiv = document.getElementById("medicinesDiv") as HTMLDivElement;
    medicinesDiv.style.display = "none";
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    walletRechargePage.style.display = "none";
    let showBalancePage = document.getElementById("showWalletBalance") as HTMLDivElement;
    showBalancePage.style.display = "none";
    let orderHistoryPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
    orderHistoryPage.style.display = "none";
    let cancelOrderPage = document.getElementById("cancelOrderPage") as HTMLDivElement;
    cancelOrderPage.style.display = "none";
    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "none";

}
function WalletRechargePage() {
    let welcomePage = document.getElementById("welcome") as HTMLDivElement;
    welcomePage.style.display = "none";
    let purchasePage = document.getElementById("purchase") as HTMLDivElement;
    purchasePage.style.display = "none";
    let medicinesDiv = document.getElementById("medicinesDiv") as HTMLDivElement;
    medicinesDiv.style.display = "none";
    let orderHistoryPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
    orderHistoryPage.style.display = "none";
    let cancelOrderPage = document.getElementById("cancelOrderPage") as HTMLDivElement;
    cancelOrderPage.style.display = "none";
    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "none";

    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    walletRechargePage.style.display = "block";
    let walletRechargeMessage = document.getElementById("walletRechargeMessage") as HTMLDivElement;
    walletRechargeMessage.style.visibility = "hidden";
    let showBalancePage = document.getElementById("showWalletBalance") as HTMLDivElement;
    showBalancePage.style.display = "none";
}
async function WalletRecharge() {
    let amount = document.getElementById("amount") as HTMLInputElement;
    currentLoggedInUser.walletBalance += parseInt(amount.value);
    let rechargeForm=document.getElementById("rechargeForm") as HTMLFormElement;

    updateUser(currentLoggedInUser.userID,currentLoggedInUser);
    let walletRechargeMessage = document.getElementById("walletRechargeMessage") as HTMLDivElement;
    walletRechargeMessage.style.visibility="visible";
    walletRechargeMessage.innerHTML = `<br><br><h2>Wallet Recharged and Your Wallet Balance is ${currentLoggedInUser.walletBalance}</h2>`;
    rechargeForm.reset();
}
function ShowBalance() {
    let welcomePage = document.getElementById("welcome") as HTMLDivElement;
    welcomePage.style.display = "none";
    let purchasePage = document.getElementById("purchase") as HTMLDivElement;
    purchasePage.style.display = "none";
    let medicinesDiv = document.getElementById("medicinesDiv") as HTMLDivElement;
    medicinesDiv.style.display = "none";
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    walletRechargePage.style.display = "none";
    let orderHistoryPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
    orderHistoryPage.style.display = "none";
    let cancelOrderPage = document.getElementById("cancelOrderPage") as HTMLDivElement;
    cancelOrderPage.style.display = "none";
    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "none";

    let showBalancePage = document.getElementById("showWalletBalance") as HTMLDivElement;
    showBalancePage.style.display = "block";
    showBalancePage.innerHTML = `<br><br><h1>Available Balance in your Wallet is ${currentLoggedInUser.walletBalance}</h1>`;
}

async function OrderHistoryPage() {
    let welcomePage = document.getElementById("welcome") as HTMLDivElement;
    welcomePage.style.display = "none";
    let purchasePage = document.getElementById("purchase") as HTMLDivElement;
    purchasePage.style.display = "none";
    let medicinesDiv = document.getElementById("medicinesDiv") as HTMLDivElement;
    medicinesDiv.style.display = "none";
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    walletRechargePage.style.display = "none";
    let showBalancePage = document.getElementById("showWalletBalance") as HTMLDivElement;
    showBalancePage.style.display = "none";
    let cancelOrderPage = document.getElementById("cancelOrderPage") as HTMLDivElement;
    cancelOrderPage.style.display = "none";
    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "none";

    let orderHistoryPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
    orderHistoryPage.style.display = "block";

    let isOrdered = false;
    let orders=await fetchOrder();
    orders.forEach(element => {
        if (currentLoggedInUser.userID === element.userID) {
            isOrdered = true;
        }
    });

    if (isOrdered) {
        orderHistoryPage.innerHTML = "null";
        orderHistoryPage.innerHTML = "<h1>Order History</h1><button onclick=\"exportTableToCSV()\" id=\"exportButton\" >Export</button><table cellpadding:\"5px\"; border=\"2px\" id=\"orderHistory\"><tr><th>Order ID</th><th>Medicine ID</th><th>Purchased Count</th><th>Total Price</th><th>Ordered Date</th><th>Order Status</th></tr></table>";

        let orderHistoryTable = document.getElementById("orderHistory") as HTMLTableElement;
        orders.forEach(element => {
            if (currentLoggedInUser.userID === element.userID) {
                orderHistoryTable.innerHTML += `<tr><td>${element.orderID}</td><td>${element.medicineID}</td><td>${element.medicineCount}</td><td>${element.totalPrice}</td><td>${(element.orderDate.toString().slice(0,10)).split('-').reverse().join('/')}</td><td>${element.orderStatus}</td></tr>`;
            }
        });
    }
    else {
        orderHistoryPage.innerHTML = "<br><br><h1>No Order History to Show</h1>";
    }
}

async function CancelOrderPage() {
    let welcomePage = document.getElementById("welcome") as HTMLDivElement;
    welcomePage.style.display = "none";
    let purchasePage = document.getElementById("purchase") as HTMLDivElement;
    purchasePage.style.display = "none";
    let medicinesDiv = document.getElementById("medicinesDiv") as HTMLDivElement;
    medicinesDiv.style.display = "none";
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    walletRechargePage.style.display = "none";
    let showBalancePage = document.getElementById("showWalletBalance") as HTMLDivElement;
    showBalancePage.style.display = "none";
    let orderHistoryPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
    orderHistoryPage.style.display = "none";
    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "none";

    let cancelOrderPage = document.getElementById("cancelOrderPage") as HTMLDivElement;
    cancelOrderPage.style.display = "block";

    let isOrdered = false;
    let orders=await fetchOrder();
    orders.forEach(element => {
        if (currentLoggedInUser.userID === element.userID && element.orderStatus==="Ordered") {
            isOrdered = true;
        }
    });

    if (isOrdered) {
        cancelOrderPage.innerHTML = "null";
        cancelOrderPage.innerHTML = "<h1>Cancel Order</h1><table border=\"2px\" id=\"cancelOrder\"><tr><th>Order ID</th><th>Medicine ID</th><th>Purchased Count</th><th>Total Price</th><th>Ordered Date</th><th>Order Status</th><th>Action</th></tr>";

        let orderHistoryTable = document.getElementById("cancelOrder") as HTMLTableElement;

        orders.forEach(element => {
            if (currentLoggedInUser.userID === element.userID) {
                if (element.orderStatus === "Ordered") {
                    isOrdered = false;
                    orderHistoryTable.innerHTML += `<tr><td>${element.orderID}</td><td>${element.medicineID}</td><td>${element.medicineCount}</td><td>${element.totalPrice}</td><td>${(element.orderDate.toString().slice(0,10)).split('-').reverse().join('/')}</td><td>${element.orderStatus}</td><td><button onclick=\"CancelOrder(${element.orderID})\">Cancel</button></td></tr>`;
                }
            }
        });
    }
    else {
        cancelOrderPage.innerHTML = "<br><br><h1>No Order History to Show</h1>";
    }
}

async function CancelOrder(id: number) {
    let orders=await fetchOrder();
    let medicines=await fetchMedicine();
    orders.forEach(element => {
        if (currentLoggedInUser.userID == element.userID) {
            if (element.orderID === id) {
                element.orderStatus = "Cancelled";
                currentLoggedInUser.walletBalance += element.totalPrice;
                medicines.forEach(medicine => {
                    if (element.medicineID === medicine.medicineID) {
                        medicine.availableCount += element.medicineCount;
                        updateUser(currentLoggedInUser.userID,currentLoggedInUser);
                        updateMedicine(medicine.medicineID,medicine);
                        updateOrder(element.orderID,element);
                        alert("Order Cancelled Succesfully");
                        CancelOrderPage();
                    }
                });
            }
        }
    });
}

function CheckCount() {
    let count = document.getElementById("count") as HTMLInputElement;
    let countMessage = document.getElementById("countMessage") as HTMLLabelElement;

    if ((/^[0-9]{1,2}/).test(count.value)) {
        countMessage.style.visibility = "hidden";
    }
    else {
        countMessage.innerHTML = "Please enter a valid count"
        countMessage.style.visibility = "visible";
        countMessage.style.color = "red";
        countMessage.style.fontSize = "20px";
    }
}
async function EditDiv(id: number) {
    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "block";

    let editButton = document.getElementById("editButton") as HTMLDivElement;
    editButton.innerHTML = `<button onclick=\"EditDetails(${id})\">submit</button>`;
    let addButton=document.getElementById("AddButton") as HTMLButtonElement;
    addButton.style.display="none";
    let medicineName = document.getElementById("medicineName") as HTMLInputElement;
    let availableCount = document.getElementById("availableCount") as HTMLInputElement;
    let price = document.getElementById("price") as HTMLInputElement;
    let expiryDate = document.getElementById("expiryDate") as HTMLInputElement;

    let medicines=await fetchMedicine();
    medicines.forEach(element => {
        if (element.medicineID === id) {
            medicineName.value = element.medicineName;
            availableCount.value = element.availableCount.toString();
            price.value = element.price.toString();
            expiryDate.value = element.dateOfExpiry.toString();
        }
    });
}

async function EditDetails(id: number) {
    let localName = document.getElementById("medicineName") as HTMLInputElement;
    let localCount = document.getElementById("availableCount") as HTMLInputElement;
    let localPrice = document.getElementById("price") as HTMLInputElement;
    let localExpiryDate = document.getElementById("expiryDate") as HTMLInputElement;
    let editForm=document.getElementById("editForm") as HTMLFormElement;

    let medicines=await fetchMedicine();
    medicines.forEach(element => {
        if (element.medicineID === id) {
            element.medicineName=localName.value.trim();
            element.availableCount=parseInt(localCount.value.trim());
            element.price=parseInt(localPrice.value.trim());
            element.dateOfExpiry=new Date(localExpiryDate.value);
            updateMedicine(id,element);
            alert("Details Edited");
            editForm.reset();
            MedicineDetails();
        }
    });
}

function Delete(id: number) {
    deleteMedicine(id);
    alert("Medicine Deleted");
    MedicineDetails();
}
function AddMedicineDiv() {
    let editDiv = document.getElementById("editDiv") as HTMLDivElement;
    editDiv.style.display = "block";

    let editButton = document.getElementById("editButton") as HTMLDivElement;
    editButton.innerHTML = `<button onclick=\"AddMedicine()\">Add</button>`;

    let addButton = document.getElementById("AddButton") as HTMLButtonElement;
    addButton.style.display = "none";

    let addForm=document.getElementById("editForm") as HTMLFormElement;
    addForm.reset();
}
function AddMedicine() {
    let localMedicineName = document.getElementById("medicineName") as HTMLInputElement;
    let localAvailableCount = document.getElementById("availableCount") as HTMLInputElement;
    let localPrice = document.getElementById("price") as HTMLInputElement;
    let localExpiryDate = document.getElementById("expiryDate") as HTMLInputElement;
    let addForm=document.getElementById("editForm") as HTMLFormElement;

    var medicine:Medicine={medicineID:0,medicineName:localMedicineName.value,availableCount:parseInt(localAvailableCount.value),price:parseInt(localPrice.value),dateOfExpiry:new Date(localExpiryDate.value)};
    addMedicine(medicine);
    addForm.reset();
    alert("Medicine Added");
    MedicineDetails();
}

function LogOut(){
    let homePage=document.getElementById("homePage") as HTMLDivElement;
    let indexPage=document.getElementById("page") as HTMLDivElement;
    let mainPage=document.getElementById("home") as HTMLDivElement;
    let signUpPage=document.getElementById("signup") as HTMLDivElement;
    let signinPage=document.getElementById("signin") as HTMLDivElement;
    let signUpForm=document.getElementById("signUpForm") as HTMLFormElement;
    let signinForm=document.getElementById("signinForm") as HTMLFormElement;

    homePage.style.display="none";
    indexPage.style.display="flex";
    signUpPage.style.display="none";
    signinPage.style.display="none";
    mainPage.style.display="block";
    mainPage.style.placeContent="center"
    signUpForm.reset();
    signinForm.reset();
}

function exportTableToCSV(){
    var csv=[];
    var rows=document.querySelectorAll("#orderHistory tr");
    for(var i=0;i<rows.length;i++){
        var row=[];
        var columns=rows[i].querySelectorAll("#orderHistory td,th");
        for(var j=0;j<columns.length;j++){
            row.push(columns[j].innerHTML);
        }
        csv.push(row.join(","));
    }
    downloadCSV(csv.join("\n"),"OrderHistory.csv");
}

function downloadCSV(csv:string,filename:string){
    var csvFile = new Blob([csv],{type:"text/csv"});
    var downloadLink = document.createElement("a");

    downloadLink.download = filename;
    downloadLink.href = URL.createObjectURL(csvFile);
    downloadLink.style.display="none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}