import { render, screen } from "src/test/test-utils";

import SignIn from "src/app/[locale]/(public)/sign-in/page";

describe("Sign In", () => {
  test("should render page", async () => {
    render(<SignIn />);

    const logo = screen.getByTestId("sign-in-main");

    expect(logo).toBeInTheDocument();
  });
});
