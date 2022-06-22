interface Props {
    resize?: boolean
}

export const Linkedin = ({resize}: Props) => {
    return (
        <div className={resize ? 'inline-block w-7 h-7' : 'inline-block w-10 h-10'}>
            <img src="/assets/images/linkedin.svg" alt="icon for linkedin" />
        </div>
    )
}