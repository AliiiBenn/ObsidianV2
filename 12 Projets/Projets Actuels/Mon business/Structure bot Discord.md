---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
Les Guildes (class)
---
description :Les membres de chaque serveur peuvent créer leur guilde (si voulu seulement ceux ayant une certaine condition comme un rôle). Ces guildes seront comme des minis serveurs dans chaque serveur. les chefs de guildes pourront inviter des nouveaux membres. Selon le niveau de la guilde les membres auront différents avantages
---
attributs :
nom : str
chef : member ou nextcord.member
liste_membres : list
niveau : int
xp : float ou int
pnj : list[PNJ]
liste_avantages : list
banque_personnelle : None ou Bank
---
méthodes :
--- ^T2D6RNpP

Membres de la guilde (class)
---
description : Chaque membre appartenant à une guilde est un objet de type GuildMember même pour le chef. Chaque membre a un role spécifique qui peut être promu
---
attributs :
gived_money : int
grade : str
permissions_list : list

---
méthodes :
--- ^CYxU1qv1

Un membre rejoint le serveur ^DsCdoMn6

Base de données du serveur ^IHoFnKti

On enregistre son identifiant
et le reste des données
dans la bdd ^8JG8oXe3

___________________________________________________________________________________________________
| Id membre | Nom membre | Argent | Guilde | Level | xp    | travail | personnage modern interior |
| string    | string     | float  | None   | int   | float | travail | png ou gif                 |
____________________________________________________________________________________________________ ^7gZtxOck

Structure de la 
base de données ^TERcQSTK

On envoie un message de bienvenue dans le channel voulu ^aTWT3s2s

Les admins du serveur ^3B4f7W37

Définissent le channel ^YqAe17Hh

Membres du serveur ^haq1SIfQ

Effet "nouveau membre" activé ^1vQBRUSh

Disent "bienvenue" ^HlqIdtfN

Gagnent + d'argent et/ou d'xp ^yiuwbjaN

Banque du serveur ^BiN7GkxQ

Création du compte du nouveau membre ^YZBROixl

Système de travail ^csUsh6fl

Obtient le rôle "au chomage" ^HMeeR5Yo

Peut choisir parmi une sélection de travaux
qui apportent chacun leur propre avantage ^T7CFTWlx

Compte bancaire
avec un certain découvert et un certain % d'intérêts  ^Lsr2vx2G

Peut ajouter ou
retirer de l'argent ^gZBNWw91

Envoie un % d'intérêts ^11y45v0r

Peut faire un prêt ^Wnk6e5K3

récupère chaque jour de l'argent
pour rembourser ^mjoU9BLk

warn ^1FsuKrFE

peuvent ^vK4C52fg

mauvais comportement ^vjta3Ogl

statuts de citoyen ^4vn14rGT

possède ^riiJr9Dm

devient un mauvais citoyen ^ltAaPRPR

Possibilité de bloquer ^wUJ70vBl

Guildes ^g4SQM2G2

Chef de Guilde ^n9fmr2Bp

Banque de guilde ^Di5uun1U

Niveau de Guilde ^mNoP2dQt

Avantages de Guildes ^iJsNjKjt

Politique de la Guilde (dictature etc...) ^PD7yTpZl

Membre de Guilde ^VoesOLDT

Membres de la Guilde ^MVYNB7dQ

Alliances de Guilde ^O5xRO1q5

Guerre de Guilde ^MacXT2t2

échanges entre les membres ^6vZd3NPm

PNJ de Guilde ^W95Ubwld

Bâtiments de Guildes qui donnent des avantages ^HEq1mePr

+ d'xp et d'argent ^HvPhBER6

accès à des channels ^AgiDPGyU

Don à la Guilde ^EBGxbNFR

Quêtes de Guilde ^jmbnNkUJ

Envoyer x messages ^Tx6aWnpc

Faire x de don ^Iun46Fy6

Donne de l'xp de Guilde ^JnsoWU6o

Exemple => ^F4h0U6OL

Succès de Guilde ^p4RUHpbj

Débloque des avantages ^BkolHhv8

Peut créer ^g0NWjKSo

Système de pets ^7uwX81Oe

Système de personnage ^hCmcJNuZ

Modern Interior ^DPKhivzB

Factions ^oTUr3BqE

Fermes ^DNdUBXsA

Système monétaire ^gMa1OJh9

Messages via telegram  ^K8aJ2mId

Leaderboard entre les guildes ^a5y3efOT

Leaderboard des membres ^TLvwofn2

Gif du personnage en idle ^seXjAy8s

Principe de citoyenneté ^ZPpNpoSs

Travail ^48J7dcJS

Membre ^255xuSOn

Créer une guilde ^9xYY4bQZ

Devient chef de la Guilde ^8J3TF01O

Guilde : Nesalia ^15IasHmj

Membres du serveur ^xiUFUdEV

peut les inviter ^MBjJ2rmK

Chef : Nesalia ^0eTKo8kH

Si ils acceptent ils
deviennent membres ^WXKAaJW5

peut choisir la politique
de la Guilde ^7PYjziEK

Système de politique de la Guilde ^3ApcICCP

Alliances avec d'autres Guildes ^LbPN2iAr

Guerres avec d'autres Guildes ^3LDXauWa

Système de niveau de Guilde ^bmfH0i1f

Quêtes de Guilde ^ytvLNNP9

Système de succès ^YFUoQ2sf

