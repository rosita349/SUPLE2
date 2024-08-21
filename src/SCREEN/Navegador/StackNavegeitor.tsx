import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen2 } from '../Screen2';
import { Screen3 } from '../Screen3';
import { Screen1 } from '../Screen1';

const Stack = createNativeStackNavigator();


export function StackNavegeitor() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="screen" component={Screen1} />
      <Stack.Screen name="Screen" component={Screen2} />
      <Stack.Screen name="Screen" component={Screen3} />
    
    </Stack.Navigator>
  );
}