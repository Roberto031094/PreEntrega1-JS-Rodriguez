let continuar = true;

while (continuar) {
    let genero = prompt("Escribe el género de tu personaje");
    const regexGenero = /^[a-zA-Z\s]+$/;

    while (genero === "" || !regexGenero.test(genero) || genero === null) {
        if (genero === "" || genero === null) {
            alert("No has ingresado ningún género");
        } else if (!isNaN(genero)) {
            alert("Error. Género no válido. Debes ingresar solo letras y espacios");
        } else {
            alert("Error. Género no válido. Debes ingresar solo letras y espacios");
        }

        genero = prompt("Escribe el género de tu personaje");
    }

    console.log(genero);
    alert("Tu personaje es del género " + genero);

    let clase = prompt("Escribe la clase de tu personaje: Puedes elegir entre caballero, arquero y hechicero.");

    while (clase !== null && clase.toLowerCase() !== "caballero" && clase.toLowerCase() !== "arquero" && clase.toLowerCase() !== "hechicero") {
        if (clase === null) {
            alert("No has elegido una clase.");
        } else {
            alert("No elegiste una clase válida.");
        }
        clase = prompt("Escribe la clase de tu personaje: Puedes elegir entre caballero, arquero y hechicero");
    }

    if (clase !== null) {
        clase = clase.toLowerCase();
        switch (clase) {
            case "caballero":
                alert("Has elegido ser un Caballero");
                break;
            case "arquero":
                alert("Has elegido ser un Arquero");
                break;
            case "hechicero":
                alert("Has elegido ser un Hechicero");
                break;
            default:
                alert("Error.");
                break;
        }
        console.log(clase);

        function obtenerNombre(genero, clase) {
            let nombre = prompt("Escribe el nombre de tu personaje");
            const regexNombre = /^[a-zA-Z\s]+$/;

            while (nombre === "" || !regexNombre.test(nombre)) {
                if (nombre === "") {
                    alert("Error. No has escrito un nombre");
                } else if (!regexNombre.test(nombre)) {
                    alert("Error. Nombre no válido. Debes ingresar solo letras y espacios");
                }

                nombre = prompt("Escribe el nombre de tu personaje");
            }

            console.log(nombre);
            alert("El nombre de tu personaje es " + nombre);
            let perfil = "Tu personaje es del género " + genero + ", de la clase " + clase + ", y su nombre es " + nombre + ". Ya estás listo para la aventura.";
            alert(perfil);
        }

        obtenerNombre(genero, clase);

        let continuarRespuesta = prompt("¿Deseas volver a crear a tu personaje? Escriba 'si' para aceptar, cualquier otra cosa para no.");
        continuar = continuarRespuesta.toLowerCase() === 'si';
    } else {
        alert("No has elegido una clase.");
    }
}