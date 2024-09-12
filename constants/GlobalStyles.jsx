const Styles = {
  colors: {
    portalGreen: '#97ce4c',
    rickBlue: '#55aae0',
    mortyOrange: '#ff9800',
    alienPurple: '#8e44ad',
    spaceGray: '#2c3e50',
  },
  text: {
    fontFamily: 'Creepster-Regular', // Asegúrate de que esta fuente esté cargada correctamente
    heading: {
      fontSize: 50, // Debe ser un número, no una cadena de texto
      color: '#ff9800',
      textAlign: 'center',
      margin: 20, // Cambia marginButton a margin (también debe ser un número)
    },
    body: {
      fontSize: 16, // Debe ser un número, no una cadena de texto
      fontWeight: 'normal',
      color: '#333333',
    },
  },
  button: {
    backgroundColor: '#97ce4c',
    color: '#ffffff',
    padding: 10, // Debe ser un número, no una cadena de texto
    borderRadius: 5, // Debe ser un número, no una cadena de texto
    border: 'none',
    cursor: 'pointer', // 'cursor: pointer' no es aplicable en React Native
  },
};

export default Styles;
