import dayjs from "dayjs";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";
import Title from "@/components/ui/Title";
import KeywordItem from "@/components/keywords/KeywordItem";
import { keywords } from "../../placeholder-data";

const KeywordScreen = () => {
  const renderDate = (index: number, pubDate: string) => {
    const dateHTML = (
      <DateWrapper>
        <DateText>{dayjs(pubDate).format("YYYY.MM.DD")}</DateText>
      </DateWrapper>
    );
    const isSameDay = index !== 0 && dayjs(pubDate).diff(keywords[index - 1].pubDate, "day");
    if (index === 0 || isSameDay) return dateHTML;
  };

  const renderItem = ({ item, index }: { item: any; index: any }) => {
    return (
      <>
        {renderDate(index, item.pubDate)}
        <KeywordItem item={item} />
      </>
    );
  };

  return (
    <>
      <Title>구글에 검색한{"\n"}인기 급상승 키워드</Title>
      <ListWrapper>
        <FlatList
          data={keywords}
          renderItem={renderItem}
          keyExtractor={(item) => item.pubDate + item.keyword}
        />
      </ListWrapper>
    </>
  );
};

export default KeywordScreen;

const ListWrapper = styled.ScrollView`
  margin: 3%;
`;

const DateWrapper = styled.View`
  justify-content: center;
  align-self: center;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary300};
  padding: 3px 20px;
  margin: 30px 0 15px 0;
`;

const DateText = styled.Text`
  font-size: 18px;
  font-family: "pretendard";
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary800};
`;
