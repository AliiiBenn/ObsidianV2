tags : 
links : [[Listes chaînées]], [[Informatique/Les langages/Python/Python]]

****

<h2 style="text-align: center;"> Calculer la taille d'une liste chainée </h2>

****


```python
def taille(self):
	m = self.debut
	l = 0
	while m is not None:
		l+= 1
		m = m.suiv
	return l
```