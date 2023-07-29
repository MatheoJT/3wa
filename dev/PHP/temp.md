Le but de cet exercice est de créer un simulateur de stand de tir, où les joueurs doivent survivre à plusieurs vagues d'ennemis.

Pour ce faire, vous devrez utiliser Java avec le framework Spigot pour construire votre projet.

Vous devrez créer une classe pour représenter les zombies, comprenant un nombre aléatoire d'hitpoints et une vitesse de déplacement.

Vous devrez également créer une classe pour représenter l'arme utilisée par les joueurs, qui doit être un objet capable de lancer des projectiles et non un arc ou une épée.

Le nombre de zombies augmentera à chaque vague, jusqu'à la vague 10, où un message "GG" sera envoyé pour annoncer la fin de la partie.

La partie peut démarrer lorsqu'un joueur se connecte ou lorsqu'un joueur clique avec un objet dans son inventaire.

Vous devrez implémenter la logique pour générer aléatoirement la position de spawn des zombies et leur assigner une vague.

Enfin, vous devrez afficher les informations sur les zombies, leur nombre d'hitpoints restants et la vitesse de déplacement, ainsi que les informations sur les joueurs, leur arme et le nombre de coups restants.

Lorsque vous avez terminé, veuillez envoyer votre code sur un dépôt Gitlab que vous pouvez supprimer ou garder par la suite, ainsi que le projet compilé pour que nous puissions le tester.




**Le but de ce test est de créer un mini-jeu "zombie" rapide.**
Pour ce test, nous te demandons d'utiliser **Gradle** pour gérer la construction de ton projet. 

> « Pour démarrer la partie, le joueur doit interagir avec un item dans la main.
> Le mini-jeu possédera une dizaine de vagues, chaque vague augmente le nombre de zombie.
> Quand la partie commence, le joueur est tp à un point de spawn et il reçoit 2 armes (je te laisse le choix du type d'arme).
> **Le but est simplement de tuer tous les zombies de la vague.**
> À la fin de la dernière vague, envoie un message (exemples: "Vous avez survécu à toutes les vagues !") et redonne l'item permettant de lancer la partie, au joueur. »


Tu devras utiliser une class qui représentera les zombies avec un nom custom et aléatoire 
> _exemple: "[Zombie] Bob"_, où "Bob" est un nom aléatoire pris dans une liste

Tu devras également créer deux class représentants les armes, les armes doivent être capable de lancer des projectiles (pas un arc, mais un item comme une pelle ou une houe).
**Ces deux class doivent hériter d'une même class** 
> _exemple: Pistolet, hérite de Weapon_

Une fois terminé, envoie nous ton code, sur **Gitlab** ou **Github**.
Et envoie-nous le projet compilé pour que l'on puisse le tester.

N'hésite pas à nous demander si tu à des questions à propos de ce test
