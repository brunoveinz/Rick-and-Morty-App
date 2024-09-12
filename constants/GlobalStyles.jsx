const Styles = {
  colors: {
    portalGreen: '#97ce4c',
    rickBlue: '#55aae0',
    mortyOrange: '#ff9800',
    alienPurple: '#8e44ad',
    spaceGray: '#2c3e50'
  },
  text: {
    fontFamily: 'Creepster-Regular', // Fuente global definida aquí
    heading: {
      fontSize: 50, // Tamaños de fuente en números, no en px
      fontWeight: 'bold',
      color: '#ff9800',
      textAlign: 'center',
      margin: 20,
      fontFamily: 'Creepster-Regular', // Aplicar la fuente a títulos
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
      color: '#333333',
      fontFamily: 'Creepster-Regular', // Aplicar la fuente al cuerpo del texto
    }
  },
  button: {
    backgroundColor: '#97ce4c', 
    color: '#ffffff',
    padding: 10, // En lugar de px, usar valores numéricos
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Creepster-Regular', // Aplicar la fuente al botón
  }
};

export default Styles;
