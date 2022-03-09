tags : 
links : [[Listes chaînées]], [[Python]]

****

<h2 style="text-align: center;"> Ajouter un élément à la fin de la LC </h2>

****

lien avec [[Savoir si une liste chainée est vide]] et [[Avoir le dernier élément de la LC]]

```python
def ajouter_fin(self, nM):
	if not isinstance(nM, Maillon):
		nM = Maillon(nM)
	if self.est_vide():
		self.debut = nM
	else:
		dm = self.get_dernier()
		dm.suiv = nM
	return nM
```