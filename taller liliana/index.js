const fs = require('fs');

// 1. LECTURA: Leemos el archivo CSV [cite: 6]
const data = fs.readFileSync('usuarios.csv', 'utf8');

// 2. PARSING: Convertimos el texto en objetos de JavaScript [cite: 7]
const filas = data.split('\n').filter(fila => fila.trim() !== ''); // Quitamos líneas vacías
const encabezados = filas[0].split(',');

let usuarios = filas.slice(1).map(fila => {
    const valores = fila.split(',');
    return {
        id: valores[0],
        nombre: valores[1],
        edad: parseInt(valores[2]),
        correo: valores[3]
    };
});

// 3. LÓGICA AVANZADA (Iteradores) [cite: 8, 14]
// .filter(): Limpiamos datos corruptos (que no tengan nombre o edad) [cite: 10]
const usuariosLimpios = usuarios.filter(u => u.nombre && !isNaN(u.edad));

// .map(): Normalizamos nombres a Mayúsculas [cite: 12, 13]
const usuariosMaster = usuariosLimpios.map(({nombre, ...resto}) => ({
    nombre: nombre.toUpperCase(),
    ...resto // Spread Operator para mantener inmutabilidad [cite: 28, 30]
}));

// .sort(): Ordenar alfabéticamente por nombre [cite: 14]
usuariosMaster.sort((a, b) => a.nombre.localeCompare(b.nombre));

// 4. SERIALIZACIÓN BINARIA: Guardar copia optimizada [cite: 15, 39]
// Convertimos el objeto a un String y luego a un Buffer (formato binario de Node)
const datosBinarios = Buffer.from(JSON.stringify(usuariosMaster));
fs.writeFileSync('respaldo_usuarios.bin', datosBinarios);
console.log("✅ Respaldo binario creado: respaldo_usuarios.bin");

// 5. VISUALIZACIÓN: Tabla resumen en consola [cite: 16, 42]
console.log("\n--- RESUMEN DE PROCESAMIENTO ---");
console.table(usuariosMaster);

// .reduce(): Panel de estadísticas (Total de registros) [cite: 27, 33]
const totalRegistros = usuariosMaster.reduce((acc) => acc + 1, 0);
console.log(`TOTAL DE REGISTROS PROCESADOS: ${totalRegistros}`);

// Usando .reduce() para contar registros según la guía 
const total = usuarios.reduce((acc) => acc + 1, 0);
document.getElementById('total-registros').innerText = `Total de registros: ${total}`;

function buscarUsuario() {
    const term = document.getElementById('busqueda').value.toUpperCase();
    // Uso de .find() según requerimiento 
    const encontrado = usuarios.find(u => u.nombre.includes(term));
    
    const res = document.getElementById('resultado-busqueda');
    res.innerText = encontrado 
        ? `Resultado: ${encontrado.nombre} tiene ${encontrado.edad} años.` 
        : "Usuario no encontrado.";
}

// tarjetas
const cardsContainer = document.getElementById('cards-container');
cardsContainer.innerHTML = usuarios.map(u => `
    <div class="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
        <h3 class="text-xl font-bold">${u.nombre}</h3>
        <p class="text-gray-600">Edad: ${u.edad}</p>
        <span class="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">Usuario Verificado</span>
    </div>
`).join('');