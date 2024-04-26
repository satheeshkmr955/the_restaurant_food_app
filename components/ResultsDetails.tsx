import Animated from "react-native-reanimated";

import { Businesses } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultsDetailsProps {
  result: Businesses;
}

export const ResultsDetails = (props: ResultsDetailsProps) => {
  const { result } = props;

  return (
    <Animated.View className="mr-[10px]">
      <Animated.Image
        className="w-[250px] h-[120px] rounded my-[5px]"
        source={{ uri: result.image_url }}
      />
      <Animated.Text className="font-bold text-[14px]">
        {result.name}
      </Animated.Text>
      <Animated.Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Animated.Text>
    </Animated.View>
  );
};

export const ResultsDetailsSkeleton = () => {
  return (
    <Animated.View className="mr-[10px]">
      <Skeleton className="bg-slate-300 h-6 w-[150px]" />
      <Skeleton className="bg-slate-300 w-[250px] h-[120px] rounded-lg my-[5px]" />
      <Skeleton className="bg-slate-300 h-6 w-[120px] mb-[5px]" />
      <Skeleton className="bg-slate-300 h-6 w-[250px] mb-3" />
    </Animated.View>
  );
};
