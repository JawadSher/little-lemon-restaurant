import { initializeTimes, updateTimes } from "../utils/booking";

describe("booking reducer utilities", () => {
  it("initializeTimes returns available times array", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  it("updateTimes returns times for changed date", () => {
    const next = updateTimes([], { type: "dateChanged", date: "2026-08-15" });
    expect(Array.isArray(next)).toBe(true);
    expect(next.length).toBeGreaterThan(0);
  });

  it("updateTimes keeps current state for unknown action", () => {
    const state = ["17:00"];
    expect(updateTimes(state, { type: "noop" })).toBe(state);
  });
});
