import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { DefaultTheme } from "styled-components";

const deviceWidth = Dimensions.get("window").width;

const ottImagePath: { [key: number]: string } = {
  1: require("../../../assets/images/ott/ott-1.png"),
  2: require("../../../assets/images/ott/ott-2.png"),
  3: require("../../../assets/images/ott/ott-3.png"),
  4: require("../../../assets/images/ott/ott-4.png"),
  5: require("../../../assets/images/ott/ott-5.png"),
  6: require("../../../assets/images/ott/ott-6.png"),
  7: require("../../../assets/images/ott/ott-7.png"),
  8: require("../../../assets/images/ott/ott-8.png"),
  9: require("../../../assets/images/ott/ott-9.png"),
  10: require("../../../assets/images/ott/ott-10.png"),
};

const OTTItem = ({ item }: { item: any }) => {
  const itemWidth = ((deviceWidth - 20) / 3).toFixed(2);

  return (
    <Item width={itemWidth}>
      <Thumbnail source={ottImagePath[item.ranking]} style={{ resizeMode: "cover" }} />
      <OTTTitle>{item.title}</OTTTitle>
      <Ranking>{item.ranking}</Ranking>
      <Sites>{item.ott.join(", ")}</Sites>
    </Item>
  );
};
export default OTTItem;

const Item = styled.View`
  width: ${({ width }: { width: string }) => width}px;
`;

const Thumbnail = styled.Image`
  height: 200px;
  width: ${({ width }: { width: string }) => width}px;
  position: relative;
`;

const OTTTitle = styled.Text`
  font-size: 17px;
  text-align: center;
  margin-top: 5px;
  font-family: "pretendard-bold";
`;

const Ranking = styled.Text`
  position: absolute;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary100};
  font-size: 25px;
  font-style: italic;
  left: 5px;
  top: 5px;
`;

const Sites = styled.Text`
  font-size: 15px;
  text-align: center;
`;
