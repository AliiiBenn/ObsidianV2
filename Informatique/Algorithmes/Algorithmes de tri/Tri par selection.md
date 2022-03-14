tags : #informatique, #algorithmes #AlgorithmeDeTri
links : [[Algorithmes de Tri]], [[NSI]]

---

![](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)


```python
def tri_selection(tab):
   for i in range(len(tab)):
       min = i
       for j in range(i+1, len(tab)):
           if tab[min] > tab[j]:
               min = j
       tmp = tab[i]
       tab[i] = tab[min]
       tab[min] = tmp
   return tab
```



---


