import React from "react"

interface IProps {
  errors: any
}

const GraphQLErrorList: React.FC<IProps> = ({ errors }) => (
  <div>
    <h1>GraphQL Error</h1>
    {errors.map((error: any) => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
)

export default GraphQLErrorList
