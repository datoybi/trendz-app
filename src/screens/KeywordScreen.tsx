import { Text, FlatList, View, Image, Linking } from "react-native";
import { keywords } from "../../placeholder-data";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { decode } from "html-entities";

const KeywordScreen = () => {
  // console.log(JSON.stringify(keywords, null, "\t"));

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
  flex: 1;
  flex-direction: row;
  height: 180px;
  margin: 10px 0 5px 0;
`;

const ImageContainer = styled.View`
  border: 1px solid;
  width: 100%;
  /* align-items: flex-start; */
  flex-direction: column;
  align-items: flex-start;
  background-color: aquamarine;
  flex: 1;
`;

const TextContainer = styled.View`
  /* border: 1px solid; */
  flex: 2;
  padding: 0 10px;
`;

const Thumbnail = styled.Image`
  min-height: 180px;
  width: 100%;
`;

const DateText = styled.Text`
  font-size: 20px;
  /* border-bottom-color: ${({ theme }: any) => theme.colors.primary400}; */
  /* border-bottom-width: 1px; */
`;

const KeywordText = styled.Text`
  /* background-color: ${({ theme }: any) => theme.colors.accent500}; */
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const NewsTitle = styled.Text`
  font-size: 15px;
  margin-bottom: 5px;
`;
