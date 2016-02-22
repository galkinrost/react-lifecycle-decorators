import wrapperCreator from './wrapperCreator'

const shouldComponentUpdate = wrapperCreator(`shouldComponentUpdate`, (handler) => function shouldComponentUpdateDecorator(nextProps) {
    return handler(nextProps, this.props)
})

export default shouldComponentUpdate