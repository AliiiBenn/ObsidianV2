

up::[[Bibliothèque structure de données]]

## Les Files

---

Une **File** (ou _Queue_) est une structure de données linéaire dans laquelle les éléments sont accessibles selon une discipline **FIFO** (“**F**irst-**I**n **F**irst-**O**ut”) : le premier élément inséré dans la liste est le premier à en sortir. Elle possède trois méthodes natives comme les *Piles* : *enfiler* pour ajouter un élément à la *File*, *défiler* pour enlever un élément à la *File* et *est_vide* pour savoir si la *File* est vide. 

### Comment modéliser une File

Il y pleins de façons pour modéliser une *File* mais ici nous allons voir avec *les listes(array)*,  deux *Piles* et avec une *liste chaînée*.

#### Pseudo code d'une File

##### Avec une liste

```
class File {
	constructeur {
		this.file = nouvelle liste chaînée
	}

	enfiler(element) {
		ajouter à la fin de this.file element
	}

	defiler() {
		retirer le premier element de this.file
	}

	est_vide() {
		retourner taille(this.file) == 0
	}
}
	
		
```

##### Avec une Pile

```
class File {
	constructeur {
		this.entree = nouvelle Pile
		this.sortie = nouvelle Pile
	}

	enfiler(element) {
		on empile element dans this.entree
	}

	defiler() {
		tant que this.entree n'est pas vide:
			on empile dans this.sortie le dépilage de this.entree
	}

	est_vide() {
		retourner taille(this.entree) == 0 et taille(this.sortie) == 0
	}
}		
```


##### Avec une liste chaînée

```
class File {
	constructeur {
		this.file = nouvelle liste chaînée
	}

	enfiler(element) {
		ajouter element à la fin de this.file
	}

	defiler() {
		retourner la valeur de du premier element de this.file et le supprimer
	}

	est_vide() {
		retourner this.file.est_vide()
	}
}		
```


### Les méthodes d'une File

#### Natives

##### Avec une liste

[[Enfiler un élément avec une liste]]
[[Défiler un élément avec une liste]]
[[Savoir si une File est vide avec une liste]]

##### Avec une pile

[[Enfiler un élément avec une Pile]]
[[Défiler un élément avec une Pile]]
[[Savoir si une File est vide avec une Pile]]

##### Avec une liste chaînée

[[Enfiler avec une liste chaînée]]
[[Défiler avec une liste chaînée]]
[[File vide avec une liste chaînée]]

#### Ajoutées

---
### Liens :

[[Bibliothèque structure de données]]

---

Date: 19-06-2022