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
			"version": 226,
			"versionNonce": 2020181909,
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
			"updated": 1655486709193,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1081,
			"versionNonce": 1224006587,
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
			"updated": 1655487327871,
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
			"version": 97,
			"versionNonce": 497832949,
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
			"updated": 1655449551922,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 439,
			"versionNonce": 304353653,
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
			"updated": 1655487327875,
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
			"version": 307,
			"versionNonce": 1465203067,
			"isDeleted": false,
			"id": "IMjvHIBc8VbUTGFPROy5m",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1014.4478329650665,
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
				}
			],
			"updated": 1655487441209,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 491,
			"versionNonce": 1590783925,
			"isDeleted": false,
			"id": "DsCdoMn6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1019.4478329650665,
			"y": -310.3089422114038,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 155.58358358358439,
			"height": 32,
			"seed": 1379195867,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487441209,
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
			"version": 296,
			"versionNonce": 1597605403,
			"isDeleted": false,
			"id": "EEBLiaK7-b2PN8y74INJp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1412.1415266587644,
			"y": 117.37624297378301,
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
			"updated": 1655487421601,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 465,
			"versionNonce": 1872608533,
			"isDeleted": false,
			"id": "IHoFnKti",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1417.1415266587644,
			"y": 143.9778445753849,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 162.01401401401532,
			"height": 32,
			"seed": 2146030683,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487421601,
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
			"version": 941,
			"versionNonce": 852734229,
			"isDeleted": false,
			"id": "nedUsKK5O3O_rDUh2BfgD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1175.904642685238,
			"y": -247.28641968887405,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 255.91818407014011,
			"height": 361.449605385691,
			"seed": 609115061,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487441209,
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
					255.91818407014011,
					361.449605385691
				]
			]
		},
		{
			"type": "text",
			"version": 548,
			"versionNonce": 1562039957,
			"isDeleted": false,
			"id": "8JG8oXe3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.9564374059071561,
			"x": 1129.6765568182102,
			"y": -148.43393594716738,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 249.49431858878185,
			"height": 51.724431902552304,
			"seed": 829095899,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487455238,
			"link": null,
			"locked": false,
			"fontSize": 14.673986510422113,
			"fontFamily": 3,
			"text": "On enregistre son identifiant\net le reste des données\ndans la bdd",
			"rawText": "On enregistre son identifiant\net le reste des données\ndans la bdd",
			"baseline": 48.724431902552304,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "On enregistre son identifiant\net le reste des données\ndans la bdd"
		},
		{
			"type": "rectangle",
			"version": 739,
			"versionNonce": 656882645,
			"isDeleted": false,
			"id": "WwfE_GbsBbg1rzKuB1d0j",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1834.942327459558,
			"y": 123.00286960040953,
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
			"updated": 1655487421603,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1133,
			"versionNonce": 786094075,
			"isDeleted": false,
			"id": "7gZtxOck",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1839.942327459558,
			"y": 136.50286960040953,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 593,
			"height": 68,
			"seed": 7369819,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487421603,
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
			"version": 628,
			"versionNonce": 122953883,
			"isDeleted": false,
			"id": "TERcQSTK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0.0023047704925023282,
			"x": 1639.3202776598544,
			"y": 134.82215963619143,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 161,
			"height": 42,
			"seed": 448057237,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487421603,
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
			"version": 868,
			"versionNonce": 253489141,
			"isDeleted": false,
			"id": "W61ML9OEJVG8auIExfr5G",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1826.9042894215243,
			"y": 157.5830539255689,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 234.71071071071242,
			"height": 2.6025214340378398,
			"seed": 122859925,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487421747,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "WwfE_GbsBbg1rzKuB1d0j",
				"focus": 0.1866053430318816,
				"gap": 8.03803803803396
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
					-234.71071071071242,
					-2.6025214340378398
				]
			]
		},
		{
			"type": "rectangle",
			"version": 286,
			"versionNonce": 640509147,
			"isDeleted": false,
			"id": "xfaDIZbJGsVYk-FJu7zYn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1422.5608030780368,
			"y": -637.1875708400328,
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
			"updated": 1655487333900,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 551,
			"versionNonce": 1888575835,
			"isDeleted": false,
			"id": "aTWT3s2s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1427.5608030780368,
			"y": -628.5954787479404,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 64,
			"seed": 1731349109,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487327884,
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
			"version": 255,
			"versionNonce": 1137100405,
			"isDeleted": false,
			"id": "5U-diJVxi0P5j_BqoWlFg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 1171.6531093126787,
			"y": -342.55554595800743,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 251.86273125180014,
			"height": 202.23963248963253,
			"seed": 532533589,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487441210,
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
					251.86273125180014,
					-202.23963248963253
				]
			]
		},
		{
			"type": "rectangle",
			"version": 262,
			"versionNonce": 1920404859,
			"isDeleted": false,
			"id": "QyyvyEZ4OHof3cgeMBok0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2014.3941364113703,
			"y": -1066.1320152844773,
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
			"updated": 1655487351963,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 467,
			"versionNonce": 1583799221,
			"isDeleted": false,
			"id": "3B4f7W37",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2019.3941364113703,
			"y": -1041.539923192385,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 156,
			"height": 32,
			"seed": 2083002747,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487351963,
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
			"version": 180,
			"versionNonce": 1960549653,
			"isDeleted": false,
			"id": "wxSOIO0M9nTNsdZfIlJB2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 2004.152088776368,
			"y": -982.4529246262141,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 414.5912856983309,
			"height": 345.4899141239131,
			"seed": 168423221,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487351964,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QyyvyEZ4OHof3cgeMBok0",
				"focus": 0.31540035324839794,
				"gap": 10.541541541542074
			},
			"endBinding": {
				"elementId": "xfaDIZbJGsVYk-FJu7zYn",
				"focus": 0.2699743423712619,
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
					-414.5912856983309,
					345.4899141239131
				]
			]
		},
		{
			"type": "text",
			"version": 99,
			"versionNonce": 1870282421,
			"isDeleted": false,
			"id": "YqAe17Hh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 5.574932607495024,
			"x": 1670.1025948698286,
			"y": -818.4010343034956,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 207,
			"height": 19,
			"seed": 1595884245,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1655487348240,
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