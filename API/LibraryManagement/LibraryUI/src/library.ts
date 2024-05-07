let isNewUserNameValid = false;
let isNewUserEmailValid = false;
let isNewUserPasswordValid = false;
let isNewUserPhoneValid = false;
let isNewUserGenderValid = false;
let isNewUserDepartmentValid = false;

let currentLoggedInUser: UserDetails;

let userGender: string;
let userDepartment: string;

interface UserDetails {
    userID: any;
    userName: string;
    gender: string;
    mailID: string;
    password: string;
    mobileNumber: string;
    department: string;
    walletBalance: number;
}

interface BookDetails {
    bookID: any;
    bookName: string;
    authorName: string;
    bookCount: number;
}

interface BorrowDetails {
    borrowID: any;
    bookID: number;
    userID: number;
    borrowBookCount: number;
    borrowedDate: Date;
    status: string;
    paidFineAmount: number;
}

async function addUser(user: UserDetails): Promise<void> {
    const response = await fetch('http://localhost:5165/api/userdetails', {
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
    const apiUrl = 'http://localhost:5165/api/userdetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
}

async function updateUser(id: number, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5165/api/userdetails/${id}`, {
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

async function fetchBook(): Promise<BookDetails[]> {
    const apiUrl = 'http://localhost:5165/api/bookdetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch book');
    }
    return await response.json();
}

async function addBook(book: BookDetails): Promise<void> {
    const response = await fetch('http://localhost:5165/api/bookdetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if (!response.ok) {
        throw new Error('Failed to add book');
    }
}

async function updateBook(id: number, book: BookDetails): Promise<void> {
    const response = await fetch(`http://localhost:5165/api/bookdetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }
}

async function deleteBook(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5165/api/bookdetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete book');
    }
}

async function fetchBorrow(): Promise<BorrowDetails[]> {
    const apiUrl = 'http://localhost:5165/api/borrowdetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch borrow');
    }
    return await response.json();
}

async function addBorrow(borrow: BorrowDetails): Promise<void> {
    const response = await fetch('http://localhost:5165/api/borrowdetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrow)
    });
    if (!response.ok) {
        throw new Error('Failed to add borrow');
    }
}

