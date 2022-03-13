tags : 
links : [[NSI]], [[020 MOC Informatique]]

****

<h2 style="text-align: center;"> Sécurisation des communications </h2>

****

La sécurisation des communications peut être réalisée grâce à une science appelée **cryptologie** (du grec « science du secret »), qui réunit la **cryptographie** (« écriture secrète ») et la **cryptanalyse** (étude des attaques contre les mécanismes de cryptographie).

La sécurisation doit permettre d’assurer :

-   la **confidentialité** du message échangé,
-   son **authenticité** (qui a envoyé ce message ?),
-   son **intégrité** (est-ce qu’il a été modifié ?).

![700](https://www.cnil.fr/sites/default/files/styles/contenu-generique-visuel/public/thumbnails/image/1_usages_0.png?itok=0IZNGUET)


## Vocabulaire
- Coder
	- Coder qui peut aussi s'appeler encoder signifie qu'on représente de l'information avec des signes prédéfinis comme le [codage binaire naturel](https://info.blaisepascal.fr/nsi-representation-des-nombres-entiers-naturels) pour encoder les nombres entiers
- Décoder
	- Décoder est donc l'effet inverse c'est à dire interpréter un ensemble de signes pour récuperer l'information qu'il représentent
- Chiffrer
	- rendre une suite de signes incompréhensible à l’aide d’une clé de chiffrement
- Déchiffrer
	- retrouver la suite de signes originale à partir d’un message chiffré, en utilisant une _clé de déchiffrement_.
- Décrypter
	- Décrypter c'est retrouver la suites de signes originale **à partir d'un message chiffré** mais *sans clé de déchiffrement*. C'est une technique assez simple mais peu efficace et longue car on va tester toutes les possibilitées jusqu'à trouver la bonne. On appelle cete technique le brute force
- Cryptanalyse 
	- La cryptanalyse est l'ensemble des techniques utilisées pour decrypter un message et on appelle cela une attaque
		- Soit une attaque par brute force : application de l’algorithme de déchiffrement avec toutes les clefs possibles.
		- ou l'attaque statistisque, par canal auxiliaire, etc...

> On ne dit pas crypter mais chiffrer !

## Chiffrement symétrique

Le chiffrement symétrique est un chiffrement ou la clé pour chiffrer est aussi celle pour déchiffrer, on l'appelle aussi le chiffrement à clé symétrique.

Ici, on fait appel à deux fonctions :

La fonction de chiffrement c avec deux arguments m et k qui représentent le message en clair et la clé de chiffrement.

Il y aussi la fonction de déchiffrement d qui prend elle aussi deux arguments s et k, le message chiffré et une fois encore la clé de chiffrement

![](https://info.blaisepascal.fr/wp-content/uploads/2021/07/drawit-diagram-7.png "drawit diagram")


### Différents exemples de chiffrements symétrique

#### Code de César

Le code de César est un **chiffrement par décalage**, ici la clé de chiffrement/déchiffrement est un nombre entier. On chiffre en décalant la lettre non chiffrée d'un certain rang dans l'alphabet et on déchiffre dans le sens inverse

![](https://info.blaisepascal.fr/wp-content/uploads/2021/07/Chiffrement-de-Cesar-3.png "Chiffrement de César")

#### Code XOR

Au lieu de réaliser un décalage de toute les lettres du message à chiffrer d’un nombre fixe de lettres, on réalise une opération **ou exclusif** (XOR) sur les codes (ascii, unicode, …) des lettres du message avec celle d’une clé (chaîne de caractères de taille quelconque).

![](https://info.blaisepascal.fr/wp-content/uploads/2021/07/Chiffrement-XOR.png "Chiffrement XOR")


#### Algorithme AES

C'est l'un des algorithmes de chiffrement symétrique les plus utilisé

Il est très similaire au chiffrement XOR :

-   une clé initiale est étendue (mais pas par simple répétition)  
    taille de la clé : 128, 192 ou 256 bits
-   le message et la clé sont mélangés (mais pas uniquement par l’opération ⊕), de façon réversible

## Chiffrement asymétrique

Pour que deux participants à une communication puissent obtenir une clé symétrique commune, il existe plusieurs possibilités :

-   soit ils se l’échangent par un canal de communication non sûr, ce qui présente un fort risque ;
-   soit ils se rencontrent physiquement pour faire l’échange sur un support physique (papier, clé USB, …)
-   soit ils utilisent une des techniques de cryptographie asymétrique …

![](https://info.blaisepascal.fr/wp-content/uploads/2021/07/drawit-diagram-8.png "drawit diagram")


### Protocole d’échange de clés de Diffie-Hellman

Afin d’utiliser une méthode de chiffrement symétrique, deux participants doivent au préalable convenir d’une **clé de chiffrement commune**, via un canal de communication non sûr.

Le protocole repose sur une fonction de « mélange » M à deux variables entières telle que :

-   si on connait M(x,y) et x, alors on ne peut pas retrouver y (ou alors très difficilement)
-   pour tous entiers x, y et z : M(M(x,y),z)=M(M(z,x),y)


![](https://info.blaisepascal.fr/wp-content/uploads/2021/07/drawit-diagram-9.png "drawit diagram")
### Le système RSA

Le système de chiffrement asymétrique RSA est le plus couramment utilisé aujourd’hui.

Il a été proposé dans les années 1970 par 3 cryptologues : Ron **R**ivest, Adi **S**hamir et Len **A**dleman.

Il consiste en la création, pour chacun des deux participants, de deux clés (publique et privée), liées entre elles de telle sorte que le chiffrement d’un message par la clé publique, puis par la clé privé redonne le message original, et que l’opération inverse est vraie aussi.


## Authentification des participants

### Attaque de l’homme du milieu

Il ne suffit pas de chiffrer les messages échangés : si une personne malveillante parvient à se faire passer pour un des correspondants, elle peut intercepter les données, et même les modifier.

![](https://info.blaisepascal.fr/wp-content/uploads/2021/07/drawit-diagram-14.png "drawit diagram")

### Certificats de tiers de confiance

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

## Protocole HTTPS

Afin d’envoyer à des sites de confiance des données sensibles (mot de passe, identité, santé, …), il faut utiliser une stratégie mettant en œuvre **le protocole TLS** (_Transport Layer Security_), utilisant les deux types de chiffrement :

-   le chiffrement symétrique (AES) à l’aide d’une clé secrète
-   le chiffrement asymétrique (RSA) pour l’échange en toute sécurité de cette clé secrète


![](https://info.blaisepascal.fr/wp-content/uploads/2021/07/drawit-diagram-15.png "drawit diagram")


**HTTPS = HTTP + TLS**

