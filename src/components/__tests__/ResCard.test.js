import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom"
import { withPromotedLabel } from "../RestaurantCard";

const EnhancedRestaurantCard = withPromotedLabel(RestaurantCard);

it("should render with the data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Dindigul Thalappakatti");
    expect(name).toBeInTheDocument();
})

it("should render with the data", () => {
    render(<EnhancedRestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Top-rated")
    expect(name).toBeInTheDocument();
})
it("should render with the data", () => {
    render(<EnhancedRestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Top-rated")
    expect(name).toBeInTheDocument();
})