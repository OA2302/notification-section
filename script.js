function markAllAsRead() {
    // Get all of the notification elements
    const notifications = document.querySelectorAll('.notificationss');
  
    // Loop through the notifications and mark them as read
    for (const notification of notifications) {
      notification.classList.add('read');
    }
  
    // Update the button text
    const button = document.querySelector('.btn');
    button.innerHTML = '0';
    //style 
   const background = document.querySelector("#notification");
   style.background = "white";
  }
  
  // Add an event listener to the h5 element
  document.querySelector('.h5').addEventListener('click', markAllAsRead);