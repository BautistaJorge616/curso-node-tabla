const fs = require('fs');
const colors = require('colors');

//Si no me manda nada se toma el 5
const crearArchivo = (base = 5, listar, hasta ) => {

    return new Promise((resolve, reject) => {
      
        let salida = '';
    
        for (let index = 0; index < hasta; index++) {
            salida += `${base} ${'X'} ${index + 1} ${'='} ${base * (index + 1)}\n`;
        }

        //Saber si lo vamos a listar
        if(listar == true){
            console.log(colors.rainbow('======================='));
            console.log(colors.bold.green('    Tabla del:'), colors.bold.green(base));
            console.log(colors.rainbow('======================='));
            console.log(salida);

        }
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );

       resolve(`tabla-${base}.txt`);
    });

}

//Exportar mi función
module.exports ={
    crearArchivo 
}


