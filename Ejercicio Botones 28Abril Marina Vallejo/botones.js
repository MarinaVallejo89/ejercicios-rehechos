// Creamos un index.html que contenga:
// - Section (1) , article (1), h2(1)
// - 3 botones (1 para añadir, 1 para borrar, 1 para reemplazar)
// Creamos un index.js el cual realice 3 funciones (una por botón), es decir: 
// - Función que cree un article nuevo 
// - Función que reemplace el ÚLTIMO article por otro article con distinto contenido 
// - Función que elimine el ultimo article que haya.
// - Función que coloree el fondo de los párrafos pares.
// - Función que elimine los párrafos sustitutos -->

window.addEventListener('load', events);

let contador = 1;
function events() {
    document.getElementById('anadir').addEventListener('click', () => {
        let para = document.createElement('article');
        let text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis nihil consectetur perspiciatis eos maxime cumque quam accusantium ut officiis ipsam est distinctio, ea animi. Asperiores fugiat nostrum sit quisquam. Temporibus necessitatibus laudantium deserunt facere quas, quam omnis nobis voluptates, qui debitis ipsam mollitia voluptatum eveniet dignissimos enim illum totam itaque repellendus at provident? Omnis mollitia porro tempora voluptas numquam similique reiciendis nemo earum necessitatibus perspiciatis beatae consequuntur nisi, sint eos consequatur quisquam est eveniet iure eaque. Voluptatibus, perspiciatis illo.');
        para.appendChild(text);

        contador++;
        para.setAttribute('id', contador);
        para.setAttribute('class', "parrafo");

        let mysection = document.getElementById('mysection');
        mysection.appendChild(para);
    })

    document.getElementById('reemplazar').addEventListener('click', () => {
        let section = document.getElementById('mysection');
        let original = document.getElementById(contador);
        // el corchete indica que trabaje como si fuera un array:
        let nuevo = document.createElement('article');
        let texto = document.createTextNode('Texto de reemplazo');
        nuevo.setAttribute('id', contador);
        nuevo.setAttribute('class', "parrafo");
        nuevo.appendChild(texto);
        section.replaceChild(nuevo, original);
    })

    document.getElementById('eliminar').addEventListener('click', () => {
        let original = document.getElementById(contador);
        original.remove();
        contador--;
    })

    document.getElementById('colorear').addEventListener('click', () => {
        let parrafos = document.getElementsByClassName('parrafo');
        for (let i = 0; i < parrafos.length; i++) {
            // meter el atributo que quiero que me devuelva, la id:
            if (parrafos[i].getAttribute('id') % 2 == 0) {
                parrafos[i].style.backgroundColor = 'lightpink';
            }
            // else {
            //     parrafos[i].style.backgroundColor = 'white';
            // }
        }
    })

    document.getElementById('reemplazados').addEventListener('click', () => {
        let parrafos = document.getElementsByClassName('parrafo');
        parrafos = [...parrafos];
        let borrado = false;
        for (let i = 0; i < parrafos.length; i++) {
            if (parrafos[i].innerHTML === 'Texto de reemplazo') {
                parrafos[i].remove();
                contador--;
                borrado = true;
            }
        }
        let parrafos2 = document.getElementsByClassName('parrafo');
        // creo OTRO contador:
        if (borrado == true) {
            // una vez borrados los párrafos, hay que volver a cogerlos:
            console.log ('reasignando ids');
            console.log (parrafos2);
            for (let i = 0; i<=contador; i++) {
                parrafos2[i].setAttribute('id', i);
            }
        }
    })
}