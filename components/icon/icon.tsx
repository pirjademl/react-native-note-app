import { FC } from "react";
import { View, Image, Text } from "react-native";

interface IconsProps {
  color: string;
  icon: any;
  focused: boolean;
  name: string;
}

const TabIcon: FC<IconsProps> = ({ color, icon, focused, name }) => {
  return (
    <View className="justify-center items-center">
      <Image
        className="w-6 h-6"
        resizeMode="contain"
        tintColor={color}
        source={icon}
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={(color = { color })}
      >
        {name}
      </Text>
    </View>
  );
};
export { TabIcon };
