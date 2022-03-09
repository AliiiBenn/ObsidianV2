tags : 
links : [[JavaScript]], [[Les structures de données]], [[Piles]]

****

<h2 style="text-align: center;"> Créer une pile en JavaScript </h2>

****


```javascript
class Pile { 
	constructor() {
		this.pile = [] 
	}
	push(e) {
 		this.pile.push(e)
	}
	pop() {
		return this.pile.pop()
	}
	is_empty() {
	    return this.pile.length === 0
	}

}
```