Donne de l'xp ^Jqqfa0xG

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://excalidraw.com",
	"elements": [
		{
			"type": "rectangle",
			"version": 229,
			"versionNonce": 1230293669,
			"isDeleted": false,
			"id": "pC_NQ-Wwe0NGkRimo_Zhp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -491.01704240089987,
			"y": -979.733297915294,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 506,
			"height": 586,
			"seed": 1254528405,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "T2D6RNpP"
				}
			],
			"updated": 1655534422767,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1135,
			"versionNonce": 352396512,
			"isDeleted": false,
			"id": "T2D6RNpP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -486.01704240089987,
			"y": -974.733297915294,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 496,
			"height": 576,
			"seed": 1843175861,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840256,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Les Guildes (class)\n---\ndescription :Les membres de chaque serveur\npeuvent créer leur guilde (si voulu \nseulement ceux ayant une certaine \ncondition comme un rôle). Ces guildes \nseront comme des minis serveurs dans \nchaque serveur. les chefs de guildes \npourront inviter des nouveaux membres. \nSelon le niveau de la guilde les membres \nauront différents avantages\n---\nattributs :\nnom : str\nchef : member ou nextcord.member\nliste_membres : list\nniveau : int\nxp : float ou int\npnj : list[PNJ]\nliste_avantages : list\nbanque_personnelle : None ou Bank\n---\nméthodes :\n---",
			"rawText": "Les Guildes (class)\n---\ndescription :Les membres de chaque serveur peuvent créer leur guilde (si voulu seulement ceux ayant une certaine condition comme un rôle). Ces guildes seront comme des minis serveurs dans chaque serveur. les chefs de guildes pourront inviter des nouveaux membres. Selon le niveau de la guilde les membres auront différents avantages\n---\nattributs :\nnom : str\nchef : member ou nextcord.member\nliste_membres : list\nniveau : int\nxp : float ou int\npnj : list[PNJ]\nliste_avantages : list\nbanque_personnelle : None ou Bank\n---\nméthodes :\n---",
			"baseline": 571,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "pC_NQ-Wwe0NGkRimo_Zhp",
			"originalText": "Les Guildes (class)\n---\ndescription :Les membres de chaque serveur peuvent créer leur guilde (si voulu seulement ceux ayant une certaine condition comme un rôle). Ces guildes seront comme des minis serveurs dans chaque serveur. les chefs de guildes pourront inviter des nouveaux membres. Selon le niveau de la guilde les membres auront différents avantages\n---\nattributs :\nnom : str\nchef : member ou nextcord.member\nliste_membres : list\nniveau : int\nxp : float ou int\npnj : list[PNJ]\nliste_avantages : list\nbanque_personnelle : None ou Bank\n---\nméthodes :\n---"
		},
		{
			"type": "rectangle",
			"version": 100,
			"versionNonce": 470691333,
			"isDeleted": false,
			"id": "noPTVhmsimGJRTpYvQyFb",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -495.7539583356347,
			"y": -180.57670719963357,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 449.3345341271777,
			"height": 394,
			"seed": 1365677691,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "CYxU1qv1"
				}
			],
			"updated": 1655534422767,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 493,
			"versionNonce": 314054944,
			"isDeleted": false,
			"id": "CYxU1qv1",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -490.7539583356347,
			"y": -175.57670719963357,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 439.3345341271777,
			"height": 384,
			"seed": 2075620027,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840259,
			"link": null,
			"locked": false,
			"fontSize": 20.0457570550196,
			"fontFamily": 3,
			"text": "Membres de la guilde (class)\n---\ndescription : Chaque membre \nappartenant à une guilde est un objet\nde type GuildMember même pour le \nchef. Chaque membre a un role \nspécifique qui peut être promu\n---\nattributs :\ngived_money : int\ngrade : str\npermissions_list : list\n\n---\nméthodes :\n---",
			"rawText": "Membres de la guilde (class)\n---\ndescription : Chaque membre appartenant à une guilde est un objet de type GuildMember même pour le chef. Chaque membre a un role spécifique qui peut être promu\n---\nattributs :\ngived_money : int\ngrade : str\npermissions_list : list\n\n---\nméthodes :\n---",
			"baseline": 379,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "noPTVhmsimGJRTpYvQyFb",
			"originalText": "Membres de la guilde (class)\n---\ndescription : Chaque membre appartenant à une guilde est un objet de type GuildMember même pour le chef. Chaque membre a un role spécifique qui peut être promu\n---\nattributs :\ngived_money : int\ngrade : str\npermissions_list : list\n\n---\nméthodes :\n---"
		},
		{
			"type": "rectangle",
			"version": 433,
			"versionNonce": 1015381216,
			"isDeleted": false,
			"id": "IMjvHIBc8VbUTGFPROy5m",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -165.55216703493352,
			"y": -3321.567700970162,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 165.58358358358439,
			"height": 81.18418418418459,
			"seed": 701069147,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "DsCdoMn6"
				},
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "Yxd95os7SPS6sVH7x8P8x",
					"type": "arrow"
				},
				{
					"id": "1cGGeorB25-gWZHTeEQ4f",
					"type": "arrow"
				},
				{
					"id": "sshybHxABAZsL6XNKHZse",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 625,
			"versionNonce": 131595488,
			"isDeleted": false,
			"id": "DsCdoMn6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -160.55216703493352,
			"y": -3296.97560887807,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 155.58358358358439,
			"height": 32,
			"seed": 1379195867,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840265,
			"link": null,
			"locked": false,
			"fontSize": 13.932858231365769,
			"fontFamily": 3,
			"text": "Un membre rejoint \nle serveur",
			"rawText": "Un membre rejoint le serveur",
			"baseline": 29,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "IMjvHIBc8VbUTGFPROy5m",
			"originalText": "Un membre rejoint le serveur"
		},
		{
			"type": "rectangle",
			"version": 398,
			"versionNonce": 41112864,
			"isDeleted": false,
			"id": "EEBLiaK7-b2PN8y74INJp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 550.4748599920972,
			"y": -2922.6237570262165,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 172.01401401401532,
			"height": 85.20320320320376,
			"seed": 342317723,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "IHoFnKti"
				},
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "W61ML9OEJVG8auIExfr5G",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 616,
			"versionNonce": 1412757792,
			"isDeleted": false,
			"id": "IHoFnKti",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 555.4748599920972,
			"y": -2896.0221554246145,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 162.01401401401532,
			"height": 32,
			"seed": 2146030683,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840269,
			"link": null,
			"locked": false,
			"fontSize": 13.953360058623328,
			"fontFamily": 3,
			"text": "Base de données du \nserveur",
			"rawText": "Base de données du serveur",
			"baseline": 29,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "EEBLiaK7-b2PN8y74INJp",
			"originalText": "Base de données du serveur"
		},
		{
			"type": "arrow",
			"version": 1542,
			"versionNonce": 1233477856,
			"isDeleted": false,
			"id": "nedUsKK5O3O_rDUh2BfgD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 6.461846979088477,
			"y": -3261.3497102507963,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 540.7999557360429,
			"height": 352.01098630850083,
			"seed": 609115061,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840267,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 6.43043043043761,
				"focus": -0.4069514211848608
			},
			"endBinding": {
				"elementId": "EEBLiaK7-b2PN8y74INJp",
				"gap": 3.213057276965799,
				"focus": -0.29170462041017814
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					540.7999557360429,
					352.01098630850083
				]
			]
		},
		{
			"type": "text",
			"version": 630,
			"versionNonce": 1178227936,
			"isDeleted": false,
			"id": "8JG8oXe3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.6138914029734632,
			"x": 88.00989015154391,
			"y": -3106.7672692805,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 249,
			"height": 51,
			"seed": 829095899,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 14.673986510422113,
			"fontFamily": 3,
			"text": "On enregistre son identifiant\net le reste des données\ndans la bdd",
			"rawText": "On enregistre son identifiant\net le reste des données\ndans la bdd",
			"baseline": 48,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "On enregistre son identifiant\net le reste des données\ndans la bdd"
		},
		{
			"type": "rectangle",
			"version": 932,
			"versionNonce": 283765024,
			"isDeleted": false,
			"id": "WwfE_GbsBbg1rzKuB1d0j",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 973.2756607928914,
			"y": -2916.99713039959,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 849,
			"height": 183,
			"seed": 158766517,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "7gZtxOck"
				},
				{
					"id": "W61ML9OEJVG8auIExfr5G",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1452,
			"versionNonce": 970766560,
			"isDeleted": false,
			"id": "7gZtxOck",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 978.2756607928914,
			"y": -2859.49713039959,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 839,
			"height": 68,
			"seed": 7369819,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 14.302489610265992,
			"fontFamily": 3,
			"text": "___________________________________________________________________________________________________\n| Id membre | Nom membre | Argent | Guilde | Level | xp    | travail | personnage modern interior |\n| string    | string     | float  | None   | int   | float | travail | png ou gif                 |\n____________________________________________________________________________________________________",
			"rawText": "___________________________________________________________________________________________________\n| Id membre | Nom membre | Argent | Guilde | Level | xp    | travail | personnage modern interior |\n| string    | string     | float  | None   | int   | float | travail | png ou gif                 |\n____________________________________________________________________________________________________",
			"baseline": 65,
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "WwfE_GbsBbg1rzKuB1d0j",
			"originalText": "___________________________________________________________________________________________________\n| Id membre | Nom membre | Argent | Guilde | Level | xp    | travail | personnage modern interior |\n| string    | string     | float  | None   | int   | float | travail | png ou gif                 |\n____________________________________________________________________________________________________"
		},
		{
			"type": "text",
			"version": 731,
			"versionNonce": 1402117344,
			"isDeleted": false,
			"id": "TERcQSTK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.0023047704925023282,
			"x": 777.6536109931876,
			"y": -2900.3328223806084,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 161,
			"height": 42,
			"seed": 448057237,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 17.15737618510264,
			"fontFamily": 3,
			"text": "Structure de la \nbase de données",
			"rawText": "Structure de la \nbase de données",
			"baseline": 38,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Structure de la \nbase de données"
		},
		{
			"type": "arrow",
			"version": 1660,
			"versionNonce": 830002464,
			"isDeleted": false,
			"id": "W61ML9OEJVG8auIExfr5G",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 957.7918612038366,
			"y": -2869.7404416925488,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 219.81918760867256,
			"height": 11.502827546108165,
			"seed": 122859925,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840270,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "WwfE_GbsBbg1rzKuB1d0j",
				"gap": 15.483799589054797,
				"focus": 0.18660566576394913
			},
			"endBinding": {
				"elementId": "EEBLiaK7-b2PN8y74INJp",
				"gap": 15.483799589051557,
				"focus": -0.1386767631393293
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-219.81918760867256,
					-11.502827546108165
				]
			]
		},
		{
			"type": "rectangle",
			"version": 386,
			"versionNonce": 82575584,
			"isDeleted": false,
			"id": "xfaDIZbJGsVYk-FJu7zYn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 560.8941364113698,
			"y": -3677.187570840032,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1081184955,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "aTWT3s2s",
					"type": "text"
				},
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 702,
			"versionNonce": 296539360,
			"isDeleted": false,
			"id": "aTWT3s2s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 565.8941364113698,
			"y": -3668.59547874794,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 64,
			"seed": 1731349109,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840277,
			"link": null,
			"locked": false,
			"fontSize": 13.932858231365769,
			"fontFamily": 3,
			"text": "On envoie un \nmessage de \nbienvenue dans le \nchannel voulu",
			"rawText": "On envoie un message de bienvenue dans le channel voulu",
			"baseline": 61,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "xfaDIZbJGsVYk-FJu7zYn",
			"originalText": "On envoie un message de bienvenue dans le channel voulu"
		},
		{
			"type": "arrow",
			"version": 890,
			"versionNonce": 1910583584,
			"isDeleted": false,
			"id": "5U-diJVxi0P5j_BqoWlFg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 9.352594869828863,
			"y": -3290.332985170091,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 540.3333333333328,
			"height": 308.54114574903224,
			"seed": 532533589,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840274,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 9.321178321177996,
				"focus": 0.4921136344522625
			},
			"endBinding": {
				"elementId": "xfaDIZbJGsVYk-FJu7zYn",
				"gap": 11.208208208208134,
				"focus": 0.18268004763309798
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					540.3333333333328,
					-308.54114574903224
				]
			]
		},
		{
			"type": "rectangle",
			"version": 451,
			"versionNonce": 670315808,
			"isDeleted": false,
			"id": "QyyvyEZ4OHof3cgeMBok0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1114.9496919669255,
			"y": -4079.4653486178104,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1266262613,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "3B4f7W37",
					"type": "text"
				},
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"id": "EQbcAqSvt3iy-nRWeEsIO",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 706,
			"versionNonce": 1974444320,
			"isDeleted": false,
			"id": "3B4f7W37",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1119.9496919669255,
			"y": -4054.8732565257183,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 32,
			"seed": 2083002747,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840280,
			"link": null,
			"locked": false,
			"fontSize": 13.932858231365769,
			"fontFamily": 3,
			"text": "Les admins du \nserveur",
			"rawText": "Les admins du serveur",
			"baseline": 29,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "QyyvyEZ4OHof3cgeMBok0",
			"originalText": "Les admins du serveur"
		},
		{
			"type": "arrow",
			"version": 970,
			"versionNonce": 1929328864,
			"isDeleted": false,
			"id": "wxSOIO0M9nTNsdZfIlJB2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1105.526657158512,
			"y": -3995.841001761649,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 377.68463904130795,
			"height": 318.3348084620434,
			"seed": 168423221,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840279,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QyyvyEZ4OHof3cgeMBok0",
				"gap": 9.73385734774638,
				"focus": 0.31540035324839844
			},
			"endBinding": {
				"elementId": "xfaDIZbJGsVYk-FJu7zYn",
				"gap": 1,
				"focus": 0.26997434237125933
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-377.68463904130795,
					318.3348084620434
				]
			]
		},
		{
			"type": "text",
			"version": 256,
			"versionNonce": 955217120,
			"isDeleted": false,
			"id": "YqAe17Hh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.574932607495024,
			"x": 812.8803726476062,
			"y": -3866.1788120812726,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 207,
			"height": 19,
			"seed": 1595884245,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Définissent le channel",
			"rawText": "Définissent le channel",
			"baseline": 15,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Définissent le channel"
		},
		{
			"type": "rectangle",
			"version": 764,
			"versionNonce": 1364418848,
			"isDeleted": false,
			"id": "GXxOT1yr1ZiCJ64Up4wVa",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1938.6775178952958,
			"y": -3694.3233316007927,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 474593483,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "haq1SIfQ"
				},
				{
					"id": "J9993LsxLnmR4CCzmd-1m",
					"type": "arrow"
				},
				{
					"id": "DhxQGCqhTS0-LmJUY9NI5",
					"type": "arrow"
				},
				{
					"id": "-xCd7oCzAzwQE12YHk1Ng",
					"type": "arrow"
				},
				{
					"id": "KMPGMy19UakZRwOg72tCo",
					"type": "arrow"
				},
				{
					"id": "GN-5Gb0qF0ZbD7BzpX8O2",
					"type": "arrow"
				},
				{
					"id": "bnoNhAGEYLmAY4PuSaebN",
					"type": "arrow"
				},
				{
					"id": "79J7njpQ9357mYHoMYXNu",
					"type": "arrow"
				}
			],
			"updated": 1655573880397,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 477,
			"versionNonce": 165803232,
			"isDeleted": false,
			"id": "haq1SIfQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1943.6775178952958,
			"y": -3672.7312395087006,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1066588613,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840284,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Membres du \nserveur",
			"rawText": "Membres du serveur",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "GXxOT1yr1ZiCJ64Up4wVa",
			"originalText": "Membres du serveur"
		},
		{
			"type": "rectangle",
			"version": 556,
			"versionNonce": 45446432,
			"isDeleted": false,
			"id": "WfwE0REzk7YrM8kxHVCye",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 926.5941845619618,
			"y": -3204.3233316007927,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1243914347,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "1vQBRUSh"
				},
				{
					"id": "Yxd95os7SPS6sVH7x8P8x",
					"type": "arrow"
				},
				{
					"id": "SWOnAv2UC9yLerYg_m-V9",
					"type": "arrow"
				}
			],
			"updated": 1655573880400,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 320,
			"versionNonce": 556040480,
			"isDeleted": false,
			"id": "1vQBRUSh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 931.5941845619618,
			"y": -3182.7312395087006,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1426720651,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840287,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Effet \"nouveau \nmembre\" activé",
			"rawText": "Effet \"nouveau membre\" activé",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "WfwE0REzk7YrM8kxHVCye",
			"originalText": "Effet \"nouveau membre\" activé"
		},
		{
			"type": "arrow",
			"version": 863,
			"versionNonce": 1737513184,
			"isDeleted": false,
			"id": "Yxd95os7SPS6sVH7x8P8x",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 13.76085122862878,
			"y": -3252.6280418216566,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 903.3333333333333,
			"height": 87.38420836018668,
			"seed": 857493163,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840286,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 13.729434679977913,
				"focus": 0.39115587186910333
			},
			"endBinding": {
				"elementId": "WfwE0REzk7YrM8kxHVCye",
				"gap": 9.499999999999773,
				"focus": -0.15292572190630827
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					903.3333333333333,
					87.38420836018668
				]
			]
		},
		{
			"type": "rectangle",
			"version": 610,
			"versionNonce": 853543200,
			"isDeleted": false,
			"id": "ULRWp4_f6XfsGPg6EmGQv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1475.3441845619618,
			"y": -3404.3233316007927,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1118088549,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "HlqIdtfN"
				},
				{
					"id": "J9993LsxLnmR4CCzmd-1m",
					"type": "arrow"
				},
				{
					"id": "SWOnAv2UC9yLerYg_m-V9",
					"type": "arrow"
				}
			],
			"updated": 1655573880402,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 345,
			"versionNonce": 564979936,
			"isDeleted": false,
			"id": "HlqIdtfN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1480.3441845619618,
			"y": -3382.7312395087006,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 2015449451,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840289,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Disent \n\"bienvenue\"",
			"rawText": "Disent \"bienvenue\"",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ULRWp4_f6XfsGPg6EmGQv",
			"originalText": "Disent \"bienvenue\""
		},
		{
			"type": "arrow",
			"version": 1225,
			"versionNonce": 1194810656,
			"isDeleted": false,
			"id": "J9993LsxLnmR4CCzmd-1m",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1966.4892287700704,
			"y": -3609.1561281399463,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 320.64504420810863,
			"height": 207.81625437949424,
			"seed": 470186789,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840288,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 3.98301927666148,
				"focus": -0.09330318167086217
			},
			"endBinding": {
				"elementId": "ULRWp4_f6XfsGPg6EmGQv",
				"gap": 4.5,
				"focus": 0.20237968058691488
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-320.64504420810863,
					207.81625437949424
				]
			]
		},
		{
			"type": "arrow",
			"version": 1006,
			"versionNonce": 1586411808,
			"isDeleted": false,
			"id": "SWOnAv2UC9yLerYg_m-V9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1472.1862766540535,
			"y": -3324.54255864125,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 366.3420920920921,
			"height": 151.85658564605592,
			"seed": 412984933,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840288,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ULRWp4_f6XfsGPg6EmGQv",
				"gap": 3.1579079079083385,
				"focus": -0.04632691692877833
			},
			"endBinding": {
				"elementId": "WfwE0REzk7YrM8kxHVCye",
				"gap": 13.249999999999545,
				"focus": 0.4125870453106294
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-366.3420920920921,
					151.85658564605592
				]
			]
		},
		{
			"type": "text",
			"version": 318,
			"versionNonce": 1629741344,
			"isDeleted": false,
			"id": "yiuwbjaN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.887495715124999,
			"x": 1148.3441845619614,
			"y": -3272.4812395087,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 273,
			"height": 19,
			"seed": 1739184587,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Gagnent + d'argent et/ou d'xp",
			"rawText": "Gagnent + d'argent et/ou d'xp",
			"baseline": 15,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Gagnent + d'argent et/ou d'xp"
		},
		{
			"type": "rectangle",
			"version": 448,
			"versionNonce": 1686160608,
			"isDeleted": false,
			"id": "guHapAJGLcWlF8xhpuCro",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1051.5941845619618,
			"y": -3566.8233316007927,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 2013715173,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "BiN7GkxQ"
				},
				{
					"id": "1cGGeorB25-gWZHTeEQ4f",
					"type": "arrow"
				},
				{
					"id": "UDg5hDDwBYPm7CDLc0wqo",
					"type": "arrow"
				},
				{
					"id": "KMPGMy19UakZRwOg72tCo",
					"type": "arrow"
				}
			],
			"updated": 1655573880405,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 187,
			"versionNonce": 586618080,
			"isDeleted": false,
			"id": "BiN7GkxQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1056.5941845619618,
			"y": -3545.2312395087006,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 253040683,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840290,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Banque du \nserveur",
			"rawText": "Banque du serveur",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "guHapAJGLcWlF8xhpuCro",
			"originalText": "Banque du serveur"
		},
		{
			"type": "arrow",
			"version": 631,
			"versionNonce": 836553952,
			"isDeleted": false,
			"id": "1cGGeorB25-gWZHTeEQ4f",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 10.01085122862878,
			"y": -3269.4212119125577,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 1032.0833333333333,
			"height": 236.2084787711451,
			"seed": 533195877,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840289,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 9.979434679977913,
				"focus": 0.5506615256955377
			},
			"endBinding": {
				"elementId": "guHapAJGLcWlF8xhpuCro",
				"gap": 9.499999999999773,
				"focus": 0.00954100362061119
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1032.0833333333333,
					-236.2084787711451
				]
			]
		},
		{
			"type": "text",
			"version": 219,
			"versionNonce": 34041056,
			"isDeleted": false,
			"id": "YZBROixl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 6.068613935690513,
			"x": 547.0941845619618,
			"y": -3455.814572842033,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 339,
			"height": 19,
			"seed": 1299738987,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Création du compte du nouveau membre",
			"rawText": "Création du compte du nouveau membre",
			"baseline": 15,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Création du compte du nouveau membre"
		},
		{
			"type": "rectangle",
			"version": 368,
			"versionNonce": 370823456,
			"isDeleted": false,
			"id": "HFN0LJOFfZ00KrkH-xKW3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 184.9275178952953,
			"y": -3957.6566649341257,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 120835051,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "csUsh6fl"
				},
				{
					"id": "sshybHxABAZsL6XNKHZse",
					"type": "arrow"
				},
				{
					"id": "DhxQGCqhTS0-LmJUY9NI5",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 126,
			"versionNonce": 941579488,
			"isDeleted": false,
			"id": "csUsh6fl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 189.9275178952953,
			"y": -3936.0645728420336,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1187436331,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840293,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Système de \ntravail",
			"rawText": "Système de travail",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "HFN0LJOFfZ00KrkH-xKW3",
			"originalText": "Système de travail"
		},
		{
			"type": "arrow",
			"version": 394,
			"versionNonce": 1627486432,
			"isDeleted": false,
			"id": "sshybHxABAZsL6XNKHZse",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -50.405815438037905,
			"y": -3337.0645728420336,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 260.00000000000057,
			"height": 526.666666666667,
			"seed": 424445509,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840291,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 15.496871871871235,
				"focus": 0.04536642286160405
			},
			"endBinding": {
				"elementId": "HFN0LJOFfZ00KrkH-xKW3",
				"gap": 12.741241241240687,
				"focus": 0.3106025656940977
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					260.00000000000057,
					-526.666666666667
				]
			]
		},
		{
			"type": "text",
			"version": 153,
			"versionNonce": 1169168608,
			"isDeleted": false,
			"id": "HMeeR5Yo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.194902275407166,
			"x": -83.73914877137122,
			"y": -3587.8979061753666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 264,
			"height": 19,
			"seed": 1034983691,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Obtient le rôle \"au chomage\"",
			"rawText": "Obtient le rôle \"au chomage\"",
			"baseline": 15,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Obtient le rôle \"au chomage\""
		},
		{
			"type": "arrow",
			"version": 573,
			"versionNonce": 1150747936,
			"isDeleted": false,
			"id": "DhxQGCqhTS0-LmJUY9NI5",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1987.292156137969,
			"y": -3707.0645728420336,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 1632.207166300982,
			"height": 563.3333333333333,
			"seed": 1463275531,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840292,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 12.741241241241141,
				"focus": -0.36204527365605604
			},
			"endBinding": {
				"elementId": "HFN0LJOFfZ00KrkH-xKW3",
				"gap": 4.721786972952941,
				"focus": -0.07312159079974813
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-21.03130490934018,
					-330
				],
				[
					-906.0313049093402,
					-563.3333333333333
				],
				[
					-1632.207166300982,
					-252.83055122104497
				]
			]
		},
		{
			"type": "text",
			"version": 291,
			"versionNonce": 1308228832,
			"isDeleted": false,
			"id": "T7CFTWlx",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.2742481157964587,
			"x": 1321.2608512286292,
			"y": -4254.564572842034,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 403,
			"height": 38,
			"seed": 870660933,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Peut choisir parmi une sélection de travaux\nqui apportent chacun leur propre avantage",
			"rawText": "Peut choisir parmi une sélection de travaux\nqui apportent chacun leur propre avantage",
			"baseline": 34,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Peut choisir parmi une sélection de travaux\nqui apportent chacun leur propre avantage"
		},
		{
			"type": "rectangle",
			"version": 353,
			"versionNonce": 609796384,
			"isDeleted": false,
			"id": "wutD40emUmHK1V-AY5nnH",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1528.2608512286288,
			"y": -3684.323331600793,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 105,
			"seed": 805248779,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "Lsr2vx2G"
				},
				{
					"id": "-xCd7oCzAzwQE12YHk1Ng",
					"type": "arrow"
				},
				{
					"id": "UDg5hDDwBYPm7CDLc0wqo",
					"type": "arrow"
				},
				{
					"id": "GN-5Gb0qF0ZbD7BzpX8O2",
					"type": "arrow"
				},
				{
					"id": "Qebm8UBY6Szv_esGLjEWt",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 194,
			"versionNonce": 1692103968,
			"isDeleted": false,
			"id": "Lsr2vx2G",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1533.2608512286288,
			"y": -3679.323331600793,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 95,
			"seed": 1794090469,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840296,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Compte bancaire\navec un certain \ndécouvert et un \ncertain % \nd'intérêts ",
			"rawText": "Compte bancaire\navec un certain découvert et un certain % d'intérêts ",
			"baseline": 91,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "wutD40emUmHK1V-AY5nnH",
			"originalText": "Compte bancaire\navec un certain découvert et un certain % d'intérêts "
		},
		{
			"type": "arrow",
			"version": 386,
			"versionNonce": 971030752,
			"isDeleted": false,
			"id": "-xCd7oCzAzwQE12YHk1Ng",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1929.5941845619627,
			"y": -3643.924806637995,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 225.00000000000045,
			"height": 5.181908168163318,
			"seed": 1747525989,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840295,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 9.08333333333303,
				"focus": -0.28061541661108286
			},
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 10.333333333333485,
				"focus": -0.35714689386866405
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-225.00000000000045,
					-5.181908168163318
				]
			]
		},
		{
			"type": "arrow",
			"version": 382,
			"versionNonce": 1171629280,
			"isDeleted": false,
			"id": "UDg5hDDwBYPm7CDLc0wqo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1218.5941845619618,
			"y": -3535.9163546187865,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 294.33333333333394,
			"height": 85.33798294849566,
			"seed": 1529664901,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840295,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "guHapAJGLcWlF8xhpuCro",
				"gap": 1,
				"focus": 0.22688328866875002
			},
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 15.33333333333303,
				"focus": 0.2343302237454191
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					294.33333333333394,
					-85.33798294849566
				]
			]
		},
		{
			"type": "text",
			"version": 107,
			"versionNonce": 668938528,
			"isDeleted": false,
			"id": "gZBNWw91",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.03521578743903753,
			"x": 1737.8584151929472,
			"y": -3665.93178624328,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 196,
			"height": 42,
			"seed": 1963874181,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 17.526177208300222,
			"fontFamily": 3,
			"text": "Peut ajouter ou\nretirer de l'argent",
			"rawText": "Peut ajouter ou\nretirer de l'argent",
			"baseline": 38,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Peut ajouter ou\nretirer de l'argent"
		},
		{
			"type": "text",
			"version": 82,
			"versionNonce": 767553760,
			"isDeleted": false,
			"id": "11y45v0r",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 6.021140806831623,
			"x": 1254.5941845619627,
			"y": -3597.897906175368,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 207,
			"height": 19,
			"seed": 2001044389,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Envoie un % d'intérêts",
			"rawText": "Envoie un % d'intérêts",
			"baseline": 15,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Envoie un % d'intérêts"
		},
		{
			"type": "arrow",
			"version": 313,
			"versionNonce": 1217383712,
			"isDeleted": false,
			"id": "KMPGMy19UakZRwOg72tCo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1946.2608512286301,
			"y": -3707.064572842035,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 788.3333333333339,
			"height": 243.33333333333337,
			"seed": 1132837579,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840290,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 12.741241241242506,
				"focus": -0.029532190026790337
			},
			"endBinding": {
				"elementId": "guHapAJGLcWlF8xhpuCro",
				"gap": 15.241241241242506,
				"focus": -0.27623494779052754
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-158.33333333333348,
					-118.33333333333337
				],
				[
					-553.3333333333335,
					-101.66666666666663
				],
				[
					-788.3333333333339,
					125
				]
			]
		},
		{
			"type": "text",
			"version": 75,
			"versionNonce": 1448006880,
			"isDeleted": false,
			"id": "Wnk6e5K3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1539.5941845619636,
			"y": -3861.2312395087015,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 170,
			"height": 19,
			"seed": 608476581,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Peut faire un prêt",
			"rawText": "Peut faire un prêt",
			"baseline": 15,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Peut faire un prêt"
		},
		{
			"type": "arrow",
			"version": 510,
			"versionNonce": 1735104800,
			"isDeleted": false,
			"id": "GN-5Gb0qF0ZbD7BzpX8O2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1236.2608512286306,
			"y": -3677.0645728420345,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 656.6666666666661,
			"height": 370,
			"seed": 1887227019,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840295,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 22.25875875875863,
				"focus": -0.5712788557578035
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-135,
					-61.66666666666663
				],
				[
					-235,
					15
				],
				[
					-188.33333333333303,
					123.33333333333337
				],
				[
					-293.33333333333303,
					80
				],
				[
					-308.33333333333303,
					278.33333333333337
				],
				[
					36.66666666666697,
					308.33333333333337
				],
				[
					348.33333333333303,
					120
				]
			]
		},
		{
			"type": "text",
			"version": 110,
			"versionNonce": 1398880480,
			"isDeleted": false,
			"id": "mjoU9BLk",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 6.206216836395926,
			"x": 1046.2608512286306,
			"y": -3404.5645728420345,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 300,
			"height": 38,
			"seed": 1626640747,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "récupère chaque jour de l'argent\npour rembourser",
			"rawText": "récupère chaque jour de l'argent\npour rembourser",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "récupère chaque jour de l'argent\npour rembourser"
		},
		{
			"type": "rectangle",
			"version": 358,
			"versionNonce": 2031306016,
			"isDeleted": false,
			"id": "-fvDbmDO5XREpcVRBq3qw",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2316.5941845619654,
			"y": -3984.3233316007936,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1223986949,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "1FsuKrFE"
				},
				{
					"id": "bnoNhAGEYLmAY4PuSaebN",
					"type": "arrow"
				},
				{
					"id": "EQbcAqSvt3iy-nRWeEsIO",
					"type": "arrow"
				},
				{
					"id": "K8N9Zlx1GiPIvfLxv6H5d",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 55,
			"versionNonce": 1903577312,
			"isDeleted": false,
			"id": "1FsuKrFE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2321.5941845619654,
			"y": -3953.2312395087015,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1679055115,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573880418,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "warn",
			"rawText": "warn",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "-fvDbmDO5XREpcVRBq3qw",
			"originalText": "warn"
		},
		{
			"type": "arrow",
			"version": 365,
			"versionNonce": 1609552160,
			"isDeleted": false,
			"id": "bnoNhAGEYLmAY4PuSaebN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2121.2608512286324,
			"y": -3692.0645728420345,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 201.66666666666652,
			"height": 200,
			"seed": 423374507,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840297,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 16.583333333336668,
				"focus": 0.49165156777165553
			},
			"endBinding": {
				"elementId": "-fvDbmDO5XREpcVRBq3qw",
				"gap": 11.074574574574626,
				"focus": 0.19825202265511924
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					201.66666666666652,
					-200
				]
			]
		},
		{
			"type": "arrow",
			"version": 367,
			"versionNonce": 806923552,
			"isDeleted": false,
			"id": "EQbcAqSvt3iy-nRWeEsIO",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1289.5941845619654,
			"y": -4035.397906175367,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 1011.6666666666665,
			"height": 95,
			"seed": 474927211,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840297,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QyyvyEZ4OHof3cgeMBok0",
				"gap": 8.644492595039992,
				"focus": -0.10603186970106594
			},
			"endBinding": {
				"elementId": "-fvDbmDO5XREpcVRBq3qw",
				"gap": 15.333333333333485,
				"focus": -0.25972861654361323
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1011.6666666666665,
					95
				]
			]
		},
		{
			"type": "text",
			"version": 48,
			"versionNonce": 772655328,
			"isDeleted": false,
			"id": "vK4C52fg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.10238051025009831,
			"x": 1691.0941845619654,
			"y": -4019.564572842034,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 67,
			"height": 19,
			"seed": 682627275,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "peuvent",
			"rawText": "peuvent",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "peuvent"
		},
		{
			"type": "text",
			"version": 119,
			"versionNonce": 1496823072,
			"isDeleted": false,
			"id": "vjta3Ogl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.4773818130955885,
			"x": 2108.4275178952994,
			"y": -3806.231239508701,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 189,
			"height": 19,
			"seed": 695146923,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "mauvais comportement",
			"rawText": "mauvais comportement",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "mauvais comportement"
		},
		{
			"type": "rectangle",
			"version": 366,
			"versionNonce": 794923232,
			"isDeleted": false,
			"id": "EokmLKLjvlpzZclmHMqxx",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2164.9275178952976,
			"y": -3459.3233316007927,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1064307627,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "4vn14rGT"
				},
				{
					"id": "79J7njpQ9357mYHoMYXNu",
					"type": "arrow"
				},
				{
					"id": "K8N9Zlx1GiPIvfLxv6H5d",
					"type": "arrow"
				}
			],
			"updated": 1655573880419,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 107,
			"versionNonce": 793541856,
			"isDeleted": false,
			"id": "4vn14rGT",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2169.9275178952976,
			"y": -3437.7312395087006,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 767993291,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840300,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "statuts de \ncitoyen",
			"rawText": "statuts de citoyen",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "EokmLKLjvlpzZclmHMqxx",
			"originalText": "statuts de citoyen"
		},
		{
			"type": "arrow",
			"version": 352,
			"versionNonce": 2136119520,
			"isDeleted": false,
			"id": "79J7njpQ9357mYHoMYXNu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2071.2608512286315,
			"y": -3602.064572842033,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 105,
			"height": 133.33333333333348,
			"seed": 1265519435,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840299,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 11.074574574574626,
				"focus": -0.07737776600170115
			},
			"endBinding": {
				"elementId": "EokmLKLjvlpzZclmHMqxx",
				"gap": 9.407907907907202,
				"focus": -0.28087947846043554
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					105,
					133.33333333333348
				]
			]
		},
		{
			"type": "text",
			"version": 93,
			"versionNonce": 1703561504,
			"isDeleted": false,
			"id": "riiJr9Dm",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.902867268309075,
			"x": 2097.7608512286324,
			"y": -3564.564572842033,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 67,
			"height": 19,
			"seed": 1652099525,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "possède",
			"rawText": "possède",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "possède"
		},
		{
			"type": "arrow",
			"version": 269,
			"versionNonce": 1197991200,
			"isDeleted": false,
			"id": "K8N9Zlx1GiPIvfLxv6H5d",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2488.0804375238004,
			"y": -3895.804418465734,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 214.3333333333344,
			"height": 446.1326104815839,
			"seed": 98058475,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840299,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "-fvDbmDO5XREpcVRBq3qw",
				"gap": 9.15954258377792,
				"focus": -0.6948326411809257
			},
			"endBinding": {
				"elementId": "EokmLKLjvlpzZclmHMqxx",
				"gap": 1,
				"focus": 0.5553266989100012
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					58.18041370483161,
					143.73984562370106
				],
				[
					-156.1529196285028,
					446.1326104815839
				]
			]
		},
		{
			"type": "text",
			"version": 146,
			"versionNonce": 195306784,
			"isDeleted": false,
			"id": "ltAaPRPR",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.387129922608242,
			"x": 2315.4275178952985,
			"y": -3627.897906175366,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 245,
			"height": 19,
			"seed": 1024629579,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "Qebm8UBY6Szv_esGLjEWt",
					"type": "arrow"
				}
			],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "devient un mauvais citoyen",
			"rawText": "devient un mauvais citoyen",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "devient un mauvais citoyen"
		},
		{
			"type": "arrow",
			"version": 285,
			"versionNonce": 1234045152,
			"isDeleted": false,
			"id": "Qebm8UBY6Szv_esGLjEWt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2461.2608512286315,
			"y": -3617.064572842033,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 989.9999999999995,
			"height": 441.66666666666674,
			"seed": 774481067,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840295,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ltAaPRPR",
				"focus": -0.10513852446936424,
				"gap": 9.553198950408841
			},
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 15.59209209209348,
				"focus": 0.12772681245339587
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					185,
					138.33333333333348
				],
				[
					-61.666666666666515,
					441.66666666666674
				],
				[
					-516.6666666666665,
					371.66666666666674
				],
				[
					-804.9999999999995,
					53.333333333333485
				]
			]
		},
		{
			"type": "text",
			"version": 87,
			"versionNonce": 1679584,
			"isDeleted": false,
			"id": "wUJ70vBl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2187.7608512286315,
			"y": -3197.8979061753666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 207,
			"height": 19,
			"seed": 539870923,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Possibilité de bloquer",
			"rawText": "Possibilité de bloquer",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Possibilité de bloquer"
		},
		{
			"type": "rectangle",
			"version": 594,
			"versionNonce": 1168602400,
			"isDeleted": false,
			"id": "1QcHUVUYuXAo3BNGHUitu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3656.594184561966,
			"y": 575.676668399208,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1767230571,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "g4SQM2G2"
				}
			],
			"updated": 1655573816916,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 279,
			"versionNonce": 1924953312,
			"isDeleted": false,
			"id": "g4SQM2G2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3661.594184561966,
			"y": 606.7687604913003,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 23549573,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573880421,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Guildes",
			"rawText": "Guildes",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "1QcHUVUYuXAo3BNGHUitu",
			"originalText": "Guildes"
		},
		{
			"type": "rectangle",
			"version": 309,
			"versionNonce": 1759766565,
			"isDeleted": false,
			"id": "aB3PHG-N8KdcmCisynDGx",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3938.2608512286324,
			"y": 129.01000173254073,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1156595403,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "n9fmr2Bp"
				}
			],
			"updated": 1655535953196,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 32,
			"versionNonce": 1932153355,
			"isDeleted": false,
			"id": "n9fmr2Bp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3943.2608512286324,
			"y": 160.10209382463302,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 207573541,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535952023,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Chef de Guilde",
			"rawText": "Chef de Guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "aB3PHG-N8KdcmCisynDGx",
			"originalText": "Chef de Guilde"
		},
		{
			"type": "rectangle",
			"version": 371,
			"versionNonce": 1330835691,
			"isDeleted": false,
			"id": "d9VTmvD3VyMSt7kuC2LyC",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3939.9275178952985,
			"y": 245.67666839920747,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1378216427,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "Di5uun1U"
				}
			],
			"updated": 1655536349117,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 40,
			"versionNonce": 943793989,
			"isDeleted": false,
			"id": "Di5uun1U",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3944.9275178952985,
			"y": 276.76876049129976,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 466913253,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536349117,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Banque de guilde",
			"rawText": "Banque de guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "d9VTmvD3VyMSt7kuC2LyC",
			"originalText": "Banque de guilde"
		},
		{
			"type": "rectangle",
			"version": 352,
			"versionNonce": 1797865291,
			"isDeleted": false,
			"id": "NjvlZxkpOI0cNsWn29pD_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3946.5941845619664,
			"y": 470.6766683992073,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 347847429,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "mNoP2dQt"
				}
			],
			"updated": 1655535988634,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 39,
			"versionNonce": 646278885,
			"isDeleted": false,
			"id": "mNoP2dQt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3951.5941845619664,
			"y": 501.7687604912996,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1031533259,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535988635,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Niveau de Guilde",
			"rawText": "Niveau de Guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "NjvlZxkpOI0cNsWn29pD_",
			"originalText": "Niveau de Guilde"
		},
		{
			"type": "rectangle",
			"version": 331,
			"versionNonce": 2082765157,
			"isDeleted": false,
			"id": "QnZ-EiAVnSzGeq9HebWyJ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3949.9275178952994,
			"y": 579.010001732541,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 2090084491,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "iJsNjKjt"
				}
			],
			"updated": 1655535996782,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 87,
			"versionNonce": 393101600,
			"isDeleted": false,
			"id": "iJsNjKjt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3954.9275178952994,
			"y": 600.6020938246334,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1320735749,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840305,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Avantages de \nGuildes",
			"rawText": "Avantages de Guildes",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "QnZ-EiAVnSzGeq9HebWyJ",
			"originalText": "Avantages de Guildes"
		},
		{
			"type": "rectangle",
			"version": 420,
			"versionNonce": 634963301,
			"isDeleted": false,
			"id": "q4uwwdIbKB0iUkqFRtSQ-",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3949.9275178952994,
			"y": 689.010001732541,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 86,
			"seed": 564745739,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "PD7yTpZl"
				}
			],
			"updated": 1655536263939,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 158,
			"versionNonce": 241819872,
			"isDeleted": false,
			"id": "PD7yTpZl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3954.9275178952994,
			"y": 694.010001732541,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 76,
			"seed": 1299257957,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840306,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Politique de la \nGuilde \n(dictature \netc...)",
			"rawText": "Politique de la Guilde (dictature etc...)",
			"baseline": 72,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "q4uwwdIbKB0iUkqFRtSQ-",
			"originalText": "Politique de la Guilde (dictature etc...)"
		},
		{
			"type": "rectangle",
			"version": 353,
			"versionNonce": 1704553355,
			"isDeleted": false,
			"id": "VHoCdYrFDn0tfeuNFJNKl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3943.2608512286333,
			"y": 362.34333506587416,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1174522469,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "VoesOLDT"
				}
			],
			"updated": 1655536050395,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 25,
			"versionNonce": 1806509733,
			"isDeleted": false,
			"id": "VoesOLDT",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3948.2608512286333,
			"y": 393.43542715796644,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 2053056875,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536050396,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Membre de Guilde",
			"rawText": "Membre de Guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "VHoCdYrFDn0tfeuNFJNKl",
			"originalText": "Membre de Guilde"
		},
		{
			"type": "rectangle",
			"version": 363,
			"versionNonce": 1422184197,
			"isDeleted": false,
			"id": "he3gVMy9nQ9_VpQ87RkI4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4138.260851228632,
			"y": 364.0100017325407,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1310310955,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "MVYNB7dQ"
				}
			],
			"updated": 1655536061923,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 70,
			"versionNonce": 1313414432,
			"isDeleted": false,
			"id": "MVYNB7dQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4143.260851228632,
			"y": 385.60209382463296,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1144030245,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840312,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Membres de la \nGuilde",
			"rawText": "Membres de la Guilde",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "he3gVMy9nQ9_VpQ87RkI4",
			"originalText": "Membres de la Guilde"
		},
		{
			"type": "rectangle",
			"version": 387,
			"versionNonce": 93858981,
			"isDeleted": false,
			"id": "anjSAZ7A8Dd-rjgg4Zikh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4133.260851228633,
			"y": 690.6766683992075,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 95493739,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "O5xRO1q5"
				}
			],
			"updated": 1655536267165,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 88,
			"versionNonce": 1815790816,
			"isDeleted": false,
			"id": "O5xRO1q5",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4138.260851228633,
			"y": 712.2687604912999,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1315047493,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840314,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Alliances de \nGuilde",
			"rawText": "Alliances de Guilde",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "anjSAZ7A8Dd-rjgg4Zikh",
			"originalText": "Alliances de Guilde"
		},
		{
			"type": "rectangle",
			"version": 370,
			"versionNonce": 2106937349,
			"isDeleted": false,
			"id": "1bt6ych0ysPxqxTxLc0s0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4328.260851228633,
			"y": 692.3433350658743,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1797145675,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "MacXT2t2"
				}
			],
			"updated": 1655536267165,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 47,
			"versionNonce": 1294687947,
			"isDeleted": false,
			"id": "MacXT2t2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4333.260851228633,
			"y": 723.4354271579666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1413730507,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536267165,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Guerre de Guilde",
			"rawText": "Guerre de Guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "1bt6ych0ysPxqxTxLc0s0",
			"originalText": "Guerre de Guilde"
		},
		{
			"type": "rectangle",
			"version": 446,
			"versionNonce": 1815913760,
			"isDeleted": false,
			"id": "0lFTDkXoahrCjFL_XNa3Z",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4143.260851228633,
			"y": 470.67666839920753,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 2094978821,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "6vZd3NPm"
				}
			],
			"updated": 1655573824121,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 90,
			"versionNonce": 493386016,
			"isDeleted": false,
			"id": "6vZd3NPm",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4148.260851228633,
			"y": 492.2687604912998,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1300805899,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840316,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "échanges entre \nles membres",
			"rawText": "échanges entre les membres",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "0lFTDkXoahrCjFL_XNa3Z",
			"originalText": "échanges entre les membres"
		},
		{
			"type": "rectangle",
			"version": 410,
			"versionNonce": 642722016,
			"isDeleted": false,
			"id": "5ISfKvr8odSWjmSjsW1qt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4329.9275178952985,
			"y": 472.34333506587404,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1886084229,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "W95Ubwld"
				}
			],
			"updated": 1655574840317,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 27,
			"versionNonce": 1633231072,
			"isDeleted": false,
			"id": "W95Ubwld",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4334.9275178952985,
			"y": 503.4354271579664,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1259213451,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573824122,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "PNJ de Guilde",
			"rawText": "PNJ de Guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "5ISfKvr8odSWjmSjsW1qt",
			"originalText": "PNJ de Guilde"
		},
		{
			"type": "rectangle",
			"version": 350,
			"versionNonce": 1424874784,
			"isDeleted": false,
			"id": "RSTUvE3zBzZjc6iCmZ00s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4516.594184561964,
			"y": 474.01000173254056,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 86,
			"seed": 1498944267,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "HEq1mePr"
				}
			],
			"updated": 1655573824122,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 101,
			"versionNonce": 138171680,
			"isDeleted": false,
			"id": "HEq1mePr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4521.594184561964,
			"y": 479.01000173254056,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 76,
			"seed": 546339717,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840319,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Bâtiments de \nGuildes qui \ndonnent des \navantages",
			"rawText": "Bâtiments de Guildes qui donnent des avantages",
			"baseline": 72,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "RSTUvE3zBzZjc6iCmZ00s",
			"originalText": "Bâtiments de Guildes qui donnent des avantages"
		},
		{
			"type": "rectangle",
			"version": 309,
			"versionNonce": 2079305227,
			"isDeleted": false,
			"id": "b2aiDNP4dtpUhyuiDz05_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4143.26085122863,
			"y": 580.6766683992075,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 250579813,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "HvPhBER6"
				}
			],
			"updated": 1655536329508,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 60,
			"versionNonce": 1748438240,
			"isDeleted": false,
			"id": "HvPhBER6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4148.26085122863,
			"y": 602.2687604912999,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1593848037,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840321,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "+ d'xp et \nd'argent",
			"rawText": "+ d'xp et d'argent",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "b2aiDNP4dtpUhyuiDz05_",
			"originalText": "+ d'xp et d'argent"
		},
		{
			"type": "rectangle",
			"version": 346,
			"versionNonce": 544243621,
			"isDeleted": false,
			"id": "cDZAmwWy9punlNCu8_PdQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4329.927517895295,
			"y": 580.6766683992073,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 941483851,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "AgiDPGyU"
				}
			],
			"updated": 1655536342680,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 65,
			"versionNonce": 607432992,
			"isDeleted": false,
			"id": "AgiDPGyU",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4334.927517895295,
			"y": 602.2687604912996,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 718243013,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840322,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "accès à des \nchannels",
			"rawText": "accès à des channels",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "cDZAmwWy9punlNCu8_PdQ",
			"originalText": "accès à des channels"
		},
		{
			"type": "rectangle",
			"version": 353,
			"versionNonce": 1200764779,
			"isDeleted": false,
			"id": "0IiBtg0V8saWEsIKEhnEd",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4133.260851228627,
			"y": 247.34333506587421,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1921382053,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "EBGxbNFR"
				}
			],
			"updated": 1655536361307,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 19,
			"versionNonce": 678067557,
			"isDeleted": false,
			"id": "EBGxbNFR",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4138.260851228627,
			"y": 278.4354271579665,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 62823173,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536360329,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Don à la Guilde",
			"rawText": "Don à la Guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "0IiBtg0V8saWEsIKEhnEd",
			"originalText": "Don à la Guilde"
		},
		{
			"type": "rectangle",
			"version": 402,
			"versionNonce": 1401075653,
			"isDeleted": false,
			"id": "9QgzbqjnN1xMtDKubrFEu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3953.260851228626,
			"y": 807.3433350658743,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 852365835,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "jmbnNkUJ"
				}
			],
			"updated": 1655536372902,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 21,
			"versionNonce": 620319499,
			"isDeleted": false,
			"id": "jmbnNkUJ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3958.260851228626,
			"y": 838.4354271579666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 739419813,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536372902,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Quêtes de Guilde",
			"rawText": "Quêtes de Guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "9QgzbqjnN1xMtDKubrFEu",
			"originalText": "Quêtes de Guilde"
		},
		{
			"type": "rectangle",
			"version": 358,
			"versionNonce": 893609701,
			"isDeleted": false,
			"id": "nnEj2v1daRia1bkL0IlED",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4498.260851228628,
			"y": 809.010001732541,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1078032165,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "Tx6aWnpc"
				}
			],
			"updated": 1655536440773,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 88,
			"versionNonce": 1803710688,
			"isDeleted": false,
			"id": "Tx6aWnpc",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4503.260851228628,
			"y": 830.6020938246334,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1794789163,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840325,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Envoyer x \nmessages",
			"rawText": "Envoyer x messages",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "nnEj2v1daRia1bkL0IlED",
			"originalText": "Envoyer x messages"
		},
		{
			"type": "rectangle",
			"version": 368,
			"versionNonce": 6242885,
			"isDeleted": false,
			"id": "4Z_SJn8_XN_SwwcxwLMNR",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4681.594184561961,
			"y": 812.3433350658738,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1554485483,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "Iun46Fy6"
				}
			],
			"updated": 1655536440773,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 54,
			"versionNonce": 702591115,
			"isDeleted": false,
			"id": "Iun46Fy6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4686.594184561961,
			"y": 843.4354271579662,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 748681861,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536440773,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Faire x de don",
			"rawText": "Faire x de don",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "4Z_SJn8_XN_SwwcxwLMNR",
			"originalText": "Faire x de don"
		},
		{
			"type": "rectangle",
			"version": 336,
			"versionNonce": 1624053861,
			"isDeleted": false,
			"id": "KO7ib2Sn7cp0RqCJxJ-Q_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4131.59418456196,
			"y": 809.0100017325408,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1672886379,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "JnsoWU6o"
				}
			],
			"updated": 1655536413313,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 30,
			"versionNonce": 534691275,
			"isDeleted": false,
			"id": "JnsoWU6o",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4136.59418456196,
			"y": 830.6020938246331,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 61697477,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536411996,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Donne de l'xp de\nGuilde",
			"rawText": "Donne de l'xp de Guilde",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "KO7ib2Sn7cp0RqCJxJ-Q_",
			"originalText": "Donne de l'xp de Guilde"
		},
		{
			"type": "rectangle",
			"version": 385,
			"versionNonce": 1713942949,
			"isDeleted": false,
			"id": "1sSzOT2mAMJIXdmeCHml_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4309.927517895294,
			"y": 810.6766683992073,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1119273925,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "F4h0U6OL"
				}
			],
			"updated": 1655536440773,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 86,
			"versionNonce": 1932551979,
			"isDeleted": false,
			"id": "F4h0U6OL",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4314.927517895294,
			"y": 841.7687604912996,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1109232293,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536440773,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Exemple =>",
			"rawText": "Exemple =>",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "1sSzOT2mAMJIXdmeCHml_",
			"originalText": "Exemple =>"
		},
		{
			"type": "rectangle",
			"version": 333,
			"versionNonce": 1792919403,
			"isDeleted": false,
			"id": "Hyzxkm0vs1BJAR6cAUzyV",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3953.260851228627,
			"y": 912.3433350658745,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1922058699,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "p4RUHpbj"
				}
			],
			"updated": 1655536458276,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 20,
			"versionNonce": 726527333,
			"isDeleted": false,
			"id": "p4RUHpbj",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3958.260851228627,
			"y": 943.4354271579668,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 191312171,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536457648,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Succès de Guilde",
			"rawText": "Succès de Guilde",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Hyzxkm0vs1BJAR6cAUzyV",
			"originalText": "Succès de Guilde"
		},
		{
			"type": "rectangle",
			"version": 365,
			"versionNonce": 127011813,
			"isDeleted": false,
			"id": "THHjCgFZ4li_WDocBUGOa",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4131.59418456196,
			"y": 915.6766683992078,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1553803435,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "BkolHhv8"
				}
			],
			"updated": 1655536468383,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 54,
			"versionNonce": 1489079584,
			"isDeleted": false,
			"id": "BkolHhv8",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4136.59418456196,
			"y": 937.2687604913001,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1371468101,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840332,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Débloque des \navantages",
			"rawText": "Débloque des avantages",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "THHjCgFZ4li_WDocBUGOa",
			"originalText": "Débloque des avantages"
		},
		{
			"type": "text",
			"version": 132,
			"versionNonce": 744002848,
			"isDeleted": false,
			"id": "g0NWjKSo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 1.5246752107803827,
			"x": 1968.7608512286288,
			"y": -2947.897906175366,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 95,
			"height": 19,
			"seed": 1791231077,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573799390,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Peut créer",
			"rawText": "Peut créer",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Peut créer"
		},
		{
			"type": "rectangle",
			"version": 536,
			"versionNonce": 1955155168,
			"isDeleted": false,
			"id": "5E6CFDoBKVEKwfMRhhVZP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3770.2495271501316,
			"y": 1665.5813704903085,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1085624683,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "7uwX81Oe"
				}
			],
			"updated": 1655573620148,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 212,
			"versionNonce": 1831235872,
			"isDeleted": false,
			"id": "7uwX81Oe",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3775.2495271501316,
			"y": 1696.6734625824008,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 413994475,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573620148,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Système de pets",
			"rawText": "Système de pets",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "5E6CFDoBKVEKwfMRhhVZP",
			"originalText": "Système de pets"
		},
		{
			"type": "rectangle",
			"version": 475,
			"versionNonce": 864858336,
			"isDeleted": false,
			"id": "H6zYqIgu7Vou1MfJ7nfb0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3768.375132472644,
			"y": 1768.673077752092,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1312991435,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "hCmcJNuZ"
				}
			],
			"updated": 1655573620148,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 201,
			"versionNonce": 935417056,
			"isDeleted": false,
			"id": "hCmcJNuZ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3773.375132472644,
			"y": 1790.2651698441844,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 227215685,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840334,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Système de \npersonnage",
			"rawText": "Système de personnage",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "H6zYqIgu7Vou1MfJ7nfb0",
			"originalText": "Système de personnage"
		},
		{
			"type": "rectangle",
			"version": 437,
			"versionNonce": 75732192,
			"isDeleted": false,
			"id": "bZ-fAeEydxGpA04j22-bY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3957.688994898829,
			"y": 1768.673077752092,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1395235269,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "DPKhivzB"
				}
			],
			"updated": 1655573620148,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 125,
			"versionNonce": 651471136,
			"isDeleted": false,
			"id": "DPKhivzB",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3962.688994898829,
			"y": 1799.7651698441844,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1941482757,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573620148,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Modern Interior",
			"rawText": "Modern Interior",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "bZ-fAeEydxGpA04j22-bY",
			"originalText": "Modern Interior"
		},
		{
			"type": "rectangle",
			"version": 460,
			"versionNonce": 1560148192,
			"isDeleted": false,
			"id": "_jyi82Fk0RuXaOjIyQqvO",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3766.50073779516,
			"y": 1879.2623637238228,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1026713669,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "oTUr3BqE"
				}
			],
			"updated": 1655573620148,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 118,
			"versionNonce": 1956807968,
			"isDeleted": false,
			"id": "oTUr3BqE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3771.50073779516,
			"y": 1910.3544558159151,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1590169643,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573620148,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Factions",
			"rawText": "Factions",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_jyi82Fk0RuXaOjIyQqvO",
			"originalText": "Factions"
		},
		{
			"type": "rectangle",
			"version": 442,
			"versionNonce": 1158348000,
			"isDeleted": false,
			"id": "gNxSU5zP8k9qzCwTrm-em",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3764.626343117673,
			"y": 1991.7260443730406,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1459534565,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "DNdUBXsA"
				}
			],
			"updated": 1655573662063,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 117,
			"versionNonce": 584565024,
			"isDeleted": false,
			"id": "DNdUBXsA",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3769.626343117673,
			"y": 2022.818136465133,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1124952427,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655573662063,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Fermes",
			"rawText": "Fermes",
			"baseline": 15,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "gNxSU5zP8k9qzCwTrm-em",
			"originalText": "Fermes"
		},
		{
			"type": "rectangle",
			"version": 530,
			"versionNonce": 1086144736,
			"isDeleted": false,
			"id": "GKpx6rvyVBLu-5qIF-Exs",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3766.500737795161,
			"y": 1569.9872419384733,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 893006091,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "gMa1OJh9"
				}
			],
			"updated": 1655573620148,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 215,
			"versionNonce": 525527328,
			"isDeleted": false,
			"id": "gMa1OJh9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3771.500737795161,
			"y": 1591.5793340305656,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1061298085,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840338,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Système \nmonétaire",
			"rawText": "Système monétaire",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "GKpx6rvyVBLu-5qIF-Exs",
			"originalText": "Système monétaire"
		},
		{
			"type": "rectangle",
			"version": 425,
			"versionNonce": 1025647840,
			"isDeleted": false,
			"id": "FyHBRb65FKj2_Ssk0LSMp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3767.2945640464095,
			"y": 2092.9412819487834,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1315772677,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "K8aJ2mId"
				}
			],
			"updated": 1655573620148,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 152,
			"versionNonce": 1652799712,
			"isDeleted": false,
			"id": "K8aJ2mId",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3772.2945640464095,
			"y": 2114.5333740408755,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 995628683,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840339,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Messages via \ntelegram ",
			"rawText": "Messages via telegram ",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "FyHBRb65FKj2_Ssk0LSMp",
			"originalText": "Messages via telegram "
		},
		{
			"type": "rectangle",
			"version": 365,
			"versionNonce": 1623333739,
			"isDeleted": false,
			"id": "Fnz5nrZUig13oMAHjrHVD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3954.4806164950032,
			"y": 1008.3975133902288,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 539213669,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "a5y3efOT"
				}
			],
			"updated": 1655537567372,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 398,
			"versionNonce": 1178824928,
			"isDeleted": false,
			"id": "nxUYZ5nSsQjoQB4PB8J4E",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1710.8504060842815,
			"y": 1070.389357050077,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1216729829,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				}
			],
			"updated": 1655573625729,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 70,
			"versionNonce": 1129891104,
			"isDeleted": false,
			"id": "a5y3efOT",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3959.4806164950032,
			"y": 1020.4896054823212,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 57,
			"seed": 1419190533,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840342,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Leaderboard \nentre les \nguildes",
			"rawText": "Leaderboard entre les guildes",
			"baseline": 53,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Fnz5nrZUig13oMAHjrHVD",
			"originalText": "Leaderboard entre les guildes"
		},
		{
			"type": "rectangle",
			"version": 414,
			"versionNonce": 1771189061,
			"isDeleted": false,
			"id": "rN7RwIBo8Dxgnhnay6hBY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4322.275330849983,
			"y": 365.94065183453154,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 2088533163,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "TLvwofn2"
				}
			],
			"updated": 1655537578324,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 48,
			"versionNonce": 1331272928,
			"isDeleted": false,
			"id": "TLvwofn2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4327.275330849983,
			"y": 387.5327439266238,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1595272357,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840345,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Leaderboard des \nmembres",
			"rawText": "Leaderboard des membres",
			"baseline": 34,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "rN7RwIBo8Dxgnhnay6hBY",
			"originalText": "Leaderboard des membres"
		},
		{
			"type": "rectangle",
			"version": 486,
			"versionNonce": 592087264,
			"isDeleted": false,
			"id": "y_MR-mRaygo3TzWzxrgYN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4139.447302563781,
			"y": 1769.0202560314108,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1848298667,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "seXjAy8s"
				}
			],
			"updated": 1655573620148,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 155,
			"versionNonce": 574824736,
			"isDeleted": false,
			"id": "seXjAy8s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4144.447302563781,
			"y": 1781.1123481235031,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 57,
			"seed": 1137140069,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655574840347,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Gif du \npersonnage en \nidle",
			"rawText": "Gif du personnage en idle",
			"baseline": 53,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "y_MR-mRaygo3TzWzxrgYN",
			"originalText": "Gif du personnage en idle"
		},
		{
			"type": "rectangle",
			"version": 423,
			"versionNonce": 400705824,
			"isDeleted": false,
			"id": "1oxWZz2QUvWSyrFLFwMoH",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3762.2415416845924,
			"y": 2205.3293664819303,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 242360608,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "ZPpNpoSs"
				}
			],
			"updated": 1655573661661,
			"link": null,
			"locked": false
		},
		{
			"id": "ZPpNpoSs",
			"type": "text",
			"x": 3767.2415416845924,
			"y": 2226.9214585740224,
			"width": 156,
			"height": 38,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1438361888,
			"version": 63,
			"versionNonce": 1876099296,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840348,
			"link": null,
			"locked": false,
			"text": "Principe de \ncitoyenneté",
			"rawText": "Principe de citoyenneté",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "1oxWZz2QUvWSyrFLFwMoH",
			"originalText": "Principe de citoyenneté"
		},
		{
			"type": "rectangle",
			"version": 426,
			"versionNonce": 111216864,
			"isDeleted": false,
			"id": "W-moNXjIr7pHj6oV-lnip",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3759.3843988274493,
			"y": 2313.9007950533596,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1242944800,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "48J7dcJS"
				}
			],
			"updated": 1655573670464,
			"link": null,
			"locked": false
		},
		{
			"id": "48J7dcJS",
			"type": "text",
			"x": 3764.3843988274493,
			"y": 2344.9928871454517,
			"width": 156,
			"height": 19,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1825290528,
			"version": 16,
			"versionNonce": 1987605792,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655573670465,
			"link": null,
			"locked": false,
			"text": "Travail",
			"rawText": "Travail",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "W-moNXjIr7pHj6oV-lnip",
			"originalText": "Travail"
		},
		{
			"type": "rectangle",
			"version": 402,
			"versionNonce": 827591968,
			"isDeleted": false,
			"id": "JJ--lhrqer1qRCw0Dw_Bd",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3431.503446446496,
			"y": -349.57539542283246,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1986947296,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "255xuSOn"
				},
				{
					"id": "dXilUnj4URbJNUzFTswKT",
					"type": "arrow"
				},
				{
					"id": "3kTRnf91b906F77H9qGdf",
					"type": "arrow"
				}
			],
			"updated": 1655573917324,
			"link": null,
			"locked": false
		},
		{
			"id": "255xuSOn",
			"type": "text",
			"x": 3436.503446446496,
			"y": -318.48330333074017,
			"width": 156,
			"height": 19,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 117853472,
			"version": 14,
			"versionNonce": 1298845920,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655573878626,
			"link": null,
			"locked": false,
			"text": "Membre",
			"rawText": "Membre",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "JJ--lhrqer1qRCw0Dw_Bd",
			"originalText": "Membre"
		},
		{
			"type": "rectangle",
			"version": 439,
			"versionNonce": 295317728,
			"isDeleted": false,
			"id": "dCdnYXhCbTBPW5EM3SQih",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3896.5034464464984,
			"y": -346.2420620894992,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1239014624,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "9xYY4bQZ"
				},
				{
					"id": "dXilUnj4URbJNUzFTswKT",
					"type": "arrow"
				},
				{
					"id": "75CKSX-doStWJFD1Y8qa4",
					"type": "arrow"
				}
			],
			"updated": 1655573919396,
			"link": null,
			"locked": false
		},
		{
			"id": "9xYY4bQZ",
			"type": "text",
			"x": 3901.5034464464984,
			"y": -315.1499699974069,
			"width": 156,
			"height": 19,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 675802400,
			"version": 22,
			"versionNonce": 298736864,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655573893719,
			"link": null,
			"locked": false,
			"text": "Créer une guilde",
			"rawText": "Créer une guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "dCdnYXhCbTBPW5EM3SQih",
			"originalText": "Créer une guilde"
		},
		{
			"id": "dXilUnj4URbJNUzFTswKT",
			"type": "arrow",
			"x": 3612.836779779832,
			"y": -308.98330333074006,
			"width": 271.66666666666606,
			"height": 1.6666666666666856,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1208385760,
			"version": 79,
			"versionNonce": 146025696,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840364,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					271.66666666666606,
					1.6666666666666856
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "JJ--lhrqer1qRCw0Dw_Bd",
				"gap": 15.333333333335304,
				"focus": -0.014677688143465074
			},
			"endBinding": {
				"elementId": "dCdnYXhCbTBPW5EM3SQih",
				"gap": 12.000000000000455,
				"focus": 0.026370083783169483
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 430,
			"versionNonce": 1155601632,
			"isDeleted": false,
			"id": "tialqPvosRji3TtvH-zaX",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3879.836779779832,
			"y": -679.5753954228323,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 444121312,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "8J3TF01O"
				},
				{
					"id": "3kTRnf91b906F77H9qGdf",
					"type": "arrow"
				},
				{
					"id": "75CKSX-doStWJFD1Y8qa4",
					"type": "arrow"
				}
			],
			"updated": 1655573919396,
			"link": null,
			"locked": false
		},
		{
			"id": "8J3TF01O",
			"type": "text",
			"x": 3884.836779779832,
			"y": -657.98330333074,
			"width": 156,
			"height": 38,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 812252448,
			"version": 41,
			"versionNonce": 409576736,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840375,
			"link": null,
			"locked": false,
			"text": "Devient chef de \nla Guilde",
			"rawText": "Devient chef de la Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "tialqPvosRji3TtvH-zaX",
			"originalText": "Devient chef de la Guilde"
		},
		{
			"id": "3kTRnf91b906F77H9qGdf",
			"type": "arrow",
			"x": 3549.503446446499,
			"y": -362.3166366640735,
			"width": 322.09931427465017,
			"height": 229.83128153972393,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 599076064,
			"version": 100,
			"versionNonce": 1937143008,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840373,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					322.09931427465017,
					-229.83128153972393
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "JJ--lhrqer1qRCw0Dw_Bd",
				"gap": 12.741241241241028,
				"focus": -0.28411638087389096
			},
			"endBinding": {
				"elementId": "tialqPvosRji3TtvH-zaX",
				"gap": 10.333333333332575,
				"focus": 0.18297547149026586
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "75CKSX-doStWJFD1Y8qa4",
			"type": "arrow",
			"x": 3974.5034464464993,
			"y": -358.9833033307401,
			"width": 10,
			"height": 228.33333333333337,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1537816800,
			"version": 77,
			"versionNonce": 714397920,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840374,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-10,
					-228.33333333333337
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "dCdnYXhCbTBPW5EM3SQih",
				"gap": 12.741241241240914,
				"focus": -0.03142609225352029
			},
			"endBinding": {
				"elementId": "tialqPvosRji3TtvH-zaX",
				"gap": 11.074574574574228,
				"focus": 0.0070314087690458455
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 453,
			"versionNonce": 1088558304,
			"isDeleted": false,
			"id": "8Hrs4tU8sQg2tXbM9aMcJ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4680.551065494118,
			"y": -1047.146823994261,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 900430048,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"id": "GIo00ek_NctQSeOJWoiij",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "15IasHmj"
				},
				{
					"id": "P1pi41UnXzegFstYK85u-",
					"type": "arrow"
				},
				{
					"id": "We3qpeGZZobJhGTwbaBrO",
					"type": "arrow"
				},
				{
					"id": "zueY8kbI6VYcQpXixAgkw",
					"type": "arrow"
				},
				{
					"id": "HuIzT_GiPBeIhRo6nmuIz",
					"type": "arrow"
				},
				{
					"id": "fNlK9Zk67d5TVBHXiuUb9",
					"type": "arrow"
				}
			],
			"updated": 1655574428405,
			"link": null,
			"locked": false
		},
		{
			"id": "9K-MPSmtb24Sqslcx8n2d",
			"type": "ellipse",
			"x": 3299.836779779832,
			"y": -939.98330333074,
			"width": 962,
			"height": 980,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1059374304,
			"version": 51,
			"versionNonce": 575664352,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "GIo00ek_NctQSeOJWoiij",
					"type": "arrow"
				},
				{
					"id": "LEaaxBEm4wRenDjF-vqo8",
					"type": "arrow"
				}
			],
			"updated": 1655574027101,
			"link": null,
			"locked": false
		},
		{
			"id": "GIo00ek_NctQSeOJWoiij",
			"type": "arrow",
			"x": 4251.522823015854,
			"y": -588.1386969586897,
			"width": 442.10741620561475,
			"height": 368.41603494347896,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1098680544,
			"version": 111,
			"versionNonce": 1647837472,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840380,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					442.10741620561475,
					-368.41603494347896
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "9K-MPSmtb24Sqslcx8n2d",
				"gap": 8.846669250121636,
				"focus": 0.40134718166855515
			},
			"endBinding": {
				"elementId": "8Hrs4tU8sQg2tXbM9aMcJ",
				"gap": 9.407907907907713,
				"focus": 0.07531402788170076
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "15IasHmj",
			"type": "text",
			"x": 4685.551065494118,
			"y": -1016.0547319021687,
			"width": 156,
			"height": 19,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1658767584,
			"version": 100,
			"versionNonce": 2055969056,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574007381,
			"link": null,
			"locked": false,
			"text": "Guilde : Nesalia",
			"rawText": "Guilde : Nesalia",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "8Hrs4tU8sQg2tXbM9aMcJ",
			"originalText": "Guilde : Nesalia"
		},
		{
			"type": "rectangle",
			"version": 467,
			"versionNonce": 685781280,
			"isDeleted": false,
			"id": "QF1Y3NkY__ZfnYba7mi8E",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 5066.836779779831,
			"y": -375.43253827997523,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1216036128,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "xiUFUdEV"
				},
				{
					"id": "P1pi41UnXzegFstYK85u-",
					"type": "arrow"
				},
				{
					"id": "We3qpeGZZobJhGTwbaBrO",
					"type": "arrow"
				}
			],
			"updated": 1655574089559,
			"link": null,
			"locked": false
		},
		{
			"id": "xiUFUdEV",
			"type": "text",
			"x": 5071.836779779831,
			"y": -353.84044618788295,
			"width": 156,
			"height": 38,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 996184288,
			"version": 75,
			"versionNonce": 1342936288,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840386,
			"link": null,
			"locked": false,
			"text": "Membres du \nserveur",
			"rawText": "Membres du serveur",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "QF1Y3NkY__ZfnYba7mi8E",
			"originalText": "Membres du serveur"
		},
		{
			"id": "P1pi41UnXzegFstYK85u-",
			"type": "arrow",
			"x": 4858.476719157177,
			"y": -493.5755694255562,
			"width": 218.5029177655124,
			"height": 105.87798038053018,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1210010848,
			"version": 216,
			"versionNonce": 169073888,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840387,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					218.5029177655124,
					105.87798038053018
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "CCDWP146w-IS57rw6r5fh",
				"gap": 12.782796520202282,
				"focus": -0.647075384842595
			},
			"endBinding": {
				"elementId": "QF1Y3NkY__ZfnYba7mi8E",
				"gap": 12.265050765050773,
				"focus": 0.21721662582425771
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "MBjJ2rmK",
			"type": "text",
			"x": 4891.479636922689,
			"y": -468.0547319021688,
			"width": 151,
			"height": 19,
			"angle": 0.4723683181544498,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 37162272,
			"version": 157,
			"versionNonce": 1194342624,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574089560,
			"link": null,
			"locked": false,
			"text": "peut les inviter",
			"rawText": "peut les inviter",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 15,
			"containerId": null,
			"originalText": "peut les inviter"
		},
		{
			"type": "rectangle",
			"version": 511,
			"versionNonce": 582645024,
			"isDeleted": false,
			"id": "CCDWP146w-IS57rw6r5fh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4679.693922636975,
			"y": -528.2896811371179,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 2020477152,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "0eTKo8kH"
				},
				{
					"id": "LEaaxBEm4wRenDjF-vqo8",
					"type": "arrow"
				},
				{
					"id": "P1pi41UnXzegFstYK85u-",
					"type": "arrow"
				},
				{
					"id": "zueY8kbI6VYcQpXixAgkw",
					"type": "arrow"
				}
			],
			"updated": 1655574107853,
			"link": null,
			"locked": false
		},
		{
			"id": "0eTKo8kH",
			"type": "text",
			"x": 4684.693922636975,
			"y": -497.1975890450256,
			"width": 156,
			"height": 19,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 389590304,
			"version": 135,
			"versionNonce": 837910816,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574145932,
			"link": null,
			"locked": false,
			"text": "Chef : Nesalia",
			"rawText": "Chef : Nesalia",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "CCDWP146w-IS57rw6r5fh",
			"originalText": "Chef : Nesalia"
		},
		{
			"id": "LEaaxBEm4wRenDjF-vqo8",
			"type": "arrow",
			"x": 4274.324193320927,
			"y": -382.0569958164715,
			"width": 402.65544360176136,
			"height": 89.86160904553799,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 925762784,
			"version": 133,
			"versionNonce": 2005268704,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840387,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					402.65544360176136,
					-89.86160904553799
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "9K-MPSmtb24Sqslcx8n2d",
				"gap": 16.97735618050052,
				"focus": 0.3549677522962086
			},
			"endBinding": {
				"elementId": "CCDWP146w-IS57rw6r5fh",
				"gap": 2.714285714286234,
				"focus": 0.05667024325675156
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "We3qpeGZZobJhGTwbaBrO",
			"type": "arrow",
			"x": 5145.841785147682,
			"y": -383.41187475931156,
			"width": 302.8571428571431,
			"height": 625.9999999999995,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 499974432,
			"version": 103,
			"versionNonce": 1836272928,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840385,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					13.994994632150338,
					-487.42857142857133
				],
				[
					-288.8621482249928,
					-625.9999999999995
				]
			],
			"lastCommittedPoint": [
				-298.57142857142844,
				-330
			],
			"startBinding": {
				"elementId": "QF1Y3NkY__ZfnYba7mi8E",
				"gap": 7.979336479336268,
				"focus": -0.06403542567091997
			},
			"endBinding": {
				"elementId": "8Hrs4tU8sQg2tXbM9aMcJ",
				"gap": 10.428571428570649,
				"focus": -0.5804503983458105
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "WXKAaJW5",
			"type": "text",
			"x": 4915.836779779832,
			"y": -1011.1975890450257,
			"width": 188,
			"height": 38,
			"angle": 0.2763742393960573,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1536022816,
			"version": 169,
			"versionNonce": 141536544,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574287821,
			"link": null,
			"locked": false,
			"text": "Si ils acceptent ils\ndeviennent membres",
			"rawText": "Si ils acceptent ils\ndeviennent membres",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 34,
			"containerId": null,
			"originalText": "Si ils acceptent ils\ndeviennent membres"
		},
		{
			"id": "zueY8kbI6VYcQpXixAgkw",
			"type": "arrow",
			"x": 4746.598684541737,
			"y": -538.3642557116918,
			"width": 15.714285714286234,
			"height": 417.1428571428571,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1905306848,
			"version": 60,
			"versionNonce": 1497710816,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840387,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					15.714285714286234,
					-417.1428571428571
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "CCDWP146w-IS57rw6r5fh",
				"gap": 10.074574574573944,
				"focus": -0.21299058383443695
			},
			"endBinding": {
				"elementId": "8Hrs4tU8sQg2tXbM9aMcJ",
				"gap": 10.455526955527432,
				"focus": -0.008102902645885276
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "7PYjziEK",
			"type": "text",
			"x": 4635.312970256024,
			"y": -714.4356842831203,
			"width": 234,
			"height": 38,
			"angle": 4.757853125338211,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1110945056,
			"version": 214,
			"versionNonce": 1998184736,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574151653,
			"link": null,
			"locked": false,
			"text": "peut choisir la politique\nde la Guilde",
			"rawText": "peut choisir la politique\nde la Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 34,
			"containerId": null,
			"originalText": "peut choisir la politique\nde la Guilde"
		},
		{
			"type": "rectangle",
			"version": 441,
			"versionNonce": 1692197152,
			"isDeleted": false,
			"id": "liUzKee_JvwZEjYp1Z66s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4957.8843988274475,
			"y": -1337.5277763752126,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 2004925728,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "3ApcICCP"
				},
				{
					"id": "HuIzT_GiPBeIhRo6nmuIz",
					"type": "arrow"
				},
				{
					"id": "kDIpfLWq0gWugny96vg6Z",
					"type": "arrow"
				},
				{
					"id": "kI8juvh8dlX_7FhIxmDif",
					"type": "arrow"
				}
			],
			"updated": 1655574227621,
			"link": null,
			"locked": false
		},
		{
			"id": "3ApcICCP",
			"type": "text",
			"x": 4962.8843988274475,
			"y": -1325.4356842831203,
			"width": 156,
			"height": 57,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 650500384,
			"version": 57,
			"versionNonce": 264458528,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840390,
			"link": null,
			"locked": false,
			"text": "Système de \npolitique de la \nGuilde",
			"rawText": "Système de politique de la Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 53,
			"containerId": "liUzKee_JvwZEjYp1Z66s",
			"originalText": "Système de politique de la Guilde"
		},
		{
			"id": "HuIzT_GiPBeIhRo6nmuIz",
			"type": "arrow",
			"x": 4807.213128662648,
			"y": -1061.2213985688343,
			"width": 146.75130462950983,
			"height": 185.01956254845413,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 108978400,
			"version": 51,
			"versionNonce": 78259424,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840389,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					146.75130462950983,
					-185.01956254845413
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "8Hrs4tU8sQg2tXbM9aMcJ",
				"gap": 14.074574574573319,
				"focus": 0.0026242053486119116
			},
			"endBinding": {
				"elementId": "liUzKee_JvwZEjYp1Z66s",
				"gap": 10.836479336479215,
				"focus": 0.4054871517642374
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 415,
			"versionNonce": 27968736,
			"isDeleted": false,
			"id": "pqg2fx50m3lZ4ZGSvlxx9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 5333.598684541732,
			"y": -1451.8134906609264,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 964914400,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "LbPN2iAr"
				},
				{
					"id": "kDIpfLWq0gWugny96vg6Z",
					"type": "arrow"
				}
			],
			"updated": 1655574224389,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 450,
			"versionNonce": 887340320,
			"isDeleted": false,
			"id": "YXyxoCONUj_CkTXPGy6e_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 5335.0272559703035,
			"y": -1190.3849192323553,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 339923168,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "3LDXauWa"
				},
				{
					"id": "kI8juvh8dlX_7FhIxmDif",
					"type": "arrow"
				}
			],
			"updated": 1655574227621,
			"link": null,
			"locked": false
		},
		{
			"id": "LbPN2iAr",
			"type": "text",
			"x": 5338.598684541732,
			"y": -1430.221398568834,
			"width": 156,
			"height": 38,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 789899552,
			"version": 42,
			"versionNonce": 1837151456,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840392,
			"link": null,
			"locked": false,
			"text": "Alliances avec \nd'autres Guildes",
			"rawText": "Alliances avec d'autres Guildes",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "pqg2fx50m3lZ4ZGSvlxx9",
			"originalText": "Alliances avec d'autres Guildes"
		},
		{
			"id": "3LDXauWa",
			"type": "text",
			"x": 5340.0272559703035,
			"y": -1168.792827140263,
			"width": 156,
			"height": 38,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1680902368,
			"version": 46,
			"versionNonce": 1307272480,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840394,
			"link": null,
			"locked": false,
			"text": "Guerres avec \nd'autres Guildes",
			"rawText": "Guerres avec d'autres Guildes",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "YXyxoCONUj_CkTXPGy6e_",
			"originalText": "Guerres avec d'autres Guildes"
		},
		{
			"id": "kDIpfLWq0gWugny96vg6Z",
			"type": "arrow",
			"x": 5129.455827398875,
			"y": -1335.5071128545483,
			"width": 188.57142857142935,
			"height": 50,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 941537568,
			"version": 46,
			"versionNonce": 427568416,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840391,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					188.57142857142935,
					-50
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "liUzKee_JvwZEjYp1Z66s",
				"gap": 5.571428571427532,
				"focus": -0.24100096062506346
			},
			"endBinding": {
				"elementId": "pqg2fx50m3lZ4ZGSvlxx9",
				"gap": 15.571428571427532,
				"focus": 0.006742494594237868
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "kI8juvh8dlX_7FhIxmDif",
			"type": "arrow",
			"x": 5136.598684541733,
			"y": -1291.2213985688343,
			"width": 187.14285714285688,
			"height": 138.5714285714289,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1459124512,
			"version": 61,
			"versionNonce": 1767315680,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840393,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					187.14285714285688,
					138.5714285714289
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "liUzKee_JvwZEjYp1Z66s",
				"gap": 12.714285714285325,
				"focus": -0.6384914823170097
			},
			"endBinding": {
				"elementId": "YXyxoCONUj_CkTXPGy6e_",
				"gap": 11.285714285713766,
				"focus": -0.6561234646738896
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 434,
			"versionNonce": 188600608,
			"isDeleted": false,
			"id": "my52zRDiirHEaa2ClWzcs",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4386.455827398881,
			"y": -1354.670633518067,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1950157088,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "bmfH0i1f"
				},
				{
					"id": "fNlK9Zk67d5TVBHXiuUb9",
					"type": "arrow"
				},
				{
					"id": "wbBjqQjWI95r-kZgJ9Xzv",
					"type": "arrow"
				},
				{
					"id": "kKa6weH9uFjXISuAMo8ZX",
					"type": "arrow"
				},
				{
					"id": "y64eUkemd5DfwZS4qH1x0",
					"type": "arrow"
				}
			],
			"updated": 1655574852974,
			"link": null,
			"locked": false
		},
		{
			"id": "bmfH0i1f",
			"type": "text",
			"x": 4391.455827398881,
			"y": -1333.0785414259747,
			"width": 156,
			"height": 38,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1510856928,
			"version": 47,
			"versionNonce": 705931488,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840398,
			"link": null,
			"locked": false,
			"text": "Système de \nniveau de Guilde",
			"rawText": "Système de niveau de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "my52zRDiirHEaa2ClWzcs",
			"originalText": "Système de niveau de Guilde"
		},
		{
			"id": "fNlK9Zk67d5TVBHXiuUb9",
			"type": "arrow",
			"x": 4674.082070538916,
			"y": -1049.2732573419162,
			"width": 138.91195742574928,
			"height": 211.9481412269156,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 263637216,
			"version": 35,
			"versionNonce": 25280800,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574840396,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-138.91195742574928,
					-211.9481412269156
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "8Hrs4tU8sQg2tXbM9aMcJ",
				"gap": 6.809523809522034,
				"focus": -0.5608452917401678
			},
			"endBinding": {
				"elementId": "my52zRDiirHEaa2ClWzcs",
				"gap": 12.265050765050546,
				"focus": -0.2834873742402412
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 641,
			"versionNonce": 1862094048,
			"isDeleted": false,
			"id": "ZmWR100fk_1Zu5sbSSwx_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4615.27817030531,
			"y": -1585.159301365969,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 390749408,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "ytvLNNP9"
				},
				{
					"id": "wbBjqQjWI95r-kZgJ9Xzv",
					"type": "arrow"
				},
				{
					"id": "-jmYebeXCGTMytOm_w7Sr",
					"type": "arrow"
				}
			],
			"updated": 1655574873023,
			"link": null,
			"locked": false
		},
		{
			"id": "ytvLNNP9",
			"type": "text",
			"x": 4620.27817030531,
			"y": -1554.0672092738766,
			"width": 156,
			"height": 19,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1181859040,
			"version": 226,
			"versionNonce": 66220320,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574873023,
			"link": null,
			"locked": false,
			"text": "Quêtes de Guilde",
			"rawText": "Quêtes de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "ZmWR100fk_1Zu5sbSSwx_",
			"originalText": "Quêtes de Guilde"
		},
		{
			"id": "wbBjqQjWI95r-kZgJ9Xzv",
			"type": "arrow",
			"x": 4546.888263271283,
			"y": -1367.3849192323532,
			"width": 70.25886774839819,
			"height": 121.71605726428152,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 111924512,
			"version": 458,
			"versionNonce": 2059881760,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574873023,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					70.25886774839819,
					-121.71605726428152
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "my52zRDiirHEaa2ClWzcs",
				"gap": 12.714285714286234,
				"focus": 0.45706483164678696
			},
			"endBinding": {
				"elementId": "ZmWR100fk_1Zu5sbSSwx_",
				"gap": 14.874140685149541,
				"focus": 0.4614618527312184
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 659,
			"versionNonce": 318154976,
			"isDeleted": false,
			"id": "5GbotMy70o2E03ojkB55_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4051.606581034994,
			"y": -1321.6019695579716,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156.24167210973147,
			"height": 76.41176316747838,
			"seed": 2120281376,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "YFUoQ2sf"
				},
				{
					"id": "kKa6weH9uFjXISuAMo8ZX",
					"type": "arrow"
				},
				{
					"id": "Pdhc409OWXJsO4sFY_15s",
					"type": "arrow"
				}
			],
			"updated": 1655574871228,
			"link": null,
			"locked": false,
			"fontSize": 14.999145857408347,
			"baseline": 62.411763167478384
		},
		{
			"id": "YFUoQ2sf",
			"type": "text",
			"x": 4056.6065810349937,
			"y": -1301.3960879742324,
			"width": 146.24167210973147,
			"height": 36,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1770200352,
			"version": 290,
			"versionNonce": 1003279648,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574871228,
			"link": null,
			"locked": false,
			"text": "Système de \nsuccès",
			"rawText": "Système de succès",
			"fontSize": 14.999145857408347,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 32,
			"containerId": "5GbotMy70o2E03ojkB55_",
			"originalText": "Système de succès"
		},
		{
			"id": "kKa6weH9uFjXISuAMo8ZX",
			"type": "arrow",
			"x": 4376.764836444996,
			"y": -1300.4331867714786,
			"width": 162.75090567900952,
			"height": 10.575624749805456,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1654539488,
			"version": 589,
			"versionNonce": 297087264,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574871228,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-162.75090567900952,
					10.575624749805456
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "my52zRDiirHEaa2ClWzcs",
				"focus": -0.2126367325312687,
				"gap": 9.690990953885375
			},
			"endBinding": {
				"elementId": "5GbotMy70o2E03ojkB55_",
				"focus": -0.022746059573701884,
				"gap": 6.165677621261011
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 416,
			"versionNonce": 1642689824,
			"isDeleted": false,
			"id": "m-oQ48O8nuPHo2WxS05Ys",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4156.637381994549,
			"y": -1574.4110141297024,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 81.18418418418459,
			"seed": 1560377632,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "nedUsKK5O3O_rDUh2BfgD",
					"type": "arrow"
				},
				{
					"id": "5U-diJVxi0P5j_BqoWlFg",
					"type": "arrow"
				},
				{
					"id": "wxSOIO0M9nTNsdZfIlJB2",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "Jqqfa0xG"
				},
				{
					"id": "Pdhc409OWXJsO4sFY_15s",
					"type": "arrow"
				},
				{
					"id": "-jmYebeXCGTMytOm_w7Sr",
					"type": "arrow"
				},
				{
					"id": "y64eUkemd5DfwZS4qH1x0",
					"type": "arrow"
				}
			],
			"updated": 1655574852974,
			"link": null,
			"locked": false
		},
		{
			"id": "Jqqfa0xG",
			"type": "text",
			"x": 4161.637381994549,
			"y": -1543.31892203761,
			"width": 156,
			"height": 19,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 808858912,
			"version": 27,
			"versionNonce": 1579540768,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574838658,
			"link": null,
			"locked": false,
			"text": "Donne de l'xp",
			"rawText": "Donne de l'xp",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "m-oQ48O8nuPHo2WxS05Ys",
			"originalText": "Donne de l'xp"
		},
		{
			"id": "Pdhc409OWXJsO4sFY_15s",
			"type": "arrow",
			"x": 4071.927549153759,
			"y": -1326.2174221813555,
			"width": 142.87076736250492,
			"height": 161.6325963166555,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 489219296,
			"version": 139,
			"versionNonce": 1110576416,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574871228,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					142.87076736250492,
					-161.6325963166555
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "5GbotMy70o2E03ojkB55_",
				"focus": -0.8544183990819609,
				"gap": 4.615452623383703
			},
			"endBinding": {
				"elementId": "m-oQ48O8nuPHo2WxS05Ys",
				"focus": -0.13285554692365134,
				"gap": 5.376811447506725
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "-jmYebeXCGTMytOm_w7Sr",
			"type": "arrow",
			"x": 4611.837213879691,
			"y": -1541.2133146460542,
			"width": 277.2962890937124,
			"height": 1.437992497134701,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 547456288,
			"version": 363,
			"versionNonce": 2057349408,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574873023,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-277.2962890937124,
					1.437992497134701
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "ZmWR100fk_1Zu5sbSSwx_",
				"focus": -0.07087343903696398,
				"gap": 3.440956425618424
			},
			"endBinding": {
				"elementId": "m-oQ48O8nuPHo2WxS05Ys",
				"focus": -0.1332013302924583,
				"gap": 11.903542791429572
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "y64eUkemd5DfwZS4qH1x0",
			"type": "arrow",
			"x": 4316.746510512585,
			"y": -1483.4014149296627,
			"width": 94.90354279143139,
			"height": 115.66369277705621,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 2130535648,
			"version": 36,
			"versionNonce": 594275552,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655574852974,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					94.90354279143139,
					115.66369277705621
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "m-oQ48O8nuPHo2WxS05Ys",
				"focus": -0.30729984302114816,
				"gap": 9.825415015855015
			},
			"endBinding": {
				"elementId": "my52zRDiirHEaa2ClWzcs",
				"focus": -0.11846069028853601,
				"gap": 13.06708863453946
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#000000",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 1,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 0,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 3,
		"currentItemFontSize": 16,
		"currentItemTextAlign": "center",
		"currentItemStrokeSharpness": "round",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"currentItemLinearStrokeSharpness": "round",
		"gridSize": null,
		"colorPalette": {}
	},
	"files": {}
}
```
%%