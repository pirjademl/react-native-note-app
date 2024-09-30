import { FC, useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useNoteStore } from "../store/store";
import { NoteCard } from "../../components/note-card/note-card";

const ViewNote = () => {
  const notes = useNoteStore().notes;
  useEffect(() => {
    console.log(notes);
  }, []);
  return (
    <SafeAreaView className="px-4">
      <FlatList
        className=""
        data={notes ?? []}
        keyExtractor={(item) => item.note}
        renderItem={({ item }) => (
          <NoteCard
            note={item.note}
            status={item.status}
            containerStyles=""
            statusStyle=""
            noteStyle=""
          />
        )}
      />
    </SafeAreaView>
  );
};
export default ViewNote;
