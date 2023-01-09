import ChallengePage from "../Pages/ChallengePage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { GetChallengeCount } from "../Services/ChallengeApiService";
import axios from "axios";
jest.mock("axios");

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("The challenge page displays the challenge count", () => {
  jest.spyOn(GetChallengeCount).mockReturnValue("20");
  render(<ChallengePage />);
  const challengecountelement = screen.getByTestId("challenge-count");
  expect(challengecountelement).toBeInTheDocument();
  expect(challengecountelement).toHaveTextContent("20");
});
