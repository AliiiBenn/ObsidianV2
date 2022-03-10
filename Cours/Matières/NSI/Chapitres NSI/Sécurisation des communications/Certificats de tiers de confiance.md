tags : 
links : [[NSI]], [[020 MOC Informatique]], [[Sécurisation des communications]]

****

<h2 style="text-align: center;"> Certificats de tiers de confiance </h2>

****


*Pour authentifier les serveurs lors des communications sur Internet, on leur demande de fournir un **certificat numérique** (ou **certificat à clé publique**).*

Les certificats numériques sont délivrés aux administrateurs de sites par des **autorités de certification** (_Certificate Authority_ – CA) : des organismes habilités (entreprises spécialisées, associations à but non lucratifs, états). Pour Internet il sont au format X.509, un format de fichier binaire comprenant :

-   l’identifiant de l’AC
-   l’identifiant de l’entité certifiée
-   la date de validité
-   la clé publique de l’entité certifiée
-   l’algorithme utilisé pour la signature du certificat
-   la signature du certificat
-   …