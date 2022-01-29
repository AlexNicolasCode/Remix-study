import { useLoaderData } from "remix";

export const loader = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(async (res) => {
            return await res.json()
        })
}

export default function Pages() {
    const { id, title } = useLoaderData();

    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
                {title} {id}
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    );
  }
  