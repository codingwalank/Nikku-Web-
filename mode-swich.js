// Attend que le contenu du document soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne l'input de basculement du mode sombre et son conteneur
  const toggleInput = document.getElementById('dark-mode-toggle');
  const toggleContainer = document.querySelector('.toggle-container');

  // Charger le thème initial à partir du localStorage ou par défaut à 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(currentTheme + '-mode');

  // Si le thème actuel est sombre, coche le toggle et met à jour l'attribut aria-checked
  if (currentTheme === 'dark') {
      toggleInput.checked = true;
      toggleInput.setAttribute('aria-checked', 'true');
  } else {
      toggleInput.setAttribute('aria-checked', 'false');
  }

  // Éviter l'animation au chargement de la page
  setTimeout(() => {
      document.body.classList.add('transition');
  }, 0);

  // Gestion du toggle sur le conteneur : permet de cliquer sur le conteneur pour basculer le mode
  toggleContainer.addEventListener('click', () => {
      // Inverse l'état du toggle
      toggleInput.checked = !toggleInput.checked;
      if (toggleInput.checked) {
          // Passe en mode sombre
          document.body.classList.replace('light-mode', 'dark-mode');
          localStorage.setItem('theme', 'dark');
          toggleInput.setAttribute('aria-checked', 'true');
      } else {
          // Passe en mode clair
          document.body.classList.replace('dark-mode', 'light-mode');
          localStorage.setItem('theme', 'light');
          toggleInput.setAttribute('aria-checked', 'false');
      }
  });

  // Gestion du toggle sur l'input : permet de basculer le mode via le changement d'état de l'input
  toggleInput.addEventListener('change', () => {
      if (toggleInput.checked) {
          // Passe en mode sombre
          document.body.classList.replace('light-mode', 'dark-mode');
          localStorage.setItem('theme', 'dark');
          toggleInput.setAttribute('aria-checked', 'true');
      } else {
          // Passe en mode de mode clair
          document.body.classList.replace('dark-mode', 'light-mode');
          localStorage.setItem('theme', 'light');
          toggleInput.setAttribute('aria-checked', 'false');
      }
  });
});


