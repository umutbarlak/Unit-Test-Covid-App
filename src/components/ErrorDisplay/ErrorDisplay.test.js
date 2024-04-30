import userEvent from "@testing-library/user-event";
import ErrorDisplay from "./index";
import { render, screen } from "@testing-library/react";

describe("error display bileşeni", () => {
  beforeEach(() => {
    console.log("Önce bu çaşılsın");
  });

  beforeAll(() => {
    console.log("Hmen sonra çalıştı");
  });

  test("Doğru mesajı gösterir", () => {
    const errorMes = "404 content was not found";
    render(<ErrorDisplay message={errorMes} retry={() => {}} />);

    screen.getByText(errorMes);
  });

  test("Tekrar dene butonuna tıklanınca fonksiyon çalışır", async () => {
    const user = userEvent.setup();

    const retryMock = jest.fn();

    render(<ErrorDisplay message={"errorMes"} retry={retryMock} />);

    const button = screen.getByRole("button", /tekrar dene/i);

    await user.click(button);

    expect(retryMock).toHaveBeenCalled();
  });
});
