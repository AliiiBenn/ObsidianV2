tags : #informatique, #algorithmes #AlgorithmeDeTri
links : [[Algorithmes de Tri]], [[NSI]]

---

![](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

---

Le **tri par insertion** est le tri que la majorité des joueurs de cartes occasionnels pratiquent intuitivement.

Il consiste à «traiter» toutes les cartes dans l’ordre découlant de la donne, le «traitement» se résumant, pour chaque carte, à l’insérer au bon endroit dans l’ensemble des cartes déjà triées.  
Matériellement, cette opération peut être réalisée selon deux variantes :

- Soit avec deux tas de cartes, l’un sur la table, résultat de la donne, l’autre dans la main du joueur, contenant le jeu trié. L’opération de tri commence alors avec la totalité des cartes sur la table, et se termine avec la totalité des cartes dans la main du joueur.
- Soit directement dans la main du joueur, celle-ci étant partagée mentalement en un côté «trié» et un côté «pas encore trié». L’opération de tri consiste alors à faire passer les cartes de l’un à l’autre en les insérant au bon endroit.


Algorithme :

```pseudo-code
procédure tri_insertion(liste L)
	n ← taille de L
	pour i allant de 1 à n-1
		x ← L[i]
		j ← i
		tant que j > 0 et L[j-1] > x faire
			L[j] ← L[j-1]
			j ← j - 1
		fin tant que
		L[j] ← x
	fin pour 
fin procédure
``` 


En [[Python]] :

```python
from random import randint

  

L0 = [randint(1, 100) for i in range(100)]

  

def tri_insertion(liste):
 	# taille de la liste : liste
	n = len(liste)
	# boucle qui va de 1 à la taille de la liste -1
 	for i in range(1, n-1):
		# on definit x qui est égal à l'index i de la liste
		x = liste[i]
		# on definit j qui est égal à i
		j = i
		# tant que j est supérieur à 0 et que
		# l'element précédent de la liste est supérieur à l'actuel
		while j > 0 and liste[j-1] > x:
			# on switch les deux éléments
			liste[j] = liste[j-1]
			# et on retire 1 à i
			j-=1
		   # l'element de la liste à la position j est égal à x qui 	est l'element actuel
			liste[j] = x
```