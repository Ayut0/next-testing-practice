import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import SearchForm from "../components/SearchForm";

// describe("rendering", () => {
//     it("SearchForm component needs to be rendered", () => {
//         render(<SearchForm />)
//         //getByRoll: Used when you want to check if the certain component is rendered. It takes string represents a roll as a param
//         //toBeTruthy: Method to check if the target exists
//         //Check if the input is rendered
//         expect(screen.getByRole("textbox")).toBeTruthy();
//         //Check if the button is rendered
//         expect(screen.getByRole("button")).toBeTruthy()
//     })
// })

// describe("test via id", () => {
//     it("Both input and button are rendered", () => {
//         render(<SearchForm />)
//         expect(screen.getByTestId("search-input")).toBeTruthy();
//         expect(screen.getByTestId('search-button')).toBeTruthy();
//     })
// })


describe("test if the input form onChange event works", () => {
    //If you want to test user events, they should asynchronous
    it("input test", async () => {
        //jst.fn(): Create a mock function
        const onSubmit = jest.fn();
        render(<SearchForm onSubmit={onSubmit} />);
        //Type assertion because the input is regarded as HTMLElement
        const inputValue = screen.getByRole("textbox") as HTMLInputElement;
        //userEvent; Used when you want to trigger expected user event such as input, click etc
        await userEvent.type(inputValue, "test")
        // expect(inputValue.value).toBe("test");

        await userEvent.click(screen.getByRole("button"));
        //check if the function is called
        expect(onSubmit).toBeCalled();
        //Check if the function is not called
        // expect(onSubmit).not.toHaveBeenCalled();
        
    })
})