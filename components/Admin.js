import { useSession } from 'next-auth/react';
import DashBoard from './DashBoard';

export default function Dashboard() {
  const { data: session } = useSession();
  const user = session?.user;
  if (user?.role !== 'admin') {
    return (
      <section className="grid h-screen place-items-center">
        <div className="w-25">
          <p>You do not have permission to view this page!</p>
        </div>
      </section>
    );
  }
  return <DashBoard></DashBoard>;
}
