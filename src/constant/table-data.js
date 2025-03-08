export const DUMMY_DATA = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    title: `Task ${i + 1}`,
    priority: ["High", "Medium", "Low"][i % 3],
    result: ["Passed", "Failed", "Pending"][i % 3],
    status: ["Open", "In Progress", "Closed"][i % 3],
    owner: `User ${i + 1}`,
    automationStatus: i % 2 === 0 ? "Automated" : "Not Automated",
    tags: ["bug", "feature", "UI", "backend", "performance"][i % 5],
  }));
  
  export const PRIORITY_COLORS = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-green-100 text-green-800",
  };
  
  export const STATUS_COLORS = {
    Open: "bg-blue-100 text-blue-800",
    "In Progress": "bg-purple-100 text-purple-800",
    Closed: "bg-gray-300 text-gray-800",
  };