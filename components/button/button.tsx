import { FC } from "react";
import { TouchableOpacity, Text, View } from "react-native";
interface buttonProps {
  title: string;
  onClickHandler?: () => void;
  containerStyles: string;
  textStyle: string;
}

const Button: FC<buttonProps> = ({
  title,
  onClickHandler,
  containerStyles,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      className={`bg-gunmetal rounded-md p-2 ${containerStyles}`}
      onPress={onClickHandler}
    >
      <Text className={`${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};
export { Button };
