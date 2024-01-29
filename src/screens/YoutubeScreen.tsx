import { useCallback, useState } from "react";
import { FlatList, Alert, Dimensions } from "react-native";
import styled from "styled-components/native";
import YoutubePlayer from "react-native-youtube-iframe";
import { DefaultTheme } from "styled-components";

import Title from "@/components/ui/Title";
import { youtube } from "../../placeholder-data";

const deviceWidth = Dimensions.get("window").width;

const YoutubeScreen = () => {
  const [_, setPlaying] = useState(false);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <VideoItem>
        <YoutubePlayer
          height={(deviceWidth * 9) / 16}
          videoId={item.videoId}
          onChangeState={onStateChange}
        />
        <YoutubeTitle numberOfLines={2}>{item.title}</YoutubeTitle>
        <CreatorText>{item.host}</CreatorText>
      </VideoItem>
    );
  };

  return (
    <Container>
      <Title>인기 급상승{"\n"}유튜브</Title>
      <ListWrapper>
        <FlatList
          data={youtube}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.videoId}
        />
      </ListWrapper>
    </Container>
  );
};

export default YoutubeScreen;

const Container = styled.View`
  margin: 3% 0;
`;

const VideoItem = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;

const ListWrapper = styled.View`
  margin-top: 15px;
`;

const YoutubeTitle = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  padding: 0 15px;
`;

const CreatorText = styled.Text`
  font-size: 15px;
  padding-left: 15px;
  margin-top: 5px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary700};
`;