async function updateBorrow(id: number, borrow: BorrowDetails): Promise<void> {
    const response = await fetch(`http://localhost:5165/api/borrowdetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrow)
    });
    if (!response.ok) {
        throw new Error('Failed to update borrow');
    }
}

function indexPage() {
    let indexPage = document.getElementById("indexPage") as HTMLDivElement;
    let signupPage = document.getElementById("signupPage") as HTMLDivElement;
    let loginPage = document.getElementById("loginPage") as HTMLDivElement;
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let bookDetailsPage = document.getElementById("bookDetailsPage") as HTMLDivElement;
    let borrowBookPage = document.getElementById("borrowBookPage") as HTMLDivElement;
    let borrowHistoryPage = document.getElementById("borrowHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let returnBookPage = document.getElementById("returnBookPage") as HTMLDivElement;
    let signupForm = document.getElementById("signupForm") as HTMLFormElement;
    let loginForm = document.getElementById("loginForm") as HTMLFormElement;

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
    let indexPage = document.getElementById("indexPage") as HTMLDivElement;
    let signupPage = document.getElementById("signupPage") as HTMLDivElement;

    indexPage.style.display = "none";
    signupPage.style.display = "block";
}

function signUp() {
    let newUserName = document.getElementById("newUserName") as HTMLInputElement;
    let newUserEmail = document.getElementById("newUserEmail") as HTMLInputElement;
    let newUserPhone = document.getElementById("newUserPhone") as HTMLInputElement;
    let newUserPassword = document.getElementById("newUserPassword") as HTMLInputElement;

    if (isNewUserNameValid && isNewUserEmailValid && isNewUserPasswordValid && isNewUserPhoneValid && isNewUserDepartmentValid && isNewUserGenderValid) {
        const user: UserDetails = { userID: undefined, userName: newUserName.value.trim(), mailID: newUserEmail.value.trim(), password: newUserPassword.value.trim(), mobileNumber: newUserPhone.value.trim(), gender: userGender, department: userDepartment, walletBalance: 0 };
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
        if (element.mailID === userMail.value.trim() && element.password === userPassword.value.trim()) {
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
    let signupPage = document.getElementById("signupPage") as HTMLDivElement;
    let homePage = document.getElementById("homePage") as HTMLDivElement;

    indexPage.style.display = "none";
    loginPage.style.display = "none";
    signupPage.style.display = "none";
    homePage.style.display = "block";
    welcomePage();
}

function welcomePage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let greet = document.getElementById("greet") as HTMLHeadElement;
    let bookDetailsPage = document.getElementById("bookDetailsPage") as HTMLDivElement;
    let borrowBookPage = document.getElementById("borrowBookPage") as HTMLDivElement;
    let borrowHistoryPage = document.getElementById("borrowHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let returnBookPage = document.getElementById("returnBookPage") as HTMLDivElement;
    let requiredCountDiv = document.getElementById("requiredCount") as HTMLDivElement;

    greet.innerHTML = `Welcome ${currentLoggedInUser.userName} !`;
    bookDetailsPage.style.display = "none";
    borrowBookPage.style.display = "none";
    borrowHistoryPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    requiredCountDiv.style.display = "none";
    returnBookPage.style.display = "none";
    welcomePage.style.display = "block"
}

async function bookDetailsPage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let bookDetailsPage = document.getElementById("bookDetailsPage") as HTMLDivElement;
    let borrowHistoryPage = document.getElementById("borrowHistoryPage") as HTMLDivElement;
    let borrowBookPage = document.getElementById("borrowBookPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let returnBookPage = document.getElementById("returnBookPage") as HTMLDivElement;
    let bookTableDiv = document.getElementById("bookTableDiv") as HTMLElement;
    let editDiv = document.getElementById("editDiv") as HTMLElement;
    let requiredCountDiv = document.getElementById("requiredCount") as HTMLDivElement;

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

    let books = await fetchBook();
    if (books != null) {
        bookTableDiv.innerHTML = "null";
        bookTableDiv.innerHTML = `<button onclick=\"addBookDiv()\" id=\"addButton\">Add</button><table cellpadding=\"5px\" border=\"2px\" id=\"bookTable\"><tr><th>Book Name</th><th>Author Name</th><th>Book Count</th><th>Action</th></tr></table>`;

        let bookTable = document.getElementById("bookTable") as HTMLTableElement;
        books.forEach(element => {
            bookTable.innerHTML += `<tr><td>${element.bookName}</td><td>${element.authorName}</td><td>${element.bookCount}</td><td><button class=\"edit\" onclick=\"editDiv('${element.bookID}')\">Edit</button>&nbsp;&nbsp;<button class=\"delete\"onclick=\"Delete('${element.bookID}')\">Delete</button></td></tr>`;
        });
    }
    else {
        bookDetailsPage.innerHTML = `<h1>No Tickets Available</h1>`;
    }
}

async function borrowBookPage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let bookDetailsPage = document.getElementById("bookDetailsPage") as HTMLDivElement;
    let borrowBookPage = document.getElementById("borrowBookPage") as HTMLDivElement;
    let borrowHistoryPage = document.getElementById("borrowHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let returnBookPage = document.getElementById("returnBookPage") as HTMLDivElement;
    let requiredCountDiv = document.getElementById("requiredCount") as HTMLDivElement;

    welcomePage.style.display = "none";
    bookDetailsPage.style.display = "none";
    borrowHistoryPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    returnBookPage.style.display = "none";
    requiredCountDiv.style.display = "none";
    borrowBookPage.style.display = "block";

    let books = await fetchBook();
    if (books != null) {
        borrowBookPage.innerHTML = "null";
        borrowBookPage.innerHTML = `<h1>Borrow Book</h1><br><table cellpadding=\"5px\" border=\"2px\" id=\"bookBorrowTable\"><tr><th>Book Name</th><th>Author Name</th><th>Book Count</th><th>Action</th></tr></table>`;

        let bookBorrowTable = document.getElementById("bookBorrowTable") as HTMLTableElement;
        books.forEach(element => {
            bookBorrowTable.innerHTML += `<tr><td>${element.bookName}</td><td>${element.authorName}</td><td>${element.bookCount}</td><td><button onclick=\"borrow('${element.bookID}')\">Borrow</button></td></tr>`;
        });
    }
    else {
        borrowBookPage.innerHTML = `<h1>No Tickets Available</h1>`;
    }
}

function borrow(id: number) {
    let requiredCountDiv = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCountDiv.style.display = "block";
    requiredCountDiv.style.fontSize = "20px";
    requiredCountDiv.style.marginLeft = "4em";

    let borrowButton = document.getElementById("borrowButton") as HTMLElement;

    borrowButton.innerHTML = `<button type=\"submit\" onclick=\"borrowBook(${id})\">Borrow Book</button>`;

}

