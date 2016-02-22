import wrapperCreator from './wrapperCreator'

const componentDidMount = wrapperCreator(`componentDidMount`, (handler) => function componentDidMountDecorator() {
    handler(this.props)
})

export default componentDidMount