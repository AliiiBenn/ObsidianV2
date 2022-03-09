tags : 
links : [[Les arbres et les arbres binaires]], [[Python]], [[La récursivité]]

****

<h2 style="text-align: center;"> Calculer la taille d'un arbre </h2>

****


```python
def taille(self):
	d = g = 0
	if self.d is not None:
		d = self.d.taille()
	if self.g is not None:
		g = self.g.taille()

	return 1 + d + g
```