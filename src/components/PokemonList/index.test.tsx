import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "@/src/__mocks__/mockStore";
import { mockPokemonList } from "@/src/__mocks__/mockPokemonList";
import { useRouter, NextRouter } from "next/router";
import { PokemonList } from ".";
import "@testing-library/jest-dom";
import 'intersection-observer';

// jest.mock("@lottiefiles/react-lottie-player", () => ({
//   __esModule: true,
//   Player: () => <div>Mock Player</div>,
// }));

const initialState = {
  pokemonList: {
    loading: false,
    pokemonList: mockPokemonList,
    error: null,
  },
};

const store = mockStore(initialState);

describe("PokemonList component", () => {
  //   beforeEach(() => {
  //     const mockUseRouter = jest.spyOn(require("next/router"), "useRouter");

  //     mockUseRouter.mockReturnValueOnce({
  //       pathname: "/",
  //       query: {},
  //     } as unknown as NextRouter);
  //   });

  it("renders the PokemonList component with correct data", async () => {
    await render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );

    await waitFor(() => {
        expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
        });
        
    expect(screen.getAllByTestId("pokemon-card").length).toBe(3);

    // expect(screen.getByText("Mock Player")).toBeInTheDocument();

    // Add more assertions to check for other elements and properties
  });
});
