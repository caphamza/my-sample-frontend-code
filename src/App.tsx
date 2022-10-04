import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { store } from "store";
import { Navigation } from "navigation";
import "styles/main.scss";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </QueryClientProvider>
  );
}
