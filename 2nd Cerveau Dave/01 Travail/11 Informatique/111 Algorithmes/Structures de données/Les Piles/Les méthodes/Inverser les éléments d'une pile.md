

up::[[Les Piles]]

## Inverser les éléments d'une pile

---

Porur inverser les éléments d'une pile, on va utiliser 3 piles comme  décris ci dessous

![[Drawing 2022-06-17 07.44.02.excalidraw.png|500]]

Une fois que les éléments passeront de la pile 3 à la pile 1 on va répurer les éléments mais insersés

### Pseudo code de la méthode

```
fonction inverser(pile):
	pile2 = Pile()
	pile3 = Pile()

	tant que pile n'est pas vide:
		empiler dans pile2 le dépilage de pile
		
	tant que pile2 n'est pas vide:
		empiler dans pile3 le dépilage de pile2
		
	tant que pile3 n'est pas vide:
		empiler dans pile le dépilage de pile3
```

### Intégration dans des langages

[[Inverser les éléments d'une pile en Python]]

---
### Liens :

[[Les Piles]]

---

Date: 17-06-2022