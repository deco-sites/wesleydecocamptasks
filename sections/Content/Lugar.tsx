import type { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
    title?: string;
    temperature: Temperature | null;
}

export default function (props: Props) {
    return (
        <>
            <p>{props.temperature?.celsius}</p>
        </>
    );
}
