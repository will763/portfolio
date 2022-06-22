interface Props {
    isActive: boolean
}

export const Menu = ({isActive}: Props) => {

    const open = './assets/images/menu-open.svg'
    const close = './assets/images/icon-close.svg'

    return <figure className="sm:hidden invert cursor-pointer">
        <img src={isActive ? close : open} alt="icon menu" />
    </figure>
}