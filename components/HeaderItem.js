function HeaderItem({Icon, title}) {
    return (
        <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
            <Icon className="h-8 mb-1 group-hover:text-white"/>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition duration-200 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
