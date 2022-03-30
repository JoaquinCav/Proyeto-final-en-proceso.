
function top10(){   

    const array = [];
    
    document.getElementById("botonTop10").style.display = "none";
    mostrarContenido();
    
    
    function Pelicula(titulo, Calificación){  //Funcion constructora.

        this.Titulo = titulo;
        this.calificacion = Calificación;
    
    }
    

    const Pelicula1 = new Pelicula("One piece: Red.", "10/10");  //Armando las peliculas.
    array.push(Pelicula1);


    /********************************************************************/

    const Pelicula2 = new Pelicula("Shawshank Redemption.", "10/10");
    array.push(Pelicula2);

    /********************************************************************/

    const Pelicula3 = new Pelicula("Destino Final 4", "7/10");
    array.push(Pelicula3);

    /********************************************************************/
    
    const Pelicula4 = new Pelicula("Harry Potter.", "9/10");
    array.push(Pelicula4);

    /********************************************************************/

    const Pelicula5 = new Pelicula("Star Wars.", "8/10");
    array.push(Pelicula5);

    /********************************************************************/

    const Pelicula6 = new Pelicula("Demon Slayer: The movie.", "10/10");
    array.push(Pelicula6);

    /********************************************************************/

    const Pelicula7 = new Pelicula("El padrino: Parte 3", "8.5/10");
    array.push(Pelicula7);

    /********************************************************************/

    const Pelicula8 = new Pelicula("El club de la pelea.", "10/10");
    array.push(Pelicula8);

    /********************************************************************/

    const Pelicula9 = new Pelicula("El lobo de Wall Street", "10/10");
    array.push(Pelicula9);

    /********************************************************************/

    const Pelicula10 = new Pelicula("Rocky 3", "8/10");
    array.push(Pelicula10);

    /********************************************************************/


    const fragmento1 = document.createDocumentFragment();
    const lista = document.querySelector(".listaOrdenada");

    for (let i = 0; i < array.length; i++) {  //Mostrando el top 10 en la pantalla.
        
        
        const item = document.createElement("LI");
        item.innerHTML = JSON.stringify(array[i]);
        fragmento1.appendChild(item);
        
    }
    lista.appendChild(fragmento1);
    
    
}

function mostrarContenido() {
    document.getElementById("contenedorTop10").style.display = "block"; /*Accedo al css mediante "Style", y luego a una parte especifica del css mediante (en este caso) .display = nuevo valor.*/
}



