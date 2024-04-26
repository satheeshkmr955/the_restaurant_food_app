import Animated from "react-native-reanimated";
import { useEffect, useState } from "react";
import { ListRenderItemInfo } from "react-native";

import { useResultsShow } from "@/store/use-results-show";
import yelp from "@/lib/yelp";
import { SingleBusiness } from "@/types";

import { Skeleton } from "@/components/ui/skeleton";

const ResultsShowScreen = () => {
  const { currentDetails } = useResultsShow((state) => state);
  const { id, name } = currentDetails || {};

  const [results, setResults] = useState<SingleBusiness | null>(null);

  const getResults = async (id: string) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      getResults(id);
    }
  }, []);

  if (results === null) {
    return (
      <Animated.View className="flex-1">
        <Skeleton className="h-9 w-[150px] rounded-md my-4 ml-4 bg-slate-300" />
        <Animated.View className="items-center">
          <Skeleton className="w-[300px] h-[150px] mb-6 rounded-lg bg-slate-300" />
          <Skeleton className="w-[300px] h-[150px] mb-6 rounded-lg bg-slate-300" />
          <Skeleton className="w-[300px] h-[150px] mb-6 rounded-lg bg-slate-300" />
        </Animated.View>
      </Animated.View>
    );
  }

  return (
    <Animated.View className="flex-1">
      <Animated.Text className="font-bold text-2xl my-4 ml-4">
        {name}
      </Animated.Text>
      <Animated.View className="items-center">
        <Animated.FlatList
          data={results.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }: ListRenderItemInfo<string>) => (
            <Animated.Image
              source={{ uri: item }}
              className="w-[300px] h-[150px] mb-6 rounded-lg"
            />
          )}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default ResultsShowScreen;
