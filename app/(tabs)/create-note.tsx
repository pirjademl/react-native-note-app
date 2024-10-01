import { FC, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ToastAndroid,
  Alert,
  Modal,
} from "react-native";
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

  const handleCreate = () => {
    if (!note.note) {
      setisNoteEmpty(!isnoteEmpty);
      return;
    }
    addNote(note);
    ToastAndroid.showWithGravityAndOffset(
      "A fucking note was created",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  const [selectedstate, setSelectedState] = useState("started");
  const [note, setNote] = useState<Inote>({ note: "", status: selectedstate });
  const [isnoteEmpty, setisNoteEmpty] = useState<boolean>(false);
  return (
    <SafeAreaView className=" p-3 flex flex-col  justify-center h-full w-full bg-[#DDD8C4] ">
      <View className="">
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
          onClickHandler={handleCreate}
        />
      </View>
      {isnoteEmpty && (
        <View className="p-3">
          <Text className="text-base text-red-600">Note text is empty!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default CreateNote;
