tags : 
links : [[Python]], [[020 MOC Informatique]]

****

<h2 style="text-align: center;"> Afficher un message en Python </h2>

****


*Pour afficher un message en Python on utilise print(), par exemple pour afficher "Hello, World!" on fait :* 

```python
print("Hello, World!")
```

*Ici on afficher la **chaine de caractères** "Hello, World" avec "" avant et après le message car, c'est comme ça qu'une chaine de caractère est définie. C'est ce qu'on appelle un string (en python str) et c'est l'un des différents [[types de données en Python|types de données]]*.

*On peut aussi bien sur afficher des nombres*.

```python
print(5)
```

*On utilise aussi forcément les print pour afficher des variables (voir cours sur [[les variables en Python]])*.

```python
name = John Doe
print(name)
```

*Va afficher "John Doe"*.

*Depuis Python 3.6 on a ce que l'on appelle le f-string qui permet de mettre des variables dans une chaine de caractère plus simplement*.

*Avec le f-string :*

```python
name = John Doe
age = 24

print(f'Votre nom est {name} et vous avez {age} ans')
```

*Va afficher "Votre nom est John Doe et vous avez 24 ans"*.

*(Je ne vais pas montrer comment faire avant Python 3.6 car c'est plus dur, moins compréhensible et moins perfomant.)*

*En Python on peut définir la fin de notre message, qui est par defaut sur "\n" ("\n" signifie qu'on saute une ligne) d'où le fait que deux print se font sur deux lignes. Mais, avec l'argument "end" on peut le changer, par exemple :*

```python
print("Hello, ", end="")
print("World!")
```

*Va afficher "Hello, World!"*.

```python
print("Hello, ", end="5")
print("World!")
```

*Va afficher "Hello,5World!"*.

```ad-question
title:Exercice avec print()
collapse:true

**Question 1**
*afficher "Bonjour, j'apprends à coder en Python"*

**Question 2**
afficher votre prenom, votre age et votre ville etant stockées dans 3 variables.
Exemple :
*"Bonjour, je m'appelle John Doe et j'ai 24 ans."*

**Question 3**
Faire en sorte que le programme affiche test à la fin
Exemple :
*"Bonjour, je m'appelle John Doe et j'ai 24 ans.test"*

```
