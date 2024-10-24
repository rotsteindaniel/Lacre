import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function Home() {
  // Quantos livros vão ser impressos
  const [quantosLivros, setQuantosLivros] = useState("");
  
  // Custos fixos
  const [coordenador, setCoordenador] = useState("");
  const [capaEDesigner, setCapaEDesigner] = useState("");
  const [fotografo, setFotografo] = useState("");
  const [ifcIsbnCodBarras, setIfcIsbnCodBarras] = useState("");
  const [conviteDigital, setConviteDigital] = useState("");
  const [bannerDesigner, setBannerDesigner] = useState("");
  const [reelsVinheta, setReelsVinheta] = useState("");
  const [primeiraOrelhaResumo, setPrimeiraOrelhaResumo] = useState("");
  const [segundaOrelhaMiniBio, setSegundaOrelhaMiniBio] = useState("");
  const [prefacioConvidado, setPrefacioConvidado] = useState("");
  const [apresentacaoConvidado, setApresentacaoConvidado] = useState("");
  const [quartaCapaTextoDoLivro, setQuartaCapaTextoDoLivro] = useState("");
  
  // Função para formatar números inseridos pelo usuário
  const formatNumberInput = (input) => {
    const formattedInput = input.replace(/[^0-9,.]/g, "");
    return formattedInput;
  };

  // Função que calculará os custos finais
  const calcularCustos = () => {
    const totalCustosFixos =
      parseFloat(coordenador.replace(",", ".")) +
      parseFloat(capaEDesigner.replace(",", ".")) +
      parseFloat(fotografo.replace(",", ".")) +
      parseFloat(ifcIsbnCodBarras.replace(",", ".")) +
      parseFloat(conviteDigital.replace(",", ".")) +
      parseFloat(bannerDesigner.replace(",", ".")) +
      parseFloat(reelsVinheta.replace(",", ".")) +
      parseFloat(primeiraOrelhaResumo.replace(",", ".")) +
      parseFloat(segundaOrelhaMiniBio.replace(",", ".")) +
      parseFloat(prefacioConvidado.replace(",", ".")) +
      parseFloat(apresentacaoConvidado.replace(",", ".")) +
      parseFloat(quartaCapaTextoDoLivro.replace(",", "."));
    
    console.log('Total Custos Fixos:', totalCustosFixos);
    // Aqui você pode fazer o cálculo completo e definir o resultado em algum estado para exibir na tela.
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Custos Fixos Adicionados ao Final</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Coordenador</Text>
        <TextInput
          style={styles.input}
          placeholder="Custo do coordenador"
          keyboardType="numeric"
          value={coordenador}
          onChangeText={(text) => setCoordenador(formatNumberInput(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Capa e Designer</Text>
        <TextInput
          style={styles.input}
          placeholder="Custo da capa e designer"
          keyboardType="numeric"
          value={capaEDesigner}
          onChangeText={(text) => setCapaEDesigner(formatNumberInput(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fotógrafo</Text>
        <TextInput
          style={styles.input}
          placeholder="Custo do fotógrafo"
          keyboardType="numeric"
          value={fotografo}
          onChangeText={(text) => setFotografo(formatNumberInput(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>IFC ISBN Cod. Barras</Text>
        <TextInput
          style={styles.input}
          placeholder="Custo do IFC ISBN Cod. Barras"
          keyboardType="numeric"
          value={ifcIsbnCodBarras}
          onChangeText={(text) => setIfcIsbnCodBarras(formatNumberInput(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Convite Digital</Text>
        <TextInput
          style={styles.input}
          placeholder="Custo do Convite Digital"
          keyboardType="numeric"
          value={conviteDigital}
          onChangeText={(text) => setConviteDigital(formatNumberInput(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Banner Designer</Text>
        <TextInput
          style={styles.input}
          placeholder="Custo do Banner Designer"
          keyboardType="numeric"
          value={bannerDesigner}
          onChangeText={(text) => setBannerDesigner(formatNumberInput(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Reels Vinheta</Text>
        <TextInput
          style={styles.input}
          placeholder="Custo do Reels Vinheta"
          keyboardType="numeric"
          value={reelsVinheta}
          onChangeText={(text) => setReelsVinheta(formatNumberInput(text))}
        />
      </View>

      <Button title="Calcular" onPress={calcularCustos} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});
