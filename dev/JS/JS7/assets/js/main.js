import { handleCategoryChange } from './handlers.js';

// Ajout d'un écouteur d'événement sur le select
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('categorySelect').addEventListener('change', handleCategoryChange);
});
