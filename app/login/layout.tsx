export const metadata = {
  title: 'Login | Typing Test',
  description: 'Login to access the Typing Test app and see yourself on the leaderboard',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
