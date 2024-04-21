import Animated from "react-native-reanimated";
import { SearchIcon } from "lucide-react-native";
import { TextInput } from "react-native";

interface SearchBarProps {
  term: string;
  onChangeTerm: (newTerm: string) => void;
  onSubmitTerm: () => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { term, onChangeTerm, onSubmitTerm } = props;

  const onChangeTextHandler = (text: string) => {
    onChangeTerm(text);
  };

  return (
    <Animated.View className="!bg-[#f0eeee] h-[50px] mx-[15px] mt-[15px] rounded-[5px] flex-row">
      <SearchIcon
        style={{ alignSelf: "center", marginHorizontal: 15 }}
        className="w-[35px] h-[35px] !self-center mx-[15px]"
        size={35}
        color={"black"}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onChangeTextHandler}
        className="flex-1 text-[18px]"
        placeholder="Search"
        onEndEditing={onSubmitTerm}
      />
    </Animated.View>
  );
};
