export default function CostumeInputBox() {
    return (
      <div className="w-full md:max-w-[250px]">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="search"
            className="block w-full pl-8 pr-2.5 py-1.5 text-sm rounded-lg border border-gray-300 bg-gray-50 transition-all focus:ring-2 focus:border-transparent dark:placeholder-gray-500"
            placeholder="Search test cases..."
          />
          {/* Search icon */}
          <div className="absolute inset-y-0 left-2 flex items-center">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }