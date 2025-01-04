"use client";
import { ShowMoreProps } from "@/app/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavition = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathname, { scroll: false });
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full"
          handleClick={handleNavition}
        />
      )}
    </div>
  );
};

export default ShowMore;
