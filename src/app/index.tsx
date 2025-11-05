import { Link, useNavigation } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"

export default function Home() {
    const router = useNavigation()
    return (
        <View className="bg-blue-200 min-h-screen flex items-center justify-center gap-4">
            <Text className="text-cyan-600 text-3xl font-bold">
                Página inicial
            </Text>

            <Link href="/about" asChild>
                <TouchableOpacity
                    className="bg-blue-600 py-2 px-4 rounded-lg"
                >
                    <Text className="text-white font-bold text-lg italic">
                        Página sobre nós
                    </Text>
                </TouchableOpacity>
            </Link>

            <Link href="/1?name=PedroSodré" asChild>
                <TouchableOpacity
                    className="bg-blue-600 py-2 px-4 rounded-lg"
                >
                    <Text className="text-white font-bold text-lg italic">
                        Página dinâmica
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}