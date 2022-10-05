import { render, screen } from "@testing-library/react";

import { WorkshopCard } from "components";

type ComponentProps = React.ComponentProps<typeof WorkshopCard>;
const baseProps: ComponentProps = {
  title: "",
  img: "",
  date: "",
  price: 0,
  onClick: () => {},
  btnText: "",
  btnClick: () => {},
};

describe("Unit Test", () => {
  it("renders Workshop Title", () => {
    render(<WorkshopCard {...baseProps} title="Test Title" />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });
});
