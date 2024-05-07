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
let isNewUserNameValid = false;
let isNewUserEmailValid = false;
let isNewUserPasswordValid = false;
let isNewUserPhoneValid = false;
let currentLoggedInUser;
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5171/api/userdetails', {
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
        const apiUrl = 'http://localhost:5171/api/userdetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5171/api/userdetails/${id}`, {
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
function fetchTicket() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5171/api/ticketfairdetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Ticket');
        }
        return yield response.json();
    });
}
function addTicket(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5171/api/ticketfairdetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add Ticket');
        }
    });
}
function updateTicket(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5171/api/ticketfairdetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update Ticket');
        }
    });
}
function deleteTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5171/api/ticketfairdetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete Ticket');
        }
    });
}
function fetchTravel() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5171/api/traveldetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Travel');
        }
        return yield response.json();
    });
}
function addTravel(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5171/api/traveldetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add Travel');
        }
    });
}
function updateTravel(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5171/api/traveldetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update Travel');
        }
    });
}
function indexPage() {
    let indexPage = document.getElementById("indexPage");
    let signUpPage = document.getElementById("signUpPage");
    let loginPage = document.getElementById("loginPage");
    let homePage = document.getElementById("homePage");
    let welcomePage = document.getElementById("welcomePage");
    let ticketFairPage = document.getElementById("ticketFairPage");
    let travelPage = document.getElementById("travelPage");
    let travelHistoryPage = document.getElementById("travelHistoryPage");
    let walletRechargePage = document.getElementById("walletRechargePage");
    let showBalancePage = document.getElementById("showBalancePage");
    let cancelPage = document.getElementById("cancelPage");
    let signUpForm = document.getElementById("signUpForm");
    let loginForm = document.getElementById("loginForm");
    welcomePage.style.display = "none";
    ticketFairPage.style.display = "none";
    travelHistoryPage.style.display = "none";
    travelPage.style.display = "none";
    walletRechargePage.style.display = "none";
    cancelPage.style.display = "none";
    signUpForm.reset();
    loginForm.reset();
    showBalancePage.style.display = "none";
    indexPage.style.display = "block";
    homePage.style.display = "none";
    signUpPage.style.display = "none";
    loginPage.style.display = "none";
}
function signUpPage() {
    let indexPage = document.getElementById("indexPage");
    let signUpPage = document.getElementById("signUpPage");
    indexPage.style.display = "none";
    signUpPage.style.display = "block";
}
function signUp() {
    let newUserName = document.getElementById("newUserName");
    let newUserEmail = document.getElementById("newUserEmail");
    let newUserPhone = document.getElementById("newUserPhone");
    let newUserPassword = document.getElementById("newUserPassword");
    if (isNewUserNameValid && isNewUserEmailValid && isNewUserPasswordValid && isNewUserPhoneValid) {
        const user = { cardNumber: 0, name: newUserName.value.trim(), email: newUserEmail.value.trim(), password: newUserPassword.value.trim(), phone: newUserPhone.value.trim(), walletBalance: 0 };
        addUser(user);
        indexPage();
    }
    else {
        alert("Please fill out the form completely");
    }
}
function loginPage() {
    let indexPage = document.getElementById("indexPage");
    let loginPage = document.getElementById("loginPage");
    indexPage.style.display = "none";
    loginPage.style.display = "block";
}
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        let userMail = document.getElementById("userMail");
        let userPassword = document.getElementById("userPassword");
        let isValidUser = true;
        let users = yield fetchUser();
        users.forEach(element => {
            if (element.email === userMail.value.trim() && element.password === userPassword.value.trim()) {
                isValidUser = false;
                currentLoggedInUser = element;
                homePage();
            }
        });
        if (isValidUser) {
            alert("Invalid Credentials");
        }
    });
}
function homePage() {
    let indexPage = document.getElementById("indexPage");
    let loginPage = document.getElementById("loginPage");
    let signUpPage = document.getElementById("signUpPage");
    let homePage = document.getElementById("homePage");
    indexPage.style.display = "none";
    loginPage.style.display = "none";
    signUpPage.style.display = "none";
    homePage.style.display = "block";
    welcomePage();
}
function welcomePage() {
    let welcomePage = document.getElementById("welcomePage");
    let greet = document.getElementById("greet");
    let ticketFairPage = document.getElementById("ticketFairPage");
    let travelPage = document.getElementById("travelPage");
    let travelHistoryPage = document.getElementById("travelHistoryPage");
    let walletRechargePage = document.getElementById("walletRechargePage");
    let showBalancePage = document.getElementById("showBalancePage");
    let cancelPage = document.getElementById("cancelPage");
    greet.innerHTML = `Welcome ${currentLoggedInUser.name} !`;
    ticketFairPage.style.display = "none";
    travelPage.style.display = "none";
    travelHistoryPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    cancelPage.style.display = "none";
    welcomePage.style.display = "block";
}
function ticketFairPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcomePage");
        let ticketFairPage = document.getElementById("ticketFairPage");
        let travelHistoryPage = document.getElementById("travelHistoryPage");
        let travelPage = document.getElementById("travelPage");
        let walletRechargePage = document.getElementById("walletRechargePage");
        let showBalancePage = document.getElementById("showBalancePage");
        let cancelPage = document.getElementById("cancelPage");
        let ticketTableDiv = document.getElementById("ticketTable");
        let editEdiv = document.getElementById("editDiv");
        welcomePage.style.display = "none";
        travelHistoryPage.style.display = "none";
        travelPage.style.display = "none";
        walletRechargePage.style.display = "none";
        showBalancePage.style.display = "none";
        cancelPage.style.display = "none";
        editEdiv.style.display = "none";
        ticketTableDiv.style.display = "block";
        ticketFairPage.style.display = "block";
        let tickets = yield fetchTicket();
        if (tickets != null) {
            ticketTableDiv.innerHTML = "null";
            ticketTableDiv.innerHTML = `<button onclick=\"AddTicketDiv()\" id=\"AddButton\">Add</button><table cellpadding=\"5px\" border=\"2px\" id=\"ticketFairTable\"><tr><th>From Location</th><th>To Location</th><th>Fair</th><th>Action</th></tr></table>`;
            let ticketFairTable = document.getElementById("ticketFairTable");
            tickets.forEach(element => {
                ticketFairTable.innerHTML += `<tr><td>${element.fromLocation}</td><td>${element.toLocation}</td><td>${element.fair}</td><td><button class=\"edit\" onclick=\"EditDiv('${element.ticketID}')\">Edit</button>&nbsp;&nbsp;<button class=\"delete\"onclick=\"Delete('${element.ticketID}')\">Delete</button></td></tr>`;
            });
        }
        else {
            ticketFairPage.innerHTML = `<h1>No Tickets Available</h1>`;
        }
    });
}
function travelPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcomePage");
        let ticketFairPage = document.getElementById("ticketFairPage");
        let travelPage = document.getElementById("travelPage");
        let travelHistoryPage = document.getElementById("travelHistoryPage");
        let walletRechargePage = document.getElementById("walletRechargePage");
        let showBalancePage = document.getElementById("showBalancePage");
        let cancelPage = document.getElementById("cancelPage");
        welcomePage.style.display = "none";
        ticketFairPage.style.display = "none";
        travelHistoryPage.style.display = "none";
        walletRechargePage.style.display = "none";
        showBalancePage.style.display = "none";
        cancelPage.style.display = "none";
        travelPage.style.display = "block";
        let tickets = yield fetchTicket();
        if (tickets != null) {
            travelPage.innerHTML = "null";
            travelPage.innerHTML = `<h1>Book Ticket to Travel</h1><br><table cellpadding=\"5px\" border=\"2px\" id=\"ticketBookTable\"><tr><th>From Location</th><th>To Location</th><th>Fair</th><th>Action</th></tr></table>`;
            let ticketBookTable = document.getElementById("ticketBookTable");
            tickets.forEach(element => {
                ticketBookTable.innerHTML += `<tr><td>${element.fromLocation}</td><td>${element.toLocation}</td><td>${element.fair}</td><td><button onclick=\"travel('${element.ticketID}')\">Book</button></td></tr>`;
            });
        }
        else {
            travelPage.innerHTML = `<h1>No Tickets Available</h1>`;
        }
    });
}
function travel(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let isWalletBalanceAvailable = true;
        let tickets = yield fetchTicket();
        tickets.forEach(element => {
            if (element.ticketID === Number(id)) {
                if (currentLoggedInUser.walletBalance >= element.fair) {
                    isWalletBalanceAvailable = false;
                    currentLoggedInUser.walletBalance -= element.fair;
                    updateUser(currentLoggedInUser.cardNumber, currentLoggedInUser);
                    const travel = { travelID: 0, cardNumber: currentLoggedInUser.cardNumber, fromLocation: element.fromLocation, toLocation: element.toLocation, date: new Date(), cost: element.fair, bookingStatus: "Booked" };
                    addTravel(travel);
                    alert("Ticket Booked Happy Journey :)");
                }
            }
        });
        if (isWalletBalanceAvailable) {
            alert("Insufficient Balance Please Recharge your Wallet");
        }
    });
}
function cancelPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcomePage");
        let ticketFairPage = document.getElementById("ticketFairPage");
        let travelPage = document.getElementById("travelPage");
        let travelHistoryPage = document.getElementById("travelHistoryPage");
        let walletRechargePage = document.getElementById("walletRechargePage");
        let showBalancePage = document.getElementById("showBalancePage");
        let cancelPage = document.getElementById("cancelPage");
        welcomePage.style.display = "none";
        ticketFairPage.style.display = "none";
        travelHistoryPage.style.display = "none";
        travelPage.style.display = "none";
        walletRechargePage.style.display = "none";
        showBalancePage.style.display = "none";
        cancelPage.style.display = "block";
        let isUserTravelled = false;
        let travels = yield fetchTravel();
        travels.forEach(element => {
            if (element.cardNumber === currentLoggedInUser.cardNumber && element.bookingStatus === "Booked") {
                isUserTravelled = true;
            }
        });
        cancelPage.innerHTML = "null";
        if (isUserTravelled) {
            cancelPage.innerHTML = `<h1>Cancel Ticket</h1><table border=\"2px\" cellpadding=\"8px\" id=\"cancelTicketTable\"><tr><th>From Location</th><th>To Location</th><th>Date</th><th>Travel Cost</th><th>Booking Status</th><th>Action</th></tr></table>`;
            let cancelTicketTable = document.getElementById("cancelTicketTable");
            travels.forEach(element => {
                if (element.cardNumber === currentLoggedInUser.cardNumber && element.bookingStatus === "Booked") {
                    cancelTicketTable.innerHTML += `<tr><td>${element.fromLocation}</td><td>${element.toLocation}</td><td>${element.date.toString().substring(0, 10).split('-').reverse().join('/')}</td><td>${element.cost}</td><td>${element.bookingStatus}</td><td><button onclick=\"cancel('${element.travelID}')\">Cancel</button></td></tr>`;
                }
            });
        }
        else {
            cancelPage.innerHTML = `<h1>No Tickets Booked To Cancel</h1>`;
        }
    });
}
function cancel(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let travels = yield fetchTravel();
        travels.forEach(element => {
            if (Number(id) === element.travelID) {
                element.bookingStatus = "Cancelled";
                currentLoggedInUser.walletBalance += element.cost;
                updateTravel(id, element);
                updateUser(currentLoggedInUser.cardNumber, currentLoggedInUser);
                alert("Ticket Cancelled Successfully and Your Wallet Balance is Updated");
                cancelPage();
            }
        });
    });
}
function travelHistoryPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcomePage");
        let ticketFairPage = document.getElementById("ticketFairPage");
        let travelPage = document.getElementById("travelPage");
        let travelHistoryPage = document.getElementById("travelHistoryPage");
        let walletRechargePage = document.getElementById("walletRechargePage");
        let showBalancePage = document.getElementById("showBalancePage");
        let cancelPage = document.getElementById("cancelPage");
        welcomePage.style.display = "none";
        ticketFairPage.style.display = "none";
        travelPage.style.display = "none";
        walletRechargePage.style.display = "none";
        showBalancePage.style.display = "none";
        cancelPage.style.display = "none";
        travelHistoryPage.style.display = "block";
        let isUserTravelled = false;
        let travels = yield fetchTravel();
        travels.forEach(element => {
            if (element.cardNumber === currentLoggedInUser.cardNumber) {
                isUserTravelled = true;
            }
        });
        travelHistoryPage.innerHTML = "null";
        if (isUserTravelled) {
            travelHistoryPage.innerHTML = `<h1>Travel History</h1><table border=\"2px\" cellpadding=\"8px\" id=\"travelHistory\"><tr><th>From Location</th><th>To Location</th><th>Date</th><th>Travel Cost</th><th>Booking Status</th></tr></table>`;
            let travelHistory = document.getElementById("travelHistory");
            travels.forEach(element => {
                if (element.cardNumber === currentLoggedInUser.cardNumber) {
                    travelHistory.innerHTML += `<tr><td>${element.fromLocation}</td><td>${element.toLocation}</td><td>${element.date.toString().substring(0, 10).split('-').reverse().join('/')}</td><td>${element.cost}</td><td>${element.bookingStatus}</td></tr>`;
                }
            });
        }
        else {
            travelHistoryPage.innerHTML = `<h1>No Travel History To Show</h1>`;
        }
    });
}
function walletRechargePage() {
    let welcomePage = document.getElementById("welcomePage");
    let ticketFairPage = document.getElementById("ticketFairPage");
    let travelPage = document.getElementById("travelPage");
    let travelHistoryPage = document.getElementById("travelHistoryPage");
    let walletRechargePage = document.getElementById("walletRechargePage");
    let rechargeMessage = document.getElementById("rechargeMessage");
    let showBalancePage = document.getElementById("showBalancePage");
    let cancelPage = document.getElementById("cancelPage");
    welcomePage.style.display = "none";
    ticketFairPage.style.display = "none";
    travelHistoryPage.style.display = "none";
    travelPage.style.display = "none";
    showBalancePage.style.display = "none";
    rechargeMessage.style.display = "none";
    cancelPage.style.display = "none";
    walletRechargePage.style.display = "block";
    walletRechargePage.style.margin = "5em";
}
function recharge() {
    let amount = document.getElementById("amount");
    let rechargeForm = document.getElementById("rechargeForm");
    let rechargeMessage = document.getElementById("rechargeMessage");
    if (parseInt(amount.value) > 0) {
        currentLoggedInUser.walletBalance += parseInt(amount.value);
        updateUser(currentLoggedInUser.cardNumber, currentLoggedInUser);
        rechargeMessage.innerHTML = `<h1>Wallet Recharged with amount ${amount.value} ...</h1>`;
        rechargeMessage.style.display = "block";
        rechargeForm.reset();
    }
    else {
        alert("Invalid Amount Please enter valid Amount");
    }
}
function showBalancePage() {
    let welcomePage = document.getElementById("welcomePage");
    let ticketFairPage = document.getElementById("ticketFairPage");
    let travelPage = document.getElementById("travelPage");
    let travelHistoryPage = document.getElementById("travelHistoryPage");
    let walletRechargePage = document.getElementById("walletRechargePage");
    let showBalancePage = document.getElementById("showBalancePage");
    let balanceMessage = document.getElementById("balanceMessage");
    let cancelPage = document.getElementById("cancelPage");
    welcomePage.style.display = "none";
    ticketFairPage.style.display = "none";
    travelHistoryPage.style.display = "none";
    travelPage.style.display = "none";
    walletRechargePage.style.display = "none";
    cancelPage.style.display = "none";
    showBalancePage.style.display = "block";
    balanceMessage.innerHTML = `Available Balance in Your Wallet is ${currentLoggedInUser.walletBalance}`;
    balanceMessage.style.marginTop = "5em";
    balanceMessage.style.textAlign = "center";
}
function checkUserName(id) {
    let newUserName = document.getElementById(id);
    let newUserNameMessage = document.getElementById(id + "Message");
    if ((/^[a-zA-Z][^\d\W]{2,20}/).test(newUserName.value.trim())) {
        newUserNameMessage.style.visibility = "hidden";
        isNewUserNameValid = true;
    }
    else {
        newUserNameMessage.innerHTML = "Please enter a valid name";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.color = "red";
        newUserNameMessage.style.marginLeft = "1em";
        newUserNameMessage.style.fontSize = "20px";
        newUserNameMessage.style.verticalAlign = "middle";
    }
}
function checkUserEmail(id) {
    let newUserEmail = document.getElementById(id);
    let newUserEmailMessage = document.getElementById(id + "Message");
    if ((/^([\w\-\.]+)@([\w-]+\.)+[\w-]{2,}$/).test(newUserEmail.value.trim())) {
        newUserEmailMessage.style.visibility = "hidden";
        isNewUserEmailValid = true;
    }
    else {
        newUserEmailMessage.innerHTML = "Please enter a valid mail";
        newUserEmailMessage.style.visibility = "visible";
        newUserEmailMessage.style.color = "red";
        newUserEmailMessage.style.marginLeft = "1em";
        newUserEmailMessage.style.fontSize = "20px";
        newUserEmailMessage.style.verticalAlign = "middle";
    }
}
function checkUserPhone(id) {
    let newUserPhone = document.getElementById(id);
    let newUserPhoneMessage = document.getElementById(id + "Message");
    if ((/^[6789]\d{9}$/).test(newUserPhone.value.trim())) {
        newUserPhoneMessage.style.visibility = "hidden";
        isNewUserPhoneValid = true;
    }
    else {
        newUserPhoneMessage.innerHTML = "Please enter a valid Number";
        newUserPhoneMessage.style.visibility = "visible";
        newUserPhoneMessage.style.color = "red";
        newUserPhoneMessage.style.marginLeft = "1em";
        newUserPhoneMessage.style.fontSize = "20px";
        newUserPhoneMessage.style.verticalAlign = "middle";
    }
}
let userPassword = "";
function checkUserPassword(id) {
    let newUserPassword = document.getElementById(id);
    let newUserPasswordMessage = document.getElementById(id + "Message");
    if ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(newUserPassword.value.trim())) {
        newUserPasswordMessage.style.visibility = "hidden";
        userPassword = newUserPassword.value;
    }
    else {
        newUserPasswordMessage.innerHTML = "Please Create min 8 character Strong password";
        newUserPasswordMessage.style.visibility = "visible";
        newUserPasswordMessage.style.color = "red";
        newUserPasswordMessage.style.marginLeft = "1em";
        newUserPasswordMessage.style.fontSize = "20px";
        newUserPasswordMessage.style.verticalAlign = "middle";
    }
}
function confirmPassword(id) {
    let confirmPassword = document.getElementById(id);
    let confirmPasswordMessage = document.getElementById(id + "Message");
    if (userPassword === confirmPassword.value.trim()) {
        confirmPasswordMessage.style.visibility = "hidden";
        isNewUserPasswordValid = true;
    }
    else {
        confirmPasswordMessage.innerHTML = "Wrong Password";
        confirmPasswordMessage.style.visibility = "visible";
        confirmPasswordMessage.style.color = "red";
        confirmPasswordMessage.style.marginLeft = "1em";
        confirmPasswordMessage.style.fontSize = "20px";
        confirmPasswordMessage.style.verticalAlign = "middle";
    }
}
function EditDiv(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let editDiv = document.getElementById("editDiv");
        editDiv.style.display = "block";
        let editButton = document.getElementById("editButton");
        editButton.innerHTML = `<button onclick=\"EditDetails(${id})\">submit</button>`;
        let fromLocation = document.getElementById("fromLocation");
        let toLocation = document.getElementById("toLocation");
        let fair = document.getElementById("fair");
        let addButton = document.getElementById("AddButton");
        addButton.style.display = "none";
        let tickets = yield fetchTicket();
        tickets.forEach(element => {
            if (element.ticketID === Number(id)) {
                fromLocation.value = element.fromLocation;
                toLocation.value = element.toLocation;
                fair.value = element.fair.toString();
            }
        });
    });
}
function EditDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let fromLocation = document.getElementById("fromLocation");
        let toLocation = document.getElementById("toLocation");
        let fair = document.getElementById("fair");
        let editForm = document.getElementById("editForm");
        let tickets = yield fetchTicket();
        tickets.forEach(element => {
            if (element.ticketID === Number(id)) {
                element.fromLocation = fromLocation.value;
                element.toLocation = toLocation.value;
                element.fair = parseInt(fair.value);
                updateTicket(id, element);
                alert("Details Edited");
                editForm.reset();
                ticketFairPage();
            }
        });
    });
}
function Delete(id) {
    deleteTicket(id);
    alert("Ticket Deleted");
    ticketFairPage();
}
function AddTicketDiv() {
    let editDiv = document.getElementById("editDiv");
    editDiv.style.display = "block";
    let editButton = document.getElementById("editButton");
    editButton.innerHTML = `<button onclick=\"AddTicket()\">Add</button>`;
    let addButton = document.getElementById("AddButton");
    addButton.style.display = "none";
    let ediForm = document.getElementById("editForm");
    ediForm.reset();
}
function AddTicket() {
    let localFromLocation = document.getElementById("fromLocation");
    let localToLocation = document.getElementById("toLocation");
    let localFair = document.getElementById("fair");
    let ediForm = document.getElementById("editForm");
    const ticket = { ticketID: 0, fromLocation: localFromLocation.value.trim(), toLocation: localToLocation.value.trim(), fair: parseInt(localFair.value.trim()) };
    addTicket(ticket);
    alert("Ticket Added");
    ediForm.reset();
    ticketFairPage();
}
//# sourceMappingURL=metroCard.js.map