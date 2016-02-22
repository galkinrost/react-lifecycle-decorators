import wrapperCreator from './wrapperCreator'

const componentWillUnmount = wrapperCreator(`componentWillUnmount`, (handler) => function componentWillUnmountDecorator() {
    handler(this.props)
})

export default componentWillUnmount