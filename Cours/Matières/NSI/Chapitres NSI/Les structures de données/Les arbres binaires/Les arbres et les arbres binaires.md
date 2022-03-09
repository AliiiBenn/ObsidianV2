tags : 
links : [[Les structures de données]]

****

<h2 style="text-align: center;"> Les arbres et les arbres binaires </h2>

****


Les **arbres binaires** (**AB**) sont des cas particuliers d’arbres où chaque _nœud_ possède au maximum **deux _fils_**.

![](https://info.blaisepascal.fr/wp-content/uploads/2020/11/drawit-diagram-42.png)


### Les types d'arbres binaires

[[Types d'arbres binaires]]

### Créer un arbre

Pour créer un Arbre nous allons utiliser [[Python]] et définir deux classe

*Une class Arbre et une classe Noeud*

```python
class Arbre:
	def __init__(self, racine = None):
		self.racine = racine # type : Noeud

class Noeud:
	def __init__(self, v, g = None, d = None):
		self.g = g # type Noeud
		self.d = d # type Noeud
		self.v = v
```

Et on implémente un arbre ainsi :  

```python
arbre = Arbre(Noeud("A"))
```


### L'interface d'un arbre binaire

[[Savoir si un noeud est une feuille]]
[[Créer un sous arbre à partir d'un noeud]]
[[Calculer la hauteur d'un arbre]]
[[Calculer la taille d'un arbre]]
[[Calculer le nombre de feuilles d'un arbre]]
[[Les différents parcours d'un arbre]]