tags : 
links : [[Les structures de données]], [[NSI]], [[020 MOC Informatique]]

****

<h2 style="text-align: center;"> Listes chaînées </h2>

****


Une **liste chaînée** (ou **liste liée**) est une structure de données composées d’une séquence d’éléments de liste.

Chaque enregistrement d’une liste chaînée est souvent appelé **élément** , **nœud** ou **maillon**.

La **tête** d’une liste est son premier nœud. La **queue** d’une liste peut se référer soit au reste de la liste après la tête, soit au dernier nœud de la liste.

Le champ de chaque nœud qui contient l’adresse du nœud suivant ou précédent est généralement appelé **lien** ou **pointeur**. Le contenu est placé dans un ou plusieurs autres champs appelés **données**, **informations** ou **valeur**

![](https://info.blaisepascal.fr/wp-content/uploads/2020/07/drawit-diagram-22.png "drawit diagram")



### Créer une liste chaînée

On va ici utiliser [[Informatique/Les langages/Python/Python]] pour créer notre liste chaînée où nous allons définir une classe Maillon et une classe ListeC

```python
class Maillon:
	def __init__(self):
		self.val = None
		self.suiv = None

class ListeC:
	def __init__(self):
		self.tete = None
```


### L'interface d'une liste chaînée

Une liste chaînée a une grande liste de méthodes intégrées qui seront ici implémentées en [[Informatique/Les langages/Python/Python]] :

[[Savoir si une liste chainée est vide]]
[[Calculer la taille d'une liste chainée]]
[[Avoir le dernier élément de la LC]]
[[Avoir l'element à l'indice i de la LC]]
[[Ajouter un élément au début de la LC]]
[[Ajouter un élément à la fin de la LC]]
[[Inserer à un élément à un indice i dans une LC]]
[[Supprimer un élément au début de la LC]]
[[Supprimer un élément à la fin de la LC]]
[[Supprimer listes chaines index précis]]