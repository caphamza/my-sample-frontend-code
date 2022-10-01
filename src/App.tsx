import { Provider } from "react-redux";

import { store } from "store";
import { Navigation } from "navigation";
import "styles/main.scss";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
