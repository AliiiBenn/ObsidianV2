

up::[[Défiler un élément avec une Pile]]

## Défiler un élément avec une Pile en Python

---

```python
def defiler(self):
	while not self.entree.is_empty():
		self.sortie.push(self.entree.pop())
	return self.sortie.pop()
```

---
### Liens :

[[Défiler un élément avec une Pile]], [[Les Piles]], [[2nd Cerveau Mary/02 Informatique/Python/Python]]

---

Date: 19-06-2022