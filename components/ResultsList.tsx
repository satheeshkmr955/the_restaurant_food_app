import Animated from "react-native-reanimated";
import { ListRenderItemInfo, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import {
  ResultsDetails,
  ResultsDetailsSkeleton,
} from "@/components/ResultsDetails";
import { Skeleton } from "@/components/ui/skeleton";
import { Businesses } from "@/types";
import { useResultsShow } from "@/store/use-results-show";

interface ResultsListProps {
  title: string;
  results: Businesses[];
}

export const ResultsList = (props: ResultsListProps) => {
  const { title, results } = props;

  if (!results.length) {
    return null;
  }

  const router = useRouter();

  const { setDetails } = useResultsShow((state) => state);

  const onPressHandler = (item: Businesses) => {
    setDetails(item);
    router.push("/results-show");
  };

  return (
    <Animated.View className="mb-[5px]">
      <Animated.Text className="text-[18px] font-bold">{title}</Animated.Text>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }: ListRenderItemInfo<Businesses>) => {
          return (
            <TouchableOpacity onPress={() => onPressHandler(item)}>
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </Animated.View>
  );
};

export const ResultsListSkeleton = () => {
  return (
    <Animated.View className="mb-[5px]">
      <Skeleton className="bg-slate-300 h-6 w-[120px]" />
      <ResultsDetailsSkeleton />
    </Animated.View>
  );
};
