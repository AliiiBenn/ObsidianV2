

Up : [[MOC Informatique]]

## Les piles

---


### Qu'est-ce qu'une pile

*Une pile* est un structure de données linéaire suivant la règle **LIFO** (“**L**ast-**I**n **F**irst-**O**ut”) : l’élément inséré en dernier est le premier à sortir. 

#### Les méthodes d'une pile

A vrai dire il n'y a que *deux méthode disponible* dans une pile mais on peut en rajouter une troisième :

- On peut ajouter un élément dans la pile, on dit qu'on pousse un élément dans la pile (push)
- On peut supprimer un élément dans la pile, on dit ici qu'on dépile la pile d'un élément (pop)
- On peut regarder si la pile est vide

Bien sur on peut ajouter des méthodes/fonctions supplémentaire à notre pile mais elle ne seront pas des méthodes principales, il y a par exemple une méthode qui permet de retourner un pile à l'aide de deux autres piles.

### Créer une pile

Pour créer une pile on peut suivre le pseudo code ci dessous

```
class Pile
	constructeur
		liste vide qui va contenir les éléments
```
 
On va donc créer une nouvelle classe qui ne prend aucun argument mais qui aura un attribut de type liste de préférence qui va contenir les éléments de notre pile. Le code ci dessous nous montre comment créer une pile en langage [[Python]] :

```python
class Pile:
	def __init__(self):
		self.liste = []
```

