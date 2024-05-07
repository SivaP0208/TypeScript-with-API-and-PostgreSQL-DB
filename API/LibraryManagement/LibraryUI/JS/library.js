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
let isNewUserGenderValid = false;
let isNewUserDepartmentValid = false;
let currentLoggedInUser;
let userGender;
let userDepartment;
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5165/api/userdetails', {
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
        const apiUrl = 'http://localhost:5165/api/userdetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5165/api/userdetails/${id}`, {
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
function fetchBook() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5165/api/bookdetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch book');
        }
        return yield response.json();
    });
}
function addBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5165/api/bookdetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        if (!response.ok) {
            throw new Error('Failed to add book');
        }
    });
}
function updateBook(id, book) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5165/api/bookdetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    });
}
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5165/api/bookdetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete book');
        }
    });
}
function fetchBorrow() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5165/api/borrowdetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch borrow');
        }
        return yield response.json();
    });
}
function addBorrow(borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5165/api/borrowdetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Failed to add borrow');
        }
    });
}
function updateBorrow(id, borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5165/api/borrowdetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Failed to update borrow');
        }
    });
}
function indexPage() {
    let indexPage = document.getElementById("indexPage");
    let signupPage = document.getElementById("signupPage");
    let loginPage = document.getElementById("loginPage");
    let homePage = document.getElementById("homePage");
    let welcomePage = document.getElementById("welcomePage");
    let bookDetailsPage = document.getElementById("bookDetailsPage");
    let borrowBookPage = document.getElementById("borrowBookPage");
    let borrowHistoryPage = document.getElementById("borrowHistoryPage");
    let walletRechargePage = document.getElementById("walletRechargePage");
    let showBalancePage = document.getElementById("showBalancePage");
    let returnBookPage = document.getElementById("returnBookPage");
    let signupForm = document.getElementById("signupForm");
    let loginForm = document.getElementById("loginForm");
    welcomePage.style.display = "none";
    bookDetailsPage.style.display = "none";
    borrowHistoryPage.style.display = "none";
    borrowBookPage.style.display = "none";
    walletRechargePage.style.display = "none";
    returnBookPage.style.display = "none";
    signupForm.reset();
    loginForm.reset();
    showBalancePage.style.display = "none";
    indexPage.style.display = "block";
    homePage.style.display = "none";
    signupPage.style.display = "none";
    loginPage.style.display = "none";
}
function signupPage() {
    let indexPage = document.getElementById("indexPage");
    let signupPage = document.getElementById("signupPage");
    indexPage.style.display = "none";
    signupPage.style.display = "block";
}
function signUp() {
    let newUserName = document.getElementById("newUserName");
    let newUserEmail = document.getElementById("newUserEmail");
    let newUserPhone = document.getElementById("newUserPhone");
    let newUserPassword = document.getElementById("newUserPassword");
    if (isNewUserNameValid && isNewUserEmailValid && isNewUserPasswordValid && isNewUserPhoneValid && isNewUserDepartmentValid && isNewUserGenderValid) {
        const user = { userID: undefined, userName: newUserName.value.trim(), mailID: newUserEmail.value.trim(), password: newUserPassword.value.trim(), mobileNumber: newUserPhone.value.trim(), gender: userGender, department: userDepartment, walletBalance: 0 };
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
            if (element.mailID === userMail.value.trim() && element.password === userPassword.value.trim()) {
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
    let signupPage = document.getElementById("signupPage");
    let homePage = document.getElementById("homePage");
    indexPage.style.display = "none";
    loginPage.style.display = "none";
    signupPage.style.display = "none";
    homePage.style.display = "block";
    welcomePage();
}
function welcomePage() {
    let welcomePage = document.getElementById("welcomePage");
    let greet = document.getElementById("greet");
    let bookDetailsPage = document.getElementById("bookDetailsPage");
    let borrowBookPage = document.getElementById("borrowBookPage");
    let borrowHistoryPage = document.getElementById("borrowHistoryPage");
    let walletRechargePage = document.getElementById("walletRechargePage");
    let showBalancePage = document.getElementById("showBalancePage");
    let returnBookPage = document.getElementById("returnBookPage");
    let requiredCountDiv = document.getElementById("requiredCount");
    greet.innerHTML = `Welcome ${currentLoggedInUser.userName} !`;
    bookDetailsPage.style.display = "none";
    borrowBookPage.style.display = "none";
    borrowHistoryPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    requiredCountDiv.style.display = "none";
    returnBookPage.style.display = "none";
    welcomePage.style.display = "block";
}
function bookDetailsPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcomePage");
        let bookDetailsPage = document.getElementById("bookDetailsPage");
        let borrowHistoryPage = document.getElementById("borrowHistoryPage");
        let borrowBookPage = document.getElementById("borrowBookPage");
        let walletRechargePage = document.getElementById("walletRechargePage");
        let showBalancePage = document.getElementById("showBalancePage");
        let returnBookPage = document.getElementById("returnBookPage");
        let bookTableDiv = document.getElementById("bookTableDiv");
        let editDiv = document.getElementById("editDiv");
        let requiredCountDiv = document.getElementById("requiredCount");
        welcomePage.style.display = "none";
        borrowHistoryPage.style.display = "none";
        borrowBookPage.style.display = "none";
        walletRechargePage.style.display = "none";
        showBalancePage.style.display = "none";
        returnBookPage.style.display = "none";
        editDiv.style.display = "none";
        requiredCountDiv.style.display = "none";
        bookTableDiv.style.display = "block";
        bookDetailsPage.style.display = "block";
        let books = yield fetchBook();
        if (books != null) {
            bookTableDiv.innerHTML = "null";
            bookTableDiv.innerHTML = `<button onclick=\"addBookDiv()\" id=\"addButton\">Add</button><table cellpadding=\"5px\" border=\"2px\" id=\"bookTable\"><tr><th>Book Name</th><th>Author Name</th><th>Book Count</th><th>Action</th></tr></table>`;
            let bookTable = document.getElementById("bookTable");
            books.forEach(element => {
                bookTable.innerHTML += `<tr><td>${element.bookName}</td><td>${element.authorName}</td><td>${element.bookCount}</td><td><button class=\"edit\" onclick=\"editDiv('${element.bookID}')\">Edit</button>&nbsp;&nbsp;<button class=\"delete\"onclick=\"Delete('${element.bookID}')\">Delete</button></td></tr>`;
            });
        }
        else {
            bookDetailsPage.innerHTML = `<h1>No Tickets Available</h1>`;
        }
    });
}
function borrowBookPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcomePage");
        let bookDetailsPage = document.getElementById("bookDetailsPage");
        let borrowBookPage = document.getElementById("borrowBookPage");
        let borrowHistoryPage = document.getElementById("borrowHistoryPage");
        let walletRechargePage = document.getElementById("walletRechargePage");
        let showBalancePage = document.getElementById("showBalancePage");
        let returnBookPage = document.getElementById("returnBookPage");
        let requiredCountDiv = document.getElementById("requiredCount");
        welcomePage.style.display = "none";
        bookDetailsPage.style.display = "none";
        borrowHistoryPage.style.display = "none";
        walletRechargePage.style.display = "none";
        showBalancePage.style.display = "none";
        returnBookPage.style.display = "none";
        requiredCountDiv.style.display = "none";
        borrowBookPage.style.display = "block";
        let books = yield fetchBook();
        if (books != null) {
            borrowBookPage.innerHTML = "null";
            borrowBookPage.innerHTML = `<h1>Borrow Book</h1><br><table cellpadding=\"5px\" border=\"2px\" id=\"bookBorrowTable\"><tr><th>Book Name</th><th>Author Name</th><th>Book Count</th><th>Action</th></tr></table>`;
            let bookBorrowTable = document.getElementById("bookBorrowTable");
            books.forEach(element => {
                bookBorrowTable.innerHTML += `<tr><td>${element.bookName}</td><td>${element.authorName}</td><td>${element.bookCount}</td><td><button onclick=\"borrow('${element.bookID}')\">Borrow</button></td></tr>`;
            });
        }
        else {
            borrowBookPage.innerHTML = `<h1>No Tickets Available</h1>`;
        }
    });
}
function borrow(id) {
    let requiredCountDiv = document.getElementById("requiredCount");
    requiredCountDiv.style.display = "block";
    requiredCountDiv.style.fontSize = "20px";
    requiredCountDiv.style.marginLeft = "4em";
    let borrowButton = document.getElementById("borrowButton");
    borrowButton.innerHTML = `<button type=\"submit\" onclick=\"borrowBook(${id})\">Borrow Book</button>`;
}
function borrowBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let requiredCount = document.getElementById("count");
        let books = yield fetchBook();
        let borrows = yield fetchBorrow();
        for (var i = 0; i < books.length; i++) {
            if (books[i].bookID === Number(id)) {
                if (books[i].bookCount >= parseInt(requiredCount.value.trim())) {
                    var noOfBooksBorrowed = 0;
                    for (var j = 0; j < borrows.length; j++) {
                        if (currentLoggedInUser.userID == borrows[j].userID && borrows[j].status === "Borrowed") {
                            noOfBooksBorrowed += borrows[j].borrowBookCount;
                        }
                    }
                    if (noOfBooksBorrowed < 3) {
                        if (parseInt(requiredCount.value.trim()) <= (3 - noOfBooksBorrowed)) {
                            const borrowBook = { borrowID: undefined, bookID: id, userID: currentLoggedInUser.userID, borrowBookCount: parseInt(requiredCount.value.trim()), borrowedDate: new Date(), status: "Borrowed", paidFineAmount: 0 };
                            addBorrow(borrowBook);
                            books[i].bookCount -= parseInt(requiredCount.value.trim());
                            updateBook(books[i].bookID, books[i]);
                            alert(`${books[i].bookName}Book Borrowed Successfully`);
                        }
                        else {
                            alert(`You can have maximum of 3 Borrowed books.You're already borrowed books count is ${noOfBooksBorrowed} and Requested Count is ${requiredCount.value}, Which exceeds 3`);
                        }
                    }
                    else {
                        alert(`You have Borrowed 3 Books Already`);
                    }
                }
                else {
                    var availableDate;
                    for (var j = 0; j < borrows.length; j++) {
                        if (books[i].bookID.Equals(borrows[j].bookID)) {
                            availableDate = new Date(borrows[i].borrowedDate.setDate(borrows[i].borrowedDate.getDate() + 15));
                            alert(`${books[i].bookCount} Books only Available now. Balance Book will be available on ${availableDate.toISOString().substring(0, 10)}`);
                            break;
                        }
                    }
                }
                break;
            }
        }
    });
}
function returnBookPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let welcomePage = document.getElementById("welcomePage");
        let bookDetailsPage = document.getElementById("bookDetailsPage");
        let borrowBookPage = document.getElementById("borrowBookPage");
        let borrowHistoryPage = document.getElementById("borrowHistoryPage");
        let walletRechargePage = document.getElementById("walletRechargePage");
        let showBalancePage = document.getElementById("showBalancePage");
        let returnBookPage = document.getElementById("returnBookPage");
        let requiredCountDiv = document.getElementById("requiredCount");
        welcomePage.style.display = "none";
        bookDetailsPage.style.display = "none";
        borrowHistoryPage.style.display = "none";
        borrowBookPage.style.display = "none";
        walletRechargePage.style.display = "none";
        showBalancePage.style.display = "none";
        requiredCountDiv.style.display = "none";
        returnBookPage.style.display = "block";
        let isUserBorrowedBook = false;
        let borrows = yield fetchBorrow();
        let books = yield fetchBook();
        borrows.forEach(element => {
            if (element.userID === currentLoggedInUser.userID && element.status === "Borrowed") {
                isUserBorrowedBook = true;
            }
        });
        returnBookPage.innerHTML = "null";
        if (isUserBorrowedBook) {
            returnBookPage.innerHTML = `<h1>Return Book</h1><table border=\"2px\" cellpadding=\"8px\" id=\"returnBookTable\"><tr><th>Book Name</th><th>Borrow Book Count</th><th>Borrowed Date</th><th>Status</th><th>Return Date</th><th>Paid Fine Amount</th><th>Action</th></tr></table>`;
            let returnBookTable = document.getElementById("returnBookTable");
            for (var i = 0; i < borrows.length; i++) {
                if (borrows[i].userID === currentLoggedInUser.userID && borrows[i].status === "Borrowed") {
                    for (var j = 0; j < books.length; j++) {
                        if (books[j].bookID === borrows[i].bookID) {
                            returnBookTable.innerHTML += `<tr><td>${books[j].bookName}</td><td>${borrows[i].borrowBookCount}</td><td>${borrows[i].borrowedDate.toString().substring(0, 10).split('-').reverse().join('/')}</td><td>${borrows[i].status}</td><td>${new Date(borrows[i].borrowedDate.setDate(borrows[i].borrowedDate.getDate() + 15)).toISOString().substring(0, 10).split('-').reverse().join('/')}</td><td>${borrows[i].paidFineAmount}</td><td><button onclick=\"returnBook('${borrows[i].borrowID}')\">return</button></td></tr>`;
                            break;
                        }
                    }
                }
            }
            ;
        }
        else {
            returnBookPage.innerHTML = `<h1>No Books are Borrowed To Return</h1>`;
        }
    });
}
function returnBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let borrows = yield fetchBorrow();
        let books = yield fetchBook();
        for (var i = 0; i < borrows.length; i++) {
            if (borrows[i].borrowID === Number(id)) {
                var returnDate = new Date(borrows[i].borrowedDate.setDate(borrows[i].borrowedDate.getDate() + 15));
                if (returnDate < new Date()) {
                    const currentDate = new Date().getTime();
                    var timeDiff = currentDate - returnDate.getTime();
                    var days = Math.round(timeDiff / (1000 * 60 * 60 * 24));
                    var fineAmount = days;
                    if (currentLoggedInUser.walletBalance >= fineAmount) {
                        currentLoggedInUser.walletBalance -= fineAmount;
                        updateUser(currentLoggedInUser.userID, currentLoggedInUser);
                        borrows[i].status = "Returned";
                        borrows[i].paidFineAmount = fineAmount;
                        updateBorrow(borrows[i].borrowID, borrows[i]);
                        for (var j = 0; j < books.length; j++) {
                            if (borrows[i].bookID === books[j].bookID) {
                                books[j].bookCount += borrows[i].borrowBookCount;
                                updateBook(books[j].bookID, books[j]);
                                alert(`Book Returned Successfully`);
                                break;
                            }
                        }
                    }
                    else {
                        alert(`Insufficient Balance to pay Fine Amount. Please recharge and proceed`);
                    }
                }
                else {
                    borrows[i].status = "Returned";
                    updateBorrow(borrows[i].borrowID, borrows[i]);
                    for (var j = 0; j < books.length; j++) {
                        if (borrows[i].bookID === books[j].bookID) {
                            books[j].bookCount += borrows[i].borrowBookCount;
                            updateBook(books[j].bookID, books[j]);
                            alert(`Book Returned Successfully`);
                            break;
                        }
                    }
                }
                break;
            }
        }
    });
}
function walletRechargePage() {
    let welcomePage = document.getElementById("welcomePage");
    let bookDetailsPage = document.getElementById("bookDetailsPage");
    let borrowBookPage = document.getElementById("borrowBookPage");
    let borrowHistoryPage = document.getElementById("borrowHistoryPage");
    let walletRechargePage = document.getElementById("walletRechargePage");
    let rechargeMessage = document.getElementById("rechargeMessage");
    let showBalancePage = document.getElementById("showBalancePage");
    let returnBookPage = document.getElementById("returnBookPage");
    welcomePage.style.display = "none";
    bookDetailsPage.style.display = "none";
    borrowHistoryPage.style.display = "none";
    borrowBookPage.style.display = "none";
    showBalancePage.style.display = "none";
    rechargeMessage.style.display = "none";
    returnBookPage.style.display = "none";
    walletRechargePage.style.display = "block";
    walletRechargePage.style.margin = "5em";
}
function recharge() {
    let amount = document.getElementById("amount");
    let rechargeForm = document.getElementById("rechargeForm");
    let rechargeMessage = document.getElementById("rechargeMessage");
    if (parseInt(amount.value) > 0) {
        currentLoggedInUser.walletBalance += parseInt(amount.value);
        updateUser(currentLoggedInUser.userID, currentLoggedInUser);
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
    let bookDetailsPage = document.getElementById("bookDetailsPage");
    let borrowBookPage = document.getElementById("borrowBookPage");
    let borrowHistoryPage = document.getElementById("borrowHistoryPage");
    let walletRechargePage = document.getElementById("walletRechargePage");
    let showBalancePage = document.getElementById("showBalancePage");
    let balanceMessage = document.getElementById("balanceMessage");
    let returnBookPage = document.getElementById("returnBookPage");
    welcomePage.style.display = "none";
    bookDetailsPage.style.display = "none";
    borrowHistoryPage.style.display = "none";
    borrowBookPage.style.display = "none";
    walletRechargePage.style.display = "none";
    returnBookPage.style.display = "none";
    showBalancePage.style.display = "block";
    balanceMessage.innerHTML = `Available Balance in Your Wallet is ${currentLoggedInUser.walletBalance}`;
    balanceMessage.style.marginTop = "5em";
    balanceMessage.style.textAlign = "center";
}
function editDiv(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let editDiv = document.getElementById("editDiv");
        editDiv.style.display = "block";
        let editButton = document.getElementById("editButton");
        editButton.innerHTML = `<button onclick=\"editDetails(${id})\">submit</button>`;
        let localBookName = document.getElementById("bookName");
        let localAuthorName = document.getElementById("authorName");
        let localBookCount = document.getElementById("bookCount");
        let addButton = document.getElementById("addButton");
        addButton.style.display = "none";
        let books = yield fetchBook();
        for (var i = 0; i < books.length; i++) {
            if (books[i].bookID === Number(id)) {
                localBookName.value = books[i].bookName;
                localAuthorName.value = books[i].authorName;
                localBookCount.value = books[i].bookCount.toString();
            }
        }
    });
}
function EditDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let localBookName = document.getElementById("bookName");
        let localAuthorName = document.getElementById("authorName");
        let localBookCount = document.getElementById("bookCount");
        let editForm = document.getElementById("editForm");
        let books = yield fetchBook();
        for (var i = 0; i < books.length; i++) {
            if (books[i].bookID === Number(id)) {
                books[i].bookName = localBookName.value.trim();
                books[i].authorName = localAuthorName.value.trim();
                books[i].bookCount = parseInt(localBookCount.value.trim());
                updateBook(id, books[i]);
                alert("Details Edited");
                editForm.reset();
                bookDetailsPage();
            }
        }
    });
}
function Delete(id) {
    deleteBook(id);
    alert("Book Deleted");
    bookDetailsPage();
}
function addBookDiv() {
    let editDiv = document.getElementById("editDiv");
    editDiv.style.display = "block";
    let editButton = document.getElementById("editButton");
    editButton.innerHTML = `<button onclick=\"addbook()\">Add</button>`;
    let addButton = document.getElementById("addButton");
    addButton.style.display = "none";
    let ediForm = document.getElementById("editForm");
    ediForm.reset();
}
function addbook() {
    let localBookName = document.getElementById("bookName");
    let localAuthorName = document.getElementById("authorName");
    let localBookCount = document.getElementById("bookCount");
    let ediForm = document.getElementById("editForm");
    const book = { bookID: undefined, bookName: localBookName.value.trim(), authorName: localAuthorName.value.trim(), bookCount: parseInt(localBookCount.value.trim()) };
    addBook(book);
    alert("Book Added");
    ediForm.reset();
    bookDetailsPage();
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
function checkUserGender(id) {
    let newUserGenderMessage = document.getElementById(id + "Message");
    let maleGender = document.getElementById("male");
    let femaleGender = document.getElementById("female");
    if (maleGender.checked) {
        isNewUserGenderValid = true;
        userGender = maleGender.value;
        newUserGenderMessage.style.visibility = "hidden";
    }
    else if (femaleGender.checked) {
        isNewUserGenderValid = true;
        userGender = femaleGender.value;
        newUserGenderMessage.style.visibility = "hidden";
    }
    else {
        newUserGenderMessage.innerHTML = "Please enter Valid Gender Male or Female";
        newUserGenderMessage.style.visibility = "visible";
        newUserGenderMessage.style.color = "red";
        newUserGenderMessage.style.marginLeft = "1em";
        newUserGenderMessage.style.fontSize = "20px";
        newUserGenderMessage.style.verticalAlign = "middle";
    }
}
function checkUserDepartment(id) {
    let newUserDepartmentMessage = document.getElementById(id + "Message");
    let ece = document.getElementById("ece");
    let cse = document.getElementById("cse");
    let it = document.getElementById("it");
    let eee = document.getElementById("eee");
    if (ece.checked) {
        isNewUserDepartmentValid = true;
        userDepartment = ece.value;
        newUserDepartmentMessage.style.visibility = "hidden";
    }
    else if (cse.checked) {
        isNewUserDepartmentValid = true;
        userDepartment = cse.value;
        newUserDepartmentMessage.style.visibility = "hidden";
    }
    else if (it.checked) {
        isNewUserDepartmentValid = true;
        userDepartment = it.value;
        newUserDepartmentMessage.style.visibility = "hidden";
    }
    else if (eee.checked) {
        isNewUserDepartmentValid = true;
        userDepartment = eee.value;
        newUserDepartmentMessage.style.visibility = "hidden";
    }
    else {
        newUserDepartmentMessage.innerHTML = "Please enter Valid Gender Male or Female";
        newUserDepartmentMessage.style.visibility = "visible";
        newUserDepartmentMessage.style.color = "red";
        newUserDepartmentMessage.style.marginLeft = "1em";
        newUserDepartmentMessage.style.fontSize = "20px";
        newUserDepartmentMessage.style.verticalAlign = "middle";
    }
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
//# sourceMappingURL=library.js.map