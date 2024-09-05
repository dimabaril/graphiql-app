import { render, screen } from "@testing-library/react";

import SignIn from "src/app/(public)/sign-in/page";

describe("Rest", () => {
  test("should render page", () => {
    render(<SignIn />);

    const logo = screen.getByTestId("sign-in-main");

    expect(logo).toBeInTheDocument();
  });
});
