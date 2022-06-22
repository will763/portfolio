interface Props {
    resize?: boolean
}
export const Github = ({resize}: Props) => {
    return (
        <div className={resize ? 'inline-block w-7 h-7' : 'inline-block w-10 h-10'}>
            <img 
             className="max-h-full w-10 h-10 max-w-full" 
             src="/assets/images/github.svg" 
             alt="icon for github" 
            />
        </div>
    )
}