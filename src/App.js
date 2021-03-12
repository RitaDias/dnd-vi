import "./App.css";
import { default as MonsterList } from "./components/monsters-list/monster-list.container";

import { client } from "./client";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MonsterList />
      </div>
    </ApolloProvider>
  );
}

export default App;
