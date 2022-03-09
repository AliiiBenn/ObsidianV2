tags : 
links : [[Les arbres binaires de recherche]], [[Les arbres et les arbres binaires]], [[La récursivité]], [[Python]]

****

<h2 style="text-align: center;"> Verifier si un arbre est bien un arbre binaire de recherche </h2>

****


```python
def verifier(self):
	def verif_noeud(n, mini, maxi):
		g = d = mini < n.v < maxi

		if n.d is not None:
			d = verif_noeud(n.d, n.v, maxi) and n.d.v > n.v
		if n.g is not None:
			g = verif_noeud(n.g, mini, n.v) and n.g.v < n.v
		return g and d

	return verif_noeud(self.racine, mini = float("-inf"), maxi = float("inf"))
```