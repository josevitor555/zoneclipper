import AppRouter from "@/app/router";
import { AppProviders } from "@/app/providers";

// App
const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}

export default App;
