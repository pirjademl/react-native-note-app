import { SafeAreaView, View, Text } from "react-native";

export const EmptyNotes = () => {
    return (
        <SafeAreaView className="bg-gunmetal p-3 text-white">
            <View className="flex flex-col">
                <Text className="bg-gunmetal p-3 text-white">
                    There are no notes here{" "}
                </Text>
                <Text className="bg-gunmetal p-3 text-white">
                    start creating notes
                </Text>
            </View>
        </SafeAreaView>
    );
};
