
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-300 dark:bg-gray-700 h-[250px] w-full rounded-md" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
    </div>
  );
};

export default SkeletonCard;
