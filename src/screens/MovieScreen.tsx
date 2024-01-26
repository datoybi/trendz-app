import { FlatList, Text, View, Image, ScrollView } from "react-native";
import { movie } from "../../placeholder-data";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const MovieScreen = () => {
  const itemWidth = ((deviceWidth - 20) / 3).toFixed(2);

  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Heading>드라마</Heading>
        <ListWrapper>
          {movie.map((item, index) => (
            <Item key={index} width={itemWidth}>
              <Thumbnail source={{ uri: item.posterURL }} style={{ resizeMode: "cover" }} />
              <Title>{item.title}</Title>
              <Ranking>{item.ranking}</Ranking>
              <Platform>{item.rate}</Platform>
            </Item>
          ))}
        </ListWrapper>
      </ScrollView>
    </Container>
  );
};

export default MovieScreen;

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
