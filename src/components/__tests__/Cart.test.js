import { fireEvent, render , screen} from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import MOCK_DATA from "../mocks/ResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(()=>
    Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA)
    }))

it("adding car items", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header></Header>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>
    ))

    const menu_category = screen.getByText("Starters (11)")
    fireEvent.click(menu_category)
    expect(screen.getAllByTestId("food-items").length).toBe(11)
    //Header
    const addbtns = screen.getAllByRole("button",{ "name" :"ADD"})
    fireEvent.click(addbtns[0])
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
    fireEvent.click(addbtns[1])
    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    //cart page 

    expect(screen.getAllByTestId("food-items").length).toBe(13) // 11 from RestaurantMenu (starters(11)) + 2 from cart (added above)
    const clearcart = screen.getByRole("button", {"name": "Clear Cart"})
    fireEvent.click(clearcart)
    expect(screen.getAllByTestId("food-items").length).toBe(11) // 2 from cart is removed
    expect(screen.getByText("Your Cart is Empty !!")).toBeInTheDocument()
})