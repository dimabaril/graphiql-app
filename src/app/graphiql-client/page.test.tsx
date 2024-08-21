import { render, screen } from "@testing-library/react";

import GraphiqlClient from "./page";

describe("Graphiql Client", () => {
  test("should render page", () => {
    render(<GraphiqlClient />);

    const logo = screen.getByTestId("graph-main");

    expect(logo).toBeInTheDocument();
  });
});
