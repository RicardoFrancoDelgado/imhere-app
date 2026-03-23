import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Ricardo",
    "Fabio",
    "Raphael",
    "Lucas",
    "Patrick",
    "DaLessandro",
    "Antonio",
    "Bruno Henrique",
    "Jorginho",
    "Carrascal",
    "Plata",
    "Filipe",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover um participante: ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 17 de Março de 2026.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
