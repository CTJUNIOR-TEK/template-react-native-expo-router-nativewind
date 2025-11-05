import { Link, useLocalSearchParams, usePathname, useRouter } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"

export default function Id() {
    const { id, name } = useLocalSearchParams() //pega separado o id e a query name separadamente
    const pathname = usePathname() // roota sem a parte de query ex: /123?name=PedroSodré vira /123
    const router = useRouter() /// usado para navegação ao invés de Link

    return (
        <View className="min-h-screen flex items-center justify-center gap-4 bg-slate-300">
            <Text className="text-cyan-600 text-3xl font-bold">
                Página inicial
            </Text>

            <Link href="/" asChild>
                <TouchableOpacity
                    className="bg-blue-500 py-2 px-4 rounded-lg max-w-[60%]"
                >
                    <Text className="text-white font-bold text-xl italic">
                        Clique aqui para voltar usando o componente Link
                    </Text>
                </TouchableOpacity>
            </Link>

            <TouchableOpacity
                className="bg-blue-600 py-2 px-4 rounded-lg max-w-[60%]"
            >
                <Text
                    className="text-white font-bold text-xl italic text-center"
                    onPress={() => { router.push('/') }}
                >
                    Clique aqui para voltar usando useRouter().push("/")
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="bg-blue-700 py-2 px-4 rounded-lg max-w-[60%]"
            >
                <Text
                    className="text-white font-bold text-xl italic text-center"
                    onPress={() => { router.back() }}
                >
                    Forma ideal para voltar usando useRouter().back()
                </Text>
            </TouchableOpacity>

            <Text>
                Id que redirecionei: {id}
            </Text>
            <Text>
                Query que redirecionei: {name}
            </Text>
            <Text>
                Pathname completo: {pathname + '?name=' + name}
            </Text>


        </View>
    )
}