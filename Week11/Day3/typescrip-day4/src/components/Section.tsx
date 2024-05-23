import { ReactNode } from "react"

interface SectionProps {
    content?:string,
    children:ReactNode
}


const Section = ({children, content = 'Default content'}: SectionProps) => {
    return (
    <>
        <section>{content}</section>
        <div>{children}</div>
    </>
    )
}

export default Section