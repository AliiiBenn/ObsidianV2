tags : 
links : [[Listes chaînées]], [[Python]]

****

<h2 style="text-align: center;"> Avoir le dernier élément de la LC </h2>

****

Lien avec [[Savoir si une liste chainée est vide|est_vide()]] car on regarde si la LC est vide


```python
def get_dernier(self):
	if self.est_vide():
		raise IndexError("list index out of range")
	m = self.debut
	while m.suiv is not None:
		m = m.suiv
	return m
```