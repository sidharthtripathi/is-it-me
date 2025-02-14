type ResultProps = {
    results : ResultType[]
}
export type ResultType = {
    thought : string,
    id:string
}
export function SearchResults( {results} : ResultProps ){
    
    return (
        <div>
            {results.map(result=>(
                <li key={result.id}>{result.thought}</li>
            ))}
        </div>
    )
}