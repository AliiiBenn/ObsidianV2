tags : 
links : [[Listes chaînées]], [[Informatique/Les langages/Python/Python]]

****

<h2 style="text-align: center;"> Supprimer un élément au début de la LC </h2>

****


```python
def supprimer_debut(self):
	if self.debut is not None:
		d = self.debut
		self.debut = self.debut.suiv
		return d
	else:
	raise IndexError("list index out of range")
```