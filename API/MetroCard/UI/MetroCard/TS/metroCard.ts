let isNewUserNameValid = false;
let isNewUserEmailValid = false;
let isNewUserPasswordValid = false;
let isNewUserPhoneValid = false;

let currentLoggedInUser: UserDetails;

interface UserDetails {
    cardNumber: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    walletBalance: number;
}

interface TravelDetails {
    travelID: number;
    cardNumber: number;
    fromLocation: string;
    toLocation: string;
    date: Date;
    cost: number;
    bookingStatus: string;
}

interface TicketFairDetails {
    ticketID: number;
    fromLocation: string;
    toLocation: string;
    fair: number;

}

async function addUser(user: UserDetails): Promise<void> {
    const response = await fetch('http://localhost:5171/api/userdetails', {
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

async function fetchUser(): Promise<UserDetails[]> {
    const apiUrl = 'http://localhost:5171/api/userdetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
}

async function updateUser(id: number, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5171/api/userdetails/${id}`, {
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

async function fetchTicket(): Promise<TicketFairDetails[]> {
    const apiUrl = 'http://localhost:5171/api/ticketfairdetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch Ticket');
    }
    return await response.json();
}

async function addTicket(user: TicketFairDetails): Promise<void> {
    const response = await fetch('http://localhost:5171/api/ticketfairdetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to add Ticket');
    }
}

async function updateTicket(id: number, user: TicketFairDetails): Promise<void> {
    const response = await fetch(`http://localhost:5171/api/ticketfairdetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update Ticket');
    }
}

async function deleteTicket(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5171/api/ticketfairdetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete Ticket');
    }
}

async function fetchTravel(): Promise<TravelDetails[]> {
    const apiUrl = 'http://localhost:5171/api/traveldetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch Travel');
    }
    return await response.json();
}

async function addTravel(user: TravelDetails): Promise<void> {
    const response = await fetch('http://localhost:5171/api/traveldetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to add Travel');
    }
}

