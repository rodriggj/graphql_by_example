# In the Graphql playground we can now execute the following query

```s
query{
    greeting
}
```
> Returns our data defined in our server.js file, wrapped in a `data` object

```s
query{
    greetingz
}
```
> Returns an verbose error that is wrapped in a `error` object

```s
{
    greeting
}
```
> Returns the same as `query{greeting}` because in GraphQL, query is the default operation.