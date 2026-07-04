const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const fetchAPI = (date) => {
  const availableTimes = [];
  const seed = date.getDate();
  const allSlots = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];

  allSlots.forEach((slot, index) => {
    if (seededRandom(seed + index) > 0.35) {
      availableTimes.push(slot);
    }
  });

  return availableTimes.length > 0 ? availableTimes : ["18:00", "19:00", "20:00"];
};

export const submitAPI = (formData) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const isFailureRequest = formData?.email?.toLowerCase().includes("fail");
      resolve(!isFailureRequest);
    }, 500);
  });
