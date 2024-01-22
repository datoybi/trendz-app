import { Text, FlatList, View } from "react-native";
import { keywords } from "../../placeholder-data";
import styled from "styled-components/native";

const KeywordScreen = () => {
  // console.log(JSON.stringify(keywords, null, "\t"));
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View>
        <StyledText>{item.pubDate}</StyledText>
        <Text>{item.keyword}</Text>
        <Text>{item.traffic}</Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={keywords}
        renderItem={renderItem}
        keyExtractor={(item) => item.pubDate + item.keyword}
      />
      <Text>hi</Text>
    </>
  );
};

export default KeywordScreen;

const StyledText = styled.Text`
  color: tomato;
`;
