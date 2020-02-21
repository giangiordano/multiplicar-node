const colors = require('colors');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            defaut: 10,
            alias: 'l'
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar');

switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.limite, argv.base).then(respuesta => {
            console.log(`Se ha creado la tabla ${ respuesta }`);
        });
        break;

    case 'crear':
        crearArchivo(argv.base).then(archivo => {
            console.log(`Archivo Creado: ${colors.green(archivo)}`);
        });
        break;

    default:
        console.log('Comando no encontrado');
        break;
}