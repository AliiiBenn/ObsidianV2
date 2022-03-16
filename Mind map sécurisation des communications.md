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
- Chiffrement asymétrique
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
- Chiffr
    
