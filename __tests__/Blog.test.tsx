import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Blog from "../pages/blog";

describe("useEffect rendering", () => {
    it("Text Loading is expected to be rendered", async () => {
        render(<Blog />);
        expect(screen.getByText("Loading....")).toBeInTheDocument();
    })
    it("Post data is rendered after fetching data successfully", async () => {
        render(<Blog />);
        expect(await screen.findByText(/PostId/)).toBeInTheDocument();
    })
})