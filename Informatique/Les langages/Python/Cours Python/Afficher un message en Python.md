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