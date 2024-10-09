import { FC } from "react";
import { View, Text } from "react-native";
import { Button } from "../button/button";
import { useNoteStore } from "../../app/store/store";

interface NoteCard {
    note: string;
    status: string;
    containerStyles: string;
    noteStyle: string;
    statusStyle: string;
}

export const NoteCard: FC<NoteCard> = ({
    containerStyles,
    status,
    note,
    noteStyle,
}) => {
    const removeNote = useNoteStore().removeNote;
    return (
        <View className={`border border-border mt-3  p-3 ${containerStyles}`}>
            <Text className={`text-base p-2 ${noteStyle}`}>{note}</Text>
            <View className=" flex justify-between flex-row">
                <Text
                    className={`w-[35%] px-3 py-1 text-center text-white ${status === "not started" ? "bg-red-500" : "bg-green-400"}`}
                >
                    {status}
                </Text>

                <Button
                    title="delete note"
                    textStyle="text-white text-center"
                    containerStyles={`w-[35%] px-3 py-2 text-center text-white `}
                    onClickHandler={() => removeNote({ note, status })}
                />
            </View>
        </View>
    );
};
