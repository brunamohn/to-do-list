import { createContext } from "react";
import type { ProviderValues } from "../context/Provider";

const Context = createContext({} as ProviderValues);

export default Context;