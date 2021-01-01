import { renderToXhtmlString, renderToXmlString } from '../src'

describe('renderToXmlString', () => {

    test('renders markup and includes an XML header', () => {
        const result = renderToXmlString(<div/>)
        expect(result).toEqual('<?xml version="1.0" encoding="UTF-8"?><div />')
    })

})

describe('renderToXhtmlString', () => {

    test('renders markup and includes an XHTML header', () => {
        const result = renderToXhtmlString(<div/>)
        expect(result).toEqual('<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html><div />')
    })

})
