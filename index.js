// Function to add an item
function addUser(event) {
  event.preventDefault();
  
  let userName = document.querySelector(".userName").value;
  let idNumber = document.querySelector(".idNumber").value;
  let country = document.querySelector(".state").value;
  let language = document.querySelector(".language").value;
  
  if (userName && idNumber && country && language) {
    let userDetail = document.querySelector(".userDetails");
    
    userDetail.innerHTML = `
      <p><strong>Username:</strong> ${userName}</p>
      <p><strong>Country:</strong> ${idNumber}</p>
      <p><strong>ID Number:</strong> ${country}</p>
      <p><strong>Language:</strong> ${language}</p>
      <button onclick="editUser()">Edit</button>
      <button onclick="deleteUser()">Delete</button>
    `;
    
    userDetail.style.display = "block";
    userDetail.style.color = "hsl(0, 0%, 100%)";
    
    document.getElementById("userForm").reset();
  }
}

// Function to delete the user and hide the user detail
function deleteUser() {
    const userDetail = document.querySelector(".userDetails");
    userDetail.innerHTML = "";
    userDetail.style.display = "none";
  }
  
  // Add event listener to the form
  document.getElementById("userForm").addEventListener("submit", addUser);
