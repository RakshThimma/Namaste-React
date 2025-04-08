
//                   INTEGRATION TESTING - tesing search and top rated btns

import { fireEvent, render , screen} from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/ApiData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should render body with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const search_btn = screen.getByRole("button", {name :"search"})

  expect(search_btn).toBeInTheDocument();
}
);

it("should render 4 res with veg as search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardsBfrSearch = screen.getAllByTestId("ResCard")

    expect(cardsBfrSearch.length).toBe(20)
  
    const search_btn = screen.getByRole("button", {name :"search"})
  
    const search_input = screen.getByTestId("search_input");

    fireEvent.change(search_input, {"target":{ "value": "kps"}})

    fireEvent.click(search_btn)

    const cardsAfterSearch = screen.getAllByTestId("ResCard")
    
    expect(cardsAfterSearch.length).toBe(1)
  }
  );
it("Top rated Res",async () => {
    await act(async () =>
        render(
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        )
      );
    const cardsBfrSearch = screen.getAllByTestId("ResCard")
    expect(cardsBfrSearch.length).toBe(20)
    const top_rated_btn = screen.getByRole("button", {name: "Top Rated Restaurants"})
    fireEvent.click(top_rated_btn)
    const top_rated_cards = screen.getAllByTestId("PromotedResCard")
    expect(top_rated_cards.length).toBe(8)
})