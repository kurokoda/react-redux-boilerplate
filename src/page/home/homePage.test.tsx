import { render } from "@testing-library/react";

import { Provider } from "react-redux";

import { HomePage } from "./homePage";
import { store } from "../../state/store";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );

  expect(
    getByText(/Welcome to your react\/redux boilerplate!/i)
  ).toBeInTheDocument();
});
