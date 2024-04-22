
const auth = getAuth();
const loggedOutBtns = document.querySelectorAll('.logged-out');
const loggedInBtns = document.querySelectorAll('.logged-in');

getAuth.onAuthStateChanged(user => {
    if (user) {
      loggedInBtns.forEach(link => link.style.display = 'block');
      loggedOutBtns.forEach(link => link.style.display = 'none');
  
      // We can add more functions here to display the data that can be made available to a logged in user
  
    } else {
      loggedInBtns.forEach(link => link.style.display = 'none');
      loggedOutBtns.forEach(link => link.style.display = 'block');
    }
  });