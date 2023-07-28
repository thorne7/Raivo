document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
  
    if (registerForm) {
      registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const formData = new FormData(registerForm);
        const username = formData.get('username');
        const password = formData.get('password');
  
        // Perform client-side validation if needed
        // ...
  
        try {
          const response = await fetch('/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });
  
          if (response.ok) {
            // Registration successful, redirect to login page
            window.location.href = '/users/login';
          } else {
            const data = await response.json();
            alert(data.error); // Show the error message returned from the server
          }
        } catch (error) {
          console.error('Error during registration:', error);
          alert('Error during registration. Please try again.');
        }
      });
    }
  });
  