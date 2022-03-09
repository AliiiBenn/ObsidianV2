tags : 
links : [[Les arbres et les arbres binaires]], [[Les différents parcours d'un arbre]], [[Python]], [[La récursivité]]

****

<h2 style="text-align: center;"> Parcours Prefixe, Infixe et Suffixe </h2>

****


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