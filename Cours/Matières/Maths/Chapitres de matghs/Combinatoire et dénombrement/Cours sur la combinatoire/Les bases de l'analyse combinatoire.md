tags : 
links : [[Combinatoire et dénombrement]], [[Maths]]

****

<h2 style="text-align: center;"> Les bases de l'analyse combinatoire </h2>

****


### Le principe multiplicatif

*Un magasin propose 3 téléphones de même dimension et 4 coques compatibles mais différentes.
De combien de choix possibles disposes-t-on ?*


Pour chaque téléphone, on a 4 coques possibles soit,

3 * 4 = 12

Il y a donc 12 choix possibles

****On considère deux ensembles finis A et B. On note A*B le produit de A par B, c'est à dire l'ensemble des couples (x, y) ou x est dans A et y est dans B. Alors : card(A*B) = card(A) * card(B)**

### Les arrangements sans répétitions

*On organise une course comprenant 10 personnes et on s'intéresse au podium formé des 3 premiers dans l'ordre.
Combien de podiums différents existe-t-il ?*

Il y a 10 choix possibles pour la première place, il reste donc 9 choix possible pour la 2nd place et donc 8 pour la dernière,

10 * 9 * 8

**Le nombre d'arrangements sans répétition de k objets parmi n objets est : Akn = n! / (n-k)!**


Dans notre situation,
n = 10
k = 3

A10 3 = 10! / 7!

= 10 * 9 * 8 = 720


### Arrangements avec répétitions

*Combien de nombres à 5 chiffres peut-on écrire avec les chiffres 1, 2 et 3 seulement ?*

= 3^5 = 243

**Le nombre d'arrangements avec répétition de k objets parmis n objets est  n^k**


### Les permutation

Une permutation de n objets distincts est une suite ordonnée de ces n objets

Exemple : 

458 est une permutation de 548, ou bien 854 etc...

Quel est le nombre de permutations disponibles ?

**Le nombre de permutation de n objets distincts est n!**

On dit aussi qu'une permutation est un arrangement


### Combinaison

Si on reprend l'exemple de la course et qu'on cherche juste le nombre de possibilités d'etre dans le top 3, on dira quand même que c'est une combinaison sans répétition.

**Le nombre de combinaisons sans répétitions de k objets parmis n objets est Ckn = $\frac{n!}{k!(n-k)!}$**


n = 10
k = 3

Soit C10 3 = $\frac{10!}{3!(10-3)!} = \frac{10!}{3!(7)!} = \frac{720}{3!} = \frac{720}{6} = 120$