async function updateTravel(id: number, user: TravelDetails): Promise<void> {
    const response = await fetch(`http://localhost:5171/api/traveldetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update Travel');
    }
}

function indexPage() {
    let indexPage = document.getElementById("indexPage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let loginPage = document.getElementById("loginPage") as HTMLDivElement;
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let ticketFairPage = document.getElementById("ticketFairPage") as HTMLDivElement;
    let travelPage = document.getElementById("travelPage") as HTMLDivElement;
    let travelHistoryPage = document.getElementById("travelHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let cancelPage = document.getElementById("cancelPage") as HTMLDivElement;
    let signUpForm=document.getElementById("signUpForm") as HTMLFormElement;
    let loginForm=document.getElementById("loginForm") as HTMLFormElement;

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
    let indexPage = document.getElementById("indexPage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;

    indexPage.style.display = "none";
    signUpPage.style.display = "block";
}

function signUp() {
    let newUserName = document.getElementById("newUserName") as HTMLInputElement;
    let newUserEmail = document.getElementById("newUserEmail") as HTMLInputElement;
    let newUserPhone = document.getElementById("newUserPhone") as HTMLInputElement;
    let newUserPassword = document.getElementById("newUserPassword") as HTMLInputElement;

    if (isNewUserNameValid && isNewUserEmailValid && isNewUserPasswordValid && isNewUserPhoneValid) {
        const user: UserDetails = { cardNumber: 0, name: newUserName.value.trim(), email: newUserEmail.value.trim(), password: newUserPassword.value.trim(), phone: newUserPhone.value.trim(), walletBalance: 0 };
        addUser(user);
        indexPage();
    }
    else {
        alert("Please fill out the form completely");
    }
}

function loginPage() {
    let indexPage = document.getElementById("indexPage") as HTMLDivElement;
    let loginPage = document.getElementById("loginPage") as HTMLDivElement;

    indexPage.style.display = "none";
    loginPage.style.display = "block";
}

async function login() {
    let userMail = document.getElementById("userMail") as HTMLInputElement;
    let userPassword = document.getElementById("userPassword") as HTMLInputElement;

    let isValidUser = true;
    let users = await fetchUser();
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
}

function homePage() {
    let indexPage = document.getElementById("indexPage") as HTMLDivElement;
    let loginPage = document.getElementById("loginPage") as HTMLDivElement;
    let signUpPage = document.getElementById("signUpPage") as HTMLDivElement;
    let homePage = document.getElementById("homePage") as HTMLDivElement;

    indexPage.style.display = "none";
    loginPage.style.display = "none";
    signUpPage.style.display = "none";
    homePage.style.display = "block";
    welcomePage();
}

function welcomePage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let greet = document.getElementById("greet") as HTMLHeadElement;
    let ticketFairPage = document.getElementById("ticketFairPage") as HTMLDivElement;
    let travelPage = document.getElementById("travelPage") as HTMLDivElement;
    let travelHistoryPage = document.getElementById("travelHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let cancelPage = document.getElementById("cancelPage") as HTMLDivElement;

    greet.innerHTML = `Welcome ${currentLoggedInUser.name} !`;
    ticketFairPage.style.display = "none";
    travelPage.style.display = "none";
    travelHistoryPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    cancelPage.style.display = "none";
    welcomePage.style.display = "block"
}

async function ticketFairPage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let ticketFairPage = document.getElementById("ticketFairPage") as HTMLDivElement;
    let travelHistoryPage = document.getElementById("travelHistoryPage") as HTMLDivElement;
    let travelPage = document.getElementById("travelPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let cancelPage = document.getElementById("cancelPage") as HTMLDivElement;
    let ticketTableDiv = document.getElementById("ticketTable") as HTMLElement;
    let editEdiv = document.getElementById("editDiv") as HTMLElement;

    welcomePage.style.display = "none";
    travelHistoryPage.style.display = "none";
    travelPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    cancelPage.style.display = "none";
    editEdiv.style.display = "none";
    ticketTableDiv.style.display = "block";
    ticketFairPage.style.display = "block";

    let tickets = await fetchTicket();
    if (tickets != null) {
        ticketTableDiv.innerHTML = "null";
        ticketTableDiv.innerHTML = `<button onclick=\"AddTicketDiv()\" id=\"AddButton\">Add</button><table cellpadding=\"5px\" border=\"2px\" id=\"ticketFairTable\"><tr><th>From Location</th><th>To Location</th><th>Fair</th><th>Action</th></tr></table>`;

        let ticketFairTable = document.getElementById("ticketFairTable") as HTMLTableElement;
        tickets.forEach(element => {
            ticketFairTable.innerHTML += `<tr><td>${element.fromLocation}</td><td>${element.toLocation}</td><td>${element.fair}</td><td><button class=\"edit\" onclick=\"EditDiv('${element.ticketID}')\">Edit</button>&nbsp;&nbsp;<button class=\"delete\"onclick=\"Delete('${element.ticketID}')\">Delete</button></td></tr>`;
        });
    }
    else {
        ticketFairPage.innerHTML = `<h1>No Tickets Available</h1>`;
    }
}

async function travelPage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let ticketFairPage = document.getElementById("ticketFairPage") as HTMLDivElement;
    let travelPage = document.getElementById("travelPage") as HTMLDivElement;
    let travelHistoryPage = document.getElementById("travelHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let cancelPage = document.getElementById("cancelPage") as HTMLDivElement;

    welcomePage.style.display = "none";
    ticketFairPage.style.display = "none";
    travelHistoryPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    cancelPage.style.display = "none";
    travelPage.style.display = "block";

    let tickets = await fetchTicket();
    if (tickets != null) {
        travelPage.innerHTML = "null";
        travelPage.innerHTML = `<h1>Book Ticket to Travel</h1><br><table cellpadding=\"5px\" border=\"2px\" id=\"ticketBookTable\"><tr><th>From Location</th><th>To Location</th><th>Fair</th><th>Action</th></tr></table>`;

        let ticketBookTable = document.getElementById("ticketBookTable") as HTMLTableElement;
        tickets.forEach(element => {
            ticketBookTable.innerHTML += `<tr><td>${element.fromLocation}</td><td>${element.toLocation}</td><td>${element.fair}</td><td><button onclick=\"travel('${element.ticketID}')\">Book</button></td></tr>`;
        });
    }
    else {
        travelPage.innerHTML = `<h1>No Tickets Available</h1>`;
    }
}

async function travel(id: number) {
    let isWalletBalanceAvailable = true;
    let tickets = await fetchTicket();
    tickets.forEach(element => {
        if (element.ticketID === Number(id)) {
            if (currentLoggedInUser.walletBalance >= element.fair) {
                isWalletBalanceAvailable = false;
                currentLoggedInUser.walletBalance -= element.fair;
                updateUser(currentLoggedInUser.cardNumber, currentLoggedInUser);
                const travel: TravelDetails = { travelID: 0, cardNumber: currentLoggedInUser.cardNumber, fromLocation: element.fromLocation, toLocation: element.toLocation, date: new Date(), cost: element.fair, bookingStatus: "Booked" };
                addTravel(travel);
                alert("Ticket Booked Happy Journey :)");
            }
        }
    });
    if (isWalletBalanceAvailable) {
        alert("Insufficient Balance Please Recharge your Wallet");
    }
}

