import { youtube } from "../../placeholder-data";
import { FlatList, View, Alert, Button, Dimensions } from "react-native";
import styled from "styled-components/native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useCallback, useState } from "react";

const deviceWidth = Dimensions.get("window").width;

const YoutubeScreen = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <VideoItem>
        <YoutubePlayer
          height={(deviceWidth * 9) / 16}
          videoId={item.videoId}
          onChangeState={onStateChange}
        />
        <Title numberOfLines={2}>{item.title}</Title>
        <Creator>{item.host}</Creator>
      </VideoItem>
    );
  };

  return (
    <Container>
      <FlatList data={youtube} renderItem={renderItem} keyExtractor={(item: any) => item.videoId} />
    </Container>
  );
};

export default YoutubeScreen;

const Container = styled.View``;

const VideoItem = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;

const Title = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  padding: 0 15px;
`;

const Creator = styled.Text`
  font-size: 15px;
  padding-left: 15px;
  margin-top: 5px;
  color: ${({ theme }: any) => theme.colors.primary700};
`;
