import { render, screen } from "@testing-library/react";
import DetailPage from "./index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { storeData } from "../../constants";

const mockStore = configureStore([thunk]);

it("Yüklenmme durumunda yükleme bileşeni ekrana basılır", () => {
  const store = mockStore({
    isLoading: true,
    isError: false,
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  screen.getAllByTestId("card-loader");
  screen.getByTestId("header-loader");
});

it("hata durumunda hata bileşeni ekrana basılır", () => {
  const store = mockStore({
    isLoading: false,
    isError: "Request failed with status code 404",
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  screen.getByText(/Request failed with/i);
});

it("veri gelme durumunda cardlar ekrana basılır", () => {
  const store = mockStore(storeData);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  const image = screen.getByRole("img");

  expect(image).toHaveProperty("src", "https://flagcdn.com/dz.svg");

  const title = screen.getByTestId("title");

  expect(title).toHaveTextContent("Algeria");

  const covidData = Object.entries(storeData.data.covid);

  covidData.forEach((item) => {
    screen.getAllByText(item[0].split("_").join(" "), { exact: false });
    screen.getAllByText(item[1]);
  });
});
