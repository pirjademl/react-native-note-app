import { ChangeEvent, FC } from "react";
import { TextInput, View } from "react-native";
interface InputProps {
    inputStyle: string;
    placeholderText?: string;
    containerStyle: string;
    value: string;
    onInputChange: (arg0: string) => void;
}

export const Input: FC<InputProps> = ({
    inputStyle,
    placeholderText,
    containerStyle,
    onInputChange,
    value,
}) => {
    return (
        <View className={containerStyle}>
            <TextInput
                className={inputStyle}
                placeholder={placeholderText}
                placeholderTextColor="#404E5C"
                value={value}
                onChangeText={onInputChange}
            />
        </View>
    );
};
