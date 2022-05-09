tags : 
links : [[NSI]], [[020 MOC Informatique]], [[Révisions Bac]]

****

<h2 style="text-align: center;"> Corréction sujet 1 NSI </h2>

****


### Exercice 1
*Exercice sur les piles*

**Question 1** :

Après la suite d'instructions suivante, la pile sera vide.

**Question 2** :
*Partie 1*

```python
def hauteur_pile(P):
	Q = creer_pile_vide()
	n = 0
	while not(est_vide(P)):
		n += 1
		x = depiler(P)
		empiler(Q, x)
	while not(est_vide(Q)):
		x = depiler(Q)
		empiler(P, x)
	return n
```

*Partie 2*

```python
def max_pile(P : Pile, i):
    Q = Pile()
    j = 0
    index = 0
    maximum = 0
    while not index >= i:
        index += 1
        x = P.pop()
        if x > maximum:
            maximum = x
            j = i
            Q.push(x)
    while not Q.is_empty():
        x = Q.pop()
        P.push(x)
    return j
```


**Question 3** :

```python
def retourner(P, j):
    Q = Pile()
    O = Pile()
    index = 0
    while index <= j - 1:
        index += 1
        x = P.pop()
        Q.push(x)
    while not Q.is_empty():
        x = Q.pop()
        O.push(x)
    while not O.is_empty():
        x = O.pop()
        P.push(x)
```

**Question 4** :


