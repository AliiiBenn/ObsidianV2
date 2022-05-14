tags : 
links : [[Les structures de données]], [[020 MOC Informatique]], [[NSI]]

****

<h2 style="text-align: center;"> Piles </h2>

****



### C'est quoi une pile ?

Une **Pile** (ou _Stack_) est une structure de données linéaire dans laquelle les éléments sont accessibles selon une discipline **LIFO** (“**L**ast-**I**n **F**irst-**O**ut”) : l’élément inséré en dernier est le premier à sortir.

-   Ajouter un élément dans la pile est appelé **empiler** ou **pousser** (**_push_**)
-   Supprimer un élément de la pile est appelé **dépiler** (_**pop**_)

L’accès aux objets de la pile se fait grâce à un unique pointeur vers le **sommet** de la pile, appelé **_top_**.

### Créer une pile 

On peut créer une pile deux façons en [[Informatique/Les langages/Python/Python]], avec une liste ou avec une [[Listes chaînées]]. Ici nous allons utiliser une LC,

```python
class Pile:
	def __init__(self):
		self.listeC = ListeC()
```

### L'interface d'une pile 

L'interface d'une pile est assez simple car elle composée de seulement 3 méthodes,

[[Savoir si une pile est vide]]
[[Push un élément dans une pile]]
[[Pop un élément dans un pile]]