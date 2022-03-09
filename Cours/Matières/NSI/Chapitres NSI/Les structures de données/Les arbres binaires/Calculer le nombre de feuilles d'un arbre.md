tags : 
links : [[Les arbres et les arbres binaires]], [[Python]], [[La récursivité]]

****

<h2 style="text-align: center;"> Calculer le nombre de feuilles d'un arbre </h2>

****


```python
def feuilles(self):
	d = g = 0
	if self.d is not None:
		d = self.d.feuilles()
	if self.g is not None:
		g = self.g.feuilles()
	return 1 + d + g if self.est_feuille() else d + g
```