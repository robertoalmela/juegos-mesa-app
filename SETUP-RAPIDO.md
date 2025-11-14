# 🚀 Setup Rápido - 5 Minutos

## ✅ Checklist

- [ ] Crear proyecto en Firebase
- [ ] Configurar Realtime Database
- [ ] Copiar credenciales a `firebase-config.js`
- [ ] Subir a GitHub
- [ ] Activar GitHub Pages
- [ ] ¡Jugar!

---

## 1️⃣ Firebase (3 minutos)

### A) Crear proyecto
1. Ve a: https://console.firebase.google.com/
2. Click **"Agregar proyecto"**
3. Nombre: `juegos-mesa-app` (o el que quieras)
4. **Desactiva** Google Analytics
5. Click **"Crear proyecto"**

### B) Configurar Base de Datos
1. Menú lateral: **Build → Realtime Database**
2. Click **"Crear base de datos"**
3. Ubicación: **United States** (o la más cercana)
4. **MUY IMPORTANTE**: Selecciona **"Empezar en modo de prueba"**
5. Click **"Habilitar"**

### C) Obtener credenciales
1. Click en el engranaje ⚙️ → **"Configuración del proyecto"**
2. En "Tus apps", click el botón **`</>`** (Web)
3. Nombre de app: `juegos-web`
4. **NO** marques "Firebase Hosting"
5. Click **"Registrar app"**
6. Copia TODO el código que aparece en `const firebaseConfig = {...}`

### D) Pegar credenciales
1. Abre el archivo `firebase-config.js` en este proyecto
2. Reemplaza los valores `TU_XXX_AQUI` con tus valores reales
3. Guarda el archivo

**Ejemplo:**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAaBbCc...",  // ← Reemplaza esto
  authDomain: "juegos-mesa-app.firebaseapp.com",
  databaseURL: "https://juegos-mesa-app-default-rtdb.firebaseio.com",
  projectId: "juegos-mesa-app",
  storageBucket: "juegos-mesa-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123"
};
```

---

## 2️⃣ Subir a GitHub (2 minutos)

### Opción A: GitHub Desktop (más fácil)
1. Abre GitHub Desktop
2. File → Add Local Repository
3. Selecciona esta carpeta
4. Click **"Publish repository"**
5. Marca como **público**
6. Click **"Publish"**

### Opción B: Línea de comandos
```powershell
git add .
git commit -m "Configurar Firebase y agregar 4 juegos"
git push
```

---

## 3️⃣ Activar GitHub Pages (30 segundos)

1. Ve a tu repositorio en GitHub.com
2. Click **Settings** (Configuración)
3. Menú lateral: **Pages**
4. En "Source": selecciona **main** y **/ (root)**
5. Click **Save**
6. Espera 1-2 minutos

Tu sitio estará en:
```
https://TU_USUARIO.github.io/juegos-mesa-app/
```

---

## ✅ Probar que funciona

1. Abre la URL de GitHub Pages
2. Click **"Crear Nueva Sala"**
3. Selecciona cualquier juego
4. Si sale código de 4 letras → **¡FUNCIONA!**
5. Comparte la URL y el código con tus amigos

---

## ❌ Si algo no funciona

### "Error al crear sala"
- Abre la consola del navegador (F12)
- Ve a la pestaña **Console**
- Busca mensajes de error
- Probablemente sea un problema con `firebase-config.js`

### Verificaciones:
1. ¿Copiaste TODAS las líneas de Firebase?
2. ¿Están entre comillas los valores?
3. ¿Creaste la Realtime Database en Firebase?
4. ¿Seleccionaste "modo de prueba"?

---

## 🎮 ¡Listo para jugar!

Tienes 4 juegos disponibles:
- 🎭 **Blanco** - El clásico de adivinar quién no tiene la palabra
- 🐺 **El Lobo** - Aldeanos vs Lobos
- 🔐 **Código Secreto** - Versión de Codenames
- 🏃 **Quick Stop** - El clásico Basta/Stop

---

## 💰 ¿Cuánto cuesta?

**TODO ES GRATIS**
- Firebase: Gratis hasta 10GB de datos
- GitHub Pages: Gratis para repositorios públicos
- Tu app soporta hasta 100+ jugadores simultáneos

---

## 📱 Compartir con amigos

1. Crea una sala
2. Comparte:
   - URL: `https://TU_USUARIO.github.io/juegos-mesa-app/`
   - Código: `XXXX` (el que aparezca)
3. Ellos entran con su nombre y el código
4. ¡A jugar!

---

¿Necesitas ayuda? Abre un Issue en GitHub o revisa el README completo.
