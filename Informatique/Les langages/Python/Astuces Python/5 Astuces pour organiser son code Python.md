tags : 
links : [[Python]], [[130 MOC Vidéos]], [[020 MOC Informatique]]

****

<h2 style="text-align: center;"> 5 Astuces pour organiser son code Python </h2>

****


<iframe width="500" height="315" src="https://www.youtube.com/embed/e9yMYdnSlUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Utiliser des modules et des packages

Dans un dossier nous avons un fichier ```__init__.py``` et nous allons mettre un import du nom du dossier dans le ```main.py``` ici par exemple 

```python
import physics
```

Ce qui va se passer ici c'est que tout ce qui va se passer dans le init va aussi arriver dans le main.

L'utilité ici va être d'import tous les fichier qui sont dans le même dossier que le init dans ce fameux init

*init.py*
```python
from .forces import Forces
```

*main.py*
```python
from physics import Forces
```


### Une classe = un fichier

Dans la vidéo Tim nous conseille de séparer chaque class en un seul fichier mais, il dit que cela dépend aussi de l'avis de chacun car les développeurs experts n'utilisent pas forcément cette méthode à la lettre.


### Regrouper les fonctionnalités

Le but ici est de regrouper notre code selon leurs fonctionnalités par exemple les test ensemble, tout ce qui a un lien avec une api ensemble etc...


