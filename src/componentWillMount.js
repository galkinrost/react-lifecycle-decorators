import wrapperCreator from './wrapperCreator'

const componentWillMount = wrapperCreator(`componentWillMount`, (handler) => function componentWillMountDecorator() {
    handler(this.props)
})

export default componentWillMount