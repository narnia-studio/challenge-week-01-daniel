# Challenge - Week 01

<details>
    <summary>Desafio (pt-BR) </summary>
    Dado um array de objetos do tipo pessoa e um número para a quantidade de pedaços que uma torta pode ser dividida, retorne o número de tortas que precisam ser compradas para alimentar essas pessoas.

    Formato do objeto tipo, caso queira utilizar Typescript

    ```ts
    interface Pessoa {
    name: string;
    num: number; // número de tortas que a pessoa deseja comer
    }
    ```

    Teste para verificar se sua aplicação está funcionando corretamente

    ```js
    arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
    mmmPie(arr, 8)
    // console.log(mmmPie(arr, 8)) // resultado = 2 -> 16 pedaços necessários, tortas podem ser divididas em 8 pedaços, logo 2 tortas devem ser compradas

    ```

</details>

<details>
    <summary>Challenge (en) </summary>
    Given an array of people objects (where each person has a name and a number of pie slices they’re hungry for) and a number for the number of slices that the pie can be cut into, return the number of pies you need to buy.

    ```ts
    interface Person {
        name: string;
        num: number; // number of pie pieces they’re hungry for
    }
    ```

    Test

    ```js
    arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
    mmmPie(arr, 8)
    console.log(mmmPie(arr, 8)) // result = 2 -> 16 pieces needed, pies can be cut into 8 pieces, so 2 pies should be bought

    ```

</details>

Question source:
[rendezvous with cassidoo]('https://buttondown.email/cassidoo/archive/8309/')
