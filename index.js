const bandera = 1;

while(bandera == 1){
    console.log('Bienvenido al menú de Arte en Código ASCII \r\n Opción 1: Perro \r\n Opción 2: Gato \r\n Opción 3: Mariposa \r\n Opción 4: Salir');
    let opcion = prompt("Ingresa el número de tu elección");


    switch (opcion) {
        case '1':
            console.log( "        .-\"-.\r\n       \/|6 6|\\\r\n      {\/(_0_)\\}\r\n       _\/ ^ \\_\r\n      (\/ \/^\\ \\)-\'\r\n       \"\"\' \'\"\"");
            break;
        case '2':
            console.log("           \/\\_____\/\\\r\n          \/  o   o  \\\r\n         ( ==  ^  == )\r\n          )         (\r\n         (           )\r\n        ( (  )   (  ) )\r\n       (__(__)___(__)__)");
            break;
        case '3':
            console.log("     __     __\r\n   { ~  \\,\/  ~ }     \r\n    \\_~_ | _~_\/       \r\n    ( _\/ \' \\_ )  ")
            break;
        case '4':
                bandera =0;
            break;
        default:
            console.log("Opción NO válida");
            break;
    }
}
