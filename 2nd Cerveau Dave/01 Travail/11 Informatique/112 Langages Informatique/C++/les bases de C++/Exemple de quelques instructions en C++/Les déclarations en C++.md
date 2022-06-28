

up::[[Exemple de quelques instructions en C++]]

## Les déclarations en C++

---

Les déclarations en *C++* sont ce qu'on appelle des variables. Elle sont de la forme 
```type nom = valeur;``` 

>[!info]- A savoir
il faut noter que la valeur n'est pas obligatoire quand on déclare une variable

```cpp
#include <iostream>
using namespace std;

int main() {

	int age = 18;
	float argent;

	return 0;
}
```

Ici nous avons deux déclarations, *age* et *argent*, *age* a la valeur 18 et argent lui n'a pas encore de valeur mais on peut lui en assigner une à tout moment

```cpp
#include <iostream>
using namespace std;

int main() {

	int age = 18;
	float argent;

	argent = 0.5f;

	return 0;
}
```


Comment dans le premier exemple on déclare argent sans valeur mais après on lui assigne la valeur *0.5*. 

Il y aussi les constantes qui elles ne sont pas modifiables :

```cpp
#include <iostream>
using namespace std;

int main() {

	const int id = 1234;

	return 0;
}
```

Ici on a déclaré une constante *id* de type *int* et de valeur *1234*, cette valeur ne pourra pas être modifiée sinon elle retournera une erreur

>[!error]- L'erreur
>main.cpp:7:8: error: assignment of read-only variable 'id'

---
### Liens :

[[Exemple de quelques instructions en C++]], [[Programmer en C++ moderne]]

---

Date: 19-06-2022