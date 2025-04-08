import ContactUs from "../ContactUs"
import {render, screen } from "@testing-library/react";
// @jest-environment jsdom
import "@testing-library/jest-dom";


it("Heading in contact Component", ()=>{
    render(<ContactUs />)

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    
})
it("Button in contact Component", ()=>{
    render(<ContactUs />)

    const button = screen.getByText("Send message")
    expect(button).toBeInTheDocument();
    
})

