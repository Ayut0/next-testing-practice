import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cards from "../components/Cards";

// describe("cards component props pass test", () => {
//     it("Testing for missing array elements", () => {
//         //if there is no array data
//         render(<Cards userInfos={[]} />);
//         expect(screen.getByText("There is no user info")).toBeInTheDocument();
//     })
// })

describe("pass the props to cards component", () => {
  it("Testing for the presence of array elements", () => {
    const DUMMY_USERINFO = [
      { id: 1, name: "Tom" },
      { id: 2, name: "Mary" },
      { id: 3, name: "Bob" },
    ];

    render(<Cards userInfos={DUMMY_USERINFO} />);
    //Get all the li element and store in the array
    const userInfos = screen
      .getAllByRole("listitem")
      .map((item) => item.textContent);
    //Set the data pattern exact the same text as it is expected to render in Cards component
    const DUMMY_ITEMS = DUMMY_USERINFO.map(
      (item) => `id:${item.id} name:${item.name}`
    );

    //Compare these two
    expect(userInfos).toEqual(DUMMY_ITEMS);
  });
});
