tags : 
links : [[Informatique/Les langages/Python/Python]], [[020 MOC Informatique]]

****

<h2 style="text-align: center;"> les variables en Python </h2>

****


*Comme dans tous les langages, il est possible de créer des variables. Mais, qu'est-ce qu'un variable ? Une variable est comme un conteneur où l'on peut stocker des données*.


### Comment créer une variable 

*Une variable est se créée sous cette forme -> nom_de_la_variable = valeur*.

*Par exemple :*

```python
nom = "John Doe"
age = 24
```

*Ici nous avons crée deux variables, une variable **nom** avec pour valeur __John Doe__ et une variable __age__ avec pour valeur __24__*.

### Afficher une variable

*Bien sur nous pouvons afficher les valeurs de ces variables à l'aide d'un print (voir cours [[Afficher un message en Python]]).*

```python
nom = "John Doe"
age = 24

print(f"Mon nom est {nom} et j'ai {age} ans.")
```

*Va afficher "Mon nom est __John Doe__ et j'ai __24__ ans."*

*Ici on utilise le f-string pour afficher des variables, qui a été vu dans le cours [[Afficher un message en Python]].*

### Changer la valeur d'une variable en Python

*La valeur de notre peut être modifiée quand nous le voulons*


```python
nom = "John Doe"
age = 24
nom = "Donald Doe"
age = 55

print(f"Mon nom est {nom} et j'ai {age} ans.")
```

*Va afficher :*

*"Mon nom est __Donald Doe__ et j'ai __55__ ans."*

```python
nom = "John Doe"
age = 24

print(f"Mon nom est {nom} et j'ai {age} ans.")

nom = "Donald Doe"
age = 55

print(f"Mon nom est {nom} et j'ai {age} ans.")
```

*Va afficher :*

*"Mon nom est __John Doe__ et j'ai __24__ ans.
Mon nom est __Donald Doe__ et j'ai __55__ ans."*

*En fait, quand nous allons redéfinir la valeur d'une variable l'ancienne va être écrasée.*

### Connaitre le type d'une variable en Python

*Chaque valeur dans une variable a un type spécifique (voir cours [[types de données en Python]]. Mais, nous pouvons connaitre ce type à l'aide de __type()__*

```python
nom = "John Doe"
age = 24

print(type(nom))
print(type(age))
```

*Va afficher :*

*<class 'str'>
<class 'int'>*

*Ce qui veut dire que nom est de type **str** soit une chaine de caractères et age est de type **int** soit un nombre entiers.*