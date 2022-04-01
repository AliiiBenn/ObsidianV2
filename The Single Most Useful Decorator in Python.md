tags : 
links : [[130 MOC Vidéos]], [[020 MOC Informatique]], [[Python]]

****

<h2 style="text-align: center;"> The Single Most Useful Decorator in Python </h2>

****


```python
from functools import cache

@cache
def fib(n):
	if n <= 1:
		return n
	return fib(n - 1) + fib(n - 2)

def main():
	for i in range(400):
		print(i, fib(i))
	print("done")

if __name__ == "__main__":
	main()
```