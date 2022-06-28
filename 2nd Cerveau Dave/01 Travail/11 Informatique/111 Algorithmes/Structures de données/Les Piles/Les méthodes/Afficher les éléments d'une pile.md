

up::[[Les Piles]]

## Afficher les éléments d'une pile

---

Pour afficher les éléments dans une pile on va encore une fois utiliser la logique de *2 piles* et pendant le passage des éléments de la 1ère à la 2nd pile on va afficher l'élément actuel. Bien sur on pourrait faire différement par exemple en retournant une *liste* ou un *tuple* des éléments

### Pseudo code de la méthode

```
fonction afficher(pile):
	pile2 = Pile()
	tant que pile n'est pas vide:
		x = depiler pile
		afficher x
		empiler x dans pile2
	tant que pile2 n'est pas vide:
		empiler dans pile le dépilage de pile2
```

### Intégraton dans des langages

[[Afficher les éléments d'une pile en Python]]

---
### Liens :

[[Les Piles]]

---

Date: 16-06-2022