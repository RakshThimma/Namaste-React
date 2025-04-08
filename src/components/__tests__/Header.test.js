import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";
// import { BrowserRouter } from "react-router-dom";

it("should load with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login_btn = screen.getByRole("button");

  expect(login_btn).toBeInTheDocument();
});
it("should load with specific button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login_btn = screen.getByRole("button", { name: "Login" });

  expect(login_btn).toBeInTheDocument();
});
it("cart word is there or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login_btn = screen.getByText(/Cart/);

  expect(login_btn).toBeInTheDocument();
});
it("change login -> logout  on btn click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login_btn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(login_btn)
  const logout_btn = screen.getByRole("button", { name: "Logout" });

  expect(logout_btn).toBeInTheDocument();
});
it("change login -> logout & vice versa on btn click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const login_btn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(login_btn)
    const logout_btn = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logout_btn)
    // const login_btn = screen.getByRole("button", { name: "Login" });
    
    expect(login_btn).toBeInTheDocument();
  });
