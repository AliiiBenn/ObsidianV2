

up::[[Inverser les éléments d'une pile]]

## Inverser les éléments d'une pile en Python

---

```python
def inverser(pile):
    pile2 = Pile()
    pile3 = Pile()
    while not pile.est_vide():
        pile2.empiler(pile.depiler())
        
    while not pile2.est_vide():
        pile3.empiler(pile2.depiler())
        
    while not pile3.est_vide():
        pile.empiler(pile3.depiler())
```


---
### Liens :

[[Inverser les éléments d'une pile]], [[2nd Cerveau Mary/02 Informatique/Python/Python]]

---

Date: 17-06-2022