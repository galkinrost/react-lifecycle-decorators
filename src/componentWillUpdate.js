import wrapperCreator from './wrapperCreator'

const componentWillUpdate = wrapperCreator(`componentWillUpdate`, (handler) => function componentWillUpdateDecorator(nextProps) {
    handler(nextProps, this.props)
})

export default componentWillUpdate