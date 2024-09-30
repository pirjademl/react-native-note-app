import { View, Text, Image } from "react-native";
export const Profilecard = ({ title, login, avatarUrl }) => {
  return (
    <View className="flex gap-4  flex-row  w-full p-4 bg-[#1c1c2c] border border-gray-700 items-center  ">
      <View>
        <Image
          className="w-[40] h-[40] rounded-full "
          resizeMode="contain"
          source={{ uri: avatarUrl }}
        />
      </View>
      <View className="p-3 flex flex-col gap-2 items-center justify-center">
        <Text className="text-xl text-[#FFF]">{login}</Text>
      </View>
    </View>
  );
};
