import { useLayoutEffect } from "react";
import { Text, FlatList, View, Image, Linking } from "react-native";
import { keywords } from "../../placeholder-data";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { decode } from "html-entities";

const KeywordScreen = () => {
  // useLayoutEffect(() => {
  //   navigation.setOptions({ title: "구글 핫 키워드" });
  // }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <>
        <DateText>{dayjs(item.pubDate).format("YYYY.MM.DD")}</DateText>
        <Container>
          <ImageContainer>
            <Thumbnail source={{ uri: item.imgURL }} style={{ resizeMode: "contain" }} />
          </ImageContainer>
          <TextContainer>
            <KeywordText>{decode(item.keyword)}</KeywordText>
            <NewsTitle onPress={() => Linking.openURL(item.news[0].url)}>
              {decode(item.news[0].title)}
            </NewsTitle>
            <NewsTitle>{decode(item.news[1].title)}</NewsTitle>
            <Text>{item.traffic}</Text>
          </TextContainer>
        </Container>
        {/* link webview로 전환 */}
      </>
    );
  };

  return (
    <>
      <FlatList
        data={keywords}
        renderItem={renderItem}
        keyExtractor={(item) => item.pubDate + item.keyword}
      />
    </>
  );
};

export default KeywordScreen;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 180px;
  margin: 10px 0 5px 0;
  border-bottom-color: ${({ theme }: any) => theme.colors.primary400};
  border-bottom-width: 1px;
`;

const ImageContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const Thumbnail = styled.Image`
  width: 100%;
  height: 120px;
`;

const TextContainer = styled.View`
  flex: 2;
  padding: 0 10px;
`;

const DateText = styled.Text`
  font-size: 20px;
`;

const KeywordText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const NewsTitle = styled.Text`
  font-size: 15px;
  text-decoration: underline;
  margin-bottom: 5px;
`;
