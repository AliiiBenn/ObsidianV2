[[Bubble Sort]] [[__Nouveau Second Cerveau/02 informatique/Langages Informatique/Langages Algorithmique/Python]]

---

Voici le programme python du Bubble Sort

```python
def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1]= arr[j+1], arr[j]
```[[Bubble Sort en Python]]