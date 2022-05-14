[[MOC Informatique]]

---

**Bubble Sort** est l' algorithme de tri le plus simple qui fonctionne en échangeant à plusieurs reprises les éléments adjacents s'ils sont dans le mauvais ordre. Cet algorithme n'est pas adapté aux grands ensembles de données car sa complexité temporelle est moyenne et dans le pire des cas assez élevée.


**Premier passage:** 

-   Le tri à bulles commence par les deux premiers éléments, en les comparant pour vérifier lequel est le plus grand.
    -   ( **5** **1** 4 2 8 ) -> ( **1** **5** 4 2 8 ), Ici, l'algorithme compare les deux premiers éléments, et permute puisque 5 > 1. 
    -   ( 1 **5** **4** 2 8 ) -> ( 1 **4** **5** 2 8 ), Échange depuis 5 > 4 
    -   ( 1 4 **5** **2** 8 ) -> ( 1 4 **2** **5** 8 ), Échange depuis 5 > 2 
    -   ( 1 4 2 **5** **8** ) -> ( 1 4 2 **5** **8** ), Maintenant, puisque ces éléments sont déjà dans l'ordre (8 > 5), l'algorithme ne les permute pas.

**Deuxième passage :** 

-   Maintenant, lors de la deuxième itération, cela devrait ressembler à ceci :
    -   ( **1** **4** 2 5 8 ) -> ( **1** **4** 2 5 8 ) 
    -   ( 1 **4** **2** 5 8 ) -> ( 1 **2** **4** 5 8 ), Échange depuis 4 > 2 
    -   ( 1 2 **4** **5** 8 ) -> ( 1 2 **4** **5** 8 ) 
    -   ( 1 2 4 **5** **8** ) -> ( 1 2 4 **5** **8** ) 

**Troisième passage :** 

-   Maintenant, le tableau est déjà trié, mais notre algorithme ne sait pas s'il est complet.
-   L'algorithme a besoin d'une passe **entière** sans **aucun** échange pour savoir qu'il est trié.
    -   ( **1** **2** 4 5 8 ) -> ( **1** **2** 4 5 8 ) 
    -   ( 1 **2** **4** 5 8 ) -> ( 1 **2** **4** 5 8 ) 
    -   ( 1 2 **4** **5** 8 ) -> ( 1 2 **4** **5** 8 ) 
    -   ( 1 2 4 **5** **8** ) -> ( 1 2 4 **5** **8** )

### Bubble Sort dans différents langages
- [[Bubble Sort en Python]]