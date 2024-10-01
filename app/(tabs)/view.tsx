import { FC, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNoteStore } from "../store/store";
import { NoteCard } from "../../components/note-card/note-card";
import { EmptyNotes } from "../../components/empty-note/empty-note";

const ViewNote = () => {
  const notes = useNoteStore().notes;
  useEffect(() => {
    console.log(notes);
  }, []);
  return (
    <SafeAreaView className="bg-[#DDD8C4] w-full h-full px-4 ">
      <FlatList
        data={notes ?? []}
        keyExtractor={(item) => item.note}
        ListEmptyComponent={EmptyNotes}
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

const containerStyles = StyleSheet.create({
  containerStyles: {
    flex: 1,
  },
});
export default ViewNote;
