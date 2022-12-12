import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("test useFetchGifs", () => {
  it("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });
  it("should return an array of images and isLoading false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
