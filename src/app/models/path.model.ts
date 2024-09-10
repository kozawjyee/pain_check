import { LazyExoticComponent } from "react";

export interface PathInterface {
    path: string;
    element: () => React.JSX.Element;
    subComponents?:  SubComponentTypes[]
}

export type SubComponentTypes = {
    path: string,
    element: LazyExoticComponent<() => React.JSX.Element>
}