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
			"version": 228,
			"versionNonce": 940870891,
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
			"updated": 1655534205402,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1088,
			"versionNonce": 1528067659,
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
			"updated": 1655534377610,
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
			"version": 99,
			"versionNonce": 1533654923,
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
			"updated": 1655534205402,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 446,
			"versionNonce": 1733109733,
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
			"updated": 1655534377613,
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
			"version": 319,
			"versionNonce": 983889003,
			"isDeleted": false,
			"id": "IMjvHIBc8VbUTGFPROy5m",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1014.4478329650664,
			"y": -334.9010343034961,
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
				}
			],
			"updated": 1655534398730,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 501,
			"versionNonce": 1705188293,
			"isDeleted": false,
			"id": "DsCdoMn6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1019.4478329650664,
			"y": -310.3089422114038,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 155.58358358358439,
			"height": 32,
			"seed": 1379195867,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534398730,
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
			"version": 371,
			"versionNonce": 1335438213,
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
			"updated": 1655534414714,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 543,
			"versionNonce": 1921317707,
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
			"updated": 1655534414714,
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
			"version": 1118,
			"versionNonce": 511531499,
			"isDeleted": false,
			"id": "nedUsKK5O3O_rDUh2BfgD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1186.4618469790883,
			"y": -274.5021000633433,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 540.7999557360433,
			"height": 354.8291774805051,
			"seed": 609115061,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534414714,
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
					540.7999557360433,
					354.8291774805051
				]
			]
		},
		{
			"type": "text",
			"version": 603,
			"versionNonce": 2143975723,
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
			"updated": 1655534420058,
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
			"version": 814,
			"versionNonce": 1966138507,
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
			"updated": 1655534414714,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1208,
			"versionNonce": 1579531685,
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
			"updated": 1655534414715,
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
			"version": 701,
			"versionNonce": 1883816197,
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
			"updated": 1655534414715,
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
			"version": 1117,
			"versionNonce": 977864651,
			"isDeleted": false,
			"id": "W61ML9OEJVG8auIExfr5G",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2145.2376227548575,
			"y": 107.58305392556889,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 234.71071071071265,
			"height": 2.6025214340378398,
			"seed": 122859925,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534416070,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "WwfE_GbsBbg1rzKuB1d0j",
				"focus": 0.1866053430318817,
				"gap": 8.038038038033847
			},
			"endBinding": {
				"elementId": "EEBLiaK7-b2PN8y74INJp",
				"focus": -0.1386767631393274,
				"gap": 8.038038038032141
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
					-2.6025214340378398
				]
			]
		},
		{
			"type": "rectangle",
			"version": 359,
			"versionNonce": 32790629,
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
			"updated": 1655534414715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 629,
			"versionNonce": 141003883,
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
			"updated": 1655534414715,
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
			"version": 432,
			"versionNonce": 942720779,
			"isDeleted": false,
			"id": "5U-diJVxi0P5j_BqoWlFg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1187.6859282031621,
			"y": -332.3425459898641,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 541.9999999999995,
			"height": 277.00410452284996,
			"seed": 532533589,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534414715,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "IMjvHIBc8VbUTGFPROy5m",
				"gap": 7.654511654511339,
				"focus": 0.10696467840309465
			},
			"endBinding": {
				"elementId": "xfaDIZbJGsVYk-FJu7zYn",
				"gap": 11.208208208208134,
				"focus": 0.13129360828536282
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
					541.9999999999995,
					-277.00410452284996
				]
			]
		},
		{
			"type": "rectangle",
			"version": 423,
			"versionNonce": 473542059,
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
			"updated": 1655534414715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 633,
			"versionNonce": 532780677,
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
			"updated": 1655534414715,
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
			"version": 606,
			"versionNonce": 1527502443,
			"isDeleted": false,
			"id": "wxSOIO0M9nTNsdZfIlJB2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2284.8477341768303,
			"y": -1005.2687655757072,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 377.00571605962614,
			"height": 317.7625722761011,
			"seed": 168423221,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655534416070,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QyyvyEZ4OHof3cgeMBok0",
				"focus": 0.31540035324839777,
				"gap": 10.101957790095184
			},
			"endBinding": {
				"elementId": "xfaDIZbJGsVYk-FJu7zYn",
				"focus": 0.2699743423712612,
				"gap": 1
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
					-377.00571605962614,
					317.7625722761011
				]
			]
		},
		{
			"type": "text",
			"version": 229,
			"versionNonce": 73694955,
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
			"updated": 1655534414715,
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
			"version": 642,
			"versionNonce": 1096251717,
			"isDeleted": false,
			"id": "GXxOT1yr1ZiCJ64Up4wVa",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2985.344184561962,
			"y": -549.3233316007929,
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
				}
			],
			"updated": 1655534414715,
			"link": null,
			"locked": false
		},
		{
			"id": "haq1SIfQ",
			"type": "text",
			"x": 2990.344184561962,
			"y": -527.7312395087006,
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
			"version": 320,
			"versionNonce": 1022060939,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534414715,
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
			"version": 528,
			"versionNonce": 645660715,
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
			"updated": 1655534414715,
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
			"version": 247,
			"versionNonce": 258190341,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534414715,
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
			"y": -265.9294702694154,
			"width": 903.3333333333333,
			"height": 90.41764088512372,
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
			"version": 442,
			"versionNonce": 1954145125,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534414715,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					903.3333333333333,
					90.41764088512372
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
			"version": 582,
			"versionNonce": 2089955013,
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
			"updated": 1655534414715,
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
			"version": 272,
			"versionNonce": 1879100427,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534414715,
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
			"x": 2982.1995885810584,
			"y": -464.1561281399473,
			"width": 156.35540401909657,
			"height": 67.92488863124663,
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
			"version": 696,
			"versionNonce": 62640395,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534416070,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-156.35540401909657,
					67.92488863124663
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "GXxOT1yr1ZiCJ64Up4wVa",
				"focus": -0.09330318167085327,
				"gap": 3.9830192766610253
			},
			"endBinding": {
				"elementId": "ULRWp4_f6XfsGPg6EmGQv",
				"focus": 0.20237968058691114,
				"gap": 4.5
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "SWOnAv2UC9yLerYg_m-V9",
			"type": "arrow",
			"x": 2652.186276654054,
			"y": -334.54255864125054,
			"width": 366.34209209209234,
			"height": 151.85658564605575,
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
			"version": 645,
			"versionNonce": 366180267,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534416070,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-366.34209209209234,
					151.85658564605575
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "ULRWp4_f6XfsGPg6EmGQv",
				"focus": -0.04632691692877697,
				"gap": 3.157907907907884
			},
			"endBinding": {
				"elementId": "WfwE0REzk7YrM8kxHVCye",
				"focus": 0.41258704531063345,
				"gap": 13.25
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
			"version": 291,
			"versionNonce": 1621002469,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534414715,
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
			"version": 415,
			"versionNonce": 1695982571,
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
				}
			],
			"updated": 1655534414715,
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
			"version": 114,
			"versionNonce": 403055685,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534414715,
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
			"y": -282.78621064547735,
			"width": 1032.0833333333328,
			"height": 233.11808404475755,
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
			"version": 201,
			"versionNonce": 1789088677,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534414716,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1032.0833333333328,
					-233.11808404475755
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
			"x": 1732.0941845619616,
			"y": -457.4812395087006,
			"width": 339,
			"height": 19,
			"angle": 6.031857523018745,
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
			"version": 186,
			"versionNonce": 44623147,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1655534414716,
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