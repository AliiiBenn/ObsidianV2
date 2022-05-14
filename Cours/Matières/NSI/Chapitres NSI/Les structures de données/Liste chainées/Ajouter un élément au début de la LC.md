tags : 
links : [[Listes chaînées]], [[Informatique/Les langages/Python/Python]]

****

<h2 style="text-align: center;"> Ajouter un élément au début de la LC </h2>

****

Appel à [[Savoir si une liste chainée est vide]] 

```python
def ajouter_debut(self, nM):
	if not isinstance(nM, Maillon):
		nM = Maillon(nM)
	if self.est_vide():
		self.debut = nM
	else:
		nM.suiv = self.debut
		self.debut = nM
	return nM
```