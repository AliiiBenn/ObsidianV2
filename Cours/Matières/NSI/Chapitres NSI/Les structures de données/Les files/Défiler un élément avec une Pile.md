tags : 
links : [[Files]], [[Python]], [[Piles]], [[Savoir si une pile est vide]], [[Pop un élément dans un pile]]

****

<h2 style="text-align: center;"> Défiler un élément avec une Pile </h2>

****


```python
def defiler(self):
	while not self.entree.is_empty():
		self.sortie.push(self.entree.pop())
	return self.sortie.pop()
```