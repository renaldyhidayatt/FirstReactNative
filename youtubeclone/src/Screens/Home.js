import React from "react";
import { Text, View, ScrollView, FlatList, Animated } from "react-native";
import Headers from "../Components/Headers.components";
import Card from "../Components/Card.components";
import { useSelector } from "react-redux";

export default function Home() {
  const cardData = useSelector((state) => state.cardData);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          elevation: 4,
          zIndex: 100,
        }}
      >
        <Headers />
      </Animated.View>
      <ScrollView>
        <FlatList
          data={cardData}
          renderItem={({ item }) => {
            return (
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
        />
      </ScrollView>
    </View>
  );
}
