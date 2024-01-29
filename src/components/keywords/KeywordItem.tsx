import { FlatList, Linking, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import { decode } from "html-entities";

const KeywordItem = ({ item }: { item: any }) => {
  return (
    <Item>
      <TitleWrapper>
        <KeywordText>{decode(item.keyword)}</KeywordText>
        <TrafficWrapper>
          <Traffic>{item.traffic}</Traffic>
        </TrafficWrapper>
      </TitleWrapper>
      <Container>
        <ImageContainer>
          <Thumbnail source={{ uri: item.imgURL }} style={{ resizeMode: "cover" }} />
        </ImageContainer>
        <TextContainer>
          <NewsTitle onPress={() => Linking.openURL(item.news[0].url)}>
            {decode(item.news[0].title)}
          </NewsTitle>
          <NewsTitle>{decode(item.news[1].title)}</NewsTitle>
        </TextContainer>
      </Container>
    </Item>
  );
};

export default KeywordItem;

const Item = styled.View`
  background-color: #ffffff;
  min-height: 180px;
  border-radius: 16px;
  padding: 5%;
  margin: 10px 0;
`;

const Container = styled.View`
  flex-direction: row;
  border-bottom-color: ${({ theme }: any) => theme.colors.primary400};
  background-color: #ffffff;
  overflow: hidden;
  gap: 20px;
`;

const ImageContainer = styled.View`
  width: 100%;
  justify-content: center;
  flex: 1;
`;

const Thumbnail = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 16px;
`;

const TextContainer = styled.View`
  flex: 2;
  justify-content: center;
`;

const KeywordText = styled.Text`
  font-size: 20px;
  font-family: "pretendard-bold";
  color: ${({ theme }: any) => theme.colors.primary700};
`;

const NewsTitle = styled.Text`
  font-size: 15px;
  color: ${({ theme }: any) => theme.colors.primary600};
  margin-bottom: 5px;
  font-family: "pretendard-bold";
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  margin-bottom: 4%;
`;

const TrafficWrapper = styled.View`
  overflow: hidden;
  color: ${({ theme }: any) => theme.colors.primary800};
  background-color: ${({ theme }: any) => theme.colors.primary300};
  border-radius: 16px;
  font-family: "pretendard-bold";
  overflow: hidden;
  padding: 3px 10px;
`;

const Traffic = styled.Text`
  font-size: 10px;
`;
