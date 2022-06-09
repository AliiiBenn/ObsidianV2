tags : 
links : [[Les arbres et les arbres binaires]], [[Les différents parcours d'un arbre]], [[Informatique/Les langages/Python/Python]], [[Les Files]]

****

<h2 style="text-align: center;"> Parcours en Largeur </h2>

****


```python
def ParcoursLargeur(self):
	f = File()
    f.enfiler(self)
    while not f.est_vide():
        n = f.defiler()
        print(n.v)
        if n.g is not None:
            f.enfiler(n.g)
        if n.d is not None:
            f.enfiler(n.d)
```