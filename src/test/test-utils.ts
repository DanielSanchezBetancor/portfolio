import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const customRender = render;

export { customRender as render };
