import { Header, Intro, Menu } from '@/modules/components';

export const HomePage = () => (
  <section className="relative z-1 min-h-screen w-full overflow-hidden">
    <Header />

    <div className="animate-item">
      <Menu />
    </div>
    <div className="animate-item">
      <Intro />
    </div>
  </section>
);
