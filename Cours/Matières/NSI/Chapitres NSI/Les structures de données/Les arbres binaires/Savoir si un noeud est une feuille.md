tags : 
links : [[Les arbres et les arbres binaires]], [[Python]]

****

<h2 style="text-align: center;"> Savoir si un noeud est une feuille </h2>

****


```python
def est_feuille(self):
	return self.g is None and self.d is None
```