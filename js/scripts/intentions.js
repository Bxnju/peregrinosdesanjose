import { apiUrl } from '../querys/loadIntentions.js';

document.addEventListener('DOMContentLoaded', function () {

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const values = data.values;
            const cardContainer = document.getElementById('card-container');
            let nuevosRegistros = [];

            for (let i = values.length - 1; i > 0; i--) {
                const row = values[i];
                nuevosRegistros.push({ nombre: row[1], pais: row[2], intencion: row[3] });
            }

            var contador_intencion = nuevosRegistros.length + 1;

            nuevosRegistros.forEach(record => {
                contador_intencion--;

                let linkCard = document.createElement('a');
                linkCard.setAttribute('href', `seeIntention.html?intention=${contador_intencion - 1}`)

                let aux_intencion = record.intencion.length > 160 ? record.intencion.substring(0, 160) + '...' : record.intencion;
                aux_intencion = aux_intencion.charAt(0).toUpperCase() + aux_intencion.slice(1);

                const newCard = document.createElement('div');
                newCard.classList.add('card');

                const title = document.createElement('div');
                title.classList.add('card-title');
                title.textContent = `Intención número ${contador_intencion}`;
                newCard.appendChild(title);

                const body = document.createElement('div');
                body.classList.add('card-body');
                body.textContent = `${aux_intencion}`;
                newCard.appendChild(body);

                const footer = document.createElement('div');
                footer.classList.add('card-footer');
                footer.textContent = `Intención por ${record.nombre} desde ${record.pais}`;
                newCard.appendChild(footer);

                linkCard.appendChild(newCard);

                cardContainer.appendChild(linkCard);
            });
        })
        .catch(error => console.error('Error:', error));

});
