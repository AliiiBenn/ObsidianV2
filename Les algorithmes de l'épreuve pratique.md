
****

<h2 style="text-align: center;"> Les algorithmes de l'épreuve pratique </h2>

****


### Algorithme de recherche dichotomique

```python
def dichotomie(t, v):
    a = 0
    b = len(t) - 1
    while a <= b:
        m = (a + b) // 2
        if t[m] == v:
            # on a trouvé v
            return m
        elif t[m] < v:
            a = m + 1
        else:
            b = m - 1
    # on a a > b
    return False
```


### Hauteur d'un arbre

```python
def hauteur(self):
	return 1 + max(self.d.hauteur() if self.d is not None else -1, self.g.hauteur() if self.g is not None else -1)
```


### Parcours Prefixe, Infixe et Suffixe 

```python
def visiterPrefixe(self):
	print(self.v)
	if self.g is not None:
		self.g.visiterPrefixe()
	if self.d is not None:
		self.d.visiterPrefixe()
```

```python
def visiterInfixe(self):
	if self.g is not None:
		self.g.visiterInfixe()
	print(self.v)
	if self.d is not None:
		self.d.visiterInfixe()
```

```python
def visiterSuffixe(self):
	if self.g is not None:
		self.g.visiterInfixe()
	if self.d is not None:
		self.d.visiterInfixe()
	print(self.v)
```

### Parcours en largeur

```python
def ParcoursLargeur(self):
	f = File()
    f.enfiler(self)
    while not f.est_vide():
        n = f.defiler()
        print(n.v)
        if n.g is not None:
            f.enfiler(n.g)
        if n.d is not None:
            f.enfiler(n.d)
```