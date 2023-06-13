# Challenge - Week 01

<details style="font-size: 1.2rem;" open>
<summary>Challenge (en)</summary>
<div>
<p>
Given an array of people objects (where each person has a name and a number of pie pieces they’re hungry for) and a  number for the number of pieces that the pie can be cut into, return the number of pies you need to buy.
</p>
  
  
```ts
interface Person {
name: string;
num: number; // number of pie pieces they’re hungry for
} 
```

<p>
Test
</p>

```js
arr = [
	{ name: Joe, num: 9 },
	{ name: Cami, num: 3 },
	{ name: Cassidy, num: 4 },
];
mmmPie(arr, 8);
console.log(mmmPie(arr, 8));
// 2 -> 16 pieces needed, pies can be cut into 8 pieces, so 2 pies should be bought
```

</div>
</details>

<br>

<details style="font-size: 1.2rem;">
<summary>Desafio (pt-BR) </summary>
<div>
<p>
Dado um array de objetos do tipo pessoa e um número para a quantidade de pedaços que uma torta pode ser dividida, retorne o número de tortas que precisam ser compradas para alimentar essas pessoas.
</p>
<p style="font-weight: bold;">
Formato do objeto tipo, caso queira utilizar Typescript
</p>

```ts
interface Pessoa {
	name: string;
	num: number; // número de tortas que a pessoa deseja comer
}
```

<p>
Teste para verificar se sua aplicação está funcionando corretamente
</p>

```js
arr = [
	{ name: Joe, num: 9 },
	{ name: Cami, num: 3 },
	{ name: Cassidy, num: 4 },
];
mmmPie(arr, 8);
console.log(mmmPie(arr, 8));
// 2 -> 16 pedaços necessários, tortas podem ser divididas em 8 pedaços, logo 2 tortas devem ser compradas
```

</div>
</details>

<p>

**Question source:**
[rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/8309/)

</p>
