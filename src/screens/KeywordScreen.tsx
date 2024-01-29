import dayjs from "dayjs";
import { FlatList, Linking, ScrollView, Text } from "react-native";
import { keywords } from "../../placeholder-data";
import styled from "styled-components/native";
import { decode } from "html-entities";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";
// import LinearGradient from "react-native-linear-gradient";

const GradientText = (props: any) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={["#f06844", "#ee4c54", "#d45e95", "#9c6ca6", "#6583c1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

const KeywordScreen = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <>
        <DateWrapper>
          <DateText>{dayjs(item.pubDate).format("YYYY.MM.DD")}</DateText>
        </DateWrapper>
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
        {/* link webview로 전환 */}
      </>
    );
  };

  return (
    <Wrapper>
      <GradientText
        style={{ fontFamily: "pretendard-extra-bold", letterSpacing: 0.3, fontSize: 35 }}
      >
        구글에 검색한{"\n"}인기 급상승 키워드
      </GradientText>
      <FlatList
        data={keywords}
        renderItem={renderItem}
        keyExtractor={(item) => item.pubDate + item.keyword}
      />
    </Wrapper>
  );
};

export default KeywordScreen;

const Wrapper = styled.ScrollView`
  margin: 3%;
`;

const Item = styled.View`
  background-color: #ffffff;
  min-height: 180px;
  border-radius: 16px;
  padding: 5%;
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

const DateWrapper = styled.View`
  justify-content: center;
  align-self: center;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${({ theme }: any) => theme.colors.primary300};
  padding: 3px 20px;
  margin: 30px 0 15px 0;
`;

const DateText = styled.Text`
  font-size: 18px;
  font-family: "pretendard";
  color: ${({ theme }: any) => theme.colors.primary800};
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
