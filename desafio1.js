class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        (this.nombre = nombre),
            (this.apellido = apellido),
            (this.libros = libros || []),
            (this.mascotas = mascotas || []);
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor });
    }

    getBookNames() {
        return this.libros.map(({ nombre }) => nombre).join(", ");
    }
}

let usuario = new Usuario("Pepe", "Argento");

console.log(`Usuario: ${usuario.getFullName()}`);

usuario.addMascota("Elefante");
usuario.addMascota("Jirafa");
console.log(`Cantidad de mascotas: ${usuario.countMascotas()}`);

usuario.addBook("Pinocho", "Geppetto");
usuario.addBook("La Biblia", "Dios");
console.log(`Los nombres de los libros son: ${usuario.getBookNames()}`);
