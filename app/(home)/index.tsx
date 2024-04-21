import Animated from "react-native-reanimated";

import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

const HomeScreen = () => {
  const [term, setTerm] = useState("");

  const onChangeTerm = (newTerm: string) => {
    setTerm(newTerm);
  };

  return (
    <Animated.View className="flex-1">
      <SearchBar
        term={term}
        onChangeTerm={onChangeTerm}
        onSubmitTerm={() => console.log("submitted")}
      />
      <Animated.Text>HomeScreen</Animated.Text>
    </Animated.View>
  );
};

export default HomeScreen;
