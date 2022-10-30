const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value

    if (DATO > 30){
        ERROR.style.display = 'none';
        let flujoUno = calcMayor(DATO);
        let mantenimiento = (flujoUno*1500/24).toFixed(2);
        let mantenimientoDos = (flujoUno*2000/24).toFixed(2);
        FLU.innerHTML = 'Mant. 1500:  ' + mantenimiento + ' cc/hr';
        MAN.innerHTML = 'Mant. 2000:  ' + mantenimientoDos + '  cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }

    if (DATO <= 30){
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2:  ' + mantenimiento + '  cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        
    } if (DATO <= 0) {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }

    
})
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;

    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}
function calcMayor(peso){
    let restoDos = peso;
    let flujoUno = 0;

   if (restoDos>30){
        let auxDos = ((restoDos*4)+7);
        let auxTres = ((restoDos*1)+90);
        let auxCuatro = (auxDos/auxTres);
     flujoUno += auxCuatro*1;
    }
    return flujoUno;
}
