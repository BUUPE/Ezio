import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <p>Welcome, assassin.</p>
      <Link href="/leaderboard">
        <a>Leaderboard Page</a>
      </Link>
    </div>
  );
}
