import { Link, useNavigation } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"

export default function About() {
    const router = useNavigation()
    return (
        <View className="bg-blue-200 min-h-screen flex items-center justify-center gap-4">
            <Text className="text-cyan-600 text-3xl font-bold">
                Sobre nós
            </Text>

            <Link href="/" asChild>
                <TouchableOpacity
                    className="bg-blue-600 py-2 px-4 rounded-lg"
                >
                    <Text className="text-white font-bold text-xl italic">
                        Clique aqui para voltar
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}