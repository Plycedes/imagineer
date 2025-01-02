import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full mt-10 items-center h-full px-4">
                    <Image
                        source={images.logo2}
                        className="w-[150px] h-[40px]"
                        resizeMode="contian"
                    />
                    <Image
                        source={images.cards}
                        className="w-[380px] h-[300px]"
                        resizeMode="contian"
                    />
                    <View className="relative mt-5">
                        <Text
                            className="text-3xl text-white font-bold
                        text-center"
                        >
                            Experience Limitless Horizorns with
                            <Text className="text-secondary-200"> Yoru</Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[80px] h-[15px] absolute -bottom-2
                        -right-0"
                            resizeMode="contian"
                        />
                    </View>
                    <Text className="text-sm font-pregular text-gray-100 mt-6 text-center">
                        Step into a world of boundless opportunity and discover new perspectives you
                        never thought possible.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
