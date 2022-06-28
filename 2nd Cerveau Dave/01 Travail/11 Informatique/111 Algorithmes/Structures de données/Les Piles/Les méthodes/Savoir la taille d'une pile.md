

up::[[Les Piles]]

## Savoir la taille d'une pile

---

Pour connaitre la taille d'une pile on doit utiliser *2 piles*. On va envoyer tous les éléments de la 1ère pile dans la seconde et à chaque élément on va augmenter de 1 une variable taille de base sur 0. Une fois que la 1ère pile est vide on renvoie les éléments de la 2nd pile dans la 1ère et on retourne la taille. L'utilisation de deux piles permet de retrouver la pile de base.

### Pseudo code de la méthode

```
fonction taille(pile):
	pile2 = Pile()
	taille_pile = 0

	tant que pile n'est pas vide:
		taille_pile += 1
		empiler dans pile2 le dépilage de pile

	tant que pile2 n'est pas vide:
		empiler dans pile2 le dépilage de pile

	retourner taille_pile
```

### Intégration dans des langages

[[Savoir la taille d'une pile en Python]]


---
### Liens :

[[Les Piles]]

---

Date: 16-06-2022