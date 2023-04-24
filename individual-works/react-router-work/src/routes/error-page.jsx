import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error)

    return (
        <>
            <div className="">
                Oops, seems like there's been an error.
            </div>
            <div className="italic">
                {error.statusText || error.message}
            </div>
        </>
    )
}