tags : 
links : [[Les arbres binaires de recherche]], [[Les arbres et les arbres binaires]], [[Python]]

****

<h2 style="text-align: center;"> Trouver la valeur maximale d'un arbre de recherche </h2>

****


```python
def max(self):
	def m(n):
		while n.d is not None:
			return m(n.d)
		return n
	return m(self.racine)
```