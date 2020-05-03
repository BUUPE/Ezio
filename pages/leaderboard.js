import Link from 'next/link';

export default function Leaderboard() {
  return (
    <div>
      <p className="red-text">TODO: Public leaderboard.</p>
      <div className="row">
        <div className="col-sm-4">Ezio</div>
        <div className="col-sm-4">Auditore</div>
        <div className="col-sm-4">da Firenze</div>
      </div>

      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
