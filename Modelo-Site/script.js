// Mock database for simplicity
const users = [];

// Admin credentials
const adminCredentials = { username: "admin", password: "password" };

document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.getElementById('registration-form');
  const loginForm = document.getElementById('login-form');
  const adminActions = document.getElementById('admin-actions');
  const participantList = document.getElementById('participant-list');
  const drawWinnerButton = document.getElementById('draw-winner');
  const winnerDisplay = document.getElementById('winner');

  // Handle user registration
  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const instagram = document.getElementById('instagram').value;
      users.push({ email, phone, instagram });
      alert('Cadastro realizado com sucesso!');
      registrationForm.reset();
    });
  }

  // Handle admin login
  if (loginForm) {
    document.getElementById('login-button').addEventListener('click', () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === adminCredentials.username && password === adminCredentials.password) {
        loginForm.style.display = 'none';
        adminActions.style.display = 'block';
        displayParticipants();
      } else {
        alert('Credenciais inválidas');
      }
    });
  }

  // Display participants
  function displayParticipants() {
    participantList.innerHTML = ''; // Clear the list
    if (users.length === 0) {
      participantList.innerHTML = '<li>Nenhum participante cadastrado.</li>';
    } else {
      users.forEach((user, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. Email: ${user.email}, Telefone: ${user.phone}, Instagram: ${user.instagram}`;
        participantList.appendChild(listItem);
      });
    }
  }

  // Handle drawing a winner
  drawWinnerButton.addEventListener('click', () => {
    if (users.length === 0) {
      winnerDisplay.innerText = 'Nenhum participante cadastrado.';
    } else {
      const winner = users[Math.floor(Math.random() * users.length)];
      winnerDisplay.innerText = `Vencedor: ${winner.email}, ${winner.phone}, ${winner.instagram}`;
    }
  });
});
