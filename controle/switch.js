const imprimirResultado =  function (nota) {
    // Math.floor -> aredenda para baixo
    switch (Math.floor(nota)) {         
        case 10: // se 10 ou 9 console.log('Quadro de Honra')     
        case 9:
            console.log('Quadro de Honra')
            break // para o case não execta o case abaixo de houver
        case 8: case 7:
            console.log('Aprovado')    
            break
        case 6: case 5: case 4:
            console.log('Recuperação')    
            break
        case 3: case 2: case 1: case 0: // Não funciona com virgula exemplo case 3,2,1,0
            console.log('Reprovado')    
            break
        default:
            console.log('Nota Inválida')    


    }
}

imprimirResultado(10)