

up::[[Exemple de quelques instructions en C++]]

## Faire une répétition en C++ - for

---

Le concept de *boucles* se fait avec le mot clé *for* en *C++* suivant la syntaxe :
```
for (i = 0; i < 10; i++) {
	code à répéter
}
```

*i = 0* déclare une nouvelle *variable* nommée *i* avec comme valeur *0*, *i < 10* est la condition qui va "casser" la boucle donc une fois qu'elle n'est plus respectée la boucle se termine et *i++* veut dire qu'à chaque tour de la boucle, la valeur de *i* va augmenter de 1

```cpp
#include <iostream>
using namespace std;

int main() {

	for(i = 0; i < 10; i++) {
		cout << i << endl;
	}

	return 0;
}

```

va afficher :

```
0
1
2
3
4
5
6
7
8
9
```


---
### Liens :

[[Exemple de quelques instructions en C++]], [[Programmer en C++ moderne]]

---

Date: 19-06-2022