

up::[[Afficher les éléments d'une pile]]

## Afficher les éléments d'une pile en Python

---


```python
def afficher(pile):
    pile2 = Pile()
    while not pile.est_vide():
        x = pile.depiler()
        print(x)
        pile2.empiler(x)
        
    while not pile2.est_vide():
        pile.empiler(pile2.depiler())
```

---
### Liens :

[[Afficher les éléments d'une pile]], [[2nd Cerveau Mary/02 Informatique/Python/Python]]

---

Date: 16-06-2022