Bilkul Rahul! 😄
Main tumhare liye **complete README file** ready kar deta hoon jisme aaj jo bhi **React + Spring Boot errors** aaye, unka **reason + fix** step-by-step diya ho.
Tum isse future reference ke liye use kar sakte ho.

---

# 📄 README.md

````markdown
# React + Spring Boot Errors & Fixes

Ye document **common errors** aur unka **solution** explain karta hai jo humne aaj face kiye.

---

## 1️⃣ React App Not Opening in Browser

**Error:**  
`npm start` karne ke baad browser open nahi ho raha tha.

**Reason:**  
- `node_modules` folder corrupt ya incomplete tha  
- React version aur `react-scripts` incompatible tha (React 19 + react-scripts 5)

**Fix:**  
```bash
# Delete node_modules and lock file
rm -rf node_modules
rm package-lock.json

# Downgrade React to version 18
npm install react@18 react-dom@18 --save

# Reinstall all dependencies
npm install --legacy-peer-deps

# Start React
npm start
````

---

## 2️⃣ `ERR_INVALID_ARG_TYPE`

**Error:**

```
npm ERR! The "file" argument must be of type string. Received undefined
```

**Reason:**

* Node modules corrupt ya delete nahi ho pa rahe the (Windows EPERM error)
* Folder lock ya permissions issue

**Fix:**

* Close all terminals / VS Code
* Open CMD as Administrator
* Force delete `node_modules` folder
* Clean npm cache:

```bash
npm cache clean --force
```

* Reinstall dependencies (`npm install --legacy-peer-deps`)

---

## 3️⃣ Spring Boot Unable to Find Main Class

**Error:**

```
Unable to find a suitable main class, please add a 'mainClass' property
```

**Reason:**

* `Main.java` delete ho gaya tha
* Spring Boot ko koi class nahi mili jisme `@SpringBootApplication` ho

**Fix:**

* Create a new main class: `HelloApplication.java`

```java
package org.example.hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class, args);
    }
}
```

* Update `pom.xml` if necessary:

```xml
<mainClass>org.example.hello.HelloApplication</mainClass>
```

---

## 4️⃣ Whitelabel Error Page / 404 Not Found

**Error:**

```
Whitelabel Error Page
There was an unexpected error (type=Not Found, status=404)
```

**Reason:**

* Spring Boot me **root path (“/”) ka controller** define nahi tha

**Fix:**
Create a controller:

```java
package org.example.hello.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Hello World from Spring Boot!";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello endpoint working!";
    }
}
```

---

## 5️⃣ React ESLint: `message is not defined`

**Error:**

```
Line 14:14:  'message' is not defined  no-undef
```

**Reason:**

* State variable name mismatch (`massage` vs `message`)
* Variable use karne se pehle define nahi kiya gaya

**Fix:**

```javascript
import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/hello")
            .then(res => res.text())
            .then(data => setMessage(data));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>React + Spring Boot</h1>
            <h2>{message}</h2>
        </div>
    );
}

export default App;
```

---

## ✅ Tips to Handle Errors in Future

1. **Always check variable names** (case-sensitive)
2. **Delete node_modules + package-lock.json** if npm install fails
3. **Run CMD as Administrator** on Windows for permission issues
4. **Check Spring Boot main class** if Maven cannot find it
5. **Define root mapping** in controllers to avoid Whitelabel Page
6. **Keep React + react-scripts compatible** (React 18 + react-scripts 5)
7. **Use ESLint messages** carefully; they usually tell the exact problem

---

**Author:** Rahul
**Date:** 2025-12-01

```

---

Rahul, agar chaho to mai ye README file **ready bana ke tumhare project folder me** bhi add kar dunga,  
tum sirf `README.md` open karke sab errors aur fixes dekh sakte ho.  

Chahoge mai ye kar du?
```
