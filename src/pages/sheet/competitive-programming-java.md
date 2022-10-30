---
layout: ../../layouts/CheatSheet.astro
title: "Competitive Programming Java Cheatsheet"
---

## Synopsis

Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Competitive programming is recognized and supported by several multinational software and Internet companies.

There are many different types of competitive programming competitions, including:

| Type                                                                          | Description                                                                                                                                                      |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ACM-ICPC](https://icpc.baylor.edu/)                                          | The ACM International Collegiate Programming Contest (ICPC) is an annual multi-tiered competitive programming competition among the universities of the world.   |
| [Google Code Jam](https://codingcompetitions.withgoogle.com/codejam)          | Google Code Jam is a programming competition organized and run by Google.                                                                                        |
| [Google Kick Start](https://codingcompetitions.withgoogle.com/kickstart)      | Google Kick Start is a global online coding competition, consisting of three-hour rounds of algorithmic puzzles designed by Google engineers and held virtually. |
| [Google Hash Code](https://codingcompetitions.withgoogle.com/hashcode)        | Google Hash Code is a team-based programming competition, organized by Google for students and professionals around the world.                                   |
| [Facebook Hacker Cup](https://www.facebook.com/codingcompetitions/hacker-cup) | Facebook Hacker Cup is a worldwide programming competition organized by Facebook.                                                                                |

## standard-java-templates

### template-using-scanner-class

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

### template-using-buffered-reader-class

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

### template-using-custom-fast-reader-class

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
