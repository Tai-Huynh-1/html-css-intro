const Layout = (props) => {
    console.log("props", props)
    
    return (
    <div className='flex flex-col justify-between h-screen'>
        <nav className='flex justify-between bg-slate-300 p-5'>
            <div>Logo</div>

            <div>Middle Navs</div>

            <div>Cart</div>
            </nav>

            {/* Page Content */}
            {props.children}

        <footer className='flex justify-between bg-slate-300 p-5'>
            <div>Section 1</div>
            <div>Section 2</div>
            <div>Section 3</div>
        </footer> 
    </div>)
}

export default Layout