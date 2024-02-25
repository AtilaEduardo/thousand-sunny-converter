import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tela } from "../telaInicial/tela";
import { ConversaoSalva } from "../conversaoSalva/telaConversaoSalva";
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export function Rotas() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name='Home'
                component={Tela}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="home" />
                        }
                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
                
            />
            
            <Tabs.Screen
                name='Histórico'
                component={ConversaoSalva}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="bookmarks" />
                        }
                        return <Ionicons size={size} color={color} name="bookmarks-outline" />
                    }
                }}
            />
        </Tabs.Navigator>
    )
}