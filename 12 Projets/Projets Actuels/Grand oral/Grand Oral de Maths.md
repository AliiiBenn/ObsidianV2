

## Grand Oral de maths

---


### Sujets possibles 

- Comment le raisonnement par récurrence a-t-il évolué au fil des siècles ?


### Mon plan

- Mini introduction + problématique
- Qu'est-ce que le raisonnement pas récurrence et comment fonctionne-t-il
- L'histoire du raisonement par récurrence
	- Avant le XVIIème siècle
	- Le XVIIème siècle et ensuite
- A quoi sert le raisonnement par récurrence
- Conclusion


### Introduction

*Le raisonnement par récurrence* est un raisonnement qui cherche à démontrer un propriété portant sur tous les entiers naturels. *Le raisonnement par récurrence* est connu depuis *1665* avec *Pascal* mais était déjà présent avant, c'est pour cela qu'il est intéréssant de se demander *Comment le raisonnement par récurrence a-t-il évolué au fil des siècles ?*

### Qu'est-ce que le raisonnement par récurrence et comment fonctionne-t-il

*le raisonnement par récurrence* fonctionne en 3 étapes, et comme dit plus haut a pour but de démontrer une propriété portant sur tous les entiers naturels. 

On a $u0 = 0, un+1=2un+1$ et on veut démontrer que $un = 2^n - 1$ 

On commence avec l'initialisation, c'est  dire qu'on va tester la propriété pour $n=0$

$u0=2^0-1$
$0 = 1 - 1$
$0 = 0$

donc la propriété est vrai au rang 0

On passe à l'hérédité :

On suppose que pour tout entier naturel *k*, la propriété P(k) est vraie c'est à dire $uk = 2^k - 1$ c'est ce qu'on appelle l'hypothèse de récurrence

On cherche alors à démontrer que (Pk+1) est vraie

$uk+1=2^(k+1) - 1$

on part de l'hypothèse de récurrence

$uk = 2^k-1$
on multiplie par deux le tout
$2uk=2(2^k-1)$
puis on ajoute 1
$2uk+1=2(2^k-1)+1$
soit
$uk+1=2^k-1$

on conclu donc que la propriété est donc vraie au rang n=0 et héréditaire à partir de ce rang

### L'histoire du raisonnement par récurrence

#### Avant le XVIIème siècle

On a découvert depuis les années 1970 que bien avant *Pascal* il y a eu plusieurs mathématiciens qui ont utlisé le fonctionnement par récurrence surtout dans le monde *arabo-islamique*. 

par exemple, vers l'an 1000, Al-Karaji a établit la *formule du binôme de Newton* (**La formule du binôme de Newton est une formule mathématique donnée par Isaac Newton1 pour trouver le développement d'une puissance entière quelconque d'un binôme (x + y)^n**) mais il n'a pas le notations qui lui permettraient de l'énoncer dans le cas général. 

*Al-Samw'al* va reprendre ces travaux qui utilisent bien des formes archaiques de raisonnement par récurrence comme *la régression* (**on part d'un entier donné choisi arbitrairement, et par un procédé manifestement général, en passant de _n_ à _n_ – 1, on se ramène au cas initial)**)

A la même époque *Al-Haytham* utilise le raisonnement par récurrence pour calculer la somme des cubes puis des puissances quatrièmes des _n_ premiers entiers naturels

Durant le Moyen Âge européen, le philosophe et mathématicien *Levi ben Gershom*, fait un usage systématique de la régression pour établir des résultats de combinatoire (somme des cubes, nombre de permutations…).

#### Le XVIIème siècle et ensuite

*Blaise Pascal* est considéré comme le premier ayant utilisé le raisonnement par recurrence de manière tout à fait explicite, on voit ce premier raisonnement dans le *Traité du triangle arithmétique* de 1654 où avec *le triangle de pascal* il montre qu'une proportion est dans toutes les bases (**diagonale de son triangle**)

Toujours au *XVIIème siècle* *Pierre de Fermat* et *Jacques Bernouilli* vont proposer pour l'un une méthode et pour l'autre une démonstration. Ils critiquent tous deux *la méthode d'induction* de *John Wallis* qui était une démonstration pour les premiers entiers et "ainsi de suite" c'est-à-dire une base de raisonnement par récurrence. *Fermat* va proposer la *méthode de la descente infinie* liée à la recurrence

(**Soit P(n) une propriété faisant intervenir un entier naturel n. On cherche à démontrer que P(n) est fausse pour tout n. Pour cela, on raisonne par l'absurde. On suppose donc que pour un certain entier n, P(n) est vraie. On démontre par ailleurs que pour chaque entier naturel n pour lequel P(n) est vraie, il existe un entier naturel m strictement inférieur à n pour lequel P(m) est également vraie. On peut conclure que P(n) n'est jamais vraie, car la suite des entiers naturels vérifiant la propriété P ne peut pas être strictement décroissante et infinie.**)

Quant à lui *Bernouilli* va proposer de démontrer le passage de *n* à *n+1* soit exactement le raisonnement par récurrence.  Ensuite, au cours du *XVIIIème et XIXème siècle* le raisonnement par reccurence fut de plus en plus utilisé pour aboutir à son normalisation. 

Pour conclure, le raisonnement par récurrence à une grande histoire qui a commencé au 11ème siècle et qui s'est normalisée au 19ème, aujourd'hui notre raisonnment nous permet de démontrer un bon nombre de propriétés sans trop de difficultés et ce grace à de noubreux mathématiciens qui ont beaucoup travailler pour nous faciliter la vie. 
