import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"

export const loader: LoaderFunction = async ({ params }: any) => {
    return params.slug
}

export default function Slug () {
    const slug = useLoaderData();


    return (
        <h1>{slug} editing</h1>
    )
}