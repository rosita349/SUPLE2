import { Button, Text, View } from "react-native";


export function Screen1 ({navigation}:){
    return (
      <View>
        <Text>Bienvenidos</Text>
        <Button
          title="ir a Screen2"
          onPress={() => navigation.navigate('Screen2')}
        />


      </View>
    );
  }