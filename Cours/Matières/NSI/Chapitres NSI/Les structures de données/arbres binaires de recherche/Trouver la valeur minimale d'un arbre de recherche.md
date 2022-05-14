tags : 
links : [[Les arbres binaires de recherche]], [[Les arbres et les arbres binaires]], [[Informatique/Les langages/Python/Python]]

****

<h2 style="text-align: center;"> Trouver la valeur minimale d'un arbre de recherche </h2>

****


```python
def min(self):
	def m(n):
		while n.g is not None:
			return m(n.g)
		return n
	return m(self.racine)
```