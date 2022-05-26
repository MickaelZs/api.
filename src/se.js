export function dobro (n){
    return n * 2;
}

export function soma (a,b){
    return a + b;
}

export function tabuada (a,b){
    return a * b;
}

export function febre (temperatura){
    let f = temperatura >= 37;
    return f;
}

export function corprimaria (cor){
    cor = cor.toLowerCase();
    return cor == 'azul' || cor == 'amarelo' || cor == 'vermelho'}


export function sequencia (texto, Caracter){
    let quantidade = 0;
    for (let item of texto){
        if (item == Caracter)
        quantidade++
    }
    return quantidade;
}

export function MaiorNumero (numeros){
    let maior = Number.MIN_VALUE;
    for (let item of numeros){
        if (item > maior)
        maior = item;
    }

    return maior;

}

export function ingressoCinema (meia, inteira, diasemana,nacionalidade){

    let b = meia * 14.25;
    let c = inteira * 28.5;

    if(diasemana == "quarta"){
        c = inteira * 14.25;
    }

    if(nacionalidade == "brasileiro") {
        b = meia * 5;
        c = inteira * 5;
    }

    let a = b + c;
    return a;

}