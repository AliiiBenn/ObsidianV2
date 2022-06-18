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
			"version": 1091,
			"versionNonce": 27479621,
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
			"updated": 1655535219063,
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
			"version": 449,
			"versionNonce": 1471374475,
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
			"updated": 1655535219066,
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
			"version": 358,
			"versionNonce": 1999842539,
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
			"updated": 1655535291610,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 538,
			"versionNonce": 714255173,
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
			"updated": 1655535291611,
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
			"version": 546,
			"versionNonce": 1751615653,
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
			"updated": 1655535219070,
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
			"version": 1203,
			"versionNonce": 671546021,
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
			"updated": 1655535291611,
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
			"version": 1142,
			"versionNonce": 1751799141,
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
			"updated": 1655535291613,
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
			"version": 632,
			"versionNonce": 1925401611,
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
			"updated": 1655535219074,
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
			"version": 551,
			"versionNonce": 1034182853,
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
			"updated": 1655535291615,
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
			"version": 424,
			"versionNonce": 412959531,
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
				}
			],
			"updated": 1655534422768,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 636,
			"versionNonce": 1887732101,
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
			"updated": 1655535219075,
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
			"version": 631,
			"versionNonce": 71086981,
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
			"updated": 1655535291617,
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
			"version": 732,
			"versionNonce": 256641925,
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
				}
			],
			"updated": 1655535301786,
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
			"version": 407,
			"versionNonce": 210293669,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535219077,
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
			"version": 250,
			"versionNonce": 161371755,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535219079,
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
			"version": 527,
			"versionNonce": 1737888555,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535291619,
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
			"version": 275,
			"versionNonce": 1064758405,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535219080,
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
			"x": 3146.4892287701014,
			"y": -619.1561281399472,
			"width": 320.64504420813955,
			"height": 207.816254379498,
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
			"version": 889,
			"versionNonce": 218465387,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535291620,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-320.64504420813955,
					207.816254379498
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
			"version": 670,
			"versionNonce": 1716502283,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535291620,
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
			"version": 117,
			"versionNonce": 1889792907,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535219081,
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
			"version": 295,
			"versionNonce": 465151403,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535291621,
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
			"version": 56,
			"versionNonce": 496946379,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535219082,
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
			"version": 58,
			"versionNonce": 776369899,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535291623,
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
			"version": 365,
			"versionNonce": 414253381,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535291623,
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
			"x": 2474.5941845619623,
			"y": -1251.2312395087015,
			"width": 403,
			"height": 38,
			"angle": 0.22805407752016826,
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
			"version": 244,
			"versionNonce": 641192101,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535175811,
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
			"version": 325,
			"versionNonce": 460315653,
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
				}
			],
			"updated": 1655535264953,
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
			"version": 124,
			"versionNonce": 381927051,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535268366,
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
			"x": 3109.5941845619627,
			"y": -653.9287377100504,
			"width": 225,
			"height": 5.1788443599957645,
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
			"version": 50,
			"versionNonce": 736792741,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535291624,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-225,
					-5.1788443599957645
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
			"y": -545.9183443214314,
			"width": 294.33333333333394,
			"height": 85.33641379326752,
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
			"version": 46,
			"versionNonce": 1945842693,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535291624,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					294.33333333333394,
					-85.33641379326752
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
			"x": 2921.2608512286297,
			"y": -679.5645728420347,
			"width": 179,
			"height": 38,
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
			"version": 68,
			"versionNonce": 852476715,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535238828,
			"link": null,
			"locked": false,
			"text": "Peut ajouter ou\nretirer de l'argent",
			"rawText": "Peut ajouter ou\nretirer de l'argent",
			"fontSize": 16,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 34,
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
			"version": 105,
			"versionNonce": 1971616235,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535301792,
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
				"focus": -0.029532190026788675,
				"gap": 12.741241241242676
			},
			"endBinding": {
				"elementId": "guHapAJGLcWlF8xhpuCro",
				"focus": -0.2762349477905283,
				"gap": 15.241241241242676
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "Wnk6e5K3",
			"type": "text",
			"x": 2759.5941845619636,
			"y": -876.2312395087022,
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
			"version": 28,
			"versionNonce": 1009427787,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655535311607,
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
		"currentItemTextAlign": "left",
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