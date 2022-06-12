---
MOC: [[Les bases de C++]]
Projets: [[Apprendre le C++]]
tags: #informatique
Date: 12-06-2022
---

## Les déclarations en C++

---


En *C++* on peut déclarer une variable sans lui donner de valeur, bien sur on doit lui donner son type (voir => [[les types de données en C++]])

Pour déclarer un entier age on fait comme cela :

```cpp
#include <iostream>
using namespace std;

int main() {
    int age;

}
```

Ensuite si on veut donner une valeur à [[Les variables en C++|la variable]] on a juste à rajouter une ligne

```cpp
#include <iostream>
using namespace std;

int main() {
    int age;
    age = 18;
}
```

Et si on veut afficher *la variable* age il suffit aussi d'ajouter aussi une ligne (voir => [[Les variables en C++]])

```cpp
#include <iostream>
using namespace std;

int main() {
    int age;
    age = 18;
    cout << age << endl;
}
```

---
### Liens :

[[Les bases de C++]], [[Apprendre le C++]]