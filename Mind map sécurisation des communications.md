tags : 
links : [[NSI]], [[020 MOC Informatique]], [[Sécurisation des communications]]

****

<h2 style="text-align: center;"> Mind map sécurisation des communications </h2>

****




- Quelle est la Science qui permet de réaliser la sécurisation des communication ?
	- Cette science est la cryptologie qui réunit la cryptographie et la cryptanalyse
- La sécurisation doit permettre d’assurer ?
	-   la **confidentialité** du message échangé,
	-   son **authenticité** (qui a envoyé ce message ?),
	-   son **intégrité** (est-ce qu’il a été modifié ?).
- Vocabulaire sécurisation des données
	- Coder
		- informations -> suite de signes
	- Décoder 
		- signes -> information
	- Chiffrer
		- Suite de signes incompréhensible avec clé de chiffrement
	- Déchiffrer
		- retrouver la suite de signes originale à partir d’un message chiffré, en utilisant une _clé de déchiffrement_.
	- Décrypter
		- Décrypter c'est retrouver la suites de signes originale **à partir d'un message chiffré** mais *sans clé de déchiffrement*.
	- Cryptanalyse
		- La cryptanalyse est l'ensemble des techniques utilisées pour decrypter un message et on appelle cela une attaque
- Chiffrement symétrique
	- Qu'est-ce que le chiffrement symétrique ?
		- Le chiffrement symétrique est un chiffrement ou la clé pour chiffrer est aussi celle pour déchiffrer, on l'appelle aussi le chiffrement à clé symétrique.
	- On fait appel à combien de fonctions ?
		- Ici, on fait appel à deux fonctions :
			- Lesquelles ?
				- La fonction de chiffrement *c* avec deux arguments **m** et **k** qui représentent le message en clair et la clé de chiffrement.
				- Il y aussi la fonction de déchiffrement *d* qui prend elle aussi deux arguments **s** et **k**, le message chiffré et une fois encore la clé de chiffrement
	- Des exemples de chiffrement symétrique
		- Code de César 
			- C'est quoi ?
				- Le code de César est un **chiffrement par décalage**, ici la clé de chiffrement/déchiffrement est un nombre entier. On chiffre en décalant la lettre non chiffrée d'un certain rang dans l'alphabet et on déchiffre dans le sens inverse
		- Code XOR
			- Au lieu de réaliser un décalage de toute les lettres du message à chiffrer d’un nombre fixe de lettres, on réalise une opération **ou exclusif** (XOR) sur les codes (ascii, unicode, …) des lettres du message avec celle d’une clé (chaîne de caractères de taille quelconque).
		- Algorithme AES
			- C'est l'un des algorithmes de chiffrement symétrique les plus utilisé. Il est très similaire au chiffrement XOR 
				- une clé initiale est étendue (mais pas par simple répétition),taille de la clé : 128, 192 ou 256 bits
				- le message et la clé sont mélangés (mais pas uniquement par l’opération ⊕), de façon réversible
- Chiffrement Asymétrique
	- Pour que deux participants à une communication puissent obtenir une clé symétrique commune, il existe plusieurs possibilités :
		- soit ils se l’échangent par un canal de communication non sûr, ce qui présente un fort risque ;
		- soit ils se rencontrent physiquement pour faire l’échange sur un support physique (papier, clé USB, …)
		-  soit ils utilisent une des techniques de cryptographie asymétrique …
	- Protocole d’échange de clés de Diffie-Hellman
		- C'est quoi ?
			- Afin d’utiliser une méthode de chiffrement symétrique, deux participants doivent au préalable convenir d’une **clé de chiffrement commune**, via un canal de communication non sûr.
		- Comment il fonctionne ?
			- Le protocole repose sur une fonction de « mélange » M à deux variables entières telle que :
				-   si on connait M(x,y) et x, alors on ne peut pas retrouver y (ou alors très difficilement)
				-   pour tous entiers x, y et z : M(M(x,y),z)=M(M(z,x),y)
	- Le système RSA
		- C'est quoi ?
			- Il consiste en la création, pour chacun des deux participants, de deux clés (publique et privée), liées entre elles de telle sorte que le chiffrement d’un message par la clé publique, puis par la clé privé redonne le message original, et que l’opération inverse est vraie aussi.
			- Par qui ?
				- Il a été proposé dans les années 1970 par 3 cryptologues : Ron **R**ivest, Adi **S**hamir et Len **A**dleman.
			- Spécificité ?
				- Le système de chiffrement asymétrique RSA est le plus couramment utilisé aujourd’hui.
- Authentification des participants
	- Attaque de l'homme du milieu
		- Il ne suffit pas de chiffrer les messages échangés : si une personne malveillante parvient à se faire passer pour un des correspondants, elle peut intercepter les données, et même les modifier.
	- Certificats de tiers de confiance
		- Pour authentifier les serveurs lors des communications sur Internet, on leur demande de fournir un **certificat numérique** (ou **certificat à clé publique**).
		- Qui les délivre ?
			- Les certificats numériques sont délivrés aux administrateurs de sites par des **autorités de certification** (_Certificate Authority_ – CA) : des organismes habilités (entreprises spécialisées, associations à but non lucratifs, états). Pour Internet il sont au format X.509, un format de fichier binaire comprenant :
				-  l’identifiant de l’AC
				-   l’identifiant de l’entité certifiée
				-   la date de validité
				-   la clé publique de l’entité certifiée
				-   l’algorithme utilisé pour la signature du certificat
				-   la signature du certificat
		
- Protocole HTTPS
	- C'est quoi ?
		- Afin d’envoyer à des sites de confiance des données sensibles (mot de passe, identité, santé, …), il faut utiliser une stratégie mettant en œuvre **le protocole TLS** (_Transport Layer Security_), utilisant les deux types de chiffrement :
			-   le chiffrement symétrique (AES) à l’aide d’une clé secrète
			-   le chiffrement asymétrique (RSA) pour l’échange en toute sécurité de cette clé secrète