let form = document.getElementById("userForm");
let userName = document.querySelector(".userName");
let idNumber = document.querySelector(".idNumber");
let country = document.querySelector(".state");
let language = document.querySelector(".language");
let output = document.querySelector(".userDetails");
let msg = document.querySelector(".msg");
let userDetailsLink = document.querySelector(".userContent");

// Initialize an empty array to store user details
let users = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userDetailsLink.scrollIntoView({ behavior: 'smooth' });
  formValidation();
  userName.value = "";
  idNumber.value = "";
  country.value = "";
  language.value = "";

});

let scrollToUsers = (event, userContent) => {
  event.preventDefault(); // Prevent the default behavior of the link

  let div = document.querySelector(".userContent");
  if (div) {
    div.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the <div>
  }
}
let scrollToReg = (event, userForm) => {
  event.preventDefault(); // Prevent the default behavior of the link

  let div2 = document.querySelector("#userForm");
  if (div2) {
    div2.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the <div>
  }
}


let formValidation = () => {
  if (userName.value === "") {
    msg.innerHTML = "Fill the required fields";
  } else if (checkExistingUser()) {
    msg.innerHTML = `<h5 class="UserExists">USER ALREADY EXISTS.</h5>`;
  }else {
    msg.innerHTML = `<h5 class="savedDetails">USER DETAILS SAVED.</h5>`;
  }

  msg.style.fontSize = "30px";
  msg.style.width = '300px'
  msg.style.border = '1px solid hsl(39, 100%, 50%)'
  msg.style.boxShadow = "0 3px 10px rgb(255 165 0 / 0.2)"
  msg.style.padding = '1rem'
  msg.style.color = "hsl(216, 12%, 8%)";

  acceptData();
};


//Function to check if the user is existing
let checkExistingUser = () => {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].userName === userName.value &&
      users[i].idNumber === idNumber.value &&
      users[i].country === country.value &&
      users[i].language === language.value
    ) {
      let warning = document.querySelector(".form")
      warning.innerHTML =`
      <div>
      <h2>USER ALREADY EXISTS⚠️</h2>
      <button type="button" class="btn btn-danger" onclick="window.location.href = 'index.html'">Register New user</button>
      </div>`;
      warning.style.display = "flex";
      warning.style.alignItems = "center";
      warning.style.justifyContent = "center";
      warning.style.textAlign = "center";
      warning.style.gap = "2rem";
      return;
    }
  }
  return false;
};

let acceptData = () => {
  if (form.dataset.editIndex) {
    // Update existing user detail if editing
    let editIndex = parseInt(form.dataset.editIndex);
    updateUser(editIndex);
  } else {
  // Create a new user object and add it to the users array if not editting
  let user = {
    userName: userName.value,
    idNumber: idNumber.value,
    country: country.value,
    language: language.value,
  };

  users.push(user); // Add the user to the array

  createUser();
}
};

let createUser = () => {
  // Generate the HTML to display all user details
  let userDetailsHTML = "";
  for (let i = 0; i < users.length; i++) {
    userDetailsHTML += `
      <div class="accountDetails">
        <p><strong>Username:</strong> ${users[i].userName}</p>
        <p><strong>Country:</strong> ${users[i].idNumber}</p>
        <p><strong>ID Number:</strong> ${users[i].country}</p>
        <p><strong>Language:</strong> ${users[i].language}</p>
          <div class="button">
            <button type="button" class="btn btn-success" onclick="editUser(${i})">Edit</button>
            <button type="button" class="btn btn-danger" onclick="deleteUser(${i})">Delete</button>
          </div>
      </div>
    `;
  }

  // Set the HTML of the output element to display all user details
  output.innerHTML = userDetailsHTML;

  output.style.color = "hsl(0, 0%, 100%)";
};


let editUser = (index) => {
  let user = users[index];

  // Populate form fields with existing user details
  userName.value = user.userName;
  idNumber.value = user.idNumber;
  country.value = user.country;
  language.value = user.language;

  // Set the dataset attribute to store the edit index
  form.dataset.editIndex = index;
};

