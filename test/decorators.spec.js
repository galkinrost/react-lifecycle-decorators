import React, {Component} from 'react'

import {
    componentDidMount,
    componentDidUpdate,
    componentWillMount,
    componentWillReceiveProps,
    componentWillUnmount,
    componentWillUpdate,
    shouldComponentUpdate
} from '../src'

import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import expect from 'expect'
import sinon from 'sinon'

describe(`react-lifecycle-decorators`, () => {

    it(`componentWillMount()`, () => {
        const handler = sinon.stub()
        const props = {foo: `bar`}

        let Wrapped = () => (
            <div/>
        )

        Wrapped = componentWillMount(handler)(Wrapped)

        TestUtils.renderIntoDocument(
            <div>
                <Wrapped {...props}/>
            </div>
        )

        expect(handler.withArgs(props).calledOnce).toBeTruthy()
    })

    it(`componentDidMount()`, () => {
        const handler = sinon.stub()
        const props = {foo: `bar`}

        let Wrapped = () => (
            <div/>
        )

        Wrapped = componentDidMount(handler)(Wrapped)

        TestUtils.renderIntoDocument(
            <div>
                <Wrapped {...props}/>
            </div>
        )

        expect(handler.withArgs(props).calledOnce).toBeTruthy()
    })

    it(`componentWillReceiveProps()`, () => {
        const handler = sinon.stub()

        let Wrapped = () => (
            <div/>
        )

        Wrapped = componentWillReceiveProps(handler)(Wrapped)

        class Wrapper extends Component {

            constructor() {
                super()
                this.bar = `baz`
            }

            componentDidMount() {
                this.bar = `foo`
                this.forceUpdate()
            }

            render() {
                return <Wrapped bar={this.bar}/>
            }
        }


        TestUtils.renderIntoDocument(
            <Wrapper/>
        )

        expect(handler.withArgs({bar: `foo`}, {bar: `baz`}).calledOnce).toBeTruthy()
    })

    it(`shouldComponentUpdate()`, () => {
        const handler = sinon.stub()
            .returns(false)

        const WrappedStub = sinon.stub()
            .returns(
                <div/>
            )

        const Wrapped = shouldComponentUpdate(handler)(WrappedStub)

        class Wrapper extends Component {

            constructor() {
                super()
                this.bar = `baz`
            }

            componentDidMount() {
                this.bar = `foo`
                this.forceUpdate()
            }

            render() {
                return <Wrapped bar={this.bar}/>
            }
        }

        TestUtils.renderIntoDocument(
            <Wrapper/>
        )

        expect(handler.withArgs({bar: `foo`}, {bar: `baz`}).calledOnce).toBeTruthy()
        expect(WrappedStub.calledOnce).toBeTruthy()
    })

    it(`componentWillUpdate()`, () => {
        const handler = sinon.stub()
            .returns(false)

        let Wrapped = () => (
            <div/>
        )

        Wrapped = componentWillUpdate(handler)(Wrapped)

        class Wrapper extends Component {

            constructor() {
                super()
                this.bar = `baz`
            }

            componentDidMount() {
                this.bar = `foo`
                this.forceUpdate()
            }

            render() {
                return <Wrapped bar={this.bar}/>
            }
        }

        TestUtils.renderIntoDocument(
            <Wrapper/>
        )

        expect(handler.withArgs({bar: `foo`}, {bar: `baz`}).calledOnce).toBeTruthy()
    })

    it(`componentDidUpdate()`, () => {
        const handler = sinon.stub()
            .returns(false)

        let Wrapped = () => (
            <div/>
        )

        Wrapped = componentDidUpdate(handler)(Wrapped)

        class Wrapper extends Component {

            constructor() {
                super()
                this.bar = `baz`
            }

            componentDidMount() {
                this.bar = `foo`
                this.forceUpdate()
            }

            render() {
                return <Wrapped bar={this.bar}/>
            }
        }

        TestUtils.renderIntoDocument(
            <Wrapper/>
        )

        expect(handler.withArgs({bar: `baz`}, {bar: `foo`}).calledOnce).toBeTruthy()
    })

    it(`componentWillUnmount()`, () => {
        const handler = sinon.stub()
            .returns(false)
        const props = {foo: `bar`}

        let Wrapped = () => (
            <div/>
        )

        Wrapped = componentWillUnmount(handler)(Wrapped)

        const div = document.createElement(`div`)
        ReactDOM.render(
            <div>
                <Wrapped {...props}/>
            </div>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
        expect(handler.withArgs({foo: `bar`}).calledOnce).toBeTruthy()
    })
})