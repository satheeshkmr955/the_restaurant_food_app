import { useState } from "react";
import Animated from "react-native-reanimated";

import { SearchBar } from "@/components/SearchBar";
import { useResults } from "@/hooks/useResults";
import { ResultsList } from "@/components/ResultsList";
import { Businesses } from "@/types";
import { ResultsDetailsSkeleton } from "@/components/ResultsDetails";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults<Businesses>();

  const onChangeTerm = (newTerm: string) => {
    setTerm(newTerm);
  };

  const filterResultsByPrice = (price: string) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onChangeTerm={onChangeTerm}
        onSubmitTerm={() => searchApi(term)}
      />
      {errorMessage ? <Animated.Text>{errorMessage}</Animated.Text> : null}
      <Animated.ScrollView className="mx-[15px] mt-[15px]">
        <Animated.Text>We have found {results.length}</Animated.Text>
        {results.length ? (
          <>
            <ResultsList
              results={filterResultsByPrice("$")}
              title="Cost Effective"
            />
            <ResultsList
              results={filterResultsByPrice("$$")}
              title="Bit Pricier"
            />
            <ResultsList
              results={filterResultsByPrice("$$$")}
              title="Big Spender"
            />
          </>
        ) : (
          <>
            <Animated.View className="mb-4" />
            <ResultsDetailsSkeleton />
            <ResultsDetailsSkeleton />
            <ResultsDetailsSkeleton />
          </>
        )}
      </Animated.ScrollView>
    </>
  );
};

export default HomeScreen;
