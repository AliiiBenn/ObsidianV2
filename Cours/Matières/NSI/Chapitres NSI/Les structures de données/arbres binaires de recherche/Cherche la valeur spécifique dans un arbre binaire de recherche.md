tags : 
links : [[Les arbres binaires de recherche]], [[Les arbres et les arbres binaires]], [[Informatique/Les langages/Python/Python]], [[La récursivité]]

****

<h2 style="text-align: center;"> Cherche la valeur spécifique dans un arbre binaire de recherche </h2>

****


### Itératif
```python
def chercher(self, element):
	racine = self.racine
	liste = []
	while racine is not None:
		liste.append(racine.v)
		if element > racine.v:
			racine = racine.d
		elif element < racine.v:
			racine = racine.g
		else:
			return liste
```

### récursif
```python
def chercher_recursif(self, v):
	c = []
	def r(n):
		if n is None:
			return
		c.append(n)
		if n.v == v:
			return c
		elif v > n.v:
			return r(n.d)
		else:
			return r(n.g)
	return r(self.racine)
```