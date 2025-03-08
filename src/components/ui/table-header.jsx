const filterableHeaders = ["Priority", "Result", "Status"]; // Add headers that should have filters

export default function TableHeaders({ headers }) {
  return (
    <thead className="bg-gray-100 dark:bg-gray-800">
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            className="px-4 py-3 text-left font-semibold border-b border-gray-300"
          >
            <div className="flex items-center gap-1">
              <span>{header}</span>
              {filterableHeaders.includes(header) && (
                <button className="text-gray-500 hover:text-gray-700">
                  {/* Small Filter Icon */}
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 4h18l-7 10v6l-4 2v-8z"></path>
                  </svg>
                </button>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
