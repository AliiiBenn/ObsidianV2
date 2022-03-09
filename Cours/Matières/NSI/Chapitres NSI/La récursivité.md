tags : 
links : [[NSI]] [[020 MOC Informatique]]

****

<h2 style="text-align: center;"> La récursivité </h2>

****


*Une fonction récursive est une fonction qui s'appelle elle même tel une boucle et qui va former un empilement de la même fonction*


### Un exemple de fonction récursive

```python
def factorial(x):
    if x == 1:
        return 1
    else:
        return (x * factorial(x-1))

```

Cet exemple en langage [[Python]] va calculer le factoriel d'un nombre de manière récursive, on y voit une condition, on l'appelle le cas de base c'est-à-dire le cas ou la fonction s'arrete, si on ne met pas ce cas de base on aura une erreur. 

On voit bien dans le else l'appel à elle même qui montre la récursivité