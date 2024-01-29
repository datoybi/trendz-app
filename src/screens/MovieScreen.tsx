import { ScrollView } from "react-native";
import { movie } from "../../placeholder-data";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Title from "@/components/ui/Title";
import { DefaultTheme } from "styled-components";

const deviceWidth = Dimensions.get("window").width;

const MovieScreen = () => {
  const itemWidth = ((deviceWidth - 20) / 3).toFixed(2);

  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Title>요즘 상영하는 영화와{"\n"}예매 순위</Title>
        <ListWrapper>
          {movie.map((item, index) => (
            <Item key={index} width={itemWidth}>
              <Thumbnail source={{ uri: item.posterURL }} style={{ resizeMode: "cover" }} />
              <MovieTitle>{item.title}</MovieTitle>
              <Ranking>{item.ranking}</Ranking>
              <Rate>{item.rate}</Rate>
            </Item>
          ))}
        </ListWrapper>
      </ScrollView>
    </Container>
  );
};

export default MovieScreen;

const Container = styled.View`
  margin: 3% 0;
`;

const ListWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const Item = styled.View`
  width: ${({ width }: { width: string }) => width}px;
`;

const Thumbnail = styled.Image`
  height: 200px;
  width: ${({ width }: { width: string }) => width}px;
  position: relative;
`;

const MovieTitle = styled.Text`
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`;

const Ranking = styled.Text`
  position: absolute;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary100};
  font-size: 25px;
  font-style: italic;
  left: 5px;
  top: 5px;
`;

const Rate = styled.Text`
  font-size: 15px;
  text-align: center;
`;
