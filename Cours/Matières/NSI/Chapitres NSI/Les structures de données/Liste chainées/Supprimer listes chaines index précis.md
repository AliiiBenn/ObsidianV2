tags : 
links : [[Listes chaînées]], [[Informatique/Les langages/Python/Python]]

****

<h2 style="text-align: center;"> Supprimer listes chaines index précis </h2>

****
appel à [[Savoir si une liste chainée est vide]], [[Avoir l'element à l'indice i de la LC]] et [[Supprimer un élément au début de la LC]]

```python
def supprimer_indice(self, i):
	if self.est_vide():
		raise IndexError("list index out of range")
	if i > 0:
		m = self.get_maillon_indice(i-1)
		if m.suiv is None:
			raise IndexError("list index out of range")
		m.suiv = m.suiv.suiv
		else:
			self.supprimer_debut()
```