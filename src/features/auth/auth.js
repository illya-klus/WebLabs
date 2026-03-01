export const initAuth = () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      alert('🟢 Логін успішний (заглушка)');
      localStorage.setItem('isAuth', 'true');

      window.location.hash = '#products';
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      alert('🟢 Реєстрація успішна (заглушка)');
      window.location.hash = '#login';
    });
  }
};