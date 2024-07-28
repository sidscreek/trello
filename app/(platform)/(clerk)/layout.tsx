const clerkLayout = ({ children } : {
    children: React.ReactNode;
}) => {
    return (
        <main className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-light-1 to-pink-1 ">
            {children}
        </main>
    )
}

export default clerkLayout;