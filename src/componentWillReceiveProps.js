import wrapperCreator from './wrapperCreator'

const componentWillReceiveProps = wrapperCreator(`componentWillReceiveProps`, (handler) => function componentWillReceivePropsDecorator(nextProps) {
    handler(nextProps, this.props)
})

export default componentWillReceiveProps