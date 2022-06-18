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
			"version": 1120,
			"versionNonce": 242790117,
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
			"updated": 1655538071038,
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
			"version": 478,
			"versionNonce": 903470571,
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
			"updated": 1655538071040,
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
			"version": 404,
			"versionNonce": 592997829,
			"isDeleted": false,
			"id": "IMjvHIBc8VbUTGFPROy5m",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1014.4478329650664,
			"y": -331.5677009701626,
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
			"updated": 1655538081342,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 584,
			"versionNonce": 788659467,
			"isDeleted": false,
			"id": "DsCdoMn6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1019.4478329650664,
			"y": -306.9756088780703,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 155.58358358358439,
			"height": 32,
			"seed": 1379195867,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081343,
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
			"version": 372,
			"versionNonce": 503591109,
			"isDeleted": false,
			"id": "EEBLiaK7-b2PN8y74INJp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1730.4748599920972,
			"y": 67.37624297378301,
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
			"updated": 1655534422767,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 575,
			"versionNonce": 947467589,
			"isDeleted": false,
			"id": "IHoFnKti",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1735.4748599920972,
			"y": 93.97784457538489,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 162.01401401401532,
			"height": 32,
			"seed": 2146030683,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071043,
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
			"version": 1389,
			"versionNonce": 1333011371,
			"isDeleted": false,
			"id": "nedUsKK5O3O_rDUh2BfgD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1186.4618469790883,
			"y": -271.34971025079705,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 540.7999557360429,
			"height": 352.0109863085014,
			"seed": 609115061,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081344,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 6.430430430437468,
				"focus": -0.4069514211848598
			},
			"endBinding": {
				"elementId": "EEBLiaK7-b2PN8y74INJp",
				"gap": 3.21305727696609,
				"focus": -0.29170462041017997
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
					352.0109863085014
				]
			]
		},
		{
			"type": "text",
			"version": 604,
			"versionNonce": 391409835,
			"isDeleted": false,
			"id": "8JG8oXe3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.6138914029734632,
			"x": 1268.0098901515437,
			"y": -116.76726928050064,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 249,
			"height": 51,
			"seed": 829095899,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534422768,
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
			"version": 904,
			"versionNonce": 1789589797,
			"isDeleted": false,
			"id": "WwfE_GbsBbg1rzKuB1d0j",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2153.2756607928914,
			"y": 73.00286960040953,
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
			"updated": 1655538212075,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1425,
			"versionNonce": 611866539,
			"isDeleted": false,
			"id": "7gZtxOck",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2158.2756607928914,
			"y": 130.50286960040953,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 839,
			"height": 68,
			"seed": 7369819,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538212075,
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
			"version": 705,
			"versionNonce": 736816965,
			"isDeleted": false,
			"id": "TERcQSTK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.0023047704925023282,
			"x": 1957.6536109931874,
			"y": 89.66717761939088,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 161,
			"height": 42,
			"seed": 448057237,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538219393,
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
			"version": 1508,
			"versionNonce": 1031581963,
			"isDeleted": false,
			"id": "W61ML9OEJVG8auIExfr5G",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2137.7918612038366,
			"y": 120.06596012824156,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 219.81918760867256,
			"height": 11.365274354378883,
			"seed": 122859925,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538212075,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "WwfE_GbsBbg1rzKuB1d0j",
				"gap": 15.48379958905467,
				"focus": 0.1866053430318817
			},
			"endBinding": {
				"elementId": "EEBLiaK7-b2PN8y74INJp",
				"gap": 15.483799589051387,
				"focus": -0.1386767631393274
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
					-11.365274354378883
				]
			]
		},
		{
			"type": "rectangle",
			"version": 360,
			"versionNonce": 392635973,
			"isDeleted": false,
			"id": "xfaDIZbJGsVYk-FJu7zYn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1740.8941364113698,
			"y": -687.1875708400328,
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
			"updated": 1655534422768,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 661,
			"versionNonce": 1615508843,
			"isDeleted": false,
			"id": "aTWT3s2s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1745.8941364113698,
			"y": -678.5954787479404,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 64,
			"seed": 1731349109,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071047,
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
			"version": 737,
			"versionNonce": 1584504715,
			"isDeleted": false,
			"id": "5U-diJVxi0P5j_BqoWlFg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1189.3525948698289,
			"y": -300.3329851700913,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 540.3333333333328,
			"height": 308.5411457490326,
			"seed": 532533589,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081349,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 9.321178321178081,
				"focus": 0.49211363445226275
			},
			"endBinding": {
				"elementId": "xfaDIZbJGsVYk-FJu7zYn",
				"gap": 11.208208208208134,
				"focus": 0.18268004763309614
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
					-308.5411457490326
				]
			]
		},
		{
			"type": "rectangle",
			"version": 425,
			"versionNonce": 1618360203,
			"isDeleted": false,
			"id": "QyyvyEZ4OHof3cgeMBok0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2294.9496919669255,
			"y": -1089.4653486178108,
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
			"updated": 1655535471015,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 665,
			"versionNonce": 976469381,
			"isDeleted": false,
			"id": "3B4f7W37",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2299.9496919669255,
			"y": -1064.8732565257185,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 32,
			"seed": 2083002747,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071048,
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
			"version": 817,
			"versionNonce": 485587147,
			"isDeleted": false,
			"id": "wxSOIO0M9nTNsdZfIlJB2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2285.215834619179,
			"y": -1005.5790222599807,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 377.37381650197494,
			"height": 318.0728289603745,
			"seed": 168423221,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081351,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QyyvyEZ4OHof3cgeMBok0",
				"gap": 10.101957790095184,
				"focus": 0.31540035324839777
			},
			"endBinding": {
				"elementId": "xfaDIZbJGsVYk-FJu7zYn",
				"gap": 1,
				"focus": 0.2699743423712612
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
					-377.37381650197494,
					318.0728289603745
				]
			]
		},
		{
			"type": "text",
			"version": 230,
			"versionNonce": 145535077,
			"isDeleted": false,
			"id": "YqAe17Hh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.574932607495024,
			"x": 1992.880372647606,
			"y": -876.1788120812735,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 207,
			"height": 19,
			"seed": 1595884245,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534422768,
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
			"version": 736,
			"versionNonce": 1022914027,
			"isDeleted": false,
			"id": "GXxOT1yr1ZiCJ64Up4wVa",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3118.6775178952958,
			"y": -704.3233316007929,
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
				},
				{
					"id": "igZ1hg7I8woGVejssi1xE",
					"type": "arrow"
				}
			],
			"updated": 1655536496325,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 436,
			"versionNonce": 184227269,
			"isDeleted": false,
			"id": "haq1SIfQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3123.6775178952958,
			"y": -682.7312395087006,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1066588613,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071051,
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
			"version": 529,
			"versionNonce": 476376843,
			"isDeleted": false,
			"id": "WfwE0REzk7YrM8kxHVCye",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2106.594184561962,
			"y": -214.32333160079293,
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
			"updated": 1655534422768,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 279,
			"versionNonce": 1682853451,
			"isDeleted": false,
			"id": "1vQBRUSh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2111.594184561962,
			"y": -192.73123950870064,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1426720651,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071052,
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
			"version": 711,
			"versionNonce": 866418949,
			"isDeleted": false,
			"id": "Yxd95os7SPS6sVH7x8P8x",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1193.7608512286286,
			"y": -262.628041821657,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 903.3333333333333,
			"height": 87.38420836018682,
			"seed": 857493163,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081356,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 13.729434679977828,
				"focus": 0.39115587186910866
			},
			"endBinding": {
				"elementId": "WfwE0REzk7YrM8kxHVCye",
				"gap": 9.500000000000227,
				"focus": -0.15292572190631343
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
					87.38420836018682
				]
			]
		},
		{
			"type": "rectangle",
			"version": 583,
			"versionNonce": 339275397,
			"isDeleted": false,
			"id": "ULRWp4_f6XfsGPg6EmGQv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2655.344184561962,
			"y": -414.3233316007929,
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
			"updated": 1655534422768,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 304,
			"versionNonce": 932960933,
			"isDeleted": false,
			"id": "HlqIdtfN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2660.344184561962,
			"y": -392.73123950870064,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 2015449451,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071054,
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
			"version": 1073,
			"versionNonce": 744604613,
			"isDeleted": false,
			"id": "J9993LsxLnmR4CCzmd-1m",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3146.4892287700704,
			"y": -619.1561281399472,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 320.64504420810863,
			"height": 207.81625437949435,
			"seed": 470186789,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081357,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 3.9830192766610253,
				"focus": -0.09330318167085327
			},
			"endBinding": {
				"elementId": "ULRWp4_f6XfsGPg6EmGQv",
				"gap": 4.5,
				"focus": 0.20237968058691114
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
					207.81625437949435
				]
			]
		},
		{
			"type": "arrow",
			"version": 854,
			"versionNonce": 1096745765,
			"isDeleted": false,
			"id": "SWOnAv2UC9yLerYg_m-V9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2652.186276654054,
			"y": -334.5425586412505,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 366.3420920920921,
			"height": 151.85658564605566,
			"seed": 412984933,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081357,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ULRWp4_f6XfsGPg6EmGQv",
				"gap": 3.157907907907884,
				"focus": -0.04632691692877697
			},
			"endBinding": {
				"elementId": "WfwE0REzk7YrM8kxHVCye",
				"gap": 13.25,
				"focus": 0.41258704531063345
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
					151.85658564605566
				]
			]
		},
		{
			"type": "text",
			"version": 292,
			"versionNonce": 1373163845,
			"isDeleted": false,
			"id": "yiuwbjaN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.887495715124999,
			"x": 2328.3441845619614,
			"y": -282.4812395087006,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 273,
			"height": 19,
			"seed": 1739184587,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534422768,
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
			"version": 421,
			"versionNonce": 657085157,
			"isDeleted": false,
			"id": "guHapAJGLcWlF8xhpuCro",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2231.594184561962,
			"y": -576.8233316007929,
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
			"updated": 1655535301786,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 146,
			"versionNonce": 115687621,
			"isDeleted": false,
			"id": "BiN7GkxQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2236.594184561962,
			"y": -555.2312395087006,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 253040683,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071055,
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
			"version": 479,
			"versionNonce": 2000508549,
			"isDeleted": false,
			"id": "1cGGeorB25-gWZHTeEQ4f",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1190.0108512286286,
			"y": -279.4212119125587,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 1032.0833333333333,
			"height": 236.20847877114528,
			"seed": 533195877,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081359,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 9.979434679977828,
				"focus": 0.5506615256955334
			},
			"endBinding": {
				"elementId": "guHapAJGLcWlF8xhpuCro",
				"gap": 9.500000000000227,
				"focus": 0.009541003620622131
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
					-236.20847877114528
				]
			]
		},
		{
			"type": "text",
			"version": 193,
			"versionNonce": 1034005835,
			"isDeleted": false,
			"id": "YZBROixl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 6.068613935690513,
			"x": 1727.0941845619616,
			"y": -465.81457284203384,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 339,
			"height": 19,
			"seed": 1299738987,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534425799,
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
			"version": 342,
			"versionNonce": 222414117,
			"isDeleted": false,
			"id": "HFN0LJOFfZ00KrkH-xKW3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1364.9275178952953,
			"y": -967.6566649341264,
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
			"updated": 1655534526324,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 85,
			"versionNonce": 1522897797,
			"isDeleted": false,
			"id": "csUsh6fl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1369.9275178952953,
			"y": -946.0645728420341,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1187436331,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071056,
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
			"version": 242,
			"versionNonce": 1627105675,
			"isDeleted": false,
			"id": "sshybHxABAZsL6XNKHZse",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1129.5941845619623,
			"y": -347.0645728420336,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 260.0000000000002,
			"height": 526.6666666666669,
			"seed": 424445509,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081360,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 15.496871871871008,
				"focus": 0.045366422861606484
			},
			"endBinding": {
				"elementId": "HFN0LJOFfZ00KrkH-xKW3",
				"gap": 12.741241241241426,
				"focus": 0.31060256569409683
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
					260.0000000000002,
					-526.6666666666669
				]
			]
		},
		{
			"type": "text",
			"version": 127,
			"versionNonce": 903591275,
			"isDeleted": false,
			"id": "HMeeR5Yo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.194902275407166,
			"x": 1096.260851228629,
			"y": -597.8979061753673,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 264,
			"height": 19,
			"seed": 1034983691,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534515124,
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
			"version": 457,
			"versionNonce": 2098579621,
			"isDeleted": false,
			"id": "DhxQGCqhTS0-LmJUY9NI5",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3167.292156137969,
			"y": -717.0645728420343,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 1631.6428512697207,
			"height": 563.3333333333333,
			"seed": 1463275531,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081360,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 12.741241241241369,
				"focus": -0.36204527365605627
			},
			"endBinding": {
				"elementId": "HFN0LJOFfZ00KrkH-xKW3",
				"gap": 5.333333333333485,
				"focus": -0.07312159079974308
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
					-1631.6428512697207,
					-253.0718445447568
				]
			]
		},
		{
			"type": "text",
			"version": 265,
			"versionNonce": 404340171,
			"isDeleted": false,
			"id": "T7CFTWlx",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.2742481157964587,
			"x": 2501.2608512286292,
			"y": -1264.5645728420347,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 403,
			"height": 38,
			"seed": 870660933,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535687963,
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
			"version": 327,
			"versionNonce": 941831493,
			"isDeleted": false,
			"id": "wutD40emUmHK1V-AY5nnH",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2708.260851228629,
			"y": -694.3233316007938,
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
			"updated": 1655535592153,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 153,
			"versionNonce": 1562325803,
			"isDeleted": false,
			"id": "Lsr2vx2G",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2713.260851228629,
			"y": -689.3233316007938,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 95,
			"seed": 1794090469,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071058,
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
			"version": 234,
			"versionNonce": 1795124229,
			"isDeleted": false,
			"id": "-xCd7oCzAzwQE12YHk1Ng",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3109.594184561963,
			"y": -653.9248066379959,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 225.00000000000045,
			"height": 5.181908168163204,
			"seed": 1747525989,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081362,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 9.08333333333303,
				"focus": -0.28061541661107314
			},
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 10.33333333333394,
				"focus": -0.3571468938686638
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
					-5.181908168163204
				]
			]
		},
		{
			"type": "arrow",
			"version": 230,
			"versionNonce": 1721607013,
			"isDeleted": false,
			"id": "UDg5hDDwBYPm7CDLc0wqo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2398.594184561962,
			"y": -545.916354618787,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 294.33333333333394,
			"height": 85.33798294849544,
			"seed": 1529664901,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081362,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "guHapAJGLcWlF8xhpuCro",
				"gap": 1,
				"focus": 0.22688328866875096
			},
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 15.33333333333303,
				"focus": 0.23433022374541265
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
					-85.33798294849544
				]
			]
		},
		{
			"type": "text",
			"version": 81,
			"versionNonce": 2007638955,
			"isDeleted": false,
			"id": "gZBNWw91",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.03521578743903753,
			"x": 2917.8584151929476,
			"y": -675.931786243281,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 196,
			"height": 42,
			"seed": 1963874181,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535652803,
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
			"version": 56,
			"versionNonce": 40061227,
			"isDeleted": false,
			"id": "11y45v0r",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 6.021140806831623,
			"x": 2434.5941845619627,
			"y": -607.8979061753683,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 207,
			"height": 19,
			"seed": 2001044389,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535290784,
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
			"version": 197,
			"versionNonce": 1971109611,
			"isDeleted": false,
			"id": "KMPGMy19UakZRwOg72tCo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3126.2608512286297,
			"y": -717.0645728420355,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 788.333333333333,
			"height": 243.33333333333337,
			"seed": 1132837579,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081359,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 12.741241241242676,
				"focus": -0.029532190026788675
			},
			"endBinding": {
				"elementId": "guHapAJGLcWlF8xhpuCro",
				"gap": 15.241241241242676,
				"focus": -0.2762349477905283
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
					-158.33333333333303,
					-118.33333333333337
				],
				[
					-553.333333333333,
					-101.66666666666663
				],
				[
					-788.333333333333,
					125
				]
			]
		},
		{
			"type": "text",
			"version": 49,
			"versionNonce": 1116174949,
			"isDeleted": false,
			"id": "Wnk6e5K3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2719.5941845619636,
			"y": -871.2312395087022,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 170,
			"height": 19,
			"seed": 608476581,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535314291,
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
			"version": 439,
			"versionNonce": 369914219,
			"isDeleted": false,
			"id": "GN-5Gb0qF0ZbD7BzpX8O2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2416.2608512286306,
			"y": -687.0645728420352,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 656.6666666666661,
			"height": 370,
			"seed": 1887227019,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081362,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 22.25875875875863,
				"focus": -0.571278855757804
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
			"version": 84,
			"versionNonce": 1548139755,
			"isDeleted": false,
			"id": "mjoU9BLk",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 6.206216836395926,
			"x": 2226.2608512286306,
			"y": -414.5645728420352,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 300,
			"height": 38,
			"seed": 1626640747,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535408889,
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
			"version": 332,
			"versionNonce": 1786722501,
			"isDeleted": false,
			"id": "-fvDbmDO5XREpcVRBq3qw",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3496.5941845619654,
			"y": -994.3233316007941,
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
			"updated": 1655535557509,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 28,
			"versionNonce": 1833096293,
			"isDeleted": false,
			"id": "1FsuKrFE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3501.5941845619654,
			"y": -963.2312395087017,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1679055115,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535469420,
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
			"version": 213,
			"versionNonce": 847105573,
			"isDeleted": false,
			"id": "bnoNhAGEYLmAY4PuSaebN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3301.260851228632,
			"y": -702.0645728420352,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 201.66666666666652,
			"height": 199.99999999999977,
			"seed": 423374507,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081364,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 16.583333333336213,
				"focus": 0.4916515677716528
			},
			"endBinding": {
				"elementId": "-fvDbmDO5XREpcVRBq3qw",
				"gap": 11.074574574574456,
				"focus": 0.19825202265512581
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
					-199.99999999999977
				]
			]
		},
		{
			"type": "arrow",
			"version": 215,
			"versionNonce": 273334661,
			"isDeleted": false,
			"id": "EQbcAqSvt3iy-nRWeEsIO",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2469.5941845619654,
			"y": -1045.397906175368,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 1011.6666666666665,
			"height": 95,
			"seed": 474927211,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081364,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QyyvyEZ4OHof3cgeMBok0",
				"gap": 8.644492595039992,
				"focus": -0.10603186970107066
			},
			"endBinding": {
				"elementId": "-fvDbmDO5XREpcVRBq3qw",
				"gap": 15.333333333333485,
				"focus": -0.2597286165436085
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
			"version": 22,
			"versionNonce": 555898821,
			"isDeleted": false,
			"id": "vK4C52fg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.10238051025009831,
			"x": 2871.0941845619654,
			"y": -1029.5645728420347,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 67,
			"height": 19,
			"seed": 682627275,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535483804,
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
			"version": 93,
			"versionNonce": 1538590149,
			"isDeleted": false,
			"id": "vjta3Ogl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.4773818130955885,
			"x": 3288.4275178952994,
			"y": -816.2312395087015,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 189,
			"height": 19,
			"seed": 695146923,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535505840,
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
			"version": 339,
			"versionNonce": 637917221,
			"isDeleted": false,
			"id": "EokmLKLjvlpzZclmHMqxx",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3344.9275178952976,
			"y": -469.3233316007929,
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
			"updated": 1655535557510,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 66,
			"versionNonce": 1778777733,
			"isDeleted": false,
			"id": "4vn14rGT",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3349.9275178952976,
			"y": -447.73123950870064,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 767993291,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071061,
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
			"version": 200,
			"versionNonce": 166650859,
			"isDeleted": false,
			"id": "79J7njpQ9357mYHoMYXNu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3251.2608512286315,
			"y": -612.0645728420338,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 105,
			"height": 133.33333333333337,
			"seed": 1265519435,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081365,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 11.074574574574456,
				"focus": -0.07737776600170239
			},
			"endBinding": {
				"elementId": "EokmLKLjvlpzZclmHMqxx",
				"gap": 9.407907907907543,
				"focus": -0.2808794784604331
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
					133.33333333333337
				]
			]
		},
		{
			"type": "text",
			"version": 67,
			"versionNonce": 1827717707,
			"isDeleted": false,
			"id": "riiJr9Dm",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.902867268309075,
			"x": 3277.760851228632,
			"y": -574.5645728420338,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 67,
			"height": 19,
			"seed": 1652099525,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535551235,
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
			"version": 153,
			"versionNonce": 2077353029,
			"isDeleted": false,
			"id": "K8N9Zlx1GiPIvfLxv6H5d",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3668.81905256569,
			"y": -903.9796048328313,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 214.3333333333344,
			"height": 444.30779684868025,
			"seed": 98058475,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081365,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "-fvDbmDO5XREpcVRBq3qw",
				"gap": 11.074574574575706,
				"focus": -0.6948326411809276
			},
			"endBinding": {
				"elementId": "EokmLKLjvlpzZclmHMqxx",
				"gap": 1,
				"focus": 0.5553266989099994
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
					57.44179866294189,
					141.91503199079762
				],
				[
					-156.8915346703925,
					444.30779684868025
				]
			]
		},
		{
			"type": "text",
			"version": 120,
			"versionNonce": 994687461,
			"isDeleted": false,
			"id": "ltAaPRPR",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.387129922608242,
			"x": 3495.4275178952985,
			"y": -637.8979061753671,
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
			"updated": 1655535592153,
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
			"version": 187,
			"versionNonce": 1950215877,
			"isDeleted": false,
			"id": "Qebm8UBY6Szv_esGLjEWt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3641.2608512286315,
			"y": -627.0645728420338,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 990,
			"height": 441.66666666666674,
			"seed": 774481067,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081362,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ltAaPRPR",
				"focus": -0.10513852446936597,
				"gap": 9.553198950409978
			},
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 15.592092092093367,
				"focus": 0.12772681245339512
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
					-805,
					53.33333333333337
				]
			]
		},
		{
			"type": "text",
			"version": 61,
			"versionNonce": 621975237,
			"isDeleted": false,
			"id": "wUJ70vBl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3367.7608512286315,
			"y": -207.89790617536732,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 207,
			"height": 19,
			"seed": 539870923,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655535619001,
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
			"version": 462,
			"versionNonce": 1593250725,
			"isDeleted": false,
			"id": "1QcHUVUYuXAo3BNGHUitu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3458.260851228632,
			"y": 472.3433350658741,
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
				},
				{
					"id": "igZ1hg7I8woGVejssi1xE",
					"type": "arrow"
				}
			],
			"updated": 1655538081367,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 150,
			"versionNonce": 63558507,
			"isDeleted": false,
			"id": "g4SQM2G2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3463.260851228632,
			"y": 503.4354271579664,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 23549573,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536487777,
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
			"version": 72,
			"versionNonce": 1920440043,
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
			"updated": 1655538071064,
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
			"version": 143,
			"versionNonce": 1134682437,
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
			"updated": 1655538071066,
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
			"version": 55,
			"versionNonce": 685474187,
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
			"updated": 1655538071068,
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
			"version": 73,
			"versionNonce": 96432293,
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
			"updated": 1655538071068,
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
			"version": 436,
			"versionNonce": 844474213,
			"isDeleted": false,
			"id": "0lFTDkXoahrCjFL_XNa3Z",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4219.9275178953,
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
			"updated": 1655536113355,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 65,
			"versionNonce": 1286150187,
			"isDeleted": false,
			"id": "6vZd3NPm",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4224.9275178953,
			"y": 492.2687604912998,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1300805899,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071070,
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
			"version": 382,
			"versionNonce": 2121344299,
			"isDeleted": false,
			"id": "5ISfKvr8odSWjmSjsW1qt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4406.594184561965,
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
			"updated": 1655538081378,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 17,
			"versionNonce": 540710795,
			"isDeleted": false,
			"id": "W95Ubwld",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4411.594184561965,
			"y": 503.4354271579664,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1259213451,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536254211,
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
			"version": 340,
			"versionNonce": 2053127813,
			"isDeleted": false,
			"id": "RSTUvE3zBzZjc6iCmZ00s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4593.260851228631,
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
			"updated": 1655536300134,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 76,
			"versionNonce": 1540020939,
			"isDeleted": false,
			"id": "HEq1mePr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 4598.260851228631,
			"y": 479.01000173254056,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 76,
			"seed": 546339717,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071072,
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
			"version": 45,
			"versionNonce": 1056787301,
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
			"updated": 1655538071073,
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
			"version": 50,
			"versionNonce": 853231979,
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
			"updated": 1655538071073,
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
			"version": 73,
			"versionNonce": 1919456965,
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
			"updated": 1655538071076,
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
			"version": 39,
			"versionNonce": 925164555,
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
			"updated": 1655538071080,
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
			"type": "arrow",
			"version": 162,
			"versionNonce": 1306603147,
			"isDeleted": false,
			"id": "igZ1hg7I8woGVejssi1xE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3192.927517895295,
			"y": -610.3979061753672,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 251.66666666666697,
			"height": 1130,
			"seed": 1035087371,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538081367,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"gap": 12.741241241241084,
				"focus": 0.10542168674699892
			},
			"endBinding": {
				"elementId": "1QcHUVUYuXAo3BNGHUitu",
				"gap": 13.666666666670153,
				"focus": -0.7931215503683332
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
					0,
					921.6666666666667
				],
				[
					251.66666666666697,
					1130
				]
			]
		},
		{
			"type": "text",
			"version": 106,
			"versionNonce": 1151889963,
			"isDeleted": false,
			"id": "g0NWjKSo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 1.5246752107803827,
			"x": 3148.760851228629,
			"y": 42.10209382463301,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 95,
			"height": 19,
			"seed": 1791231077,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655536510733,
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
			"version": 443,
			"versionNonce": 1839005797,
			"isDeleted": false,
			"id": "5E6CFDoBKVEKwfMRhhVZP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3514.2495271501316,
			"y": 1711.5813704903085,
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
			"updated": 1655537034861,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 119,
			"versionNonce": 117269611,
			"isDeleted": false,
			"id": "7uwX81Oe",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3519.2495271501316,
			"y": 1742.6734625824008,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 413994475,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655537034861,
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
			"version": 382,
			"versionNonce": 2101980101,
			"isDeleted": false,
			"id": "H6zYqIgu7Vou1MfJ7nfb0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3512.375132472644,
			"y": 1814.673077752092,
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
			"updated": 1655537034861,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 93,
			"versionNonce": 1695774245,
			"isDeleted": false,
			"id": "hCmcJNuZ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3517.375132472644,
			"y": 1836.2651698441844,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 227215685,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071082,
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
			"version": 344,
			"versionNonce": 2097802021,
			"isDeleted": false,
			"id": "bZ-fAeEydxGpA04j22-bY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3701.688994898829,
			"y": 1814.673077752092,
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
			"updated": 1655537034861,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 32,
			"versionNonce": 557417899,
			"isDeleted": false,
			"id": "DPKhivzB",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3706.688994898829,
			"y": 1845.7651698441844,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1941482757,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655537034861,
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
			"version": 367,
			"versionNonce": 1296776837,
			"isDeleted": false,
			"id": "_jyi82Fk0RuXaOjIyQqvO",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3510.50073779516,
			"y": 1925.2623637238228,
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
			"updated": 1655537034861,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 25,
			"versionNonce": 1861326923,
			"isDeleted": false,
			"id": "oTUr3BqE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3515.50073779516,
			"y": 1956.3544558159151,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1590169643,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655537034861,
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
			"version": 347,
			"versionNonce": 947869445,
			"isDeleted": false,
			"id": "gNxSU5zP8k9qzCwTrm-em",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3508.626343117673,
			"y": 2037.7260443730406,
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
			"updated": 1655538081395,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 23,
			"versionNonce": 2102286059,
			"isDeleted": false,
			"id": "DNdUBXsA",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3513.626343117673,
			"y": 2068.8181364651327,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 19,
			"seed": 1124952427,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655537034861,
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
			"version": 437,
			"versionNonce": 1774718091,
			"isDeleted": false,
			"id": "GKpx6rvyVBLu-5qIF-Exs",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3510.500737795161,
			"y": 1615.9872419384733,
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
			"updated": 1655537049195,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 105,
			"versionNonce": 837511557,
			"isDeleted": false,
			"id": "gMa1OJh9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3515.500737795161,
			"y": 1637.5793340305656,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 1061298085,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071085,
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
			"version": 332,
			"versionNonce": 97070981,
			"isDeleted": false,
			"id": "FyHBRb65FKj2_Ssk0LSMp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3511.2945640464095,
			"y": 2138.9412819487834,
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
			"updated": 1655537225478,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 44,
			"versionNonce": 1140694347,
			"isDeleted": false,
			"id": "K8aJ2mId",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3516.2945640464095,
			"y": 2160.5333740408755,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 38,
			"seed": 995628683,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655538071086,
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
			"version": 365,
			"versionNonce": 1484009029,
			"isDeleted": false,
			"id": "nxUYZ5nSsQjoQB4PB8J4E",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3368.8504060842815,
			"y": 1038.389357050077,
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
			"updated": 1655537550898,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 55,
			"versionNonce": 976089317,
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
			"updated": 1655538071087,
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
			"version": 33,
			"versionNonce": 1016183787,
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
			"updated": 1655538071088,
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
			"version": 393,
			"versionNonce": 1035766987,
			"isDeleted": false,
			"id": "y_MR-mRaygo3TzWzxrgYN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 3883.447302563781,
			"y": 1815.0202560314108,
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
			"updated": 1655538086080,
			"link": null,
			"locked": false
		},
		{
			"id": "seXjAy8s",
			"type": "text",
			"x": 3888.447302563781,
			"y": 1827.1123481235031,
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
			"seed": 1137140069,
			"version": 47,
			"versionNonce": 1941420389,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655538086080,
			"link": null,
			"locked": false,
			"text": "Gif du \npersonnage en \nidle",
			"rawText": "Gif du personnage en idle",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 53,
			"containerId": "y_MR-mRaygo3TzWzxrgYN",
			"originalText": "Gif du personnage en idle"
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