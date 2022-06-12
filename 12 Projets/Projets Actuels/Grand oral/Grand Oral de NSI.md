


## Grand Oral

---


### Problématique

Ma problématique est comment créer *des labyrinthes* à l'aide d'*algorithmes*

### Mon plan 

- Qu'est-ce qu'un algorithme de génération de labyrinthe ?
- Les types de labyrinthes
	- Les labyrinthes parfaits
	- Les labyrinthes imparfaits
	- labyrithe simple et complexe
- La notion de chemin
	- Les chemins avec les graphes orientiés acycliques et les arbres
	- L'utilité de ces représentations
- Comment créer un labyrithe ?
	- Comment le modéliser
	- l'algorithme de création
- La comparaison avec un autre algorithme
- Conclusion

### Qu'est-ce qu'un algorithme de génération de labyrinthe ?

Un *algorithme de génération de labyrinthes* est l'une des deux catégorie de *modélisation mathématique d'un labyrinthe* avec comme autre catégorie *résolution de labyrithe* dont on parlera rapidement à la fin. 

### Les types de labyrinthes

Avant d'expliquer comment créer un labyrinthe il est bon de connaitre *les différents type de labyrinthes*. Il existe *deux catégories* de labyrithes divisées en *deux sous parties*. Il y a les labyrithes *parfaits* et *imparfaits*, un *labyrithe parfait* est un labyrithe où chaque cellule est reliée à l'autre et ce, de manière unique et les *labyrithes imparfaits* sont tous les labyrithes qui ne sont pas *parfaits* pouvant donc contenir *des boucles*, *des îlots* ou *des cellules innaccessibles*. La seconde catégorie est la catégorie des *labyrithes simples et complexes*, un *labyrithe simple* est un labyrithe n'ayant qu'un chemin vers la sortie et un *labyrithe complexe* lui a plusieurs chemins vers la sortie. Générer un *labyrithe complexe* à partir d'un *labyrinthe simple* peut se faire très simplement.

### Le lien avec les graphes et les arbres

Dans les *labyrithe parfaits* on peut représenter leur chemin à l'aide de *graphes orientés acycliques*. (**Un graphe orienté acyclique est un type de graphe orienté qui ne possède pas de circuit et qui peut donc être vu comme une hiérarchie, chaque noeud ne peut pas remonter vers une de ses racine d'ou le principe de hiérarchie**). On va différencier *l'entrée* et *la sortie*, *les intersections* et *les cul-de-sac*, grâce à cela nous allons pouvoir faire *une représentation* de notre *labyrithe* en *arbre* où chaque noeud sera différencié par son type et avec ses coordonnées.

#### L'utilité de ces représentations

On peut utiliser ces représentations en arbre pour *la résolution de labyrithes*, par exemple dans cet arbre (**arbre sur la feuille**) on peut faire un *parcours de l'arbre* (**parcours préfixe**) jusqu'à trouver la sortie puis remonter les noeuds jusqu'à la racine, grâce à cela nous aurons les coordonnées de la sortie à la fin du labyrithe. 

### Comment créer un labyrinthe ?

#### Comment le modéliser ?

Pour créer un *labyrinthe* il faut déjà modéliser *une structure de base*, nous allons donc créer une grille, une ligne sur deux sera remplie de murs et l'autre un mur et un espace libre, il faut penser au fait que si le labyrithe a une largeur paire il ne sera pas fermé à la fin, idem pour la hauteur, il va donc falloir pour ces tailles ajouter une valeur supplémentaire pour créer une grille fermée. Pour créer l'entrée et la sortie on enlève deux cases aléatoires sur les murs aux extrémités, pour l'exemple j'ai enlevé les cases au positions x = 0 et y = 1 pour l'entrée et x = -1 (**la dernière position**) et y = -2 (**...**).

#### L'algorithme

Une fois *la grille* créée, nous allons donner à chaque case libre un identifiant aléatoire pour la différencier de ses cases voisines. Ensuite, tant que toutes les cases n'ont pas le même identifiant on choisit un mur au hasard, on regarde si les deux nombres des deux cotés du mur sont égaux (**Question sur les positions des murs, si le mur à comme voisin en x un mur on regarde les deux cases en y+1 et y-1 sinon on regarde les deux cases en x+1 et y-1,  on met une condition pour ne prendre que les murs ayant des voisins cases soit en x soit en y**) et si ils sont différents on casse le mur et on rempli les trois cases avec l'un des deux identifiants. Une fois toutes les cases avec le même identifiant nous avons notre labyrithe simple avec son entrée et sa sortie. (**Il n'y a que deux murs dans cet algorithme celui de gauche et celui de droite, créer labyrithe complèxe... le problème d'un labyrithe complèxe c'est qu'il rend le labyrithe imparfait par la création d'îlots**).

### La comparaison avec un autre algorithme

L'algorithme qui vient d'être expliqué est *l'algorithme de fusion aléatoire de chemin* et il utilise uniquement une liste à deux dimensions pour stocker les cases et murs et il est plutôt simple. Il est toujours bon de comparer entre eux les algorithme, c'est pour cela que nous allons le comparer à *l'algorithme de retour sur trace*, cet algorithme genère un labyrithe à l'aide d'*une pile* mais a comme inconvénient d'avoir assez de mémoire pour stocker le labyrithe car la taille de *la pile* est proportionnelle à celle du labyrinthe. Pour son fonctionnement, on se place au hasard sur une case du labyrithe puis on choisi une direction aléatoire parmis ses cases adjacentes puis on casse le mur entre les deux, si les cases adjacentes on toutes été visitées on revient en arrière jusqu'à avoir de nouveau la possibilité de se déplacer, une fois que toutes les cases ont été visitées l'algorithme est terminé et le labyrithe est crée. Le premier algorithme est assez efficace mais long si le labyrithe est très grand et le second rapide et efficace pour les petits labyrinthe mais peut utiliser beaucoup de mémoire pour des grands labyrinthe.

### Conclusion

Pour conclure, il est assez simple de générer des labyrithes à l'aide d'algorithmes, deux des plus connus sont l'algorithme de fusion aléatoire de chemin et l'algorithme de retour sur trace, il en existe pleins d'autres plus ou moins efficace bien sur (**algo de prism, kruskal**). Ces algorithmes peuvent être utiles pour des algorithmes de recherche de chemin, dans des jeux vidéos ou pour des simulations.