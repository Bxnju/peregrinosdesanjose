import { apiUrl } from '../querys/loadIntentions.js';

document.addEventListener('DOMContentLoaded', function () {

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const values = data.values;
            let nuevosRegistros = [];

            for (let i = 1; i < values.length; i++) {
                const row = values[i];
                nuevosRegistros.push({ nombre: row[1], pais: row[2], intencion: row[3] });
            }

            // Obtein the query string from the URL
            const cadenaQuery = window.location.search;

            // Create a URLSearchParams object
            const parametrosURL = new URLSearchParams(cadenaQuery);

            // Get the value of the intention parameter
            const numeroIntencion = parametrosURL.get('intention');
            let intencionSeleccionada = nuevosRegistros[numeroIntencion];

            const intencionContainer = document.getElementById('intencion');

            const newCard = document.createElement('div');
            newCard.classList.add('card');

            const title = document.createElement('div');
            title.classList.add('card-title');
            title.textContent = `Intención número ${1 + parseInt(numeroIntencion)}`;
            newCard.appendChild(title);

            const body = document.createElement('div');
            body.classList.add('card-body');
            body.textContent = `${intencionSeleccionada.intencion}`;
            newCard.appendChild(body);

            const footer = document.createElement('div');
            footer.classList.add('card-footer');
            footer.textContent = `Intención por ${intencionSeleccionada.nombre.length > 0 ? intencionSeleccionada.nombre : "Anonimo"} desde ${intencionSeleccionada.pais.length > 0 ? intencionSeleccionada.pais : "algún lugar"}`;
            newCard.appendChild(footer);

            intencionContainer.appendChild(newCard);


        })
        .catch(error => console.error('Error:', error));
});
