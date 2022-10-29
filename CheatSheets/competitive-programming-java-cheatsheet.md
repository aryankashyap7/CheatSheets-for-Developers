## Table of Contents

- [Competitive programming cheat sheet](#competitive-programming-cheat-sheet)
	- [Standard Java Templates](#Standard Java Templates)
		- [Template using Scanner Class](#Template using Scanner Class)
		- [Template using Buffered Reader Class](#Template using Buffered Reader Class)
		- [Template using custom Fast Reader Class](#Template using custom Fast Reader Class)
	
# Competitive programming in Java cheat sheet

## Standard Java Templates

### Template using Scanner Class

```java
import java.io.*;
import java.util.*;

public class Main {
	public static void main(String[] args) throws Exception {
		Scanner s = new Scanner(System.in);

		// example usage
		int num = s.nextInt();
		System.out.println("Num: " + num);

		// code goes here:

	}
}
```

**[🔼Back to Top](#table-of-contents)**

### Template using Buffered Reader Class

```java
import java.io.*;
import java.util.*;

public class Main {
	public static void main(String[] args) throws Exception {
		InputStreamReader isr = new InputStreamReader(System.in);
		BufferedReader br = new BufferedReader(isr);

		// example usage
		int num = Integer.parseInt(br.readLine());
		System.out.println("Num: " + num);

		// code goes here:

	}
}

```

**[🔼Back to Top](#table-of-contents)**

### Template using custom Fast Reader Class

```java
import java.io.*;
import java.util.*;

public class Main {
	static class FastReader { // custom fast reader class
		InputStreamReader isr;
		BufferedReader br;
		StringTokenizer st;

		public FastReader() {
			isr = new InputStreamReader(System.in);
			br = new BufferedReader(isr);
		}

		String next() { // read a word in the input
			while (st == null || !st.hasMoreElements()) {
				try {
					st = new StringTokenizer(br.readLine());
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			return st.nextToken();
		}

		String nextLine() { // read a line in the input
			String str = "";
			try {
				if (st.hasMoreTokens()) {
					str = st.nextToken("\n");
				} else {
					str = br.readLine();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			return str;
		}
	}

	public static void main(String[] args) throws Exception {
		FastReader fr = new FastReader();

		// example usage
		int num = Integer.parseInt(fr.next());
		System.out.println("Num: " + num);

		// code goes here:

	}
}
```

**[🔼Back to Top](#table-of-contents)**
