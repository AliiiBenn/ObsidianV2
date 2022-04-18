tags : 
links : [[Les variables en Csharp]], [[020 MOC Informatique]]

****

<h2 style="text-align: center;"> Syntaxe d'une variable csharp </h2>

****

La construction **syntaxique** est quasi toujours la même :
- Le modificateur d'accès "*public*" ou "*private*"
- le type "*int*", "*float*"...
- Son nom

```csharp
public string myName;
```

On peut bien sûr assigner une valeur de base à notre variable
```csharp
public string myName = "John Doe";
```

(Pour un nombre à virgule il faut rajouter un "*f*" à la fin de la valeur)
```csharp
public float myMoney = 50.47f;
```

Pour un booléen c'est simplement
```csharp
public bool estMajeur = true;
```