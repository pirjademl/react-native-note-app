import { FC, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Input } from "../../components/input/input";
import { Label } from "../../components/label/label";
import { Button } from "../../components/button/button";
import { Picker } from "@react-native-picker/picker";
import { Select } from "../../components/picker/picker";
import { useNoteStore } from "../store/store";

export interface Inote {
  note: string;
  status: string;
}
const CreateNote = () => {
  const addNote = useNoteStore((state) => state.addNote);
  const notes = useNoteStore().notes;
  console.log(notes);
  const [selectedstate, setSelectedState] = useState("started");
  const [note, setNote] = useState<Inote>({ note: "", status: selectedstate });
  return (
    <SafeAreaView>
      <View className=" p-4 flex flex-col gap-3 justify-center h-full w-full ">
        <Label title="create your note" containerStyle="m-3" labelStyle=" " />
        <Input
          inputStyle="border border-border p-2 rounded-md text-charcoal  text-base"
          placeholderText="Create a web3 wallet"
          containerStyle=""
          value={note.note}
          onInputChange={(text: string) => setNote({ ...note, note: text })}
        />

        <Label title="status of the note" containerStyle="m-3" labelStyle=" " />
        <Select
          className="border border-border bg-red-500"
          selectedValue={selectedstate}
          onValueChange={(itemvalue, itemIndex) => (
            setSelectedState(itemvalue),
            setNote({ ...note, status: selectedstate })
          )}
          containerStyles="border border-border"
        >
          <Picker.Item label="started" value="started" />
          <Picker.Item label="not started " value="not started" />
          <Picker.Item label="in progress" value="in progress" />
        </Select>

        <Button
          title="create"
          textStyle="text-center text-lg text-white"
          containerStyles="mt-4"
          onClickHandler={() => addNote(note)}
        />
      </View>
    </SafeAreaView>
  );
};
export default CreateNote;
