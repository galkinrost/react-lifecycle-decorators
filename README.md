# Lifecycle decorators

Lifecycle decorators for stateless components

## Installation

```bash
npm install -S react-lifecycle-decorators
```

## componentWillMount(props)

```javascript
const Component = ()=>(
    <div/>
);
export default componentWillMount(props=>props.fetchData())(Component);
```

## shouldComponentUpdate(nextProps, props)

```javascript
const Component = ()=>(
    <div/>
);
export default shouldComponentUpdate((nextProps, props)=>false)(Component);
```

## componentWillUnmount(props)

```javascript
const Component = ()=>(
    <div/>
);
export default componentWillUnmount(props=>props.somAction())(Component);
```

## componentWillReceiveProps(nextProps, props)

## componentWillUpdate(nextProps, props)

## componentDidUpdate(prevProps, props)