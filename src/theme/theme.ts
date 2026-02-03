import type { Theme } from "@emotion/react";
import { tokens } from "./tokens";

export const theme: Theme = {
    tokens,
};

declare module "@emotion/react" {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface Theme {
        tokens: typeof tokens;
    }
}
