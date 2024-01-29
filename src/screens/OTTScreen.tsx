import { FlatList, Text, View, Image, ScrollView } from "react-native";
import { ott } from "../../placeholder-data";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const ottImagePath: { [key: number]: string } = {
  1: require("../../assets/images/ott/ott-1.png"),
  2: require("../../assets/images/ott/ott-2.png"),
  3: require("../../assets/images/ott/ott-3.png"),
  4: require("../../assets/images/ott/ott-4.png"),
  5: require("../../assets/images/ott/ott-5.png"),
  6: require("../../assets/images/ott/ott-6.png"),
  7: require("../../assets/images/ott/ott-7.png"),
  8: require("../../assets/images/ott/ott-8.png"),
  9: require("../../assets/images/ott/ott-9.png"),
  10: require("../../assets/images/ott/ott-10.png"),
};

const OTTScreen = () => {
  const itemWidth = ((deviceWidth - 20) / 3).toFixed(2);
  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Heading>드라마</Heading>
        <ListWrapper>
          {ott.map((item, index) => (
            <Item key={index} width={itemWidth}>
              <Thumbnail source={ottImagePath[item.ranking]} style={{ resizeMode: "cover" }} />
              <Title>{item.title}</Title>
              <Ranking>{item.ranking}</Ranking>
              <Platform>{item.ott.join(", ")}</Platform>
            </Item>
          ))}
        </ListWrapper>

        <Heading>예능</Heading>
        <ListWrapper>
          {ott.map((item, index) => (
            <Item key={index} width={itemWidth}>
              <Thumbnail source={ottImagePath[item.ranking]} style={{ resizeMode: "cover" }} />
              <Title>{item.title}</Title>
              <Ranking>{item.ranking}</Ranking>
              <Platform>{item.ott.join(", ")}</Platform>
            </Item>
          ))}
        </ListWrapper>
      </ScrollView>
    </Container>
  );
};

export default OTTScreen;

const Container = styled.View``;

const ListWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Heading = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
  /* font-family: "pretendard-bold"; */
`;

const Item = styled.View`
  width: ${(props: any) => props.width}px;
  /* border: 1px solid; */
`;

const Thumbnail = styled.Image`
  height: 200px;
  width: ${(props: any) => props.width}px;
  position: relative;
`;

const Title = styled.Text`
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`;

const Ranking = styled.Text`
  position: absolute;
  color: ${({ theme }: any) => theme.colors.primary100};
  font-size: 25px;
  font-style: italic;
  left: 5px;
  top: 5px;
`;

const Platform = styled.Text`
  font-size: 15px;
  text-align: center;
`;
