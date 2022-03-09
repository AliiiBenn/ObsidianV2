tags : 
links : [[Les structures de données]], [[Les arbres et les arbres binaires]]

****

<h2 style="text-align: center;"> Les arbres binaires de recherche </h2>

****


### Définition

Un **arbre binaire de recherche** (**ABR**) (_binary search tree_ – _BST_) est un arbre binaire tel que :

-   les clefs des nœuds doivent être **ordonnables** (il doit exister entre elles une relation d’ordre)
-   pour chacun de ses nœuds:
    -   chaque nœud du **sous-arbre gauche** a une clé **inférieure (ou égale)** à celle du nœud considéré,
    -   chaque nœud du **sous-arbre droit** possède une clé **supérieure (ou égale)** à celle-ci


> Remarque : selon la mise en œuvre de l’ABR, on pourra interdire ou non des clés de valeurs égales.

Lorsqu’on ajoute un nœud à un ABR, il devient une **feuille** de l’arbre.

### Créer une arbre binaire de recherche

Pour créer un arbre binaire de recherche en [[Python]] on va créer une classe qui va hériter de celle d'un arbre,

```python
class Arbre_br(Arbre_b):
	def __init__(self, racine):
		super().__init__(racine)
```


### Les méthodes d'un ABR

[[Trouver la valeur minimale d'un arbre de recherche]]
[[Trouver la valeur maximale d'un arbre de recherche]]
[[Cherche la valeur spécifique dans un arbre binaire de recherche]]
[[Verifier si un arbre est bien un arbre binaire de recherche]]