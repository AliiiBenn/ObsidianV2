tags : 
links : [[Listes chaînées]], [[Python]]

****

<h2 style="text-align: center;"> Inserer à un élément à un indice i dans une LC </h2>

****

appel à [[Avoir l'element à l'indice i de la LC]]

```python
def inserer_apres(self, i, nM):
	m = self.get_maillon_indice(i)
	if m is None:
		raise IndexError("list index out of range")
	nM.suiv = m.suiv
	m.suiv = nM
	return nM
```