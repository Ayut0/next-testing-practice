import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

//describe: Put every similar test in the block
//1st param: Description of test block
//2nd param: Callback function where test case needs to be written

//it: This is an alias for 'test', so they are functionally the same.
//We can put down the test inside this block
//1st param: Description of test
//2nd param: Callback function where test needs to be written
//render: It renders the component given as a param
//expect: The result supposed to be. It has a bunch of useful method.
describe("rendering", () => {
    it("Should render Hello text", () => {
        render(<Home />);
        expect(screen.getByText("Hello World")).toBeInTheDocument();
    })
})