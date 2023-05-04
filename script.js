// resultados alert
function start() {

    let result = '';
    let primernumero = +prompt('Escriba un primer número del 1 al 50');
    let segundonumero = +prompt('Escriba un segundo número del 1 al 50');

    if( (typeof primernumero === 'number') && (typeof segundonumero === 'number') && ( primernumero > 0 && primernumero < 51 ) && ( segundonumero > 0 && segundonumero < 51 )) {
       
        // Sumar tots dos números.
        function suma(n1, n2) {
            return n1 + n2
        }

        // Mostrar si tots dos números introduïts són primers, si no ho són mostrar a l'usuari que no són primers tots dos o un.
        function prim(primernumero, segundonumero) {
            if ( primernumero == segundonumero ) {
                if(primernumero % 2 == 0) {
                    result += `El número  ${primernumero}  no és primer \n`;
                    //return "no és primer";
                } else if(primernumero % 1 == 0){
                    result += `El número  ${primernumero}  és primer \n`;
                    //return "és primer";
                }
            } else {
                if(primernumero % 2 == 0) {
                    result += `El número  ${primernumero}  no és primer, `;
                    // return "no és primer";
                } else if(primernumero % 1 == 0){
                    result += `El número  ${primernumero}  és primer, `;
                    // return "és primer";
                }
                if(segundonumero % 2 == 0) {
                    result += `El número  ${segundonumero}  no és primer \n`;
                    // return "no és primer";
                } else if(segundonumero % 1 == 0) {
                    result += `El número  ${segundonumero}  és primer \n`;
                    // return "és primer";
                }
            }
        }

        // Mostrar si tots dos números introduïts són parells, si no ho són, mostrar a l'usuari que no són parells tots dos o un.
        function parell(primernumero, segundonumero) {
            if ( primernumero == segundonumero ) {
                if(primernumero % 2 == 0) {
                    result += `El número  ${primernumero}  és parell \n`;
                    //return "és parell";
                } else {
                    result += `El número  ${primernumero}  no és parell \n`;
                    //return "no és parell";
                }
            } else {
                if(primernumero % 2 == 0) {
                    result += `El número  ${primernumero}  és parell, `;
                    //return "és parell";
                } else {
                    result += `El número  ${primernumero}  no és parell, +`;
                    //return "no és parell";
                }
                if(segundonumero % 2 == 0) {
                    result += `El número  ${segundonumero}  és parell \n`;
                    //return "és parell";
                } else {
                    result += `El número  ${segundonumero}  no és parell \n`;
                    //return "no és parell";
                }
            }
        }
        
        var paresAscendente = [];
        var imparesDescendente = [];
        if(primernumero < segundonumero) {
            //Si el número 1 és menor que el número 2, imprimiu només els nombres parells en el rang entre num1 i num2 en forma ascendent.    
            for (var i = primernumero; i <=segundonumero; i = i + 1) {
                if (i % 2 == 0) {
                    paresAscendente.push(i);
                } else {
                    paresAscendente.push(i);                    
                }
            }
        } else {
            //Si el número 1 és més gran que el número 2, imprimiu només els nombres imparells en el rang entre num1 i num2 en forma descendent.    
            for (var i = primernumero; i >=segundonumero; i = i - 1) {
                if (i % 2 != 0) {
                    imparesDescendente.push(i);                    
                } else {
                    imparesDescendente.push(i);                    
                }
            }
        }    

        result += `La suma és: ${suma(primernumero, segundonumero)}` + '\n';
        suma(primernumero, segundonumero);
        prim(primernumero, segundonumero);
        parell(primernumero, segundonumero);
        result += paresAscendente + '\n'
        result += imparesDescendente + '\n'
        
        alert(result);

    } else {

        alert('Els valors introduïts no son valids.');
        
    }
    
}