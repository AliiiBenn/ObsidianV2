tags : 
links : [[Les arbres et les arbres binaires]], [[Python]], [[La récursivité]]

****

<h2 style="text-align: center;"> Calculer la hauteur d'un arbre </h2>

****


```python
def hauteur(self):
	return 1 + max(self.d.hauteur() if self.d is not None else -1, self.g.hauteur() if self.g is not None else -1)
```