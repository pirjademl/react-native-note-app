import { FC } from "react";
import { View, Text } from "react-native";
interface LabelProps {
  title: string;
  containerStyle: string;
  labelStyle: string;
}
export const Label: FC<LabelProps> = ({
  title,
  containerStyle,
  labelStyle,
}) => {
  return (
    <View className={`mt-2 font-semibold  ${containerStyle}`}>
      <Text className={`mt-2 font-semibold  text-base ${labelStyle}`}>
        {title}
      </Text>
    </View>
  );
};