let updateUser = (index) => {
  let user = {
    userName: userName.value,
    idNumber: idNumber.value,
    country: country.value,
    language: language.value,
  };

  users[index] = user;
  createUser();

  // Reset form fields
  userName.value = "";
  idNumber.value = "";
  country.value = "";
  language.value = "";

  // Remove the dataset attribute after updating
  delete form.dataset.editIndex;
};
//Delete function
let deleteUser = (index) => {
  users.splice(index, 1);
  createUser();
};




//EXAMPLE 2{
// Functions for editing and deleting user details
// let editUser = (index) => {
//   let userDiv = output.querySelectorAll("div")[index];
//   let usernameElement = userDiv.querySelector("p:nth-child(1)");
//   let countryElement = userDiv.querySelector("p:nth-child(2)");
//   let idNumberElement = userDiv.querySelector("p:nth-child(3)");
//   let languageElement = userDiv.querySelector("p:nth-child(4)");

//   let newUsername = prompt("Enter new username:");
//   let newCountry = prompt("Enter new country:");
//   let newIdNumber = prompt("Enter new ID number:");
//   let newLanguage = prompt("Enter new language:");

//   usernameElement.innerHTML = `<strong>Username:</strong> ${newUsername}`;
//   countryElement.innerHTML = `<strong>Country:</strong> ${newCountry}`;
//   idNumberElement.innerHTML = `<strong>ID Number:</strong> ${newIdNumber}`;
//   languageElement.innerHTML = `<strong>Language:</strong> ${newLanguage}`;
// };
//}




// EXAMPLE 3{
// let editUser = (index) => {
//   let user = users[index];

//   // Populate form fields with existing user details
//   userName.value = user.userName;
//   idNumber.value = user.idNumber;
//   country.value = user.country;
//   language.value = user.language;

//   // Update form submit event listener to handle editing
//   form.removeEventListener("submit", formValidation);
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     updateUser(index);
//   });
// };

// let updateUser = (index) => {
//   let user = {
//     userName: userName.value,
//     idNumber: idNumber.value,
//     country: country.value,
//     language: language.value,
//   };

//   users[index] = user;
//   createUser();

//   // Reset form fields
//   userName.value = "";
//   idNumber.value = "";
//   country.value = "";
//   language.value = "";

//   // Restore form submit event listener for normal functionality
//   form.removeEventListener("submit", updateUser);
//   form.addEventListener("submit", formValidation);
// };
// }



//METHOD 2{
// Function to add an item
// function addUser(event) {
//   event.preventDefault();
//   let userName = document.querySelector(".userName").value;
//   let idNumber = document.querySelector(".idNumber").value;
//   let country = document.querySelector(".state").value;
//   let language = document.querySelector(".language").value;

//   if (userName && idNumber && country && language) {
//     let userDetail = document.querySelector(".userDetails");

//     userDetail.innerHTML = `
//       <p><strong>Username:</strong> ${userName}</p>
//       <p><strong>Country:</strong> ${idNumber}</p>
//       <p><strong>ID Number:</strong> ${country}</p>
//       <p><strong>Language:</strong> ${language}</p>
//       <button type="button" class="btn btn-success" onclick="editUser()">Edit</button>
//       <button type="button" class="btn btn-danger" onclick="deleteUser()">Delete</button>
//     `;

//     userDetail.style.display = "block";
//     userDetail.style.color = "hsl(0, 0%, 100%)";

//     document.getElementById("userForm").reset();
//   }
// }

// // Function to delete the user and hide the user detail
// function deleteUser() {
//   const userDetail = document.querySelector(".userDetails");
//   userDetail.innerHTML = "";
//   userDetail.style.display = "none";
// }

// // Add event listener to the form
// document.getElementById("userForm").addEventListener("submit", addUser);
//}