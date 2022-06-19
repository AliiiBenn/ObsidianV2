---
MOC: 
Projets:
tags:
Date: 18-06-2022
---

## Commandes bot

---

### Modération

- Lock
	- Bloque un membre, qui ne peut donc plus envoyer de message ni rejoindre un salon vocal. On peut mettre un temps ou non mais si il n'y a pas de temps il va falloir l'enlever soi même avec la commande *unlock*. De plus si voulu on peut ajouter une fonctionnalité qui bloque simplement le membre de voir tous les salons sauf un salon réservé aux personnes lock. Pour faire cette commande il faut créer un rôle qui n'a pas la permissions de parler dans les salons textuels et de rejoindre des salons vocaux.
- Unlock
	- Unlock un membre lock, renvoie un message d'erreur si le membre n'est pas lock. Si le membre est temp lock il faudra faire en sorte que le message d'unlock ne se renvoie pas à la fin de comptée à rebours
- Give role
	- Donne le rôle donné en paramètre au membre lui aussi donné en paramètre pour la raison *raison = None*. Si le membre a déjà le rôle on envoie un message d'erreur. Si le rôle n'est pas crée on envoie un message pour savoir si on veut créer le rôle.
- Remove role
	- On retire un role au membre tous deux donnés en paramètres pour la raison *raison = None*. Si le membre n'a pas le rôle on retourne une erreur et si le rôle n'existe pas on retourne une erreur pour dire que e rôle n'existe pas donc que le membre ne peut pas l'avoir
- Clear
	- Efface un nombre *n* de messages puis envoie un message qui lui même sera supprimé aux bout de *x* secondes. Si le nombre de messages est superieur à la limite *limit* de messages à supprimer on renvoie une erreur, si il n'y a pas autant de messages dans le channel on renvoie une erreur.
- kick
	- Kick un membre du serveur, il pourra le rejoindre à nouveau si il y est invité. Si le membre n'existe pas on retourne une erreur, si le membre est superieur à nous erreur.
- 


---
### Liens :