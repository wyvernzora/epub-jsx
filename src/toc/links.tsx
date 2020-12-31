import { FunctionalComponent } from "preact";

export interface LinksProps {
    className?: string
    href?: string
    label: string
}

export const Links: FunctionalComponent<LinksProps> = props =>
    <li className={props.className}>
        {
            props.href
                ? <a href={props.href}>{props.label}</a>
                : <span>{props.label}</span>
        }
        <ol>{props.children}</ol>
    </li>