async function cancelPage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let ticketFairPage = document.getElementById("ticketFairPage") as HTMLDivElement;
    let travelPage = document.getElementById("travelPage") as HTMLDivElement;
    let travelHistoryPage = document.getElementById("travelHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let cancelPage = document.getElementById("cancelPage") as HTMLDivElement;

    welcomePage.style.display = "none";
    ticketFairPage.style.display = "none";
    travelHistoryPage.style.display = "none";
    travelPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    cancelPage.style.display = "block";

    let isUserTravelled = false;
    let travels = await fetchTravel();
    travels.forEach(element => {
        if (element.cardNumber === currentLoggedInUser.cardNumber && element.bookingStatus === "Booked") {
            isUserTravelled = true;
        }
    });
    cancelPage.innerHTML = "null";
    if (isUserTravelled) {
        cancelPage.innerHTML = `<h1>Cancel Ticket</h1><table border=\"2px\" cellpadding=\"8px\" id=\"cancelTicketTable\"><tr><th>From Location</th><th>To Location</th><th>Date</th><th>Travel Cost</th><th>Booking Status</th><th>Action</th></tr></table>`;

        let cancelTicketTable = document.getElementById("cancelTicketTable") as HTMLTableElement;
        travels.forEach(element => {
            if (element.cardNumber === currentLoggedInUser.cardNumber && element.bookingStatus === "Booked") {
                cancelTicketTable.innerHTML += `<tr><td>${element.fromLocation}</td><td>${element.toLocation}</td><td>${element.date.toString().substring(0, 10).split('-').reverse().join('/')}</td><td>${element.cost}</td><td>${element.bookingStatus}</td><td><button onclick=\"cancel('${element.travelID}')\">Cancel</button></td></tr>`;
            }
        });
    }
    else {
        cancelPage.innerHTML = `<h1>No Tickets Booked To Cancel</h1>`;
    }
}

async function cancel(id: number) {
    let travels = await fetchTravel();
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
}

async function travelHistoryPage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let ticketFairPage = document.getElementById("ticketFairPage") as HTMLDivElement;
    let travelPage = document.getElementById("travelPage") as HTMLDivElement;
    let travelHistoryPage = document.getElementById("travelHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let cancelPage = document.getElementById("cancelPage") as HTMLDivElement;

    welcomePage.style.display = "none";
    ticketFairPage.style.display = "none";
    travelPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    cancelPage.style.display = "none";
    travelHistoryPage.style.display = "block";

    let isUserTravelled = false;
    let travels = await fetchTravel();
    travels.forEach(element => {
        if (element.cardNumber === currentLoggedInUser.cardNumber) {
            isUserTravelled = true;
        }
    });
    travelHistoryPage.innerHTML = "null";
    if (isUserTravelled) {
        travelHistoryPage.innerHTML = `<h1>Travel History</h1><table border=\"2px\" cellpadding=\"8px\" id=\"travelHistory\"><tr><th>From Location</th><th>To Location</th><th>Date</th><th>Travel Cost</th><th>Booking Status</th></tr></table>`;

        let travelHistory = document.getElementById("travelHistory") as HTMLTableElement;
        travels.forEach(element => {
            if (element.cardNumber === currentLoggedInUser.cardNumber) {
                travelHistory.innerHTML += `<tr><td>${element.fromLocation}</td><td>${element.toLocation}</td><td>${element.date.toString().substring(0, 10).split('-').reverse().join('/')}</td><td>${element.cost}</td><td>${element.bookingStatus}</td></tr>`;
            }
        });
    }
    else {
        travelHistoryPage.innerHTML = `<h1>No Travel History To Show</h1>`;
    }
}

