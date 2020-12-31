import { FunctionalComponent } from "preact";

export interface LinkProps {
    className?: string
    href: string
    label: string
}

export const Link: FunctionalComponent<LinkProps> = props =>
    <li className={props.className}>
        <a href={props.href}>{props.label}</a>
    </li>
