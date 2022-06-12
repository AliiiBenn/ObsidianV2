---
MOC: [[Savoir si une pile est vide]]
Projets: [[Apprendre les structures de données]]
tags: #informatique
Date: 12-06-2022
---

## Savoir si une pile est vide en Python

---

#### Avec une liste chaînée

Pour savoir si une pile est vide avec une *liste chaînée* on utilise une méthode intégrée *est_vide* qui retourne *True* si la *liste chaînée* sinon *False*. voir => [[Savoir si une liste chainée est vide en Python]]

On définit une méthode de la class *Pile* nommée *is_empty* ou *est_vide* (le nom de la fonction n'a pas de réelle importance) et on retourne directement le résultat de la méthode de la *liste chaînée* : *est_vide*

```python
def is_empty(self):
	return self.listeC.est_vide()
```

Avec une liste :

```python
def is_empty(self):
	return len(self.liste) == 0
```

---
### Liens :

[[Savoir si une pile est vide]], [[Apprendre les structures de données]], [[Python]]