import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function PantallaReplica() {
  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <ImageBackground 
        source={{ uri: 'https://assets.newatlas.com/dims4/default/5b664dd/2147483647/strip/true/crop/1620x1080+150+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbandlab-online-collaboration-daw-update-4.jpg' }}
        style={styles.imageBackground}
      />
      
      {/* Contenido Inferior */}
      <View style={styles.bottomContainer}>
        <Image source={{ uri: 'https://www.bandlab.com/web-app/images/open-graph-4fd21aa09f.png' }} style={styles.logo} />
   
        <Text style={styles.subtitle}>Haz música en cualquier lugar</Text>
        
        {/* Botón Registrarse */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Registrarse con correo electrónico</Text>
        </TouchableOpacity>
        
        {/* Línea divisoria */}
        <View style={styles.divider} />
        <Text style={styles.orText}>o continuar con</Text>
        
        {/* Botones de redes sociales */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="white" />
          </TouchableOpacity>
        </View>
        
        {/* Términos y política */}
        <Text style={styles.termsText}>
          Al continuar, aceptas los <Text style={styles.linkText}>Términos de uso</Text> y
          <Text style={styles.linkText}> Política de privacidad</Text> de BandLab.
        </Text>
        
        {/* Iniciar sesión */}
        <Text style={styles.loginText}>¿Tienes una cuenta? <Text style={styles.linkText}>Iniciar sesión</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    width: "100%",
    height: "60%",
    
  },
  bottomContainer: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between", // Distribuye mejor los elementos
    paddingTop: 10, // Ajusta el logo más arriba
  },
  logo: {
    width: 700,
    height: 140,
    resizeMode: "contain",
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 30,
    width: "90%",
    alignItems: "center",
  },
  registerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "gray",
    marginVertical: 20,
  },
  orText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 50,
    width: 130,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  termsText: {
    color: "gray",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 10,
  },
  linkText: {
    color: "white",
    fontWeight: "bold",
  },
  loginText: {
    color: "white",
    fontSize: 14,
  },
});