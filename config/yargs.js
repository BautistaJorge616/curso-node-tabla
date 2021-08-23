const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar que se genera'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default:'false',
        describe: 'Muestra por consola la tabla generada'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el limite hasta el que se va a llegar'
    })
    .check((argv, options) => {
    //Verificamos que la base sea un número
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número :(';
    }

    if(isNaN(argv.h)){
        throw 'El limite tiene que ser un número :(';
    }

    //Verificación completa
        return true;
    })
    .argv;

module.exports = argv;