const PlayerSkeleton = () => {
  return (
    <div className="p-4 sm:p-6 rounded-2xl border border-neutral/10 w-full bg-white shadow-sm max-lg:max-w-103 animate-pulse">
      {/* Image Placeholder */}
      <div className="rounded-2xl mb-6 bg-gray-200 w-full h-60"></div>

      <div className="space-y-4">
        <div className="space-y-3">
          {/* Name Placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
          </div>

          {/* Country & Role Placeholder */}
          <div className="flex justify-between items-center gap-2 pl-2">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-7 bg-gray-200 rounded-lg w-20"></div>
          </div>
        </div>

        <hr className="border-neutral/10" />

        <div className="space-y-4 pt-2">
          {/* Rating & Style Placeholders */}
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>

          {/* Price & Button Placeholder */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-full sm:w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlayersLoading = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-330 mx-auto px-4 sm:px-2">
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="h-8 bg-gray-200 rounded-md w-48"></div>
          <div className="h-12 bg-gray-200 rounded-xl w-full sm:w-64"></div>
        </div>

        {/* Grid of 6 Skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {[...Array(6)].map((_, index) => (
            <PlayerSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayersLoading;
