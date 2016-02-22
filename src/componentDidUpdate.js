import wrapperCreator from './wrapperCreator'

const componentDidUpdate = wrapperCreator(`componentDidUpdate`, (handler) => function componentDidUpdateDecorator(prevProps) {
    handler(prevProps, this.props)
})

export default componentDidUpdate