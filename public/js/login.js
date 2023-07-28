document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');
  
        // Perform client-side validation if needed
        // ...
  
        try {
          const response = await fetch('/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });
  
          if (response.ok) {
            // Login successful, redirect to dashboard page
            window.location.href = '/dashboard';
          } else {
            const data = await response.json();
            alert(data.error); // Show the error message returned from the server
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert('Error during login. Please try again.');
        }
      });
    }
  });
  