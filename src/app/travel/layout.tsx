import { Handshake } from 'lucide-react';
import { Logo } from './home/components/logo';
import { Navbar } from './home/components/navbar';
import WhatsappBtn from '@/components/ui/whatsapp-btn';

export default function DecoratedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Navbar
        logo={
          <div className="flex items-center">
            <div className="border-2 rounded-full">
              <Logo onlyLogo />
            </div>
            <div className="ml-2">
              <div className="text-lg  font-semibold "> Trabi.</div>
            </div>
          </div>
        }
        navigation={[
          { label: 'Explore', href: '/travel/destinations' },
          { label: 'Trips', href: '/travel/search' },
          { label: 'Agencies', href: '/travel/travel-agencies' },
          { label: 'Host a trip', href: '/travel/host-a-trip' },
        ]}
        login={{ label: 'Log in', href: '/login' }}
        cta={{
          label: 'Join us',
          href: '/register',
          icon: <Handshake className="mr-1 size-4 text-theme-lime" strokeWidth={3} />,
        }}
      /> */}
      {children}
      <WhatsappBtn />
      {/* <Footer /> */}
    </>
  );
}
