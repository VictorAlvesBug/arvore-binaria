export default function createArvoreBinaria(lista = null){
    const arvoreBinaria = {};

    arvoreBinaria.valor = undefined;
    arvoreBinaria.esquerda = undefined;
    arvoreBinaria.direita = undefined;

    arvoreBinaria.adicionar = (elemento) => {
        if(arvoreBinaria.valor){
            if(elemento < arvoreBinaria.valor){
                if(!arvoreBinaria.esquerda){
                    arvoreBinaria.esquerda = createArvoreBinaria();
                }
                arvoreBinaria.esquerda.adicionar(elemento);
            }
            else{
                if(!arvoreBinaria.direita){
                    arvoreBinaria.direita = createArvoreBinaria();
                }
                arvoreBinaria.direita.adicionar(elemento);
            }
        }
        else{
            arvoreBinaria.valor = elemento
        }
    };
    
    lista && lista.forEach(elemento => arvoreBinaria.adicionar(elemento));

    arvoreBinaria.exibir = () => {
        arvoreBinaria.esquerda?.exibir();
        arvoreBinaria.valor && console.log(arvoreBinaria.valor);
        arvoreBinaria.direita?.exibir();
    };

    arvoreBinaria.inverter = () => {
        arvoreBinaria.esquerda?.inverter();
        const esquerda = arvoreBinaria.esquerda;
        arvoreBinaria.direita?.inverter();
        const direita = arvoreBinaria.direita;

        arvoreBinaria.esquerda = direita;
        arvoreBinaria.direita = esquerda;
    };

    arvoreBinaria.buscar = (elemento) => {
        if(arvoreBinaria.valor === elemento){
            return console.log(`Encontrou: ${arvoreBinaria.valor}`)
        }

        if(elemento < arvoreBinaria.valor){
            if(arvoreBinaria.esquerda){
                console.log("Visitou nó da esquerda");
                return arvoreBinaria.esquerda.buscar(elemento);
            }
        }

        if(elemento > arvoreBinaria.valor){
            if(arvoreBinaria.direita){
                console.log("Visitou nó da direita");
                return arvoreBinaria.direita.buscar(elemento);
            }
        }

        console.log(`Não encontrou: ${elemento}`);
    };

    return arvoreBinaria;
}