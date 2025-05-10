# 🧪 Secuencia

Esta guía proporciona una **secuencia clara y práctica para implementar pruebas (testing)** en un proyecto desarrollado con **React Native**. Está diseñada para ayudar a configurar el entorno, definir buenas prácticas y aplicar pruebas unitarias, de integración y E2E de forma progresiva.

---

## 📦 Librerías necesarias

1. Instala las siguientes dependencias:

-- npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

-- npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/jest-native @testing-library/react-native @testing-library/user-event @types/jest babel-jest identity-obj-proxy jest-environment-jsdom --legacy-peer-deps

2. Agrega un nuevo apartado en el package.json - despues de devDependencies - para agregar:

"jest": {
  "preset": "jest-expo",
  "setupFilesAfterEnv": [
    "@testing-library/jest-native/extend-expect"
  ],
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)"
  ]
}

module.exports = createJestConfig(customJestConfig);

3. Crear archivo jest.setup.js y agrega:

import '@testing-library/jest-dom';

4. Agrega en el apartado de scripts del package.json

"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}

5. Correr el comando "npm run test"

Deberia encontrarse con un mensaje similar a:
- No tests found...