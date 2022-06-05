---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
Game ^vkfUcrlP

Map ^i6dGJbfJ

Monster
---
type : class
---
vision
spawn
recherche de chemin
déplacement(liste)
 ^f0GoAveK

entities
---
vie : int
speed : float
dégats : float
---
mourir
infliger des dégats
recevoir des dégats
attquer
récuperer de la vie ^U35KuhBD

Player
---
---
déplacement avec touches
récupérer des objets ^TPtWHddz

Héritent ^Ejel3xCz

Compagnon ^0DdowhvB

Slime
---
---
rendre lent le joueur ^J74BT3Wq

Squelette
---
---
faire saigner le joueur ^z9T2N1UP

Quêtes
---
nom : str
description : str
type: class
---
afficher
terminer
actualiser
donner recompense ^vwRJY6bg

UI
---
---
vie
xp
quetes
menu ^lMwTE3Xu

Maison du joueur ^QHal2LrM

Tiled entity
---
animation delay : int
---
changer tile ^DOFGF9QJ

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
			"version": 205,
			"versionNonce": 1689158782,
			"isDeleted": false,
			"id": "bjaSQaB8NfVSYkJOZTTUF",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -343.33333333333326,
			"y": 1515.666666666666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 176,
			"height": 174,
			"seed": 597422018,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "vkfUcrlP"
				}
			],
			"updated": 1654430139744,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 169,
			"versionNonce": 1724418658,
			"isDeleted": false,
			"id": "vkfUcrlP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -338.33333333333326,
			"y": 1580.166666666666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 45,
			"seed": 114986078,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654430139744,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Game",
			"rawText": "Game",
			"baseline": 32,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "bjaSQaB8NfVSYkJOZTTUF",
			"originalText": "Game"
		},
		{
			"type": "rectangle",
			"version": 344,
			"versionNonce": 419444290,
			"isDeleted": false,
			"id": "QveqDKfoVTRVvYKw4dFzW",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1037.9999999999998,
			"y": -574.6666666666666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 465,
			"height": 309,
			"seed": 1568218882,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "TPtWHddz"
				},
				{
					"id": "HSlctk3cApDZvSJxLZ88a",
					"type": "arrow"
				}
			],
			"updated": 1654363891769,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 219,
			"versionNonce": 799360190,
			"isDeleted": false,
			"id": "_lPUISxe6h9Tf6duTjbBt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 98.66666666666674,
			"y": 1522.666666666666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 176,
			"height": 174,
			"seed": 55259230,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "i6dGJbfJ",
					"type": "text"
				}
			],
			"updated": 1654430139744,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 189,
			"versionNonce": 2077027874,
			"isDeleted": false,
			"id": "i6dGJbfJ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 103.66666666666674,
			"y": 1587.166666666666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 166,
			"height": 45,
			"seed": 243600514,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654430139744,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Map",
			"rawText": "Map",
			"baseline": 32,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_lPUISxe6h9Tf6duTjbBt",
			"originalText": "Map"
		},
		{
			"type": "rectangle",
			"version": 237,
			"versionNonce": 62875838,
			"isDeleted": false,
			"id": "au2Ea1NpzpmSzO9XmGe2y",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -40.3333333333328,
			"y": -466.66666666666674,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 424,
			"height": 415,
			"seed": 58996958,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "f0GoAveK",
					"type": "text"
				},
				{
					"id": "Ey7xJUjrArymZHhaOQUHP",
					"type": "arrow"
				}
			],
			"updated": 1654430489928,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 355,
			"versionNonce": 1195252158,
			"isDeleted": false,
			"id": "f0GoAveK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -35.3333333333328,
			"y": -461.66666666666674,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 414,
			"height": 405,
			"seed": 278842370,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654430492958,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Monster\n---\ntype : class\n---\nvision\nspawn\nrecherche de chemin\ndéplacement(liste)\n",
			"rawText": "Monster\n---\ntype : class\n---\nvision\nspawn\nrecherche de chemin\ndéplacement(liste)\n",
			"baseline": 392,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "au2Ea1NpzpmSzO9XmGe2y",
			"originalText": "Monster\n---\ntype : class\n---\nvision\nspawn\nrecherche de chemin\ndéplacement(liste)\n"
		},
		{
			"type": "rectangle",
			"version": 369,
			"versionNonce": 16802018,
			"isDeleted": false,
			"id": "ArmNbFRzMzqcdcs5wBmbm",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 584.6666666666672,
			"y": -1530.666666666667,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 460,
			"height": 550,
			"seed": 559777502,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"id": "U35KuhBD",
					"type": "text"
				},
				{
					"id": "Ey7xJUjrArymZHhaOQUHP",
					"type": "arrow"
				},
				{
					"id": "HSlctk3cApDZvSJxLZ88a",
					"type": "arrow"
				}
			],
			"updated": 1654429880606,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 498,
			"versionNonce": 2063589346,
			"isDeleted": false,
			"id": "U35KuhBD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 589.6666666666672,
			"y": -1503.166666666667,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 450,
			"height": 495,
			"seed": 1380539906,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654429884542,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "entities\n---\nvie : int\nspeed : float\ndégats : float\n---\nmourir\ninfliger des dégats\nrecevoir des dégats\nattquer\nrécuperer de la vie",
			"rawText": "entities\n---\nvie : int\nspeed : float\ndégats : float\n---\nmourir\ninfliger des dégats\nrecevoir des dégats\nattquer\nrécuperer de la vie",
			"baseline": 482,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ArmNbFRzMzqcdcs5wBmbm",
			"originalText": "entities\n---\nvie : int\nspeed : float\ndégats : float\n---\nmourir\ninfliger des dégats\nrecevoir des dégats\nattquer\nrécuperer de la vie"
		},
		{
			"type": "text",
			"version": 312,
			"versionNonce": 1130827554,
			"isDeleted": false,
			"id": "TPtWHddz",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1042.9999999999998,
			"y": -555.1666666666666,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 455,
			"height": 270,
			"seed": 944938718,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654429936786,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Player\n---\n---\ndéplacement avec \ntouches\nrécupérer des objets",
			"rawText": "Player\n---\n---\ndéplacement avec touches\nrécupérer des objets",
			"baseline": 257,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "QveqDKfoVTRVvYKw4dFzW",
			"originalText": "Player\n---\n---\ndéplacement avec touches\nrécupérer des objets"
		},
		{
			"type": "arrow",
			"version": 214,
			"versionNonce": 1721231650,
			"isDeleted": false,
			"id": "Ey7xJUjrArymZHhaOQUHP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 819.2820401754805,
			"y": -954.9999999999983,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 452.7356796730956,
			"height": 460.6330749353988,
			"seed": 1375906974,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654430494349,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ArmNbFRzMzqcdcs5wBmbm",
				"gap": 25.666666666668675,
				"focus": -0.027127287682501645
			},
			"endBinding": {
				"elementId": "au2Ea1NpzpmSzO9XmGe2y",
				"gap": 27.700258397932824,
				"focus": -0.040098400984008055
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
					-1.6153735088133772,
					291.66666666666663
				],
				[
					-298.2820401754799,
					288.33333333333326
				],
				[
					-452.7356796730956,
					460.6330749353988
				]
			]
		},
		{
			"type": "arrow",
			"version": 106,
			"versionNonce": 1077783038,
			"isDeleted": false,
			"id": "HSlctk3cApDZvSJxLZ88a",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 822.6813291350721,
			"y": -963.3333333333314,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 459.98533753159484,
			"height": 371.66666666666663,
			"seed": 601225026,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654430386492,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ArmNbFRzMzqcdcs5wBmbm",
				"gap": 17.33333333333553,
				"focus": 0.029736605220930808
			},
			"endBinding": {
				"elementId": "QveqDKfoVTRVvYKw4dFzW",
				"gap": 16.99999999999818,
				"focus": 0.2259127616401781
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
					14.98533753159495,
					286.66666666666663
				],
				[
					438.3186708649283,
					298.33333333333326
				],
				[
					459.98533753159484,
					371.66666666666663
				]
			]
		},
		{
			"type": "text",
			"version": 27,
			"versionNonce": 403442946,
			"isDeleted": false,
			"id": "Ejel3xCz",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 747.6666666666672,
			"y": -620.9999999999982,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 144,
			"height": 45,
			"seed": 2034541762,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654363891769,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Héritent",
			"rawText": "Héritent",
			"baseline": 32,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Héritent"
		},
		{
			"type": "rectangle",
			"version": 68,
			"versionNonce": 1841353630,
			"isDeleted": false,
			"id": "_P8BLDRjm8v41Y41n4Ctm",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1811.499999999999,
			"y": -540.3333333333333,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 510,
			"height": 280,
			"seed": 1820817182,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "0DdowhvB"
				}
			],
			"updated": 1654365049584,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 14,
			"versionNonce": 1780366658,
			"isDeleted": false,
			"id": "0DdowhvB",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1816.499999999999,
			"y": -422.83333333333326,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 500,
			"height": 45,
			"seed": 381866398,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654365049585,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Compagnon",
			"rawText": "Compagnon",
			"baseline": 32,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_P8BLDRjm8v41Y41n4Ctm",
			"originalText": "Compagnon"
		},
		{
			"type": "rectangle",
			"version": 138,
			"versionNonce": 2120697598,
			"isDeleted": false,
			"id": "e-63iYXFC8vVP_l0X-0Vf",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -507.0952380952392,
			"y": 127.28571428571377,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 446,
			"height": 386,
			"seed": 1473955906,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "J74BT3Wq"
				}
			],
			"updated": 1654430189939,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 139,
			"versionNonce": 942087586,
			"isDeleted": false,
			"id": "J74BT3Wq",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -502.0952380952392,
			"y": 230.28571428571377,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 436,
			"height": 180,
			"seed": 439158978,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654430215157,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Slime\n---\n---\nrendre lent le joueur",
			"rawText": "Slime\n---\n---\nrendre lent le joueur",
			"baseline": 167,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "e-63iYXFC8vVP_l0X-0Vf",
			"originalText": "Slime\n---\n---\nrendre lent le joueur"
		},
		{
			"type": "rectangle",
			"version": 204,
			"versionNonce": 469571554,
			"isDeleted": false,
			"id": "lY_oKtQD5U97rqenD_ryU",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 287.9047619047608,
			"y": 82.78571428571377,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 434,
			"height": 402,
			"seed": 134619806,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [
				{
					"type": "text",
					"id": "z9T2N1UP"
				}
			],
			"updated": 1654430226697,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 210,
			"versionNonce": 2146062142,
			"isDeleted": false,
			"id": "z9T2N1UP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 292.9047619047608,
			"y": 193.78571428571377,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 424,
			"height": 180,
			"seed": 2061573826,
			"groupIds": [],
			"strokeSharpness": "round",
			"boundElements": [],
			"updated": 1654430226698,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Squelette\n---\n---\nfaire saigner le joueur",
			"rawText": "Squelette\n---\n---\nfaire saigner le joueur",
			"baseline": 167,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "lY_oKtQD5U97rqenD_ryU",
			"originalText": "Squelette\n---\n---\nfaire saigner le joueur"
		},
		{
			"id": "5RQyPR1UxgSdcP53CIb7V",
			"type": "rectangle",
			"x": 1524.7857142857133,
			"y": 148.83333333333303,
			"width": 507,
			"height": 460,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1822252542,
			"version": 43,
			"versionNonce": 101856098,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "vwRJY6bg"
				},
				{
					"id": "1ze4P9wBdKZrZdVix5QEr",
					"type": "arrow"
				}
			],
			"updated": 1654430181847,
			"link": null,
			"locked": false
		},
		{
			"id": "vwRJY6bg",
			"type": "text",
			"x": 1529.7857142857133,
			"y": 153.83333333333303,
			"width": 497,
			"height": 450,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1605677666,
			"version": 133,
			"versionNonce": 52563582,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1654430129340,
			"link": null,
			"locked": false,
			"text": "Quêtes\n---\nnom : str\ndescription : str\ntype: class\n---\nafficher\nterminer\nactualiser\ndonner recompense",
			"rawText": "Quêtes\n---\nnom : str\ndescription : str\ntype: class\n---\nafficher\nterminer\nactualiser\ndonner recompense",
			"fontSize": 36,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 437,
			"containerId": "5RQyPR1UxgSdcP53CIb7V",
			"originalText": "Quêtes\n---\nnom : str\ndescription : str\ntype: class\n---\nafficher\nterminer\nactualiser\ndonner recompense"
		},
		{
			"id": "J5yjykOM7k2v1eXlLDaLC",
			"type": "rectangle",
			"x": 599.6666666666656,
			"y": 830.4999999999998,
			"width": 400,
			"height": 370.0000000000002,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 144526754,
			"version": 65,
			"versionNonce": 944443362,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "lMwTE3Xu"
				},
				{
					"id": "1ze4P9wBdKZrZdVix5QEr",
					"type": "arrow"
				}
			],
			"updated": 1654430228761,
			"link": null,
			"locked": false
		},
		{
			"id": "lMwTE3Xu",
			"type": "text",
			"x": 604.6666666666656,
			"y": 857.9999999999999,
			"width": 390,
			"height": 315,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 556075198,
			"version": 82,
			"versionNonce": 295163710,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1654430228761,
			"link": null,
			"locked": false,
			"text": "UI\n---\n---\nvie\nxp\nquetes\nmenu",
			"rawText": "UI\n---\n---\nvie\nxp\nquetes\nmenu",
			"fontSize": 36,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 302,
			"containerId": "J5yjykOM7k2v1eXlLDaLC",
			"originalText": "UI\n---\n---\nvie\nxp\nquetes\nmenu"
		},
		{
			"id": "1ze4P9wBdKZrZdVix5QEr",
			"type": "arrow",
			"x": 1774.7142857142844,
			"y": 616.2619047619044,
			"width": 750.2857142857142,
			"height": 405.6518882790913,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1264090914,
			"version": 89,
			"versionNonce": 1764997694,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1654430386497,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-88.57142857142844,
					148.57142857142856
				],
				[
					-750.2857142857142,
					405.6518882790913
				]
			],
			"lastCommittedPoint": [
				-834.2857142857143,
				217.1428571428571
			],
			"startBinding": {
				"elementId": "5RQyPR1UxgSdcP53CIb7V",
				"gap": 7.428571428571331,
				"focus": -0.35321836493557507
			},
			"endBinding": {
				"elementId": "J5yjykOM7k2v1eXlLDaLC",
				"gap": 24.761904761904475,
				"focus": 0.35681319716357673
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "aR6iT7RWrYj-PubvVFB8Y",
			"type": "rectangle",
			"x": 2515.8571428571413,
			"y": 115.83333333333303,
			"width": 555,
			"height": 430,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 365821794,
			"version": 50,
			"versionNonce": 1612122558,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "QHal2LrM"
				}
			],
			"updated": 1654430286142,
			"link": null,
			"locked": false
		},
		{
			"id": "QHal2LrM",
			"type": "text",
			"x": 2520.8571428571413,
			"y": 308.33333333333303,
			"width": 545,
			"height": 45,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 589651774,
			"version": 20,
			"versionNonce": 1074197858,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1654430284779,
			"link": null,
			"locked": false,
			"text": "Maison du joueur",
			"rawText": "Maison du joueur",
			"fontSize": 36,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 32,
			"containerId": "aR6iT7RWrYj-PubvVFB8Y",
			"originalText": "Maison du joueur"
		},
		{
			"id": "5d7QqwddveHfsuFHshvG5",
			"type": "rectangle",
			"x": -1185.4761904761917,
			"y": -470.5000000000002,
			"width": 485,
			"height": 364.9999999999998,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 2117941950,
			"version": 33,
			"versionNonce": 439949566,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "DOFGF9QJ"
				}
			],
			"updated": 1654430383262,
			"link": null,
			"locked": false
		},
		{
			"id": "DOFGF9QJ",
			"type": "text",
			"x": -1180.4761904761917,
			"y": -400.50000000000034,
			"width": 475,
			"height": 225,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 725513982,
			"version": 69,
			"versionNonce": 1559750050,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1654430520071,
			"link": null,
			"locked": false,
			"text": "Tiled entity\n---\nanimation delay : int\n---\nchanger tile",
			"rawText": "Tiled entity\n---\nanimation delay : int\n---\nchanger tile",
			"fontSize": 36,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 212,
			"containerId": "5d7QqwddveHfsuFHshvG5",
			"originalText": "Tiled entity\n---\nanimation delay : int\n---\nchanger tile"
		},
		{
			"id": "hXhdHTpt",
			"type": "text",
			"x": 1721.4523809523803,
			"y": 322.8333333333328,
			"width": 19,
			"height": 45,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1385870078,
			"version": 3,
			"versionNonce": 208779042,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1654430032941,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 36,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 32,
			"containerId": null,
			"originalText": ""
		},
		{
			"id": "idoTLNFjfAHKjLdGzAyse",
			"type": "text",
			"x": 2760.8571428571413,
			"y": 314.83333333333303,
			"width": 19,
			"height": 45,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 1573248510,
			"version": 3,
			"versionNonce": 261451326,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1654430276241,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 36,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 32,
			"containerId": null,
			"originalText": ""
		},
		{
			"id": "ckeSy8HkZcJSWVy59bVfM",
			"type": "text",
			"x": 2814.190476190475,
			"y": 341.49999999999966,
			"width": 19,
			"height": 45,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"strokeSharpness": "round",
			"seed": 948320354,
			"version": 3,
			"versionNonce": 1705303074,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1654430280864,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 36,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 32,
			"containerId": null,
			"originalText": ""
		}
	],
	"appState": {
		"theme": "dark",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#000000",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 1,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 36,
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