export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>Hello Root Layout About</h1>
            {children}
        </div>
    );
}