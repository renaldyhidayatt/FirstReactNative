import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import MiniCard from "../Components/MiniCard.components";
import { useDispatch, useSelector } from "react-redux";

function Search({ navigation }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  // const [miniCardData, setMiniCardData] = useState([]);
  const miniCardData = useSelector((state) => state.cardData);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    return await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAbTWAJJSh05dE8HCREbR-fZGdlp4seaKc`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data.items);
        dispatch({ type: "ADD", payload: data.items });
        // setMiniCardData(data.items);
      });
  };

  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: "#fff",
        }}
      >
        <Ionicons
          style={{ color: "#000" }}
          name="md-arrow-back"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          style={{ color: "#000" }}
          name="md-mic"
          size={32}
          onPress={() => console.log("send")}
        />
        <Ionicons
          style={{ color: "#000" }}
          name="md-send"
          size={32}
          onPress={() => fetchData()}
        />
      </View>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}

export default Search;
