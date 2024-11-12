"use client";
/**
 * @class Providers
 * @description this provider is to attach redux store to web app
 * @author Nawod Madhuvantha
 */

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: Readonly<ProvidersProps>) {
    return <Provider store={store}>{children}</Provider>;
}
