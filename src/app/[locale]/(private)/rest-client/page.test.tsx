import { render, screen } from "@testing-library/react";

import RestClient from "src/app/[locale]/(private)/rest-client/page";

describe("Rest Client", () => {
  test("should render page", () => {
    render(<RestClient />);

    const logo = screen.getByTestId("rest-main");

    expect(logo).toBeInTheDocument();
  });
});
