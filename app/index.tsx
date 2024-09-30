import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import create from "../assets/create.png";
import { Button } from "../components/button/button";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full w-full px-3">
      <View className="flex flex-col  items-center gap-2 justify-center h-full gap-3">
        <Image source={create} resizeMode="contain" />
        <Text className="text-xl font-bold  text-white capitalize">
          create a fucking notes and shit
        </Text>
        <Button
          title="create a note"
          containerStyles=" mt-2 mb-2 w-full "
          onClickHandler={() => router.push("/create-note")}
          textStyle="font-semibold capitalize text-white text-lg text-center"
        />
      </View>
    </SafeAreaView>
  );
}