async function borrowBook(id: number) {
    let requiredCount = document.getElementById("count") as HTMLInputElement;
    let books = await fetchBook();
    let borrows = await fetchBorrow();
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
                        const borrowBook: BorrowDetails = { borrowID: undefined, bookID: id, userID: currentLoggedInUser.userID, borrowBookCount: parseInt(requiredCount.value.trim()), borrowedDate: new Date(), status: "Borrowed", paidFineAmount: 0 };
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
                var availableDate: Date;
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
}

async function returnBookPage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let bookDetailsPage = document.getElementById("bookDetailsPage") as HTMLDivElement;
    let borrowBookPage = document.getElementById("borrowBookPage") as HTMLDivElement;
    let borrowHistoryPage = document.getElementById("borrowHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let returnBookPage = document.getElementById("returnBookPage") as HTMLDivElement;
    let requiredCountDiv = document.getElementById("requiredCount") as HTMLDivElement;

    welcomePage.style.display = "none";
    bookDetailsPage.style.display = "none";
    borrowHistoryPage.style.display = "none";
    borrowBookPage.style.display = "none";
    walletRechargePage.style.display = "none";
    showBalancePage.style.display = "none";
    requiredCountDiv.style.display = "none";
    returnBookPage.style.display = "block";

    let isUserBorrowedBook = false;
    let borrows = await fetchBorrow();
    let books = await fetchBook();
    borrows.forEach(element => {
        if (element.userID === currentLoggedInUser.userID && element.status === "Borrowed") {
            isUserBorrowedBook = true;
        }
    });
    returnBookPage.innerHTML = "null";
    if (isUserBorrowedBook) {
        returnBookPage.innerHTML = `<h1>Return Book</h1><table border=\"2px\" cellpadding=\"8px\" id=\"returnBookTable\"><tr><th>Book Name</th><th>Borrow Book Count</th><th>Borrowed Date</th><th>Status</th><th>Return Date</th><th>Paid Fine Amount</th><th>Action</th></tr></table>`;

        let returnBookTable = document.getElementById("returnBookTable") as HTMLTableElement;
        for (var i = 0; i < borrows.length; i++) {
            if (borrows[i].userID === currentLoggedInUser.userID && borrows[i].status === "Borrowed") {
                for (var j = 0; j < books.length; j++) {
                    if (books[j].bookID === borrows[i].bookID) {
                        returnBookTable.innerHTML += `<tr><td>${books[j].bookName}</td><td>${borrows[i].borrowBookCount}</td><td>${borrows[i].borrowedDate.toString().substring(0, 10).split('-').reverse().join('/')}</td><td>${borrows[i].status}</td><td>${new Date(borrows[i].borrowedDate.setDate(borrows[i].borrowedDate.getDate() + 15)).toISOString().substring(0, 10).split('-').reverse().join('/')}</td><td>${borrows[i].paidFineAmount}</td><td><button onclick=\"returnBook('${borrows[i].borrowID}')\">return</button></td></tr>`;
                        break;
                    }
                }
            }
        };
    }
    else {
        returnBookPage.innerHTML = `<h1>No Books are Borrowed To Return</h1>`;
    }
}

