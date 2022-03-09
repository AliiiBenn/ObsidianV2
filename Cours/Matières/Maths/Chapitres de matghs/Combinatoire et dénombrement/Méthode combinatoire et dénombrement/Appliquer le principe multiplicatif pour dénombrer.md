tags : 
links : [[Combinatoire et dénombrement]]

****

<h2 style="text-align: center;"> Appliquer le principe multiplicatif pour dénombrer </h2>

****


*Un restaurant propose sur sa carte 3 entrées, 4 plats de resistance et 2 desserts.
a) Combien de menus différents composée d'une entrée, d'un plat et d'un dessert peut-on constituer ?
b) Même question si le dessert est imposé.*



**card(E1 * E2 * ... * Ek) = card(E1) * card(E2) * ... * card(Ek)**

a)

E : ensemble des entrées
P : ensemble des plats 
D : ensemble des desserts 

card(E * P * D) = card(E) * card(P) * card(D) =  3 * 4 * 2 = 24

Il existe donc 24 menus disponibles


b) 

Pour cet exemple on a juste à faire card(E * P) = 3 * 4 = 12

Dans ce cas il existe 12 menus disponibles
