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

______________________________________________________________________
| Id membre | Nom membre | Argent | Guilde | Level | xp    | travail |
| string    | string     | float  | None   | int   | float | travail |
_____________________________________________________________________ ^7gZtxOck

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
			"version": 1119,
			"versionNonce": 45088485,
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
			"updated": 1655537568589,
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
			"version": 477,
			"versionNonce": 1065324011,
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
			"updated": 1655537568593,
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
			"version": 402,
			"versionNonce": 319718117,
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
			"updated": 1655537581545,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 582,
			"versionNonce": 1295731179,
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
			"updated": 1655537581546,
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
			"version": 574,
			"versionNonce": 720799045,
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
			"updated": 1655537568599,
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
			"version": 1381,
			"versionNonce": 1991300235,
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
			"updated": 1655537581546,
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
			"version": 815,
			"versionNonce": 183010181,
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
			"width": 603,
			"height": 95,
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
			"updated": 1655534422768,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1209,
			"versionNonce": 1484202827,
			"isDeleted": false,
			"id": "7gZtxOck",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2158.2756607928914,
			"y": 86.50286960040953,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 593,
			"height": 68,
			"seed": 7369819,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534422768,
			"link": null,
			"locked": false,
			"fontSize": 14.302489610265992,
			"fontFamily": 3,
			"text": "______________________________________________________________________\n| Id membre | Nom membre | Argent | Guilde | Level | xp    | travail |\n| string    | string     | float  | None   | int   | float | travail |\n_____________________________________________________________________",
			"rawText": "______________________________________________________________________\n| Id membre | Nom membre | Argent | Guilde | Level | xp    | travail |\n| string    | string     | float  | None   | int   | float | travail |\n_____________________________________________________________________",
			"baseline": 65,
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "WwfE_GbsBbg1rzKuB1d0j",
			"originalText": "______________________________________________________________________\n| Id membre | Nom membre | Argent | Guilde | Level | xp    | travail |\n| string    | string     | float  | None   | int   | float | travail |\n_____________________________________________________________________"
		},
		{
			"type": "text",
			"version": 702,
			"versionNonce": 1752681189,
			"isDeleted": false,
			"id": "TERcQSTK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.0023047704925023282,
			"x": 1957.6536109931874,
			"y": 84.82215963619143,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 161,
			"height": 42,
			"seed": 448057237,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534422768,
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
			"version": 1318,
			"versionNonce": 1554476491,
			"isDeleted": false,
			"id": "W61ML9OEJVG8auIExfr5G",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2145.2376227548575,
			"y": 107.58305392556892,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 234.71071071071265,
			"height": 2.602521434037868,
			"seed": 122859925,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655537581548,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "WwfE_GbsBbg1rzKuB1d0j",
				"gap": 8.038038038033847,
				"focus": 0.1866053430318817
			},
			"endBinding": {
				"elementId": "EEBLiaK7-b2PN8y74INJp",
				"gap": 8.038038038032141,
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
					-234.71071071071265,
					-2.602521434037868
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
			"version": 660,
			"versionNonce": 1692951915,
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
			"updated": 1655537568604,
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
			"version": 729,
			"versionNonce": 816675947,
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
			"updated": 1655537581551,
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
			"version": 664,
			"versionNonce": 578096517,
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
			"updated": 1655537568605,
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
			"version": 809,
			"versionNonce": 2143526315,
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
			"updated": 1655537581554,
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
			"id": "haq1SIfQ",
			"type": "text",
			"x": 3123.6775178952958,
			"y": -682.7312395087006,
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
			"seed": 1066588613,
			"version": 435,
			"versionNonce": 1174431173,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568607,
			"link": null,
			"locked": false,
			"text": "Membres du \nserveur",
			"rawText": "Membres du serveur",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "1vQBRUSh",
			"type": "text",
			"x": 2111.594184561962,
			"y": -192.73123950870064,
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
			"seed": 1426720651,
			"version": 278,
			"versionNonce": 1557790283,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568609,
			"link": null,
			"locked": false,
			"text": "Effet \"nouveau \nmembre\" activé",
			"rawText": "Effet \"nouveau membre\" activé",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "WfwE0REzk7YrM8kxHVCye",
			"originalText": "Effet \"nouveau membre\" activé"
		},
		{
			"id": "Yxd95os7SPS6sVH7x8P8x",
			"type": "arrow",
			"x": 1193.7608512286286,
			"y": -262.628041821657,
			"width": 903.3333333333333,
			"height": 87.38420836018682,
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
			"seed": 857493163,
			"version": 703,
			"versionNonce": 686366245,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581559,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					903.3333333333333,
					87.38420836018682
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
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
			"id": "HlqIdtfN",
			"type": "text",
			"x": 2660.344184561962,
			"y": -392.73123950870064,
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
			"seed": 2015449451,
			"version": 303,
			"versionNonce": 1431251621,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568612,
			"link": null,
			"locked": false,
			"text": "Disent \n\"bienvenue\"",
			"rawText": "Disent \"bienvenue\"",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "ULRWp4_f6XfsGPg6EmGQv",
			"originalText": "Disent \"bienvenue\""
		},
		{
			"id": "J9993LsxLnmR4CCzmd-1m",
			"type": "arrow",
			"x": 3146.4892287700704,
			"y": -619.1561281399472,
			"width": 320.64504420810863,
			"height": 207.81625437949435,
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
			"seed": 470186789,
			"version": 1065,
			"versionNonce": 1924765925,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581560,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-320.64504420810863,
					207.81625437949435
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "SWOnAv2UC9yLerYg_m-V9",
			"type": "arrow",
			"x": 2652.186276654054,
			"y": -334.5425586412505,
			"width": 366.3420920920921,
			"height": 151.85658564605566,
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
			"seed": 412984933,
			"version": 846,
			"versionNonce": 1413428293,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581560,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-366.3420920920921,
					151.85658564605566
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "yiuwbjaN",
			"type": "text",
			"x": 2328.3441845619614,
			"y": -282.4812395087006,
			"width": 273,
			"height": 19,
			"angle": 5.887495715124999,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1739184587,
			"version": 292,
			"versionNonce": 1373163845,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534422768,
			"link": null,
			"locked": false,
			"text": "Gagnent + d'argent et/ou d'xp",
			"rawText": "Gagnent + d'argent et/ou d'xp",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 15,
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
			"id": "BiN7GkxQ",
			"type": "text",
			"x": 2236.594184561962,
			"y": -555.2312395087006,
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
			"seed": 253040683,
			"version": 145,
			"versionNonce": 1805291717,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568614,
			"link": null,
			"locked": false,
			"text": "Banque du \nserveur",
			"rawText": "Banque du serveur",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "guHapAJGLcWlF8xhpuCro",
			"originalText": "Banque du serveur"
		},
		{
			"id": "1cGGeorB25-gWZHTeEQ4f",
			"type": "arrow",
			"x": 1190.0108512286286,
			"y": -279.4212119125587,
			"width": 1032.0833333333333,
			"height": 236.20847877114528,
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
			"seed": 533195877,
			"version": 471,
			"versionNonce": 1564107685,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581562,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1032.0833333333333,
					-236.20847877114528
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "YZBROixl",
			"type": "text",
			"x": 1727.0941845619616,
			"y": -465.81457284203384,
			"width": 339,
			"height": 19,
			"angle": 6.068613935690513,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1299738987,
			"version": 193,
			"versionNonce": 1034005835,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534425799,
			"link": null,
			"locked": false,
			"text": "Création du compte du nouveau membre",
			"rawText": "Création du compte du nouveau membre",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 15,
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
			"id": "csUsh6fl",
			"type": "text",
			"x": 1369.9275178952953,
			"y": -946.0645728420341,
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
			"seed": 1187436331,
			"version": 84,
			"versionNonce": 1852236677,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568615,
			"link": null,
			"locked": false,
			"text": "Système de \ntravail",
			"rawText": "Système de travail",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "HFN0LJOFfZ00KrkH-xKW3",
			"originalText": "Système de travail"
		},
		{
			"id": "sshybHxABAZsL6XNKHZse",
			"type": "arrow",
			"x": 1129.5941845619623,
			"y": -347.0645728420336,
			"width": 260.0000000000002,
			"height": 526.6666666666669,
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
			"seed": 424445509,
			"version": 234,
			"versionNonce": 1097975403,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581563,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					260.0000000000002,
					-526.6666666666669
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "HMeeR5Yo",
			"type": "text",
			"x": 1096.260851228629,
			"y": -597.8979061753673,
			"width": 264,
			"height": 19,
			"angle": 5.194902275407166,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1034983691,
			"version": 127,
			"versionNonce": 903591275,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534515124,
			"link": null,
			"locked": false,
			"text": "Obtient le rôle \"au chomage\"",
			"rawText": "Obtient le rôle \"au chomage\"",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 15,
			"containerId": null,
			"originalText": "Obtient le rôle \"au chomage\""
		},
		{
			"id": "DhxQGCqhTS0-LmJUY9NI5",
			"type": "arrow",
			"x": 3167.292156137969,
			"y": -717.0645728420343,
			"width": 1631.6428512697207,
			"height": 563.3333333333333,
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
			"seed": 1463275531,
			"version": 453,
			"versionNonce": 474245573,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581563,
			"link": null,
			"locked": false,
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
			],
			"lastCommittedPoint": [
				-1510,
				-408.33333333333326
			],
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "T7CFTWlx",
			"type": "text",
			"x": 2501.2608512286292,
			"y": -1264.5645728420347,
			"width": 403,
			"height": 38,
			"angle": 0.2742481157964587,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 870660933,
			"version": 265,
			"versionNonce": 404340171,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535687963,
			"link": null,
			"locked": false,
			"text": "Peut choisir parmi une sélection de travaux\nqui apportent chacun leur propre avantage",
			"rawText": "Peut choisir parmi une sélection de travaux\nqui apportent chacun leur propre avantage",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 34,
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
			"id": "Lsr2vx2G",
			"type": "text",
			"x": 2713.260851228629,
			"y": -689.3233316007938,
			"width": 156,
			"height": 95,
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
			"seed": 1794090469,
			"version": 152,
			"versionNonce": 1515774763,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568617,
			"link": null,
			"locked": false,
			"text": "Compte bancaire\navec un certain \ndécouvert et un \ncertain % \nd'intérêts ",
			"rawText": "Compte bancaire\navec un certain découvert et un certain % d'intérêts ",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 91,
			"containerId": "wutD40emUmHK1V-AY5nnH",
			"originalText": "Compte bancaire\navec un certain découvert et un certain % d'intérêts "
		},
		{
			"id": "-xCd7oCzAzwQE12YHk1Ng",
			"type": "arrow",
			"x": 3109.594184561963,
			"y": -653.9248066379959,
			"width": 225.00000000000045,
			"height": 5.181908168163204,
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
			"seed": 1747525989,
			"version": 226,
			"versionNonce": 704440613,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581565,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-225.00000000000045,
					-5.181908168163204
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "UDg5hDDwBYPm7CDLc0wqo",
			"type": "arrow",
			"x": 2398.594184561962,
			"y": -545.916354618787,
			"width": 294.33333333333394,
			"height": 85.33798294849544,
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
			"seed": 1529664901,
			"version": 222,
			"versionNonce": 523140229,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581565,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					294.33333333333394,
					-85.33798294849544
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "gZBNWw91",
			"type": "text",
			"x": 2917.8584151929476,
			"y": -675.931786243281,
			"width": 196,
			"height": 42,
			"angle": 0.03521578743903753,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1963874181,
			"version": 81,
			"versionNonce": 2007638955,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535652803,
			"link": null,
			"locked": false,
			"text": "Peut ajouter ou\nretirer de l'argent",
			"rawText": "Peut ajouter ou\nretirer de l'argent",
			"fontSize": 17.526177208300222,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 38,
			"containerId": null,
			"originalText": "Peut ajouter ou\nretirer de l'argent"
		},
		{
			"id": "11y45v0r",
			"type": "text",
			"x": 2434.5941845619627,
			"y": -607.8979061753683,
			"width": 207,
			"height": 19,
			"angle": 6.021140806831623,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 2001044389,
			"version": 56,
			"versionNonce": 40061227,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535290784,
			"link": null,
			"locked": false,
			"text": "Envoie un % d'intérêts",
			"rawText": "Envoie un % d'intérêts",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 15,
			"containerId": null,
			"originalText": "Envoie un % d'intérêts"
		},
		{
			"id": "KMPGMy19UakZRwOg72tCo",
			"type": "arrow",
			"x": 3126.2608512286297,
			"y": -717.0645728420355,
			"width": 788.333333333333,
			"height": 243.33333333333337,
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
			"seed": 1132837579,
			"version": 193,
			"versionNonce": 1923938251,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581562,
			"link": null,
			"locked": false,
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
			],
			"lastCommittedPoint": [
				-788.333333333333,
				125
			],
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "Wnk6e5K3",
			"type": "text",
			"x": 2719.5941845619636,
			"y": -871.2312395087022,
			"width": 170,
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
			"seed": 608476581,
			"version": 49,
			"versionNonce": 1116174949,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535314291,
			"link": null,
			"locked": false,
			"text": "Peut faire un prêt",
			"rawText": "Peut faire un prêt",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 15,
			"containerId": null,
			"originalText": "Peut faire un prêt"
		},
		{
			"id": "GN-5Gb0qF0ZbD7BzpX8O2",
			"type": "arrow",
			"x": 2416.2608512286306,
			"y": -687.0645728420352,
			"width": 656.6666666666661,
			"height": 370,
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
			"seed": 1887227019,
			"version": 437,
			"versionNonce": 241777227,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581565,
			"link": null,
			"locked": false,
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
			],
			"lastCommittedPoint": [
				690,
				75
			],
			"startBinding": null,
			"endBinding": {
				"elementId": "wutD40emUmHK1V-AY5nnH",
				"gap": 22.25875875875863,
				"focus": -0.571278855757804
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "mjoU9BLk",
			"type": "text",
			"x": 2226.2608512286306,
			"y": -414.5645728420352,
			"width": 300,
			"height": 38,
			"angle": 6.206216836395926,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1626640747,
			"version": 84,
			"versionNonce": 1548139755,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535408889,
			"link": null,
			"locked": false,
			"text": "récupère chaque jour de l'argent\npour rembourser",
			"rawText": "récupère chaque jour de l'argent\npour rembourser",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 34,
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
			"id": "1FsuKrFE",
			"type": "text",
			"x": 3501.5941845619654,
			"y": -963.2312395087017,
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
			"seed": 1679055115,
			"version": 28,
			"versionNonce": 1833096293,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535469420,
			"link": null,
			"locked": false,
			"text": "warn",
			"rawText": "warn",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "-fvDbmDO5XREpcVRBq3qw",
			"originalText": "warn"
		},
		{
			"id": "bnoNhAGEYLmAY4PuSaebN",
			"type": "arrow",
			"x": 3301.260851228632,
			"y": -702.0645728420352,
			"width": 201.66666666666652,
			"height": 199.99999999999977,
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
			"seed": 423374507,
			"version": 205,
			"versionNonce": 1262673733,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581567,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					201.66666666666652,
					-199.99999999999977
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "EQbcAqSvt3iy-nRWeEsIO",
			"type": "arrow",
			"x": 2469.5941845619654,
			"y": -1045.397906175368,
			"width": 1011.6666666666665,
			"height": 95,
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
			"seed": 474927211,
			"version": 207,
			"versionNonce": 747679397,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581567,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1011.6666666666665,
					95
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "vK4C52fg",
			"type": "text",
			"x": 2871.0941845619654,
			"y": -1029.5645728420347,
			"width": 67,
			"height": 19,
			"angle": 0.10238051025009831,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 682627275,
			"version": 22,
			"versionNonce": 555898821,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535483804,
			"link": null,
			"locked": false,
			"text": "peuvent",
			"rawText": "peuvent",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 15,
			"containerId": null,
			"originalText": "peuvent"
		},
		{
			"id": "vjta3Ogl",
			"type": "text",
			"x": 3288.4275178952994,
			"y": -816.2312395087015,
			"width": 189,
			"height": 19,
			"angle": 5.4773818130955885,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 695146923,
			"version": 93,
			"versionNonce": 1538590149,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535505840,
			"link": null,
			"locked": false,
			"text": "mauvais comportement",
			"rawText": "mauvais comportement",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 15,
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
			"id": "4vn14rGT",
			"type": "text",
			"x": 3349.9275178952976,
			"y": -447.73123950870064,
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
			"seed": 767993291,
			"version": 65,
			"versionNonce": 1264012933,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568620,
			"link": null,
			"locked": false,
			"text": "statuts de \ncitoyen",
			"rawText": "statuts de citoyen",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "EokmLKLjvlpzZclmHMqxx",
			"originalText": "statuts de citoyen"
		},
		{
			"id": "79J7njpQ9357mYHoMYXNu",
			"type": "arrow",
			"x": 3251.2608512286315,
			"y": -612.0645728420338,
			"width": 105,
			"height": 133.33333333333337,
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
			"seed": 1265519435,
			"version": 192,
			"versionNonce": 2058370251,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581573,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					105,
					133.33333333333337
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "riiJr9Dm",
			"type": "text",
			"x": 3277.760851228632,
			"y": -574.5645728420338,
			"width": 67,
			"height": 19,
			"angle": 0.902867268309075,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1652099525,
			"version": 67,
			"versionNonce": 1827717707,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535551235,
			"link": null,
			"locked": false,
			"text": "possède",
			"rawText": "possède",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 15,
			"containerId": null,
			"originalText": "possède"
		},
		{
			"id": "K8N9Zlx1GiPIvfLxv6H5d",
			"type": "arrow",
			"x": 3668.81905256569,
			"y": -903.9796048328313,
			"width": 214.3333333333344,
			"height": 444.30779684868025,
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
			"seed": 98058475,
			"version": 149,
			"versionNonce": 1964444005,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581573,
			"link": null,
			"locked": false,
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
			],
			"lastCommittedPoint": [
				-158.33333333333348,
				443.33333333333337
			],
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "ltAaPRPR",
			"type": "text",
			"x": 3495.4275178952985,
			"y": -637.8979061753671,
			"width": 245,
			"height": 19,
			"angle": 5.387129922608242,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1024629579,
			"version": 120,
			"versionNonce": 994687461,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "Qebm8UBY6Szv_esGLjEWt",
					"type": "arrow"
				}
			],
			"updated": 1655535592153,
			"link": null,
			"locked": false,
			"text": "devient un mauvais citoyen",
			"rawText": "devient un mauvais citoyen",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 15,
			"containerId": null,
			"originalText": "devient un mauvais citoyen"
		},
		{
			"id": "Qebm8UBY6Szv_esGLjEWt",
			"type": "arrow",
			"x": 3641.2608512286315,
			"y": -627.0645728420338,
			"width": 990,
			"height": 441.66666666666674,
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
			"seed": 774481067,
			"version": 185,
			"versionNonce": 1402381285,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581565,
			"link": null,
			"locked": false,
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
			],
			"lastCommittedPoint": [
				-805,
				53.33333333333337
			],
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "wUJ70vBl",
			"type": "text",
			"x": 3367.7608512286315,
			"y": -207.89790617536732,
			"width": 207,
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
			"seed": 539870923,
			"version": 61,
			"versionNonce": 621975237,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535619001,
			"link": null,
			"locked": false,
			"text": "Possibilité de bloquer",
			"rawText": "Possibilité de bloquer",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 15,
			"containerId": null,
			"originalText": "Possibilité de bloquer"
		},
		{
			"type": "rectangle",
			"version": 460,
			"versionNonce": 2056950981,
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
			"updated": 1655537581575,
			"link": null,
			"locked": false
		},
		{
			"id": "g4SQM2G2",
			"type": "text",
			"x": 3463.260851228632,
			"y": 503.4354271579664,
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
			"seed": 23549573,
			"version": 150,
			"versionNonce": 63558507,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536487777,
			"link": null,
			"locked": false,
			"text": "Guildes",
			"rawText": "Guildes",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "n9fmr2Bp",
			"type": "text",
			"x": 3943.2608512286324,
			"y": 160.10209382463302,
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
			"seed": 207573541,
			"version": 32,
			"versionNonce": 1932153355,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535952023,
			"link": null,
			"locked": false,
			"text": "Chef de Guilde",
			"rawText": "Chef de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "Di5uun1U",
			"type": "text",
			"x": 3944.9275178952985,
			"y": 276.76876049129976,
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
			"seed": 466913253,
			"version": 40,
			"versionNonce": 943793989,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536349117,
			"link": null,
			"locked": false,
			"text": "Banque de guilde",
			"rawText": "Banque de guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "mNoP2dQt",
			"type": "text",
			"x": 3951.5941845619664,
			"y": 501.7687604912996,
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
			"seed": 1031533259,
			"version": 39,
			"versionNonce": 646278885,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535988635,
			"link": null,
			"locked": false,
			"text": "Niveau de Guilde",
			"rawText": "Niveau de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "iJsNjKjt",
			"type": "text",
			"x": 3954.9275178952994,
			"y": 600.6020938246334,
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
			"seed": 1320735749,
			"version": 71,
			"versionNonce": 78464747,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568624,
			"link": null,
			"locked": false,
			"text": "Avantages de \nGuildes",
			"rawText": "Avantages de Guildes",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "PD7yTpZl",
			"type": "text",
			"x": 3954.9275178952994,
			"y": 694.010001732541,
			"width": 156,
			"height": 76,
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
			"seed": 1299257957,
			"version": 142,
			"versionNonce": 1558131013,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568626,
			"link": null,
			"locked": false,
			"text": "Politique de la \nGuilde \n(dictature \netc...)",
			"rawText": "Politique de la Guilde (dictature etc...)",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 72,
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
			"id": "VoesOLDT",
			"type": "text",
			"x": 3948.2608512286333,
			"y": 393.43542715796644,
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
			"seed": 2053056875,
			"version": 25,
			"versionNonce": 1806509733,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536050396,
			"link": null,
			"locked": false,
			"text": "Membre de Guilde",
			"rawText": "Membre de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "MVYNB7dQ",
			"type": "text",
			"x": 4143.260851228632,
			"y": 385.60209382463296,
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
			"seed": 1144030245,
			"version": 54,
			"versionNonce": 1222324619,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568629,
			"link": null,
			"locked": false,
			"text": "Membres de la \nGuilde",
			"rawText": "Membres de la Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "O5xRO1q5",
			"type": "text",
			"x": 4138.260851228633,
			"y": 712.2687604912999,
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
			"seed": 1315047493,
			"version": 72,
			"versionNonce": 718454949,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568630,
			"link": null,
			"locked": false,
			"text": "Alliances de \nGuilde",
			"rawText": "Alliances de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "MacXT2t2",
			"type": "text",
			"x": 4333.260851228633,
			"y": 723.4354271579666,
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
			"seed": 1413730507,
			"version": 47,
			"versionNonce": 1294687947,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536267165,
			"link": null,
			"locked": false,
			"text": "Guerre de Guilde",
			"rawText": "Guerre de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "6vZd3NPm",
			"type": "text",
			"x": 4224.9275178953,
			"y": 492.2687604912998,
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
			"seed": 1300805899,
			"version": 64,
			"versionNonce": 825411627,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568632,
			"link": null,
			"locked": false,
			"text": "échanges entre \nles membres",
			"rawText": "échanges entre les membres",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "0lFTDkXoahrCjFL_XNa3Z",
			"originalText": "échanges entre les membres"
		},
		{
			"type": "rectangle",
			"version": 380,
			"versionNonce": 26854923,
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
			"updated": 1655537581590,
			"link": null,
			"locked": false
		},
		{
			"id": "W95Ubwld",
			"type": "text",
			"x": 4411.594184561965,
			"y": 503.4354271579664,
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
			"seed": 1259213451,
			"version": 17,
			"versionNonce": 540710795,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536254211,
			"link": null,
			"locked": false,
			"text": "PNJ de Guilde",
			"rawText": "PNJ de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "HEq1mePr",
			"type": "text",
			"x": 4598.260851228631,
			"y": 479.01000173254056,
			"width": 156,
			"height": 76,
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
			"seed": 546339717,
			"version": 75,
			"versionNonce": 1671334603,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568635,
			"link": null,
			"locked": false,
			"text": "Bâtiments de \nGuildes qui \ndonnent des \navantages",
			"rawText": "Bâtiments de Guildes qui donnent des avantages",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 72,
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
			"id": "HvPhBER6",
			"type": "text",
			"x": 4148.26085122863,
			"y": 602.2687604912999,
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
			"seed": 1593848037,
			"version": 44,
			"versionNonce": 326933349,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568636,
			"link": null,
			"locked": false,
			"text": "+ d'xp et \nd'argent",
			"rawText": "+ d'xp et d'argent",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "AgiDPGyU",
			"type": "text",
			"x": 4334.927517895295,
			"y": 602.2687604912996,
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
			"seed": 718243013,
			"version": 49,
			"versionNonce": 1689844075,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568637,
			"link": null,
			"locked": false,
			"text": "accès à des \nchannels",
			"rawText": "accès à des channels",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "EBGxbNFR",
			"type": "text",
			"x": 4138.260851228627,
			"y": 278.4354271579665,
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
			"seed": 62823173,
			"version": 19,
			"versionNonce": 678067557,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536360329,
			"link": null,
			"locked": false,
			"text": "Don à la Guilde",
			"rawText": "Don à la Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "jmbnNkUJ",
			"type": "text",
			"x": 3958.260851228626,
			"y": 838.4354271579666,
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
			"seed": 739419813,
			"version": 21,
			"versionNonce": 620319499,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536372902,
			"link": null,
			"locked": false,
			"text": "Quêtes de Guilde",
			"rawText": "Quêtes de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "Tx6aWnpc",
			"type": "text",
			"x": 4503.260851228628,
			"y": 830.6020938246334,
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
			"seed": 1794789163,
			"version": 72,
			"versionNonce": 444458693,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568639,
			"link": null,
			"locked": false,
			"text": "Envoyer x \nmessages",
			"rawText": "Envoyer x messages",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "Iun46Fy6",
			"type": "text",
			"x": 4686.594184561961,
			"y": 843.4354271579662,
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
			"seed": 748681861,
			"version": 54,
			"versionNonce": 702591115,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536440773,
			"link": null,
			"locked": false,
			"text": "Faire x de don",
			"rawText": "Faire x de don",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "JnsoWU6o",
			"type": "text",
			"x": 4136.59418456196,
			"y": 830.6020938246331,
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
			"seed": 61697477,
			"version": 30,
			"versionNonce": 534691275,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536411996,
			"link": null,
			"locked": false,
			"text": "Donne de l'xp de\nGuilde",
			"rawText": "Donne de l'xp de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "F4h0U6OL",
			"type": "text",
			"x": 4314.927517895294,
			"y": 841.7687604912996,
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
			"seed": 1109232293,
			"version": 86,
			"versionNonce": 1932551979,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536440773,
			"link": null,
			"locked": false,
			"text": "Exemple =>",
			"rawText": "Exemple =>",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "p4RUHpbj",
			"type": "text",
			"x": 3958.260851228627,
			"y": 943.4354271579668,
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
			"seed": 191312171,
			"version": 20,
			"versionNonce": 726527333,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536457648,
			"link": null,
			"locked": false,
			"text": "Succès de Guilde",
			"rawText": "Succès de Guilde",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "BkolHhv8",
			"type": "text",
			"x": 4136.59418456196,
			"y": 937.2687604913001,
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
			"seed": 1371468101,
			"version": 38,
			"versionNonce": 1103926283,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568645,
			"link": null,
			"locked": false,
			"text": "Débloque des \navantages",
			"rawText": "Débloque des avantages",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "THHjCgFZ4li_WDocBUGOa",
			"originalText": "Débloque des avantages"
		},
		{
			"id": "igZ1hg7I8woGVejssi1xE",
			"type": "arrow",
			"x": 3192.927517895295,
			"y": -610.3979061753672,
			"width": 251.66666666666697,
			"height": 1130,
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
			"seed": 1035087371,
			"version": 158,
			"versionNonce": 1388604267,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537581575,
			"link": null,
			"locked": false,
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
			],
			"lastCommittedPoint": [
				251.66666666666697,
				1130
			],
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "g0NWjKSo",
			"type": "text",
			"x": 3148.760851228629,
			"y": 42.10209382463301,
			"width": 95,
			"height": 19,
			"angle": 1.5246752107803827,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1791231077,
			"version": 106,
			"versionNonce": 1151889963,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655536510733,
			"link": null,
			"locked": false,
			"text": "Peut créer",
			"rawText": "Peut créer",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "top",
			"baseline": 15,
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
			"id": "7uwX81Oe",
			"type": "text",
			"x": 3519.2495271501316,
			"y": 1742.6734625824008,
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
			"seed": 413994475,
			"version": 119,
			"versionNonce": 117269611,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537034861,
			"link": null,
			"locked": false,
			"text": "Système de pets",
			"rawText": "Système de pets",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "hCmcJNuZ",
			"type": "text",
			"x": 3517.375132472644,
			"y": 1836.2651698441844,
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
			"seed": 227215685,
			"version": 92,
			"versionNonce": 2113848869,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568647,
			"link": null,
			"locked": false,
			"text": "Système de \npersonnage",
			"rawText": "Système de personnage",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "DPKhivzB",
			"type": "text",
			"x": 3706.688994898829,
			"y": 1845.7651698441844,
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
			"seed": 1941482757,
			"version": 32,
			"versionNonce": 557417899,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537034861,
			"link": null,
			"locked": false,
			"text": "Modern Interior",
			"rawText": "Modern Interior",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "oTUr3BqE",
			"type": "text",
			"x": 3515.50073779516,
			"y": 1956.3544558159151,
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
			"seed": 1590169643,
			"version": 25,
			"versionNonce": 1861326923,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537034861,
			"link": null,
			"locked": false,
			"text": "Factions",
			"rawText": "Factions",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
			"containerId": "_jyi82Fk0RuXaOjIyQqvO",
			"originalText": "Factions"
		},
		{
			"type": "rectangle",
			"version": 345,
			"versionNonce": 1381348389,
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
			"updated": 1655537581610,
			"link": null,
			"locked": false
		},
		{
			"id": "DNdUBXsA",
			"type": "text",
			"x": 3513.626343117673,
			"y": 2068.8181364651327,
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
			"seed": 1124952427,
			"version": 23,
			"versionNonce": 2102286059,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537034861,
			"link": null,
			"locked": false,
			"text": "Fermes",
			"rawText": "Fermes",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 15,
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
			"id": "gMa1OJh9",
			"type": "text",
			"x": 3515.500737795161,
			"y": 1637.5793340305656,
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
			"seed": 1061298085,
			"version": 104,
			"versionNonce": 820820357,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568651,
			"link": null,
			"locked": false,
			"text": "Système \nmonétaire",
			"rawText": "Système monétaire",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "K8aJ2mId",
			"type": "text",
			"x": 3516.2945640464095,
			"y": 2160.5333740408755,
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
			"seed": 995628683,
			"version": 43,
			"versionNonce": 746147147,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568652,
			"link": null,
			"locked": false,
			"text": "Messages via \ntelegram ",
			"rawText": "Messages via telegram ",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
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
			"id": "a5y3efOT",
			"type": "text",
			"x": 3959.4806164950032,
			"y": 1020.4896054823212,
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
			"seed": 1419190533,
			"version": 54,
			"versionNonce": 1820672229,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537568653,
			"link": null,
			"locked": false,
			"text": "Leaderboard \nentre les \nguildes",
			"rawText": "Leaderboard entre les guildes",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 53,
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
			"id": "TLvwofn2",
			"type": "text",
			"x": 4327.275330849983,
			"y": 387.5327439266238,
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
			"seed": 1595272357,
			"version": 32,
			"versionNonce": 641017387,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655537578377,
			"link": null,
			"locked": false,
			"text": "Leaderboard des \nmembres",
			"rawText": "Leaderboard des membres",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 34,
			"containerId": "rN7RwIBo8Dxgnhnay6hBY",
			"originalText": "Leaderboard des membres"
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