function walletRechargePage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let ticketFairPage = document.getElementById("ticketFairPage") as HTMLDivElement;
    let travelPage = document.getElementById("travelPage") as HTMLDivElement;
    let travelHistoryPage = document.getElementById("travelHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let rechargeMessage = document.getElementById("rechargeMessage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let cancelPage = document.getElementById("cancelPage") as HTMLDivElement;

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
    let amount = document.getElementById("amount") as HTMLInputElement;
    let rechargeForm = document.getElementById("rechargeForm") as HTMLFormElement;
    let rechargeMessage = document.getElementById("rechargeMessage") as HTMLDivElement;
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
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let ticketFairPage = document.getElementById("ticketFairPage") as HTMLDivElement;
    let travelPage = document.getElementById("travelPage") as HTMLDivElement;
    let travelHistoryPage = document.getElementById("travelHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let balanceMessage = document.getElementById("balanceMessage") as HTMLHeadElement;
    let cancelPage = document.getElementById("cancelPage") as HTMLDivElement;

    welcomePage.style.display = "none";
    ticketFairPage.style.display = "none";
    travelHistoryPage.style.display = "none";
    travelPage.style.display = "none";
    walletRechargePage.style.display = "none";
    cancelPage.style.display = "none";
    showBalancePage.style.display = "block";
    balanceMessage.innerHTML = `Available Balance in Your Wallet is ${currentLoggedInUser.walletBalance}`;
    balanceMessage.style.marginTop = "5em";
    balanceMessage.style.textAlign = "center"
}

function checkUserName(id: string) {
    let newUserName = document.getElementById(id) as HTMLInputElement;
    let newUserNameMessage = document.getElementById(id + "Message") as HTMLLabelElement;

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

function checkUserEmail(id: string) {
    let newUserEmail = document.getElementById(id) as HTMLInputElement;
    let newUserEmailMessage = document.getElementById(id + "Message") as HTMLLabelElement;

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

function checkUserPhone(id: string) {
    let newUserPhone = document.getElementById(id) as HTMLInputElement;
    let newUserPhoneMessage = document.getElementById(id + "Message") as HTMLLabelElement;

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
function checkUserPassword(id: string) {
    let newUserPassword = document.getElementById(id) as HTMLInputElement;
    let newUserPasswordMessage = document.getElementById(id + "Message") as HTMLLabelElement;

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

function confirmPassword(id: string) {
    let confirmPassword = document.getElementById(id) as HTMLInputElement;
    let confirmPasswordMessage = document.getElementById(id + "Message") as HTMLLabelElement;

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

async function EditDiv(id: number) {
    let editDiv = document.getElementById("editDiv") as HTMLElement;
    editDiv.style.display = "block";

    let editButton = document.getElementById("editButton") as HTMLElement;
    editButton.innerHTML = `<button onclick=\"EditDetails(${id})\">submit</button>`;
    let fromLocation = document.getElementById("fromLocation") as HTMLInputElement;
    let toLocation = document.getElementById("toLocation") as HTMLInputElement;
    let fair = document.getElementById("fair") as HTMLInputElement;
    let addButton = document.getElementById("AddButton") as HTMLButtonElement;
    addButton.style.display = "none";

    let tickets = await fetchTicket();
    tickets.forEach(element => {
        if (element.ticketID === Number(id)) {
            fromLocation.value = element.fromLocation;
            toLocation.value = element.toLocation;
            fair.value = element.fair.toString();
        }
    });
}

async function EditDetails(id: number) {
    let fromLocation = document.getElementById("fromLocation") as HTMLInputElement;
    let toLocation = document.getElementById("toLocation") as HTMLInputElement;
    let fair = document.getElementById("fair") as HTMLInputElement;
    let editForm = document.getElementById("editForm") as HTMLFormElement;

    let tickets = await fetchTicket();
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
}

function Delete(id: number) {

    deleteTicket(id);
    alert("Ticket Deleted");
    ticketFairPage();

}

function AddTicketDiv() {
    let editDiv = document.getElementById("editDiv") as HTMLElement;
    editDiv.style.display = "block";

    let editButton = document.getElementById("editButton") as HTMLElement;
    editButton.innerHTML = `<button onclick=\"AddTicket()\">Add</button>`;

    let addButton = document.getElementById("AddButton") as HTMLButtonElement;
    addButton.style.display = "none";

    let ediForm = document.getElementById("editForm") as HTMLFormElement;
    ediForm.reset();
}

function AddTicket() {
    let localFromLocation = document.getElementById("fromLocation") as HTMLInputElement;
    let localToLocation = document.getElementById("toLocation") as HTMLInputElement;
    let localFair = document.getElementById("fair") as HTMLInputElement;
    let ediForm = document.getElementById("editForm") as HTMLFormElement;

    const ticket: TicketFairDetails = { ticketID: 0, fromLocation: localFromLocation.value.trim(), toLocation: localToLocation.value.trim(), fair: parseInt(localFair.value.trim()) };
    addTicket(ticket);
    alert("Ticket Added");
    ediForm.reset();
    ticketFairPage();
}