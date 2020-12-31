import { createElement, FunctionalComponent } from "preact";

export const NavMap: FunctionalComponent = (props) =>
    createElement('navMap', { }, props.children)

export interface NavPointProps {
    id: string
    playOrder: number
    label: string
    link: string
}

export const NavPoint: FunctionalComponent<NavPointProps> = (props) =>
    createElement('navPoint', { id: props.id, playOrder: props.playOrder }, <>
        <NavLabel text={props.label} />
        <NavContent src={props.link} />
        {props.children}
    </>)

const NavLabel: FunctionalComponent<{ text: string }> = ({ text }) =>
    createElement('navLabel', { }, <text>{text}</text>)

const NavContent: FunctionalComponent<{ src: string }> = ({ src }) =>
    createElement('content', { src })
