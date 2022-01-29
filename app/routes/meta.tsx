import { MetaFunction } from "remix"

export const meta: MetaFunction = () => {
    return {
        title: "Meta tags and Title",
        description: "Testing meta tags and title"
    }
}

export default function Meta () {
    return (
        <h1>Meta tags and Title</h1>
    )
}