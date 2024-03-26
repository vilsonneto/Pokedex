'use client'

import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </Provider>
  );
}
