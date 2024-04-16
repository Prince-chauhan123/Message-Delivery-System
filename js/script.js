document.getElementById('submitBtn').addEventListener('click', function() {
    const message = document.getElementById('messageInput').value.trim();
    if (message === '') {
        document.getElementById('lastMessage').textContent = 'Enter the input, please';
    } else {
        document.getElementById('lastMessage').textContent = message;
    }
  });
  
  document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('messageInput').value = ''; 
    document.getElementById('lastMessage').textContent = ''; 
  });