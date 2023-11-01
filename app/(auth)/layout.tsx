const AuthLayout = ({ childrean }: { childrean: React.ReactNode }) => {
    return (
        <div className="h-full flex items-center justify-center">
            {childrean}
        </div>
    );
}

export default AuthLayout;