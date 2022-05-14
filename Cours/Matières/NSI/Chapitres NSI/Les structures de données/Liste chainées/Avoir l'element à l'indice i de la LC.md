tags : 
links : [[Listes chaînées]], [[Informatique/Les langages/Python/Python]]

****

<h2 style="text-align: center;"> Avoir l'element à l'indice i de la LC </h2>

****


```python
def get_maillon_indice(self, i):
	m = mp = self.debut
	j = 0
	while j <= i:
		if m is None:
			raise IndexError("list index out of range")
		mp = m
		m = m.suiv
		j += 1
	return mp
```