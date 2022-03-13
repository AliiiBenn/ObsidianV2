tags : 
links : [[Authentification des participants]], [[Sécurisation des communications]]

****

<h2 style="text-align: center;"> Certificats de tiers de confiance </h2>

****

Pour authentifier les serveurs lors des communications sur Internet, on leur demande de fournir un **certificat numérique** (ou **certificat à clé publique**).

Analogie : pour retirer un colis dans un bureau de poste ou point relais, on demande une **pièce d’identité** (carte d’identité, passeport, permis de conduire). Ce document permet d’identifier la personne qui se présente. Cela est possible, car le bureau de poste ou le point relais fait confiance au **tiers** qui a délivré cette pièce d’identité (l’**État**) et que cette pièce est réputée infalsifiable.

Les certificats numériques sont délivrés aux administrateurs de sites par des **autorités de certification** (_Certificate Authority_ – CA) : des organismes habilités (entreprises spécialisées, associations à but non lucratifs, états). Pour Internet il sont au format X.509, un format de fichier binaire comprenant :

-   l’identifiant de l’AC
-   l’identifiant de l’entité certifiée
-   la date de validité
-   la clé publique de l’entité certifiée
-   l’algorithme utilisé pour la signature du certificat
-   la signature du certificat
-   …