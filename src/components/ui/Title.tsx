import GradientText from "@/components/ui/GradientText";

const Title = ({ children }: { children: any }) => {
  return (
    <GradientText
      style={{
        fontFamily: "pretendard-extra-bold",
        letterSpacing: 0.3,
        fontSize: 35,
        marginTop: 10,
        marginLeft: 20,
      }}
    >
      {children}
    </GradientText>
  );
};

export default Title;
