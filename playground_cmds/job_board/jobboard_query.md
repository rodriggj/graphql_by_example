#### Retrieve a job utizing jobId as Arguments

```s
{
  job(id: "rJKAbDd_z"){
    id
    title
  }
}
```

### Retrieve a job utilizing a query variable

```s
query JobQuery($id: ID!){
  job(id: $id){
    id
    title
    company{
      id
      name
    }
  	description
  }
}
```