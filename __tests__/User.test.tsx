import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";
import UserPage from "../pages/user";

//Create a mock API server
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "Leanne Graham dummy",
        username: "Bret dummy",
        email: "Sincere@april.biz.dummy",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
    server.resetHandlers();
});
afterAll(() => server.close());

describe("mocking API", () => {
    it("Fetch success Should display fetched data correctly", async () => {
        render(<UserPage />);
        userEvent.click(screen.getByRole("button"));
        expect((await screen.findByRole("heading")).textContent).toEqual("Name: Leanne Graham dummy");
    })
})

//The queries
//getBy: Get the elements matches the specific query
//queryBy: Get the fact that there is no element matches the specific query
//findBy: Get the elements matches the specific query asynchronous

it("Fetch failure Should display error message", async () => {
    //Create a server returns an error
    server.use(
        rest.get(
            "https://jsonplaceholder.typicode.com/users/1",
            (_, res, ctx) => {
                return res(ctx.status(404))
            }
        )
    )
    render(<UserPage />);
    userEvent.click(screen.getByRole("button"));

    //Get an element expected to be rendered an error and compare the error message
    expect((await screen.findByTestId("error")).textContent).toEqual(
        "Unfortunately your request failed"
    );

    //Make sure the h3 tag is null
    expect(screen.queryByRole("heading")).toBeNull();
})