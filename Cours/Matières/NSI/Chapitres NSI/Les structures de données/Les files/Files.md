tags : 
links : [[Les structures de données]], [[020 MOC Informatique]], [[NSI]]

****

<h2 style="text-align: center;"> Files </h2>

****


 ### C'est quoi une file ?

Une **File** (ou _Queue_) est une structure de données linéaire dans laquelle les éléments sont accessibles selon une discipline **FIFO** (“**F**irst-**I**n **F**irst-**O**ut”) : le premier élément inséré dans la liste est le premier à en sortir.

-   Insérer un élément dans la file est appelé **enfiler** (**_enqueue_**)
-   Supprimer un élément de la file est appelé **défiler** (_**dequeue**_)

![](https://info.blaisepascal.fr/wp-content/uploads/2020/07/drawit-diagram-41.png "drawit diagram")

L’accès aux objets de la file se fait grâce à deux pointeurs, l’un pointant sur l’élément qui a été inséré en premier et l’autre pointant sur celui inséré en dernier.


### Créer une file :

Ici aussi il y a deux façon de créer une file en [[Informatique/Les langages/Python/Python]], avec une [[Listes chaînées]] ou avec une [[Piles]],

*Avec une liste chaînée :*

```python
class File():
	def __init__(self):
		self._file = ListeC()
```

*et avec une pile :*

```python
class FilePile():
	def __init__(self):
		self.entree = Pile()
		self.sortie = Pile()
```


### Les méthodes d'une File

Ici nous allons voir les méthodes d'une File avec les deux types de Files vu au dessus,

[[Enfiler un élément avec une LC]]
[[Défiler un élément avec un LC]]

[[Enfiler un élément avec une Pile]]
[[Défiler un élément avec une Pile]]