async function returnBook(id: number) {
    let borrows = await fetchBorrow();
    let books = await fetchBook();

    for (var i = 0; i < borrows.length; i++) {
        if (borrows[i].borrowID === Number(id)) {
            var returnDate: Date = new Date(borrows[i].borrowedDate.setDate(borrows[i].borrowedDate.getDate() + 15));
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
}

function walletRechargePage() {
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let bookDetailsPage = document.getElementById("bookDetailsPage") as HTMLDivElement;
    let borrowBookPage = document.getElementById("borrowBookPage") as HTMLDivElement;
    let borrowHistoryPage = document.getElementById("borrowHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let rechargeMessage = document.getElementById("rechargeMessage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let returnBookPage = document.getElementById("returnBookPage") as HTMLDivElement;

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
    let amount = document.getElementById("amount") as HTMLInputElement;
    let rechargeForm = document.getElementById("rechargeForm") as HTMLFormElement;
    let rechargeMessage = document.getElementById("rechargeMessage") as HTMLDivElement;
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
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    let bookDetailsPage = document.getElementById("bookDetailsPage") as HTMLDivElement;
    let borrowBookPage = document.getElementById("borrowBookPage") as HTMLDivElement;
    let borrowHistoryPage = document.getElementById("borrowHistoryPage") as HTMLDivElement;
    let walletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
    let showBalancePage = document.getElementById("showBalancePage") as HTMLDivElement;
    let balanceMessage = document.getElementById("balanceMessage") as HTMLHeadElement;
    let returnBookPage = document.getElementById("returnBookPage") as HTMLDivElement;

    welcomePage.style.display = "none";
    bookDetailsPage.style.display = "none";
    borrowHistoryPage.style.display = "none";
    borrowBookPage.style.display = "none";
    walletRechargePage.style.display = "none";
    returnBookPage.style.display = "none";
    showBalancePage.style.display = "block";
    balanceMessage.innerHTML = `Available Balance in Your Wallet is ${currentLoggedInUser.walletBalance}`;
    balanceMessage.style.marginTop = "5em";
    balanceMessage.style.textAlign = "center"
}

async function editDiv(id: number) {
    let editDiv = document.getElementById("editDiv") as HTMLElement;
    editDiv.style.display = "block";

    let editButton = document.getElementById("editButton") as HTMLElement;
    editButton.innerHTML = `<button onclick=\"editDetails(${id})\">submit</button>`;
    let localBookName = document.getElementById("bookName") as HTMLInputElement;
    let localAuthorName = document.getElementById("authorName") as HTMLInputElement;
    let localBookCount = document.getElementById("bookCount") as HTMLInputElement;
    let addButton = document.getElementById("addButton") as HTMLButtonElement;
    addButton.style.display = "none";

    let books = await fetchBook();
    for(var i=0;i<books.length;i++){
        if(books[i].bookID===Number(id)){
            localBookName.value=books[i].bookName;
            localAuthorName.value=books[i].authorName;
            localBookCount.value=books[i].bookCount.toString();
        }
    }
}

async function EditDetails(id: number) {
    let localBookName = document.getElementById("bookName") as HTMLInputElement;
    let localAuthorName = document.getElementById("authorName") as HTMLInputElement;
    let localBookCount = document.getElementById("bookCount") as HTMLInputElement;
    let editForm = document.getElementById("editForm") as HTMLFormElement;

    let books = await fetchBook();
    for(var i=0;i<books.length;i++){
        if(books[i].bookID===Number(id)){
            books[i].bookName=localBookName.value.trim();
            books[i].authorName=localAuthorName.value.trim();
            books[i].bookCount=parseInt(localBookCount.value.trim());
            updateBook(id,books[i]);
            alert("Details Edited");
            editForm.reset();
            bookDetailsPage();
        }
    }
}

function Delete(id: number) {

    deleteBook(id);
    alert("Book Deleted");
    bookDetailsPage();

}

function addBookDiv() {
    let editDiv = document.getElementById("editDiv") as HTMLElement;
    editDiv.style.display = "block";

    let editButton = document.getElementById("editButton") as HTMLElement;
    editButton.innerHTML = `<button onclick=\"addbook()\">Add</button>`;

    let addButton = document.getElementById("addButton") as HTMLButtonElement;
    addButton.style.display = "none";

    let ediForm = document.getElementById("editForm") as HTMLFormElement;
    ediForm.reset();
}

function addbook() {
    let localBookName = document.getElementById("bookName") as HTMLInputElement;
    let localAuthorName = document.getElementById("authorName") as HTMLInputElement;
    let localBookCount = document.getElementById("bookCount") as HTMLInputElement;
    let ediForm = document.getElementById("editForm") as HTMLFormElement;

    const book: BookDetails = { bookID: undefined, bookName: localBookName.value.trim(), authorName: localAuthorName.value.trim(), bookCount: parseInt(localBookCount.value.trim()) };
    addBook(book);
    alert("Book Added");
    ediForm.reset();
    bookDetailsPage();
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
function checkUserGender(id: string) {
    let newUserGenderMessage = document.getElementById(id + "Message") as HTMLLabelElement;
    let maleGender = document.getElementById("male") as HTMLInputElement;
    let femaleGender = document.getElementById("female") as HTMLInputElement;

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
function checkUserDepartment(id: string) {
    let newUserDepartmentMessage = document.getElementById(id + "Message") as HTMLLabelElement;
    let ece = document.getElementById("ece") as HTMLInputElement;
    let cse = document.getElementById("cse") as HTMLInputElement;
    let it = document.getElementById("it") as HTMLInputElement;
    let eee = document.getElementById("eee") as HTMLInputElement;

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