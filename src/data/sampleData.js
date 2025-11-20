export const sampleData = {
    "2025-11-26": [
      { user: "user_1", value: 7 },
      { user: "user_2", value: 2 },
      { user: "user_3", value: 9 },
      { user: "user_4", value: 4 },
    ],
    "2025-11-27": [
      { user: "user_1", value: 3 },
      { user: "user_2", value: 6 },
      { user: "user_3", value: 8 },
      { user: "user_4", value: 1 },
    ],
    "2025-11-28": [
      { user: "user_1", value: 9 },
      { user: "user_2", value: 4 },
      { user: "user_3", value: 2 },
      { user: "user_4", value: 7 },
    ],
    "2025-11-29": [
      { user: "user_1", value: 2 },
      { user: "user_2", value: 5 },
      { user: "user_3", value: 7 },
      { user: "user_4", value: 3 },
    ],
    "2025-11-30": [
      { user: "user_1", value: 6 },
      { user: "user_2", value: 9 },
      { user: "user_3", value: 1 },
      { user: "user_4", value: 8 },
    ],
    "2025-12-01": [
      { user: "user_1", value: 4 },
      { user: "user_2", value: 7 },
      { user: "user_3", value: 5 },
      { user: "user_4", value: 2 },
    ],
    "2025-12-02": [
      { user: "user_1", value: 8 },
      { user: "user_2", value: 3 },
      { user: "user_3", value: 6 },
      { user: "user_4", value: 9 },
    ],
    "2025-12-10": [
      { user: "user_1", value: 1 },
      { user: "user_2", value: 4 },
      { user: "user_3", value: 7 },
      { user: "user_4", value: 5 },
    ],
    "2025-12-15": [
      { user: "user_1", value: 5 },
      { user: "user_2", value: 8 },
      { user: "user_3", value: 2 },
      { user: "user_4", value: 6 },
    ],
};

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};