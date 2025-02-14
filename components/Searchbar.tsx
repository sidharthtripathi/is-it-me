"use client"
import { Dispatch, SetStateAction } from 'react'
import {useForm} from 'react-hook-form'
import { ResultType } from './SearchResults'
import { server } from '@/lib/axios'
type Query = {
    query : string
}
type SearchbarProps = {
    setResults : Dispatch<SetStateAction<ResultType[]>>
}
export function Searchbar({setResults} : SearchbarProps){
    const {register,handleSubmit} = useForm<Query>()
    async function handleSearch(payload : Query ){
        const {data} = await server.get(`/api/thought?query=${payload.query}`)
        console.log(data)
        setResults(data)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(handleSearch)}>
            <input type="text" placeholder="search here" 
            {...register("query")}
            
            />
            <button type='submit'>submit</button>
            </form>
        </div>
    )
}