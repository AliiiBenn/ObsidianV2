tags : 
links : [[NSI]], [[020 MOC Informatique]]

****

<h2 style="text-align: center;"> Sécurisation des communications </h2>

****



La sécurisation doit permettre d'assurer :

- la **confidentialité** du message échangé
- son **authenticité**
- son **intégrité**


![](https://www.cnil.fr/sites/default/files/styles/contenu-generique-visuel/public/thumbnails/image/1_usages_0.png?itok=0IZNGUET)


### Les principales fonctions

...


## Vocabulaire

- Coder (encoder)
	- représenter l'information par un ensemble de signes prédéfinis

- Décoder
	- passer des signes au message de base dans le but d'extraire les informations

- Chiffrer
	- Fait de rendre une suite de signes incompréhensible avec un clé de déchiffrement

- Déchiffrer
	- Ici on utilise la clé de chiffrement pour récuperer la suite de signes originale

- Décrypter
	- Cette fois on récupère la suite de signes mais sans la clé de déchiffrement (on utilise du bruteforce)


## Chiffrement symétrique

*Le chiffrement symétrique est une méthode de chiffrement où la clé sert à chiffrer et déchiffrer en même temps. Elle fait appel à deux fonctions.*

**c(_m_, _k_)**

- **m** : message en clair
- **k** : clé de chiffrement

**d(_s_, _k_)**

- **s** : message chiffré
- **k** : clé de chiffrement

> Si la clé sert aux deux elle doit donc être connue par les deux parties


![500](https://info.blaisepascal.fr/wp-content/uploads/2021/07/drawit-diagram-7.png "drawit diagram")


[[Le code de César]]
[[Le code XOR]]
[[Algorithme AES]]


## Chiffrement asymétrique


Pour que deux participants à une communication puissent obtenir une clé symétrique commune, il existe plusieurs possibilités :

-   soit ils se l’échangent par un canal de communication non sûr, ce qui présente un fort risque ;
-   soit ils se rencontrent physiquement pour faire l’échange sur un support physique (papier, clé USB, …)
-   soit ils utilisent une des techniques de cryptographie asymétrique…

 ![500](https://info.blaisepascal.fr/wp-content/uploads/2021/07/drawit-diagram-8.png "drawit diagram")



[[Protocole d’échange de clés de Diffie-Hellman]]
[[Le système RSA]]

## Authentification des participants

[[Attaque de l'homme du milieu]]
[[Certificats de tiers de confiance]]

## Protocole HTTPS
[[Protocole HTTPS]]



---


La sécurisation des communications peut être réalisée grâce à une science appelée **cryptologie** (du grec « science du secret »), qui réunit la **cryptographie** (« écriture secrète ») et la **cryptanalyse** (étude des attaques contre les mécanismes de cryptographie).

La sécurisation doit permettre d’assurer :

-   la **confidentialité** du message échangé,
-   son **authenticité** (qui a envoyé ce message ?),
-   son **intégrité** (est-ce qu’il a été modifié ?).

![700](https://www.cnil.fr/sites/default/files/styles/contenu-generique-visuel/public/thumbnails/image/1_usages_0.png?itok=0IZNGUET)


## Vocabulaire
- Coder
	- ...
- Décoder
	- ...
- Chiffrer
	- ...
- Déchiffrer
	- ...
- Décrypter
	- ...
- Cryptanalyse
	- ...

## Chiffrement symétrique

*Explications puis image*

### Code de César

*Explications puis image*

### Code XOR

*Explications puis image*

### Algorithme AES

*Explications et "à retenir"*

## Chiffrement asymétrique

*Explications puis image*

### Protocole d’échange de clés de Diffie-Hellman

*Explications puis image*

### Le système RSA

*Explications*

## Authentification des participants

### Attaque de l’homme du milieu

*Explications puis image*

### Certificats de tiers de confiance

*Explications et Analogie*

## Protocole HTTPS

*Explications puis image*