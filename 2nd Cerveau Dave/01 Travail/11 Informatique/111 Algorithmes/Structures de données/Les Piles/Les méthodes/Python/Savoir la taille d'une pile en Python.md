

up::[[Savoir la taille d'une pile]]

## Savoir la taille d'une pile en Python

---

```python
def taille(pile):
    pile2 = Pile()
    stack_size = 0
    while not pile.est_vide():
        stack_size += 1
        pile2.empiler(pile.depiler())
        
    while not pile2.est_vide():
        pile.empiler(pile2.depiler())
        
    return stack_size
```


---
### Liens :

[[Savoir la taille d'une pile]], [[2nd Cerveau Mary/02 Informatique/Python/Python]]

---

Date: 16-06-2022