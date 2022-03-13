tags : 
links : [[Les structures de données]], [[020 MOC Informatique]], [[NSI]]

****

<h2 style="text-align: center;"> graphes </h2>

****


Un **graphe** est un objet mathématique (très utilisé, notamment en informatique) constitué de **sommets** reliés entre eux par des **arêtes** :

![](https://info.blaisepascal.fr/wp-content/uploads/2021/01/drawit-diagram-105.png "drawit diagram")


### Les différentes notions d'un graphe

[[Graphe orienté]]
[[Graphe non orienté]]
[[Voisinage et adjacence]] 
[[Représentation]]
[[Chemins]]
[[Distance]]
[[Connexité]]

### Créer un graphe

*Il y a deux façons de créer un graphe en [[Python]], avec une [[Matrice d'adjacence]] ou avec un [[dictionnaire d'adjacence]]*

*Avec une Matrice :*

```python
class Graphe_m:
	""" """
	def __init__(self, n):
		self.n = n
		self.A = [[False] * n for _ in range(n)]
	
	def __repr__(self):
		C = ["\t".join([""]+[str(i) for i in range(self.n)])]
		for l in range(self.n):
			L = [str(l)]
			for c in range(self.n):
				if self.A[l][c]:
					L.append("1")
				else:
					L.append("")
			C.append("\t".join(L))
		return "\n".join(C)
```

*Et avec un dictionnaire*

```python
class Graphe_d:
	def __init__(self):
		self.A = {}

	def __repr__(self):
		return str(self.A)

	def voisins(self, x):
		return self.A[x]
```