import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Title from "@/components/ui/Title";
import OTTItem from "@/components/ott/OTTItem";
import { ott } from "../../placeholder-data";

const OTTScreen = () => (
  <Container>
    <ScrollView showsHorizontalScrollIndicator={false}>
      <Title>요즘 인기있는 OTT{"\n"}예능, 드라마 랭킹</Title>
      <ListWrapper>
        {ott.map((item) => (
          <OTTItem item={item} />
        ))}
      </ListWrapper>

      <Title>요즘 인기있는 OTT{"\n"}예능, 드라마 랭킹</Title>
      <ListWrapper>
        {ott.map((item) => (
          <OTTItem item={item} />
        ))}
      </ListWrapper>
    </ScrollView>
  </Container>
);

export default OTTScreen;

const Container = styled.View`
  margin: 3% 0;
`;

const ListWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;
