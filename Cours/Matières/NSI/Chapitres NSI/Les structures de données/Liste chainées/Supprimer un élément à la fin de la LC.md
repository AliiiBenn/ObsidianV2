tags : 
links : [[Listes chaînées]], [[Python]]

****

<h2 style="text-align: center;"> Supprimer un élément à la fin de la LC </h2>

****

appel à [[Savoir si une liste chainée est vide]]

```python
def supprimer_fin(self):
	if self.est_vide():
		raise IndexError("list index out of range")
	m = self.debut
	a = None # avant dernier
	while m.suiv is not None:
		a = m
		m = m.suiv
	if a is None:
		self.debut = None
		return
	else:
		a.suiv = None
		return a
```