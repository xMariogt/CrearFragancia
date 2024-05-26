function AgregarIngrediente(ingrediente) {
    const lista = document.getElementById('ingredientes-seleccionados');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = ingrediente;
    lista.appendChild(nuevoElemento);

    // Persist ingredient data in local storage
    const ingredientesSeleccionados = localStorage.getItem('ingredientesSeleccionados') || [];
    ingredientesSeleccionados.push(ingrediente);
    localStorage.setItem('ingredientesSeleccionados', JSON.stringify(ingredientesSeleccionados));
}

function CargarIngredientesSeleccionados() {
    const ingredientesData = localStorage.getItem('ingredientesSeleccionados');
    let ingredientesSeleccionados = [];

    // Attempt to parse JSON data (if it exists)
    if (ingredientesData) {
        try {
            ingredientesSeleccionados = JSON.parse(ingredientesData);
        } catch (error) {
            console.error('Error parsing ingredientesSeleccionados data:', error);
        }
    }

    const lista = document.getElementById('ingredientes-seleccionados');
    lista.innerHTML = ''; // Clear existing list items

    ingredientesSeleccionados.forEach(ingrediente => {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = ingrediente;
        lista.appendChild(nuevoElemento);
    });
}


window.addEventListener('load', CargarIngredientesSeleccionados);
