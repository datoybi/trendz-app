import { Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";

const GradientText = (props: any) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={["#f06844", "#ee4c54", "#d45e95", "#9c6ca6", "#6583c1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          {...props}
          style={[
            props.style,
            {
              opacity: 0,
            },
          ]}
        />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
