import render from "preact-render-to-string";

export * from './ncx'
export * from './opf'
export * from './toc'
export * from './xhtml'
export * from './container'

export const XmlHeader = `<?xml version="1.0" encoding="UTF-8"?>`
export const XhtmlHeader = `${XmlHeader}<!DOCTYPE html>`

export function renderToXhtmlString(...params: Parameters<typeof render>): string {
    params[2] = { ...params[2], xml: true }
    return XhtmlHeader + render(...params)
}

export function renderToXmlString(...params: Parameters<typeof render>): string {
    params[2] = { ...params[2], xml: true }
    return XmlHeader + render(...params)
}
