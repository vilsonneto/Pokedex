import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "@/src/__mocks__/mockStore";
import { mockPokemonList } from "@/src/__mocks__/mockPokemonList";
import { useRouter, NextRouter } from "next/router";
import { PokemonList } from ".";
import "@testing-library/jest-dom";
import "intersection-observer";

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

describe("Render PokemonList component ", () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );

  it("with correct data", () => {
    renderComponent();

    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });

  it("with correct lenght", () => {
    renderComponent();

    expect(screen.getAllByTestId("pokemon-card").length).toBe(3);
  });
});
