tags : 
links : [[Chiffrement asymétrique]], [[Sécurisation des communications]]

****

<h2 style="text-align: center;"> Protocole d’échange de clés de Diffie-Hellman </h2>

****

Afin d’utiliser une méthode de chiffrement symétrique, deux participants doivent au préalable convenir d’une **clé de chiffrement commune**, via un canal de communication non sûr.

Le protocole repose sur une fonction de « mélange » M à deux variables entières telle que :

-   si on connait M(x,y) et x, alors on ne peut pas retrouver y (ou alors très difficilement)
-   pour tous entiers x, y et z : M(M(x,y),z)=M(M(z,x),y)


![](https://info.blaisepascal.fr/wp-content/uploads/2021/07/drawit-diagram-9.png "drawit diagram")