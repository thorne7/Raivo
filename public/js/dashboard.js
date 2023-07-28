document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/users/dashboard');
      if (response.ok) {
        const data = await response.json();
  
        // Assuming data contains user information
        // Display user information on the dashboard page
        const dashboardContent = document.getElementById('dashboard-content');
        if (dashboardContent) {
          dashboardContent.innerHTML = `
            <h2>Welcome, ${data.username}!</h2>
            <!-- Display other user information as needed -->
          `;
        }
      } else {
        const data = await response.json();
        alert(data.error); // Show the error message returned from the server
      }
    } catch (error) {
      console.error('Error loading dashboard:', error);
      alert('Error loading dashboard. Please try again.');
    }
  });
  