import { Children, FC, ReactNode } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
interface selectProps {
    onValueChange: () => void;
    children: ReactNode;
    selectedValue: string;
    containerStyles: string;
}

export const Select: FC<selectProps> = ({
    onValueChange,
    children,
    selectedValue,
    containerStyles,
}) => {
    return (
        <View className={`${containerStyles}`}>
            <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
                {children}
            </Picker>
        </View>
    );
};
