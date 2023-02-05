# minecraft-template
project-gh-pages: https://asddzxcc1856.github.io/minecraft-template/

---

# objective

practice with React and bootstrap5 and AOS,I can use them to let front-end wonderful.So,This is very quickly to finish by BootStrap5 and AOS stylesheet and scripts

---

# how to run this project by myself step by step

### first step (clone to your PC)

#### Git Bash (in your project directory will produce a minecraft-template folder from clone)
```console
git clone https://github.com/asddzxcc1856/minecraft-template
code minecraft-template/
```
#### VS code terminal (Ctrl + Shift + `)
```console
npm install -g serve
npm update -g serve
serve -s build
```

---

# how to create this project by myself step by step

### first step

#### VScode plugins
```yml
JS JSX Snippets
ESlint
```

#### CRA minecraft,node_module,src and public folder
```console
create-react-app minecraft
```

### second step

#### install (react-router-dom react-router BT5 BT5-icon AOS gh-pages)
```console
npm install bootstrap@v5.2.3 
npm install react-router-dom
npm install react-router
npm i bootstrap-icons
npm install --save aos@next
npm install gh-pages --save-dev
```

### forth step

#### write project(public folder : HTML、logo、ico)(src folder : CSS、JS、React、BT5、AOS)(package.json)

#### package.json (add some for gh-pages)
```json
  "homepage": "https://{username}.github.io/{github-repository-name}/",
  "scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build",
  }
```

### fifth step 

#### deploy to gh-pages
```console
npm run deploy
```

#### see on: https://{username}.github.io/{github-repository-name}/

---
